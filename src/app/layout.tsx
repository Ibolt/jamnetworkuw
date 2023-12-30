import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faSoundcloud,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";

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

  const socialMediaLogos = [
    <FontAwesomeIcon icon={faInstagram} width={25} height={25} key="JN_IG" />,
    <FontAwesomeIcon icon={faYoutube} width={25} height={25} key="JN_YT" />,
    <FontAwesomeIcon
      icon={faSoundcloud}
      width={25}
      height={25}
      key="JN_SOUND"
    />,
    <FontAwesomeIcon icon={faDiscord} width={25} height={25} key="JN_DISC" />,
  ];

  return (
    <html lang="en">
      <body className={jost.className}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
          }}
        >
          {logo}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
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
            {socialMediaLogos}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
