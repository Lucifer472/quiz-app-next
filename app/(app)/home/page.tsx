import dynamic from "next/dynamic";
import Script from "next/script";

const Home = () => {
  const CategoryView = dynamic(() => import("../_componets/CategoryView"), {
    ssr: false,
  });

  const QuizView = dynamic(() => import("../_componets/QuizView"), {
    ssr: false,
  });

  const AdTop = dynamic(() => import("@/components/ads/AdTop"), {
    ssr: false,
  });

  return (
    <div className="px-5 pt-[2rem] pb-16 flex flex-col w-full gap-6">
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        async
        strategy="beforeInteractive"
      />
      <AdTop />
      <AdTop />
      <div>
        <CategoryView />
      </div>
      <QuizView />
      <Script src="/reward-ad" strategy="lazyOnload" />
    </div>
  );
};

export default Home;
