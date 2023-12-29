import dynamic from "next/dynamic";

const Home = () => {
  const CategoryView = dynamic(() => import("../_componets/CategoryView"), {
    ssr: false,
  });

  const QuizView = dynamic(() => import("../_componets/QuizView"), {
    ssr: false,
  });

  return (
    <div className="px-5 pt-[2rem] pb-20 flex flex-col w-full gap-6">
      <div
        id="div-gpt-ad-1700655338779-0"
        style={{ minWidth: "336px", minHeight: "280px;" }}
      ></div>
      <div>
        <CategoryView />
      </div>
      <QuizView />
    </div>
  );
};

export default Home;
