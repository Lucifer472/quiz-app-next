import { getAllQuizCat } from "@/lib/getQuestions";
import dynamic from "next/dynamic";

const Home = async () => {
  const CategoryView = dynamic(() => import("../_componets/CategoryView"), {
    ssr: false,
  });

  const QuizView = dynamic(() => import("../_componets/QuizView"), {
    ssr: false,
  });

  const AdTop = dynamic(() => import("@/components/ads/Ad-Home"), {
    ssr: false,
  });

  const quiz = await getAllQuizCat();

  return (
    <div className="px-5 pt-1 pb-16 flex flex-col w-full gap-6">
      <AdTop />
      <div>
        <CategoryView />
      </div>
      <QuizView allQuiz={quiz} />
    </div>
  );
};

export default Home;
