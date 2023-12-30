import AdTop from "@/components/ads/AdTop";
import Script from "next/script";

const Cat = () => {
  return (
    <div>
      <AdTop />
      Category page
      <Script src="/reward-ad.js" strategy="lazyOnload" />
    </div>
  );
};

export default Cat;
