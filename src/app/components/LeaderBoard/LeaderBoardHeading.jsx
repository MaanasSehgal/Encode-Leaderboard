import React from "react";

const LeaderBoardHeading = () => {
    return (
        <>
            <div className="font-bold w-full sm:h-1/4 leaderboard-bg-gradient-2 md:rounded-3xl flex flex-col">
                <span className="text-center text-white text-4xl py-2">ENCODE 3.0 LEADERBOARD</span>
                <div className="grid grid-cols-5 gap-5 text-center py-6 md:text-2xl sm:text-xl text-md">
                    <p>RANK</p>
                    <p>NAME</p>
                    <p>ROUND 1</p>
                    <p>ROUND 2</p>
                    <p>TOTAL POINTS</p>
                </div>
            </div>
        </>
    );
};

export default LeaderBoardHeading;
