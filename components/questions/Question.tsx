"use client";
import { cn } from "@/lib/utils";
import { question } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Welcome from "@/components/questions/Welcome";
import GameEnd from "./GameEnd";

import { addCoins, isUser, removeCoins, setIsNewUser } from "@/action/actions";

import RewardAdsPopUp from "@/components/ads/reward-ads";

interface QuestionProps {
  quesionArray: question[];
}

const Question = ({ quesionArray }: QuestionProps) => {
  const [index, setIndex] = useState(0);

  const [question, setQuestion] = useState(quesionArray[index]);
  const [lock, setLock] = useState(false);

  const [score, setScore] = useState<number>(0);

  const [isWelcomed, setIsWelcomed] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

  const [user, setIsUser] = useState(false);

  const router = useRouter();
  // Refrence

  const opt1 = useRef(null);
  const opt2 = useRef(null);
  const opt3 = useRef(null);
  const opt4 = useRef(null);

  const optionArray = [opt1, opt2, opt3, opt4];

  useEffect(() => {
    setQuestion(quesionArray[index]);
  }, [index, quesionArray]);

  useEffect(() => {
    isUser().then((res) => {
      setIsUser(res);

      if (res) {
        removeCoins(100).then((res) => {
          if (res === null) {
            router.push("/");
          }
        });
      }
    });
  }, [router]);

  const endGame = () => {
    if (user) {
      setGameEnd(true);
    } else {
      addCoins(100).then((res) => {
        setIsNewUser().then(() => {
          setIsWelcomed(true);
        });
      });
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    optionNumber: number
  ) => {
    if (!lock) {
      if (optionNumber === question.answer) {
        // @ts-ignore
        e.target.classList.add("bg-blue-600");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        // @ts-ignore
        e.target.classList.add("bg-red-600");
        // @ts-ignore
        optionArray[question.answer - 1].current.classList.add("bg-blue-600");
        setLock(true);
      }

      setTimeout(() => {
        // @ts-ignore
        e.target.classList.remove("bg-blue-600", "bg-red-600");
        // @ts-ignore
        optionArray[question.answer - 1].current.classList.remove(
          "bg-blue-600"
        );
        if (quesionArray.length - 1 > index) {
          setIndex(index + 1);
          setLock(false);
        } else {
          endGame();
        }
      }, 1000);
    }
  };

  if (gameEnd) return <GameEnd score={score} />;

  return (
    <>
      {index === 1 && !user && <RewardAdsPopUp />}
      <div className="flex items-center flex-col w-full gap-2">
        {isWelcomed && <Welcome />}
        {isWelcomed && (
          <div className="absolute w-full h-full min-h-[1000px] top-0 left-0 bg-black/30 " />
        )}
        <span className="text-[#bac8ff] font-bold">
          Question {index + 1 + "/" + quesionArray.length}
        </span>
        <p className="text-lg font-bold px-10 text-center">
          {question.question}
        </p>
        <div className="grid grid-cols-2 gap-2 mt-6 w-full">
          <button
            ref={opt1}
            className={cn(
              "flex flex-col justify-center items-center text-[14px] py-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer"
            )}
            onClick={(e) => handleClick(e, 1)}
          >
            {question.option1}
          </button>
          <button
            ref={opt2}
            className={cn(
              "flex flex-col justify-center items-center text-[14px] py-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer"
            )}
            onClick={(e) => handleClick(e, 2)}
          >
            {question.option2}
          </button>
          <button
            ref={opt3}
            className={cn(
              "flex flex-col justify-center items-center text-[14px] py-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer"
            )}
            onClick={(e) => handleClick(e, 3)}
          >
            {question.option3}
          </button>
          <button
            ref={opt4}
            className={cn(
              "flex flex-col justify-center items-center text-[14px] py-2 min-h-[32px] bg-[#20213f] border-2 border-[#404380] rounded-full cursor-pointer"
            )}
            onClick={(e) => handleClick(e, 4)}
          >
            {question.option4}
          </button>
        </div>
      </div>
    </>
  );
};

export default Question;
