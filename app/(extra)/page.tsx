import Link from "next/link";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { getQuestionsStarter } from "@/lib/getQuestions";

import Facts from "@/components/fact/Facts";
import Coin from "@/components/logo/Coin";
import Script from "next/script";

export const revalidate = 0;

const Home = async () => {
  const questions = await getQuestionsStarter();
  if (questions.length === 0) redirect("/home");

  const Question = dynamic(() => import("@/components/questions/Question"), {
    ssr: false,
  });

  const AdTop = dynamic(() => import("@/components/ads/AdTop"), {
    ssr: false,
  });

  return (
    <section className="flex flex-col items-center justify-center gap-8 w-full">
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        async
        strategy="beforeInteractive"
      />
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

      <Script id="InterStallar-ads" strategy="afterInteractive">
        {`window.googletag = window.googletag || {cmd: []};
          var interstitialSlot;
          googletag.cmd.push(function() {
            interstitialSlot = googletag.defineOutOfPageSlot('/22989534981/DG_INTERSTITIAL', googletag.enums.OutOfPageFormat.INTERSTITIAL);
            if (interstitialSlot) {
                  interstitialSlot.addService(googletag.pubads());
                  }
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });`}
      </Script>
      <Script id="interstaller-ads-div" strategy="lazyOnload">
        {`googletag.cmd.push(function() {
         googletag.display(interstitialSlot);
        });`}
      </Script>
    </section>
  );
};

export default Home;
