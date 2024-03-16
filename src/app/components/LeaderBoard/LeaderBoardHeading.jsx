import React from "react";
import Link from "next/link";

const LeaderBoardHeading = () => {
  return (
    <>
      <link
        href="https://fonts.cdnfonts.com/css/public-pixel"
        rel="stylesheet"
      ></link>
      <div className="w-full flex flex-col gap-6">
        <div className="text-center font-sans text-[#48DEFF] text-2xl  sm:text-4xl xl:text-6xl  py-2">
          L
          <a href="#" className="text-[#FF5456]">
            E
          </a>
          ADERBOARD
        </div>
        <div className="font-sans text-xs sm:text-base md:text-xl lg:text-2xl xl:text-4xl bg-[#48DEFF] text-[#000000] flex items-center justify-center my-3 rounded-xl h-[2.75rem] sm:h-[3.5rem] md:h-[4.5] lg:h-[5rem] w-full">
          <div className="grid grid-cols-4 w-full text-center ">
            <div className="truncate">RANK</div>
            <div className="truncate">NAME</div>
            <div className="truncate">PENALTY</div>
            <div className="truncate">QsSOLVED</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoardHeading;
