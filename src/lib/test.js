// const fileNames = ["res1.json", "res2.json"];
const contests = ["1932"];

const fetchContestData = async (contestId) => {
    // const response = await fetch(`http://127.0.0.1:5500/public/${fileName}`);
    const response = await fetch(`https://codeforces.com/api/contest.standings?contestId=${contestId}&count=50`);

    if (!response.ok) {
        throw new Error(`Failed to fetch data`);
    }
    return response.json();
};

const getCombinedResults = () => {
    // return Promise.all(fileNames.map(fetchContestData))
    return Promise.all(contests.map(fetchContestData))
        .then((results) => {
            let combinedUserMap = {};
            let contestNames = [];
            let leaderboardData = [];

            results.forEach((data, index) => {
                const contestName = data.result.contest.name;
                contestNames.push(contestName);

                data.result.rows.forEach((row) => {
                    const userId = row.party.members[0].handle;
                    if (!(userId in combinedUserMap)) {
                        combinedUserMap[userId] = {
                            username: row.party.members[0].handle,
                            points1: 0,
                            points2: 0,
                            questionCount1: 0,
                            questionCount2: 0,
                            solvedCount: 0,
                            totalPoints: 0,
                            penalty1: 0,
                            penalty2: 0,
                            finalPenalty: 0,
                        };
                    }
                    combinedUserMap[userId][`points${index + 1}`] += row.points;
                    combinedUserMap[userId][`questionCount${index + 1}`] += row.problemResults.filter((problem) => problem.points > 0).length;
                    combinedUserMap[userId].solvedCount += row.problemResults.filter((problem) => problem.points > 0).length;
                    combinedUserMap[userId].totalPoints += row.points;
                    combinedUserMap[userId][`penalty${index + 1}`] = row.penalty;
                    combinedUserMap[userId].finalPenalty += row.penalty;
                });
            });

            const combinedResults = Object.values(combinedUserMap);
            combinedResults.sort((a, b) => {
                if (a.solvedCount !== b.solvedCount) {
                    return b.solvedCount - a.solvedCount; // Sort by number of questions solved
                } else {
                    if (a.finalPenalty !== b.finalPenalty) {
                        return a.finalPenalty - b.finalPenalty; // If equal, sort by least penalty
                    } else {
                        return a.username.localeCompare(b.username); // If equal, sort by username
                    }
                }
            });

            let rank = 1;
            combinedResults.forEach((participant) => {
                participant.rank = rank;
                rank++;
            });

            return combinedResults;
        })
        .catch((error) => {
            console.error("Error fetching leaderboard data:", error);
            return [];
        });
};

export default getCombinedResults;
