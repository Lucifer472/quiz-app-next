// next imports
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

// custom imports
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";

// css import
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DG Quiz",
  description:
    "Play online quiz contest and check your GK while contest also win coins. Online GK quiz questions answer are from different categories like histroy, cricket and politics, choose your favorite quiz category",
  keywords: "Education, Online Quiz,  Play Quiz, Win Coin, GK, Question Answer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const CheckHomepage = dynamic(
    () => import("@/app/(extra)/_components/CheckHomepage"),
    {
      ssr: false,
    }
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ToastContainer />
          <main className="max-w-screen-xss mx-auto">{children}</main>
          <CheckHomepage />
        </ThemeProvider>
      </body>
    </html>
  );
}
