import Script from "next/script";

const profile = () => {
  return (
    <div>
      page
      <Script src="/reward-ad.js" strategy="lazyOnload" />
    </div>
  );
};

export default profile;
