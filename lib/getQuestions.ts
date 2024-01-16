import db from "./db";
import { quiz } from "@prisma/client";
import { category } from "@/constant";

export const getQuestionsStarter = async () => {
  const data = await db.question.findManyRandom(2, {
    where: {
      quizId: 10,
    },
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

export const getAllQuizCat = async () => {
  const quizzes = await Promise.all(
    category.map(async (category) => {
      if (category === "All") return null;
      const quiz = await db.quiz.findFirst({
        where: {
          category: category,
        },
      });
      return quiz;
    })
  );

  return quizzes as quiz[];
};

export const getAllFromCat = async (cat: string) => {
  const quizzes = await db.quiz.findMany({
    where: {
      category: cat,
    },
  });

  return quizzes as quiz[];
};

export const getQuestionQuiz = async (id: number) => {
  const quiz = await db.quiz.findUnique({
    where: {
      id: id,
    },
  });

  const question = await db.question.findMany({
    take: 15,
    where: {
      quizId: id,
    },
  });

  return { question, quiz };
};
