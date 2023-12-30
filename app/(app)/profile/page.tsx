import dynamic from "next/dynamic";
import Script from "next/script";

const profile = () => {
  const AdTop = dynamic(() => import("@/components/ads/Ad-Question"), {
    ssr: false,
  });
  return (
    <div>
      <AdTop />
      page
      <Script src="/reward-ad.js" strategy="lazyOnload" />
    </div>
  );
};

export default profile;
