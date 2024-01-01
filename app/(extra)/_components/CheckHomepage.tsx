"use client";

import LoadScript from "@/lib/load";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const CheckHomepage = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loadScript = async () => {
      LoadScript(() => {
        console.log("Script Loaded");
      });
    };

    loadScript().then(() => {
      const script = document.createElement("script");
      script.text = `window.googletag = window.googletag || { cmd: [] };
      let interstitialSlot;

      googletag.cmd.push(() => {
        // Define a web interstitial ad slot.
        interstitialSlot = googletag.defineOutOfPageSlot(
          "/22989534981/336x280_1",
          googletag.enums.OutOfPageFormat.INTERSTITIAL
        );

        // Slot returns null if the page or device does not support interstitials.
        if (interstitialSlot) {
          // Enable optional interstitial triggers and register the slot.
          interstitialSlot.addService(googletag.pubads()).setConfig({
            interstitial: {
              triggers: {
                unhideWindow: true,
              },
            },
          });

          console.log("Interstitial is loading...");
          googletag.pubads().addEventListener("slotOnload", (event) => {
            if (interstitialSlot === event.slot) {
             console.log("Ads Loaded");
          }});
        }

        // Enable SRA and services.
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display(interstitialSlot);
      });`;

      script.setAttribute("type", "module");

      document.head.appendChild(script);
    });
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("amount") === null) {
      router.push("/");
    } else if (pathname === "/") {
      router.push("/home");
    }
  }, [pathname, router]);
  return <div></div>;
};

export default CheckHomepage;
