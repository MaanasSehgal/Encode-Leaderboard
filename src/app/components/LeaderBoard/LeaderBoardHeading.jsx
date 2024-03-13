import React from "react";

const LeaderBoardHeading = () => {
    return (
        <>
            <div className="font-bold w-full h-1/5 leaderboard-bg-gradient-2 rounded-b-3xl md:rounded-3xl flex flex-col justify-evenly">
                <span className="text-center text-white text-4xl py-2">ENCODE 3.0 LEADERBOARD</span>
                <div className="grid grid-cols-5 gap-5 text-center py-2">
                    <p>RANK</p>
                    <p>NAME</p>
                    <p>ROUND 1 POINTS</p>
                    <p>ROUND 2 POINTS</p>
                    <p>TOTAL POINTS</p>
                </div>
            </div>
        </>
    );
};

export default LeaderBoardHeading;
