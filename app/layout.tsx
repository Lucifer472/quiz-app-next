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
  title: "Quiz App",
  description: "Generated by create next app",
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
          <main className="max-w-screen-xss mx-auto px-2 xxs:px-1">
            {children}
          </main>
          <CheckHomepage />
        </ThemeProvider>
      </body>
    </html>
  );
}
