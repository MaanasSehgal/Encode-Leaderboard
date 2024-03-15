import React from "react";
import LeaderBoardHeading from "./LeaderBoardHeading";
import RankingGrid from "./RankingGrid";

const LeaderBoard = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#12222B]">
      <div className="fixed top-0 text-white text-wrap w-5/6">
        <div className="flex flex-col items-center w-full h-full md:rounded-3xl ">
          <LeaderBoardHeading />
          <div className="h-[50vh] w-full overflow-y-auto scrollbar-hide">
            <RankingGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
