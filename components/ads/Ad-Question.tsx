"use client";
import LoadScript from "@/lib/load";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const AdTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    const loadAds = async () => {
      LoadScript(() => {
        // @ts-ignore
        if (googletag) {
          // @ts-ignore
          googletag.cmd.push(function () {
            // @ts-ignore
            googletag.display("div-gpt-ad-1703922138817-0");
            console.log("Pushing");
          });
        } else {
          console.log("Not working");
        }
      });
    };
    loadAds().then(() => {
      console.log("ITS WORKING");
    });
  }, [pathname]);

  return (
    <>
      <Script id="Top-Ad" strategy="afterInteractive">
        {`window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function () {
            googletag
              .defineSlot(
                "/22989534981/336x280_1",
                [336, 280],
                "div-gpt-ad-1703922138817-0"
              )
              .addService(googletag.pubads());
              googletag.enableServices();
        })`}
      </Script>
      <div
        id="div-gpt-ad-1703922138817-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
    </>
  );
};

export default AdTop;
