import Script from "next/script";

const AdTop = () => {
  return (
    <>
      <div
        id="div-gpt-ad-1700655338779-0"
        style={{ minWidth: "336px", minHeight: "280px;" }}
      ></div>
      <Script strategy="afterInteractive" id="Top-Ad">
        {`googletag.cmd.push(function() { googletag.display('div-gpt-ad-1700655338779-0'); });`}
      </Script>
    </>
  );
};

export default AdTop;
