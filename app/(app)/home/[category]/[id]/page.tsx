import StartQuiz from "@/app/(app)/_componets/StartQuiz";
import { getQuestionQuiz } from "@/lib/getQuestions";

const Quiz = async ({ params }: { params: { id: string } }) => {
  const { question, quiz } = await getQuestionQuiz(parseInt(params.id));

  if (quiz === null) return null;

  return <StartQuiz questions={question} quiz={quiz} />;
};

export default Quiz;
