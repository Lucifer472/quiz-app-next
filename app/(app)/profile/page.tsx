import AdTop from "@/components/ads/AdTop";
import Script from "next/script";

const profile = () => {
  return (
    <div>
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        async
        strategy="beforeInteractive"
      />
      <AdTop />
      page
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

export default profile;
