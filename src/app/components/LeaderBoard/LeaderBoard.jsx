import React from "react";
import LeaderBoardHeading from "./LeaderBoardHeading";
import RankingGrid from "./RankingGrid";

const LeaderBoard = () => {
    return (
        <>
            <div className="fixed top-0 w-screen h-screen bg-black text-white md:p-12">
                <div className="flex flex-col items-center w-full h-full md:rounded-3xl leaderboard-bg-gradient-1">
                    <LeaderBoardHeading />
                    <RankingGrid />
                </div>
            </div>
        </>
    );
};

export default LeaderBoard;

/* Rectangle 1 */

// position: absolute;
// width: 1288px;
// height: 788px;
// right: 56px;
// top: 66px;

// background: linear-gradient(111.03deg, rgba(239, 238, 238, 0.32) 2.82%, rgba(239, 238, 238, 0.06) 90.94%);
// backdrop-filter: blur(11px);
// border-radius: 16px;
// /* Note: backdrop-filter has minimal browser support */

/* Rectangle 2 */

// position: absolute;
// width: 1288px;
// height: 179px;
// left: 56px;
// top: 66px;

// background: linear-gradient(111.03deg, rgba(239, 238, 238, 0.32) 2.82%, rgba(239, 238, 238, 0.06) 90.94%);
// backdrop-filter: blur(0.5px);
// /* Note: backdrop-filter has minimal browser support */
// border-radius: 16px;
