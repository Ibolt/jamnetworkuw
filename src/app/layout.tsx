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
import {
  DISCORD_LINK,
  IG_LINK,
  SOUNDCLOUD_LINK,
  YT_LINK,
} from "./components/constants";

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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <Link href="/">
            <Image
              src="/media/JN-minimal-logo.png"
              className="clickable"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Link>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Link href="/" className="link">
              About
            </Link>
            <Link href="/forms" className="link">
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
            <a
              href={IG_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="icon-link"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="clickable"
                width={25}
                height={25}
                key="JN_IG"
              />
            </a>

            <a
              href={YT_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="icon-link"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                width={25}
                height={25}
                key="JN_YT"
              />
            </a>

            <a
              href={SOUNDCLOUD_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="icon-link"
            >
              <FontAwesomeIcon
                icon={faSoundcloud}
                className="clickable"
                width={25}
                height={25}
                key="JN_SOUND"
              />
            </a>

            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="icon-link"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                className="clickable"
                width={25}
                height={25}
                key="JN_DISC"
              />
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
