"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginNumber = () => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow only numeric characters (0-9) and backspace
    const isNumeric = /^[0-9\b]+$/.test(event.key);

    if (!isNumeric && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault();
    }
  };

  const handleClick = () => {
    toast.error("Sorry Something Went Wrong!");
  };

  return (
    <div className="flex flex-col gap-5 my-8">
      <input
        type="text"
        className="rounded-full border-2 border-solid border-white  bg-gray-800 w-full py-3 text-center px-4 focus:outline-none text-lg"
        placeholder="Enter Phone Number"
        maxLength={10}
        onKeyDown={(e) => handleKeyPress(e)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="rounded-full border-2 border-solid border-white  bg-blue-900 w-full py-3 text-center px-4 focus:outline-none text-lg mt-4"
        onClick={handleClick}
        disabled={inputValue.length !== 10}
      >
        Get Code
      </button>
      <Link
        href={"/home"}
        className="w-full flex items-center justify-center cursor-pointer"
      >
        <Image
          src={"/sing.jpg"}
          alt="Google Sing In"
          width={250}
          height={100}
          className="rounded-md"
        />
      </Link>
    </div>
  );
};

export default LoginNumber;
