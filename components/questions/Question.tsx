"use client";
import { cn } from "@/lib/utils";
import { question } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface QuestionProps {
  quesionArray: question[];
}

const Question = ({ quesionArray }: QuestionProps) => {
  const [index, setIndex] = useState(0);

  const [question, setQuestion] = useState(quesionArray[index]);
  const [lock, setLock] = useState(false);

  const [score, setScore] = useState(
    //@ts-ignore
    parseInt(sessionStorage.getItem("amount")) || 0
  );

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
    sessionStorage.setItem("amount", score.toString());
  }, [score]);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    optionNumber: number
  ) => {
    if (!lock) {
      if (optionNumber === question.answer) {
        // @ts-ignore
        e.target.classList.add("bg-blue-400");
        setLock(true);
        setScore((prev) => prev + 50);
      } else {
        // @ts-ignore
        e.target.classList.add("bg-red-400");
        // @ts-ignore
        optionArray[question.answer - 1].current.classList.add("bg-blue-400");
        setLock(true);
        setScore((prev) => prev - 25);
      }

      setTimeout(() => {
        // @ts-ignore
        e.target.classList.remove("bg-blue-400", "bg-red-400");
        // @ts-ignore
        optionArray[question.answer - 1].current.classList.remove(
          "bg-blue-400"
        );
        setLock(false);
        if (quesionArray.length - 1 > index) {
          setIndex(index + 1);
        } else if (sessionStorage.getItem("time") === null) {
          if (score < 0) {
            sessionStorage.setItem("amount", "100");
          }
          sessionStorage.setItem("time", "1");
          router.push("/claim");
        } else {
          router.push("/home");
        }
      }, 1000);
    }
  };

  if (
    sessionStorage.getItem("time") !== null &&
    sessionStorage.getItem("time") === "2"
  ) {
    router.push("/home");
    return <div></div>;
  }

  return (
    <div className="flex items-center flex-col w-full gap-2">
      <span className="text-[#bac8ff] font-bold">
        Question {index + 1 + "/" + quesionArray.length}
      </span>
      <p className="text-lg font-bold px-10 text-center">{question.question}</p>
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
  );
};

export default Question;
