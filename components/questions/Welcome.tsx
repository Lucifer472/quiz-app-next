"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { addCoins } from "@/action/actions";
import { useState } from "react";

const Welcome = () => {
  const router = useRouter();
  const [btn, setBtn] = useState(false);

  window.googletag = window.googletag || { cmd: [] };

  const getrewardad = () => {
    setBtn(true);
    googletag.cmd.push(() => {
      const rewardedSlot = googletag.defineOutOfPageSlot(
        "22989534981/MB_Rewarded",
        googletag.enums.OutOfPageFormat.REWARDED
      );
      if (rewardedSlot === null) return router.push("/submit");
      rewardedSlot.addService(googletag.pubads());
      googletag.enableServices();
      googletag.pubads().addEventListener("slotOnload", (evt) => {
        if (evt.slot.getResponseInformation() === null) router.push("/submit");
      });
      googletag.pubads().addEventListener("rewardedSlotReady", function (evt) {
        evt.makeRewardedVisible();
      });
      googletag.pubads().addEventListener("rewardedSlotGranted", function () {
        addCoins(100).then(() => {
          router.push("/home");
        });
      });
      googletag.pubads().addEventListener("rewardedSlotClosed", function () {
        googletag.destroySlots([rewardedSlot]);
      });
      googletag.display(rewardedSlot);
    });
  };

  return (
    <div className="absolute top-0 w-full h-full bg-transparent z-50 flex items-center justify-center">
      <div className="relative flex bg-[#111827] border-2 border-white text-white flex-col justify-center items-center mx-4 p-4 xss:p-8 rounded-[1.5rem] w-full max-w-[750px]">
        <button
          disabled={btn}
          className="absolute top-0 right-0 m-4 text-white-500 hover:text-gray-700 focus:outline-none"
          onClick={getrewardad}
        >
          <X />
        </button>
        <Image src={"/rewards.gif"} alt="Rewards" width={250} height={250} />
        <h2 className="text-2xl mb-4 text-[#D8E91E]">New Reward Available</h2>
        <h2 className="text-lg md:text-[1.5rem] lg:text-4xl mb-4">
          Get Instant 100 Coins!
        </h2>
        <p className="text-sm xss:text-lg mb-6 text-[#8E8F98]">
          Watch a simple ad and get rewarded
        </p>
        <button
          disabled={btn}
          onClick={getrewardad}
          className="bg-[#D8E91E] w-full rounded-[1.5rem] text-black font-bold py-4 px-4 mr-2 "
          style={{
            boxShadow:
              "rgba(216, 233, 30, 0.9) 0px 10px 50px -20px, rgba(0, 0, 0, 0.9) 0px 20px 60px -30px",
          }}
        >
          Claim
        </button>
      </div>
    </div>
  );
};

export default Welcome;
