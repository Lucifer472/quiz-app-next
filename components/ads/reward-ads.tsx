"use client";

import { useState } from "react";

import { X } from "lucide-react";
import Image from "next/image";

import { addCoins } from "@/action/actions";

const RewardAdsPopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  window.googletag = window.googletag || { cmd: [] };

  const getrewardad = () => {
    googletag.cmd.push(() => {
      const rewardedSlot = googletag.defineOutOfPageSlot(
        "22989534981/MB_Rewarded",
        googletag.enums.OutOfPageFormat.REWARDED
      );
      if (rewardedSlot === null) return;
      rewardedSlot.addService(googletag.pubads());
      googletag.enableServices();
      googletag.pubads().addEventListener("slotOnload", (evt) => {
        if (evt.slot === rewardedSlot && !evt.slot.getResponseInformation()) {
          setIsOpen(false);
        }
      });
      googletag.pubads().addEventListener("rewardedSlotReady", function (evt) {
        evt.makeRewardedVisible();
      });
      googletag.pubads().addEventListener("rewardedSlotGranted", function () {
        addCoins(100).then(() => setIsOpen(false));
      });
      googletag.pubads().addEventListener("rewardedSlotClosed", function () {
        googletag.destroySlots([rewardedSlot]);
        setIsOpen(false);
      });
      googletag.display(rewardedSlot);
    });
  };

  return (
    <>
      {isOpen && (
        <div className="absolute w-full h-full top-0 left-0 z-20 bg-black opacity-40" />
      )}
      {isOpen && (
        <div className="absolute top-[-300px] w-full h-full bg-transparent z-50 flex items-center justify-center">
          <div className="fixed flex bg-[#111827] border-2 border-white text-white flex-col justify-center items-center mx-4 p-4 xss:p-8 rounded-[1.5rem] w-full max-w-[300px]">
            <button
              className="absolute top-0 right-0 m-4 text-white-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>
            <Image
              src={"/rewards.gif"}
              alt="Rewards"
              width={180}
              height={180}
            />
            <h2 className="text-lg mb-4 text-[#D8E91E]">
              New Reward Available
            </h2>
            <h2 className="mb-4 text-lg">Get Instant 100 Coins!</h2>
            <p className="mb-6 text-center text-[#8E8F98]">
              Watch a simple ad and get rewarded
            </p>
            <button
              onClick={getrewardad}
              className="bg-transparent w-full min-h-[50px] relative"
            >
              <Image
                src={"/claim-button.png"}
                alt="Claim"
                fill
                style={{ objectFit: "contain" }}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RewardAdsPopUp;
