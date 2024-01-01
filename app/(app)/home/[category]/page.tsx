import { getAllFromCat } from "@/lib/getQuestions";
import dynamic from "next/dynamic";

const categoryPage = async ({ params }: { params: { category: string } }) => {
  const CategoryView = dynamic(
    () => import("@/app/(app)/_componets/CategoryView"),
    {
      ssr: false,
    }
  );

  const QuizView = dynamic(() => import("@/app/(app)/_componets/QuizView"), {
    ssr: false,
  });

  const AdTop = dynamic(() => import("@/components/ads/Ad-Category"), {
    ssr: false,
  });

  const quiz = await getAllFromCat(decodeURIComponent(params.category));
  return (
    <div className="px-5 pt-[2rem] pb-16 flex flex-col w-full gap-6">
      <AdTop />
      <div>
        <CategoryView />
      </div>
      <QuizView allQuiz={quiz} />
    </div>
  );
};

export default categoryPage;
