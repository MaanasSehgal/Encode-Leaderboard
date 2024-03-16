import React from "react";
import LeaderBoardHeading from "./LeaderBoardHeading";
import RankingGrid from "./RankingGrid";

const LeaderBoard = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#12222B]">
      <div className="fixed top-10 text-white text-wrap w-5/6">
        <div className="flex flex-col items-center mt-3 w-full h-full md:rounded-3xl">
          <LeaderBoardHeading />
          <div className="w-full max-h-[70vh] sm:max-h-[60vh] xl:max-h-[80vh]  overflow-auto " style={{ scrollbarWidth: "none" }}>
            <RankingGrid />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeaderBoard;