import Logo from "@/components/logo/Logo";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import LoginNumber from "../_components/LoginNumber";
import Facts from "@/components/fact/Facts";
import dynamic from "next/dynamic";

const Login = () => {
  const AdTop = dynamic(() => import("@/components/ads/Ad-Submit"), {
    ssr: false,
  });
  const AdBottom = dynamic(() => import("@/components/ads/Ad-Win"), {
    ssr: false,
  });
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <AdTop />
      <div className="w-full flex px-3 py-4 items-center gap-2 mb-5">
        <Link href={"/home"}>
          <ChevronLeft />
        </Link>
        <Logo />
      </div>
      <div className="text-center font-bold text-18">
        Join QuizTwiz now!👋
        <div className="flex gap-1 text-[12px] text-[#8789c3]">
          Play Quizzes and Win Coins
        </div>
      </div>
      <LoginNumber />
      <AdBottom />
      <Facts />
    </div>
  );
};

export default Login;
