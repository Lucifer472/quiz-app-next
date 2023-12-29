import db from "./db";

export const getQuestionsStarter = async () => {
  const data = await db.question.findManyRandom(2, {
    select: {
      id: true,
      question: true,
      option1: true,
      option2: true,
      option3: true,
      option4: true,
      answer: true,
      quizId: true,
    },
  });
  return data;
};
