import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";

import NavBar from "./components/navBar";
import Footer from "./components/footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JamNetwork UW",
  description:
    "A music club at the University of Waterloo open to all styles and levels of musical experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
