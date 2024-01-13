import Link from "next/link";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { getQuestionsStarter } from "@/lib/getQuestions";

import Facts from "@/components/fact/Facts";
import Coin from "@/components/logo/Coin";

export const revalidate = 0;

const Home = async () => {
  const questions = await getQuestionsStarter();
  if (questions.length === 0) redirect("/home");

  const Question = dynamic(() => import("@/components/questions/Question"), {
    ssr: false,
  });

  const AdTop = dynamic(() => import("@/components/ads/Ad-Home"), {
    ssr: false,
  });

  return (
    <section className="flex flex-col items-center justify-center gap-8 w-full">
      <AdTop />
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-center font-bold text-18">Let&apos;s begin!</h1>
        <span className="flex items-center gap-1 text-[12px] text-[#8789c3]">
          Answer few questions and <Coin />
          150 free!
        </span>
      </div>
      <Question quesionArray={questions} />
      <Link
        href={"/login"}
        className="text-[#ffcc5b] font-bold cursor-pointer mt-4"
      >
        Sing-Up OR Login
      </Link>
      <Facts />
    </section>
  );
};

export default Home;
