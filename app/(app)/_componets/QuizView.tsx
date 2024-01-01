import { quiz } from "@prisma/client";
import QuizTab from "./QuizTab";

const QuizView = ({ allQuiz }: { allQuiz: quiz[] | null }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {allQuiz &&
        allQuiz.map((q, index) => {
          if (q === null) return null;
          return (
            <QuizTab
              name={q.name}
              category={q.category}
              id={q.id}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default QuizView;
