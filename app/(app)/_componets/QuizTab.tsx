import { icons } from "@/constant";
import Image from "next/image";

interface QuizTabProps {
  name: string;
  category: string;
}

const QuizTab = ({ name, category }: QuizTabProps) => {
  return (
    <div className="flex flex-col gap-2 w-full bg-[rgb(31,41,55)] border border-border rounded-full py-2 cursor-pointer">
      <div className="flex gap-2 items-center px-2 justify-between">
        <div className="flex flex-col">
          <Image
            src={`/icons/${icons[category]}`}
            alt={category}
            width={120}
            height={120}
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col w-full justify-start">
          <div className="flex text-[10px] font-black flex-col items-end">
            <div className="text-[#64d2ff] max-h-[20px] py-[2px]">
              <div className="flex sm:justify-center  ">
                {category} &nbsp;| &nbsp; {name}
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-end mt-[5px] text-[14px] font-black">
            <span>Play &amp; Win&nbsp;&nbsp;</span>
            <Image
              className="object-contain"
              src="/coin.svg"
              alt="Coins"
              width={20}
              height={20}
            />
            <span>&nbsp;10000</span>
          </div>
          <div className="flex items-end flex-col mt-[5px]">
            <span className="text-[10px] flex gap-1 sm:text-[8px]  bg-[#30d158] bg-opacity-20 text-[#30d158] px-2 rounded-full">
              Entry Fee &nbsp;
              <Image
                className="object-contain"
                src="/coin.svg"
                alt="Fee"
                width={14}
                height={14}
              />
              &nbsp;100
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/play.svg"
            alt="Play"
            className="rounded-full object-cover"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizTab;
