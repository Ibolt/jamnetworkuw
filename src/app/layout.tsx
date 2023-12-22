import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import { Jost } from "next/font/google";
import Link from "next/link";

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
  const logo = (
    <Image
      src="/media/JN-minimal-logo.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />
  );

  return (
    <html lang="en">
      <body className={jost.className}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "16px",
          }}
        >
          {logo}
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="" className="link">
              About
            </Link>
            <Link href="" className="link">
              Sign Ups
            </Link>
            <Link href="" className="link">
              Event Calendar
            </Link>
            <Link href="" className="link">
              Gallery
            </Link>
            <Link href="" className="link">
              Documents
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
