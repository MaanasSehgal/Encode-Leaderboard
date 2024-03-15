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
        <div className="text-center font-sans text-[#48DEFF] text-4xl py-2">
          L
          <a href="#" className="text-[#FF5456]">
            E
          </a>
          ADERBOARD
        </div>
        <div className="font-sans text-xs sm:text-base md:text-lg bg-[#48DEFF] text-[#000000] flex items-center justify-center my-3 rounded-xl h-[2.75rem] sm:h-[3.5rem] w-full">
          <div className="grid grid-cols-4 w-full text-center">
            <div>RANK</div>
            <div>NAME</div>
            <div>PENALTY</div>
            <div>QsSOLVED</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderBoardHeading;
