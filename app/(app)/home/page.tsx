import dynamic from "next/dynamic";
import Script from "next/script";

const Home = () => {
  const CategoryView = dynamic(() => import("../_componets/CategoryView"), {
    ssr: false,
  });

  const QuizView = dynamic(() => import("../_componets/QuizView"), {
    ssr: false,
  });

  const AdTop = dynamic(() => import("@/components/ads/Ad-Question"), {
    ssr: false,
  });

  return (
    <div className="px-5 pt-[2rem] pb-16 flex flex-col w-full gap-6">
      <AdTop />
      <div>
        <CategoryView />
      </div>
      <QuizView />
      <Script src="/reward-ad.js" strategy="lazyOnload" />
    </div>
  );
};

export default Home;
