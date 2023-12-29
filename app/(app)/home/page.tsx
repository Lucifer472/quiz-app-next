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
      <div className="h-[300px]"></div>
      <div>
        <CategoryView />
      </div>
      <QuizView />
    </div>
  );
};

export default Home;
