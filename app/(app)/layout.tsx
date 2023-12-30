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
      <Script src="/reward-ad.js" strategy="beforeInteractive"></Script>
      <Navbar />
      {children}
      <Navigation />
    </>
  );
}
