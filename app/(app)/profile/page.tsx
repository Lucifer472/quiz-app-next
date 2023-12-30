import AdTop from "@/components/ads/AdTop";
import Script from "next/script";

const profile = () => {
  return (
    <div>
      <AdTop />
      page
      <Script src="/reward-ad.js" strategy="lazyOnload" />
    </div>
  );
};

export default profile;
