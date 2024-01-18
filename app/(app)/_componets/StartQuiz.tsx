"use client";

import { useEffect, useState } from "react";
import { question, quiz } from "@prisma/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Coin from "@/components/logo/Coin";
import { icons } from "@/constant";
import Question from "@/components/questions/Question";
import BannerAd from "@/components/ads/BannerAd";
import dynamic from "next/dynamic";
import { getCoins } from "@/action/actions";

interface startQuizProps {
  quiz: quiz;
  questions: question[];
  redirectUrl: string;
}

const StartQuiz = ({ quiz, questions, redirectUrl }: startQuizProps) => {
  const [start, setStart] = useState(false);
  const [coins, setCoins] = useState<string | null>(null);

  const router = useRouter();

  const AdTop = dynamic(() => import("@/components/ads/Ad-Question"), {
    ssr: false,
  });

  const AdBottom = dynamic(() => import("@/components/ads/Ad-Win"), {
    ssr: false,
  });

  useEffect(() => {
    getCoins().then((res) => {
      if (res) {
        setCoins(res);
      }
    });
  }, []);

  if (start) {
    if (coins === null) router.push("/home");
    let amount = parseInt(coins as string);
    if (amount < 99) {
      return <BannerAd redirectUrl={redirectUrl} />;
    } else {
      return (
        <>
          <AdTop />
          <Question quesionArray={questions} />
          <AdBottom />
        </>
      );
    }
  }

  return (
    <>
      <AdTop />
      <div className="flex flex-col gap-6 md:gap-2 bg-bg border-2 border-border rounded-[30px] py-5">
        <div className="flex gap-2 items-center px-5 ">
          <Image
            src={`/icons/${icons[quiz.category]}`}
            alt="QUIZ"
            width={60}
            height={60}
            className="w-[60px] object-cover sm:w-[58px] rounded-full"
          />
          <div>
            <div className="text-[10px] text-[#64d2ff] font-black sm:text-[8px]">
              Algebra
            </div>
            <div className="flex items-center gap-1 text-[18px] font-black sm:text-[14px]">
              Play &amp; Win
              <Coin /> 10000
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around m-2">
          <button
            onClick={() => router.push("/login")}
            className="bg-blue-900 py-2 md:py-2 px-14 md:px-7 w-full font-black text-white rounded-full"
          >
            JOIN NOW
          </button>
          <div className="text-[20px] order-none md:order-2">or</div>
          <div
            onClick={() => setStart(true)}
            className="self-center border-text md:order-1  border-[1px] w-full text-text text-center rounded-full font-bold text-sm py-3 md:px-4 px-10 cursor-pointer"
          >
            PLAY AS GUEST
          </div>
        </div>
        <ul className="list-disc flex flex-col gap-3 px-9 text-sm text-text">
          <li>You&apos;ve got 90 - 150 seconds to answer all questions</li>
          <li>Answer as many questions as you can</li>
          <li>
            For Every Correct answer you will get +{quiz.increment} points and
            will loose -{quiz.decrement} points on every Incorrect answer
          </li>
          <li>
            You can take help by using the lifelines present in the contest.
          </li>
          <li>
            Lifelines can be used for free or by using a given amount of coins
            for each lifeline.
          </li>
        </ul>
      </div>
      <AdBottom />
    </>
  );
};

export default StartQuiz;
