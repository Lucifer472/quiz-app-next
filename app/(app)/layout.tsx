import dynamic from "next/dynamic";
import Script from "next/script";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const Navbar = dynamic(() => import("./_componets/Navbar"), {
    ssr: false,
  });
  const Navigation = dynamic(() => import("./_componets/Navigation"), {
    ssr: false,
  });
  return (
    <>
      <Script
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        async
        strategy="beforeInteractive"
      />
      <Script src="/reward-ad.js" strategy="afterInteractive"></Script>
      <Navbar />
      {children}
      <Navigation />
    </>
  );
}
