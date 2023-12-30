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
      <Script src="/reward-ad" strategy="lazyOnload" />
    </div>
  );
};

export default profile;
