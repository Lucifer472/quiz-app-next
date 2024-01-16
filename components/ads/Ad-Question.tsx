"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import LoadScript from "@/lib/load";

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
          "/22989534981/QDG_3_336X280",
          [336, 280],
          "div-gpt-ad-1705382616802-0"
        );
        if (sl !== null) sl.addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display("div-gpt-ad-1705382616802-0");
      });
    });
    return () => {
      // Clean up the ad slot when the component unmounts or pathname changes
      if (googletag && sl !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([sl as googletag.Slot]);
        });
      }
    };
  }, [pathname]);

  return (
    <div className="text-center text-white">
      <span className="text-xs">SPONSORED</span>
      <div
        id="div-gpt-ad-1705382616802-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </div>
  );
};

export default AdTop;
