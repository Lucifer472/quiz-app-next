import dynamic from "next/dynamic";
import Script from "next/script";

const Home = () => {
  const CategoryView = dynamic(() => import("../_componets/CategoryView"), {
    ssr: false,
  });

  const QuizView = dynamic(() => import("../_componets/QuizView"), {
    ssr: false,
  });

  const AdTop = dynamic(() => import("@/components/ads/AdTop"), {
    ssr: false,
  });

  return (
    <div className="px-5 pt-[2rem] pb-16 flex flex-col w-full gap-6">
      <Script
        src={`https://securepubads.g.doubleclick.net/tag/js/gpt.js?v=${
          Math.random() * 100
        }`}
        async
        strategy="beforeInteractive"
      />
      <AdTop />
      <div>
        <CategoryView />
      </div>
      <QuizView />
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
      <Script src="/reward-ad.js" strategy="lazyOnload" />
    </div>
  );
};

export default Home;
