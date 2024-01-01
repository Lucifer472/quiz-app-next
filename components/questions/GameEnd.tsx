"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const GameEnd = ({ score }: { score: number }) => {
  const router = useRouter();

  useEffect(() => {
    let amount: any = sessionStorage.getItem("amount");
    if (amount === null) router.push("/home");
    else {
      if (score < 0) {
        amount = parseInt(amount) + 50;
      } else {
        amount = parseInt(amount) + score;
      }

      sessionStorage.setItem("amount", amount);
    }
  }, [router, score]);

  return (
    <div className="flex gap-2 items-center px-5 flex-col">
      <div className="flex justify-center items-center relative w-[250px]">
        <Image
          src={"/win.gif"}
          alt="Win"
          width={200}
          height={200}
          className="absolute top-[-10px]"
        />
        <h1 className="text-white text-4xl">Well Played</h1>
      </div>
      <div className="flex justify-evenly mt-20 gap-2">
        <div className="flex flex-col gap-2  border border-border rounded-full py-2 cursor-pointer w-48 bg-transparent">
          <div className="text-white text-center flex flex-col ">
            <span>{score}</span>
            <span> Your Score</span>
          </div>
        </div>
        <div className="flex flex-col gap-2  border border-border rounded-full py-2 cursor-pointer w-48 bg-transparent">
          <div className="text-white text-center flex flex-col ">
            <span>{score < 0 ? "50" : score}</span>
            <span> Coins Earned</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameEnd;
