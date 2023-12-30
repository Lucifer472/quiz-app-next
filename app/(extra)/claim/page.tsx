import dynamic from "next/dynamic";
import Script from "next/script";

const page = () => {
  const Welcome = dynamic(() => import("../_components/Welcome"), {
    ssr: false,
  });
  return (
    <div className="w-full h-full relative">
      <Welcome />
      <Script src="/claim-ad.js" strategy="lazyOnload"></Script>
    </div>
  );
};

export default page;
