import Logo from "@/components/logo/Logo";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import LoginNumber from "../_components/LoginNumber";
import Facts from "@/components/fact/Facts";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
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
      <Facts />
    </div>
  );
};

export default Login;
