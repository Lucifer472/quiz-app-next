setTimeout(() => {
  const getad = document.querySelectorAll(".claim-first-time");
  console.log("selected ancher tags :", getad);
  getad.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
      getrewardad();
    });
  });
  const getrewardad = () => {
    console.log("Loading Ads");
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
          const amt = parseInt(localStorage.getItem("amount"));
          if (isNaN(amt)) {
            const numbers = amt + 100;
            localStorage.setItem("amount", numbers.toString());
          }
          window.location.href = "/home";
        });
      googletag.pubads().addEventListener("rewardedSlotClosed", function (evt) {
        googletag.destroySlots([rewardedSlot]);
      });
      googletag.display(rewardedSlot);
    });
  };
}, 1000);
