"use client";

import LoadScript from "@/lib/load";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const CheckHomepage = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement("script");
    script.text = `window.googletag = window.googletag || { cmd: [] };
          googletag.cmd.push(function () {
            console.log('interstitial slot init');
            // Define a web interstitial ad slot.
            let interstitialSlot = googletag.defineOutOfPageSlot(
              "/22989534981/DG_INTERSTITIAL",
              googletag.enums.OutOfPageFormat.INTERSTITIAL
            );
            interstitialSlot
                  .addService(googletag.pubads());
            console.log("interstitialSlot", interstitialSlot)
      
            // Slot returns null if the page or device does not support interstitials.
            if (interstitialSlot) {
              interstitialSlot
                .addService(window.googletag.pubads())
                .setConfig({
                  interstitial: {
                    triggers: {
                      unhideWindow: true,
                    },
                  },
                });
      
              // Add an event listener to handle when the slot loads
              window.googletag.pubads().addEventListener("slotOnload", function (event) {
                if (interstitialSlot === event.slot) {
                  console.log("Interstitial vignette is loaded.");
                }
              });
            }
            googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          googletag.pubads().refresh([interstitialSlot]);
          });`;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("time") === null) {
      router.push("/");
    }
  }, [pathname, router]);
  return <div></div>;
};

export default CheckHomepage;
