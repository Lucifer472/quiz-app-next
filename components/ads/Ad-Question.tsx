"use client";
import LoadScript from "@/lib/load";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const AdTop = () => {
  const [slot, setSlot] = useState<any>(null);
  const pathname = usePathname();
  // @ts-ignore
  window.googletag = window.googletag || { cmd: [] };

  useEffect(() => {
    const loadAds = async () => {
      LoadScript(() => {
        // @ts-ignore
        googletag.cmd.push(function () {
          setSlot(
            // @ts-ignore
            googletag
              .defineSlot(
                "/22989534981/336x280_1",
                [336, 280],
                "div-gpt-ad-1703922138817-0"
              )
              // @ts-ignore
              .addService(googletag.pubads())
          );
          // @ts-ignore
          googletag.pubads().enableSingleRequest();
          // @ts-ignore
          googletag.enableServices();
          // @ts-ignore
          googletag.display("div-gpt-ad-1703922138817-0");
        });
      });
    };
    loadAds();

    return () => {
      // Clean up the ad slot when the component unmounts or pathname changes
      // @ts-ignore
      if (googletag && slot !== null) {
        // @ts-ignore
        googletag.cmd.push(function () {
          // @ts-ignore
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
