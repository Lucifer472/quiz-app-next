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
      let interstitialSlot: googletag.Slot | null;

      googletag.cmd.push(() => {
        // Define a web interstitial ad slot.
        interstitialSlot = googletag.defineOutOfPageSlot(
          "/6355419/Travel/Europe/France/Paris",
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

          document.getElementById("status")!.textContent =
            "Interstitial is loading...";

          // Add event listener to enable navigation once the interstitial loads.
          // If this event doesn't fire, try clearing local storage and refreshing
          // the page.
          googletag.pubads().addEventListener("slotOnload", (event) => {
            if (interstitialSlot === event.slot) {
              document.getElementById("link")!.style.display = "block";
              document.getElementById("status")!.textContent =
                "Interstitial is loaded.";
            }
          });
        }

        // Enable SRA and services.
        googletag.pubads().enableSingleRequest();
        googletag.enableServices();
        googletag.display(interstitialSlot!);
      });`;

      script.setAttribute("type", "module");

      document.head.appendChild(script);
    });
  }, []);

  useEffect(() => {
    if (localStorage.getItem("time") === null) {
      router.push("/");
    }
  }, [pathname, router]);
  return <div></div>;
};

export default CheckHomepage;
