import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";

import NavBar from "./components/navBar";
import { NavLinks, SocialLinks } from "./components/navLinks";

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
        <footer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "black",
              padding: "4em",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "2em",
                marginBottom: "2em",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "20px", marginBottom: "0.25em" }}>
                  Site Map
                </p>
                {NavLinks}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p style={{ fontSize: "20px", marginBottom: "0.25em" }}>
                  Socials
                </p>
                {SocialLinks([
                  <div>Instagram</div>,
                  <div>YouTube</div>,
                  <div>SoundCloud</div>,
                  <div>Discord</div>,
                ])}
              </div>
              <p>jamnetworkuw@gmail.com</p>
            </div>
            <p>&copy; {new Date().getFullYear()} JamNetwork UW</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
