"use client";

import { useRef } from "react";
import { category } from "@/constant";
import { useRouter } from "next/navigation";

const CategoryView = () => {
  const scrollContainerRef = useRef(null);
  const router = useRouter();

  const handleScroll = (scrollValue: number) => {
    // Get the current scroll position
    // @ts-ignore
    const currentScroll = scrollContainerRef.current.scrollLeft;

    // Set the new scroll position
    // @ts-ignore
    scrollContainerRef.current.scrollLeft = currentScroll + scrollValue;
  };

  const onClick = (category: string) => {
    if (category === "All") {
      router.replace("/home", undefined);
      return null;
    }
    router.replace(`?cat=${category}`);
  };

  return (
    <div>
      <div className="flex justify-between relative">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="cursor-pointer bg-bg  hover:opacity-100  absolute left-[-20px] top-[-6px] h-[50px] w-[20px]"
          height="80"
          width="80"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleScroll(-100)}
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="cursor-pointer bg-bg  hover:opacity-100 absolute right-[-20px] w-contain top-[-6px] h-[50px] w-[20px]"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleScroll(100)}
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex justify-between text-xs pb-1 w-full overflow-x-scroll scrollhide scroll-smooth whitespace-nowrap border-b border-white border-solid"
      >
        {category.map((c, index) => (
          <button
            key={index}
            onClick={() => onClick(c)}
            className="cursor-pointer transition-all flex justify-center hover:bg-blue-900 border-2 border-border rounded-full flex-none px-6 mx-2 mb-2 py-2"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
