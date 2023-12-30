"use client";
import LoadScript from "@/lib/load";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const AdTop = () => {
  const [slot, setSlot] = useState<any>(null);
  const pathname = usePathname();
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    const loadAds = async () => {
      LoadScript(() => {
        console.log("Script Loaded");
      });
    };
    loadAds().then(() => {
      googletag.cmd.push(function () {
        let sl = googletag.defineSlot(
          "/22989534981/336x280_1",
          [336, 280],
          "div-gpt-ad-1703922138817-0"
        );
        setSlot(sl);
        if (sl !== null) sl.addService(googletag.pubads());
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display("div-gpt-ad-1703922138817-0");
      });
    });

    return () => {
      // Clean up the ad slot when the component unmounts or pathname changes
      if (googletag && slot !== null) {
        googletag.cmd.push(function () {
          googletag.destroySlots([slot]);
        });
      }
    };
  }, [pathname]);

  return (
    <>
      <div
        id="div-gpt-ad-1703922138817-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </>
  );
};

export default AdTop;
