import dynamic from "next/dynamic";
import Script from "next/script";

const Cat = () => {
  const AdTop = dynamic(() => import("@/components/ads/Ad-Category"), {
    ssr: false,
  });

  return (
    <div>
      <AdTop />
      Category page
      <Script src="/reward-ad.js" strategy="lazyOnload" />
    </div>
  );
};

export default Cat;
