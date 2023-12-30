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
    </div>
  );
};

export default page;
