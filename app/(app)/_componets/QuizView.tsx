"use client";
import { useSearchParams } from "next/navigation";

import { category } from "@/constant";
import QuizTab from "./QuizTab";
import { useEffect, useState } from "react";

const QuizView = () => {
  const [cat, isCat] = useState<string | null>(null);

  const searchParams = useSearchParams();
  useEffect(() => {
    isCat(searchParams.get("cat"));
  }, [searchParams]);

  if (cat !== null) {
    return <QuizTab name="ABC" category={cat} />;
  }

  return (
    <div className="flex flex-col w-full gap-4">
      {category.map((c, index) => {
        if (c === "All") return null;
        return <QuizTab name="a" category={c} key={index} />;
      })}
    </div>
  );
};

export default QuizView;
