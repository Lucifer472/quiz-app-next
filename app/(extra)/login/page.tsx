import Logo from "@/components/logo/Logo";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import LoginNumber from "../_components/LoginNumber";
import Facts from "@/components/fact/Facts";
import Script from "next/script";
import AdTop from "@/components/ads/AdTop";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        async
        strategy="beforeInteractive"
      />
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
    </div>
  );
};

export default Login;
