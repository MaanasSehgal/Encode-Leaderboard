import Image from "next/image";

const RankingGrid = () => {
    const leaderboardData = [
        {rank: 1, username: "Alice", round1Points: 100, round2Points: 150, totalPoints: 250},
        {rank: 2, username: "Bob", round1Points: 90, round2Points: 140, totalPoints: 230},
        {rank: 3, username: "Charlie", round1Points: 85, round2Points: 130, totalPoints: 215},
        {rank: 4, username: "David", round1Points: 80, round2Points: 120, totalPoints: 200},
        {rank: 5, username: "Eve", round1Points: 75, round2Points: 110, totalPoints: 185},
        {rank: 6, username: "Frank", round1Points: 70, round2Points: 100, totalPoints: 170},
        {rank: 7, username: "Grace", round1Points: 65, round2Points: 95, totalPoints: 160},
        {rank: 8, username: "Hank", round1Points: 60, round2Points: 90, totalPoints: 150},
        {rank: 9, username: "Ivy", round1Points: 55, round2Points: 85, totalPoints: 140},
        {rank: 10, username: "Jack", round1Points: 50, round2Points: 80, totalPoints: 130},
        {rank: 11, username: "Katie", round1Points: 45, round2Points: 75, totalPoints: 120},
        {rank: 12, username: "Liam", round1Points: 40, round2Points: 70, totalPoints: 110},
        {rank: 13, username: "Mia", round1Points: 35, round2Points: 65, totalPoints: 100},
        {rank: 14, username: "Noah", round1Points: 30, round2Points: 60, totalPoints: 90},
        {rank: 15, username: "Olivia", round1Points: 25, round2Points: 55, totalPoints: 80},
        {rank: 16, username: "Peter", round1Points: 20, round2Points: 50, totalPoints: 70},
        {rank: 17, username: "Quinn", round1Points: 15, round2Points: 45, totalPoints: 60},
        {rank: 18, username: "Ryan", round1Points: 10, round2Points: 40, totalPoints: 50},
        {rank: 19, username: "Sara", round1Points: 5, round2Points: 35, totalPoints: 40},
        {rank: 20, username: "Tom", round1Points: 0, round2Points: 30, totalPoints: 30},
        {rank: 19, username: "Sara", round1Points: 5, round2Points: 35, totalPoints: 40},
        {rank: 20, username: "Tom", round1Points: 0, round2Points: 30, totalPoints: 30},
        {rank: 19, username: "Sara", round1Points: 5, round2Points: 35, totalPoints: 40},
        {rank: 20, username: "Tom", round1Points: 0, round2Points: 30, totalPoints: 30},
        {rank: 19, username: "Sara", round1Points: 5, round2Points: 35, totalPoints: 40},
        {rank: 20, username: "Tom", round1Points: 0, round2Points: 30, totalPoints: 30},
        {rank: 19, username: "Sara", round1Points: 5, round2Points: 35, totalPoints: 40},
        {rank: 20, username: "Tom", round1Points: 0, round2Points: 30, totalPoints: 30},
    ];

    const diamImage = (rank) => {
        switch (rank) {
            case 1:
                return "diamond1.svg";
            case 2:
                return "diamond2.svg";
            case 3:
                return "diamond3.svg";
            default:
                return "diamond4.svg";
        }
    };

    return (
        <div className="w-full overflow-y-auto scrollbar-hide my-6">
            {leaderboardData.map((contestant) => (
                <div key={contestant.rank} className="grid grid-rows-1 grid-cols-5 gap-5 py-6 text-center md:text-xl sm:text-lg text-md">
                    <div className="flex justify-center">
                        <Image className="w-6 h-6 sm:w-10 sm:h-10" src={diamImage(contestant.rank)} width={50} height={50} alt="diamond" />
                    </div>
                    <div>{contestant.username}</div>
                    <div>{contestant.round1Points == 0 ? "--" : contestant.round1Points}</div>
                    <div>{contestant.round2Points == 0 ? "--" : contestant.round2Points}</div>
                    <div>{contestant.totalPoints}</div>
                </div>
            ))}
        </div>
    );
};

export default RankingGrid;
