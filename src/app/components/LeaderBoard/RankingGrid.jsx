"use client";
import React, { useEffect, useState } from "react";
import getCombinedResults from "../../../lib/test";
import Image from "next/image";
import Link from "next/link";

function RankingGrid() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const combinedResults = await getCombinedResults();
        console.log(combinedResults);
        setLeaderboardData(combinedResults);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchData();
  }, []);

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
    <div className="font-orbitron w-full overflow-y-auto">
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap"
        rel="stylesheet"
      ></link>
      <div className="h-full overflow-y-auto">
        {leaderboardData.map((contestant, index) => (
          <div
            key={index}
            className="border-2 border-[#48DEFF] rounded-lg mb-4 align-center text-center"
          >
            {/* <div className="grid  md:text-left lg:text-center grid-cols-4 gap-10 sm:gap-14 md:gap-16 xl:gap-4 p-1 mx-3 text-xs md:text-lg  text-wrap"> */}
            <div className="grid   grid-cols-4 p-1  text-xs md:text-lg mx-auto text-wrap">
              <div>{contestant.rank}</div>
              <div>{contestant.username}</div>
              <div>{contestant.finalPenalty}</div>
              <div>{contestant.questionCount1 + contestant.questionCount2}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RankingGrid;
