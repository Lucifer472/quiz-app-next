import Script from "next/script";

const claim = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" />
      <Script id="show-ads">
        {`window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
            googletag.defineSlot('/22989534981/MB_Rewarded', [1, 1], 'div-gpt-ad-1703845477928-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });`}
      </Script>
      <Script src="/ad.js" strategy="lazyOnload" />
      {children}
    </>
  );
};

export default claim;
