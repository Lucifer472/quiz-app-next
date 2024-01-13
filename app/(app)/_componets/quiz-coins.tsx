"use client";

import { getCoins } from "@/action/actions";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const QuizAndCoinBtn = () => {
  const [coins, setCoins] = useState<string | null>("0");
  const router = useRouter();

  useEffect(() => {
    getCoins().then((res) => {
      if (res) {
        setCoins(res);
      }
    });
  }, [router]);

  return (
    <div className="flex justify-around items-center gap-4">
      <div className="w-[150px] py-2 px-4 rounded-full flex justify-between items-center bg-orange-500 border-2">
        <div className="text-sm">Coins</div>
        <div className="text-lg">{coins}</div>
      </div>
      <div className="w-[150px] py-2 px-4 rounded-full border-2 flex  items-center justify-between">
        <div className="text-sm">Quiz</div>
        <div className="text-lg">1</div>
      </div>
    </div>
  );
};

export default QuizAndCoinBtn;
