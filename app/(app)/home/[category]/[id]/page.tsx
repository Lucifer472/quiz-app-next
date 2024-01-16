import { getQuestionQuiz } from "@/lib/getQuestions";
import dynamic from "next/dynamic";

const Quiz = async ({ params }: { params: { id: string } }) => {
  const StartQuiz = dynamic(() => import("@/app/(app)/_componets/StartQuiz"), {
    ssr: false,
  });
  const { question, quiz } = await getQuestionQuiz(parseInt(params.id));

  if (quiz === null) return null;

  return (
    <StartQuiz
      questions={question}
      quiz={quiz}
      redirectUrl={`/home/quiz/${params.id}`}
    />
  );
};

export default Quiz;
