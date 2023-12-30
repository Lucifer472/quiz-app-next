"use client";

import LoadScript from "@/lib/load";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const CheckHomepage = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const showAds = async () => {
      LoadScript(() => {
        // @ts-ignore
        window.googletag = window.googletag || { cmd: [] };
        // @ts-ignore
        googletag.cmd.push(function () {
          var interstitialSlot;
          // @ts-ignore
          interstitialSlot = googletag.defineOutOfPageSlot(
            "/22989534981/DG_INTERSTITIAL",
            // @ts-ignore
            googletag.enums.OutOfPageFormat.INTERSTITIAL
          );
          if (interstitialSlot) {
            // @ts-ignore
            interstitialSlot.addService(googletag.pubads());
          }
          // @ts-ignore
          googletag.pubads().enableSingleRequest();
          // @ts-ignore
          googletag.enableServices();
          // @ts-ignore
          googletag.display(interstitialSlot);
        });
      });
    };
    showAds();
  }, [pathname]);

  useEffect(() => {
    if (localStorage.getItem("time") === null) {
      router.push("/");
    }
  }, [pathname, router]);
  return <div></div>;
};

export default CheckHomepage;
