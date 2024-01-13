import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Facts from "@/components/fact/Facts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const SubmitPage = () => {
  const AdTop = dynamic(() => import("@/components/ads/Ad-Question"), {
    ssr: false,
  });
  return (
    <section className="flex flex-col items-center justify-center gap-8 w-full">
      <AdTop />
      <Link
        href={"/"}
        className="flex flex-col w-full bg-[rgb(31,41,55)] rounded-md relative max-w-[430px]"
      >
        <div className="p-3 flex gap-x-2 items-center justify-evenly ">
          <div className="flex flex-col items-center gap-y-1">
            <span className="text-white">Fun Quiz</span>
            <Image
              src={`/icons/science.png`}
              alt="Animal"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <span className="text-white">Math Quiz</span>
            <Image
              src={`/icons/math.png`}
              alt="Animal"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <span className="text-white">Car Quiz</span>
            <Image
              src={`/icons/auto.png`}
              alt="Animal"
              width={100}
              height={100}
              className="rounded-md"
            />
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300" />
        <div className="px-4 py-2 flex items-center justify-between w-full">
          <div
            className={cn(
              "px-6 py-2 bg-blue-500 text-white font-medium rounded-full text-2xl w-full text-center",
              poppins.className
            )}
          >
            PLAY
          </div>
        </div>
      </Link>
      <Facts />
    </section>
  );
};

export default SubmitPage;
