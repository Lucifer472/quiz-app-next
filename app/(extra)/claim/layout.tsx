import Script from "next/script";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Script src="/claim-ad.js" strategy="beforeInteractive"></Script>
      {children}
    </>
  );
};

export default layout;
