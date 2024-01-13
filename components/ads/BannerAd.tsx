"use client";
import { addCoins } from "@/action/actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface bannerAdsProps {
  redirectUrl: string;
}

const BannerAd = ({ redirectUrl }: bannerAdsProps) => {
  const [btn, setBtn] = useState(false);
  const router = useRouter();

  window.googletag = window.googletag || { cmd: [] };

  const getrewardad = () => {
    setBtn(true);
    googletag.cmd.push(() => {
      const rewardedSlot = googletag.defineOutOfPageSlot(
        "22989534981/MB_Rewarded",
        googletag.enums.OutOfPageFormat.REWARDED
      );
      if (rewardedSlot === null) return null;
      rewardedSlot.addService(googletag.pubads());
      googletag.enableServices();
      googletag.pubads().addEventListener("rewardedSlotReady", function (evt) {
        evt.makeRewardedVisible();
      });
      googletag.pubads().addEventListener("rewardedSlotGranted", function () {
        addCoins(100).then((res) => {
          if (res === null) {
            toast("An Error Occured");
          } else {
            setTimeout(() => {
              toast("100 Coins Added successfully");
              router.push(redirectUrl);
            }, 500);
          }
        });
      });
      googletag.pubads().addEventListener("rewardedSlotClosed", function () {
        googletag.destroySlots([rewardedSlot]);
      });
      googletag.display(rewardedSlot);
    });
  };

  return (
    <div className="fixed modal z-[60] inset-0 flex items-center  justify-center w-full ">
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="max-w-[600px] relative flex bg-[#111827] border-2 border-white text-white flex-col justify-center items-center mx-4  p-8  rounded-[1.5rem] w-full">
        <button
          onClick={() => router.push("/home")}
          className="absolute top-0 right-0 m-4 text-white-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <Image src={"/ad-banner.png"} alt="Ad" width={100} height={100} />
        <h2 className="text-4xl text-[#D8E91E] md:text-[1.5rem] mb-4">oops!</h2>
        <p className="mb-6 text-[#8E8F98]">Not enough coins to play</p>
        <button
          disabled={btn}
          onClick={getrewardad}
          className="bg-[#D8E91E]   md:w-[100%] w-[50%] rounded-[1.5rem] text-black font-bold py-4 px-4 mr-2"
        >
          Watch Ad
        </button>
      </div>
    </div>
  );
};

export default BannerAd;
