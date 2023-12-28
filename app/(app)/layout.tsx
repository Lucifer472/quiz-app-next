import dynamic from "next/dynamic";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const Navbar = dynamic(() => import("./_componets/Navbar"), {
    ssr: false,
  });
  const Navigation = dynamic(() => import("./_componets/Navigation"), {
    ssr: false,
  });
  return (
    <>
      <Navbar />
      {children}
      <Navigation />
    </>
  );
}
