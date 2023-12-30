setTimeout(() => {
  const getad = document.querySelector("#claim-rew-time");
  getad.addEventListener("click", function (e) {
    e.preventDefault();
    getrewardad();
  });
  const getrewardad = () => {
    googletag = window.googletag || { cmd: [] };
    googletag.cmd.push(() => {
      const rewardedSlot = googletag
        .defineOutOfPageSlot(
          "22989534981/MB_Rewarded",
          googletag.enums.OutOfPageFormat.REWARDED
        )
        .addService(googletag.pubads());
      googletag.enableServices();
      googletag.pubads().addEventListener("rewardedSlotReady", function (evt) {
        evt.makeRewardedVisible();
      });
      googletag
        .pubads()
        .addEventListener("rewardedSlotGranted", function (evt) {
          let i = true;
          if (i) {
            const amt = parseInt(sessionStorage.getItem("amount"));
            if (!isNaN(amt)) {
              const numbers = amt + 100;
              sessionStorage.setItem("amount", numbers.toString());
              console.log(numbers);
            }
            i = false;
          }
        });
      googletag.pubads().addEventListener("rewardedSlotClosed", function (evt) {
        googletag.destroySlots([rewardedSlot]);
      });
      googletag.display(rewardedSlot);
    });
  };
}, 1000);
