import dynamic from "next/dynamic";
import Script from "next/script";

const page = () => {
  const Welcome = dynamic(() => import("../_components/Welcome"), {
    ssr: false,
  });
  return (
    <div className="w-full h-full relative">
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        async
        strategy="beforeInteractive"
      />
      <Welcome />
      <Script src="/claim-ad.js" strategy="lazyOnload"></Script>
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

export default page;
