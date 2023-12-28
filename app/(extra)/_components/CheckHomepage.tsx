"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const CheckHomepage = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (localStorage.getItem("time") === null) {
      router.push("/");
    }
  }, [pathname, router]);
  return <div></div>;
};

export default CheckHomepage;
