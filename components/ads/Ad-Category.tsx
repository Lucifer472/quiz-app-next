"use client";
import LoadScript from "@/lib/load";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const AdTop = () => {
  const pathname = usePathname();
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    let sl: googletag.Slot | null;
    const loadAds = async () => {
      LoadScript(() => {
        console.log("Script Loaded");
      });
    };
    loadAds().then(() => {
      googletag.cmd.push(function () {
        sl = googletag.defineSlot(
          "/22989534981/DG_7_336X280",
          [336, 280],
          "div-gpt-ad-1700655338779-0"
        );
        if (sl !== null) sl.addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display("div-gpt-ad-1700655338779-0");
      });
    });
    return () => {
      // Clean up the ad slot when the component unmounts or pathname changes
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          let x = googletag.destroySlots([sl as googletag.Slot]);
          if (x) {
            console.log("IT WORKS");
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
