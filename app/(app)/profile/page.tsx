import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import QuizAndCoinBtn from "../_componets/quiz-coins";

const profile = () => {
  const AdTop = dynamic(() => import("@/components/ads/Ad-Question"), {
    ssr: false,
  });
  return (
    <div className="w-full">
      <div className="px-5 pt-[2rem] pb-20 flex flex-col w-full gap-6">
        <div className="flex justify-center w-full gap-10 mt-6">
          <figure className="w-32 h-32 bg-primary rounded-full flex justify-center items-center">
            <Image
              src={"/profile.png"}
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full"
            />
          </figure>
          <div className="flex gap-1 flex-col items-center justify-center">
            <div className="text-3xl">User X</div>
            <div className="text-sm">Number not updated</div>
            <div className="text-sm">Email not updated</div>
          </div>
        </div>
        <QuizAndCoinBtn />
        <Link
          href={"/login"}
          className="bg-blue-800 mx-auto py-3 px-14 font-black text-white text-center max-w-[250px] rounded-full cursor-pointer"
        >
          Join Now
        </Link>
      </div>
      <AdTop />
      <Script src="/reward-ad.js" strategy="lazyOnload" />
    </div>
  );
};

export default profile;
