"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="px-1 xss:px-2 pt-[2rem] flex flex-col w-full gap-6">
      <div className="grid grid-cols-3 items-center w-full max-w-screen-xss py-3 fixed  bottom-0 bg-[#020817] z-50">
        <div className="flex flex-col items-center justify-center w-full col-span-1">
          <Link
            href={"/cat"}
            className={cn(
              "flex items-center flex-col rounded-full px-5 py-2 max-w-[100px]",
              pathname === "/cat" ? "bg-blue-900" : ""
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            <p className="mt-1">Category</p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full col-span-1">
          <Link
            href={"/home"}
            className={cn(
              "flex items-center flex-col rounded-full px-5 py-2 max-w-[100px]",
              pathname === "/home" ? "bg-blue-900" : ""
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <p className="mt-1">Home</p>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center w-full col-span-1">
          <Link
            href={"/profile"}
            className={cn(
              "flex items-center flex-col rounded-full px-5 py-2 max-w-[100px]",
              pathname === "/profile" ? "bg-blue-900" : ""
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p className="mt-1">Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
