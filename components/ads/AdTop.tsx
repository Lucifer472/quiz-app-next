"use client";
import Script from "next/script";
import { useEffect } from "react";

const AdTop = () => {
  useEffect(() => {
    addEventListener("DOMContentLoaded", () => {
      // @ts-ignore
      window.googletag = window.googletag || { cmd: [] };
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
      });
      // @ts-ignore
      googletag.cmd.push(function () {
        // @ts-ignore
        googletag.display("div-gpt-ad-1700655338779-0");
      });
    });
  }, []);

  return (
    <>
      <Script id="Top-Ad" strategy="afterInteractive">
        {`window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            googletag.defineSlot('/22989534981/DG_7_336X280', [336, 280], 'div-gpt-ad-1700655338779-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
          });`}
      </Script>
      <div
        id="div-gpt-ad-1700655338779-0"
        style={{ minWidth: "336px", minHeight: "280px" }}
      ></div>
      <Script strategy="lazyOnload" id="Top-Ad">
        {`googletag.cmd.push(function() { googletag.display('div-gpt-ad-1700655338779-0'); });`}
      </Script>
    </>
  );
};

export default AdTop;
