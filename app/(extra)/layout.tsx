import { facts } from "@/constant";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DG Quiz",
  description: facts,
  keywords: "Education, Online Quiz,  Play Quiz, Win Coin, GK, Question Answer",
};

const StartLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default StartLayout;
