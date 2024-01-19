import { getQuestionQuiz } from "@/lib/getQuestions";
import StartQuiz from "@/app/(app)/_componets/StartQuiz";

const Quiz = async ({ params }: { params: { id: string } }) => {
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
