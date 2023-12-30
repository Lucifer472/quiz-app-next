"use client";
import LoadScript from "@/lib/load";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const AdTop = () => {
  const pathname = usePathname();
  // @ts-ignore
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    const loadAds = async () => {
      LoadScript(() => {
        // @ts-ignore
        googletag.cmd.push(function () {
          // @ts-ignore
          googletag
            .defineSlot(
              "/22989534981/DG_7_336X280",
              [336, 280],
              "div-gpt-ad-1700655338779-0"
            )
            // @ts-ignore
            .addService(googletag.pubads());
          // @ts-ignore
          googletag.pubads().enableSingleRequest();
          // @ts-ignore
          googletag.enableServices();
          // @ts-ignore
          googletag.display("div-gpt-ad-1700655338779-0");
        });
      });
    };
    loadAds();

    return () => {
      // Clean up the ad slot when the component unmounts or pathname changes
      // @ts-ignore
      if (googletag) {
        // @ts-ignore
        googletag.cmd.push(function () {
          // @ts-ignore
          const isDes = googletag.destroySlots(["div-gpt-ad-1700655338779-0"]);
          if (isDes) {
            console.log("IT WORKS");
          } else {
            console.log("IT DOESN");
          }
        });
      }
    };
  }, [pathname]);

  return (
    <>
      <div
        id="div-gpt-ad-1700655338779-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </>
  );
};

export default AdTop;
