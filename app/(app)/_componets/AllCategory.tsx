"use client";

import { Input } from "@/components/ui/input";
import { category, icons } from "@/constant";
import { Search } from "lucide-react";
import CategoryTab from "./CategoryTab";

const AllCategory = () => {
  return (
    <>
      <div className="border-2 border-white rounded-full px-4 py-3 flex items-center gap-1">
        <Search className="w-8 h-8 font-semibold" />
        <Input
          className="bg-transparent border-none outline-none focus:outline-none text-lg"
          type="text"
          placeholder="Search Quiz Category"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {category.map((c, index) => {
          if (c === "All") return null;
          return <CategoryTab label={c} src={icons[c]} key={index} />;
        })}
      </div>
    </>
  );
};

export default AllCategory;
