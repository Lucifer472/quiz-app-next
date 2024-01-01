"use client";
import Logo from "@/components/logo/Logo";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [x, setX] = useState(true);
  const [coins, setCoins] = useState(sessionStorage.getItem("amount"));

  const pathname = usePathname();

  useEffect(() => {
    setCoins(sessionStorage.getItem("amount"));
  }, [pathname]);

  const getrewardad = () => {
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
        if (x) {
          const amt = parseInt(coins as string);
          if (!isNaN(amt)) {
            const numbers = amt + 100;
            sessionStorage.setItem("amount", numbers.toString());
            setCoins(sessionStorage.getItem("amount"));
            toast("100 Coins Added successfully");
          }
          setX(false);
        }
      });
      googletag.pubads().addEventListener("rewardedSlotClosed", function () {
        googletag.destroySlots([rewardedSlot]);
      });
      googletag.display(rewardedSlot);
    });
  };

  return (
    <nav className="h-16 flex items-center justify-between w-full">
      <Link href={"/home"}>
        <Logo />
      </Link>
      <div className="w-full flex items-center justify-end">
        {x && (
          <div
            className="flex items-center gap-1 text-center px-2 cursor-pointer"
            id="claim-rew-time"
            onClick={getrewardad}
          >
            <Image
              src={"/gift.gif"}
              alt="Gift"
              width={25}
              height={25}
              className="object-contain"
            />
            <span className="text-white text-sm max-w-[60px] text-center ">
              Daily Rewards
            </span>
          </div>
        )}
        <div className="flex gap-1 items-center bg-secondary px-4 py-2 mx-2 rounded-full">
          <Image src="/coin.svg" alt="Coins" width={20} height={10} />
          <div className="flex gap-1 text-xs">
            <span className="font-bold text-[12px] text-white">{coins}</span>
            <div className="text-[10px] text-text">Coins</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
