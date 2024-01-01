"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const QuizAndCoinBtn = () => {
  const [coins, setCoins] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const prevCoins = sessionStorage.getItem("amount");
    if (prevCoins === null) router.push("/");
    setCoins(parseInt(prevCoins as string));
  }, [router]);

  return (
    <div className="flex justify-around items-center gap-4">
      <div className="w-[150px] py-2 px-4 rounded-full flex justify-between items-center bg-orange-500 border-2">
        <div className="text-sm">Coins</div>
        <div className="text-lg">{coins}</div>
      </div>
      <div className="w-[150px] py-2 px-4 rounded-full border-2 flex  items-center justify-between">
        <div className="text-sm">Coins</div>
        <div className="text-lg">
          {sessionStorage.getItem("quiz") === null
            ? "0"
            : sessionStorage.getItem("quiz")}
        </div>
      </div>
    </div>
  );
};

export default QuizAndCoinBtn;
