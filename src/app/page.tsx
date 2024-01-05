"use client";

import "../styles/pages/homePage.css";
import About from "./components/homepage-sections/about";
import SubClubs from "./components/homepage-sections/subclubs";
import Execs from "./components/homepage-sections/execs";
import Events from "./components/homepage-sections/events";
import { DISCORD_LINK, MAIL_LINK } from "./components/constants";
import Logo3DModel from "./components/logo3DModel";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
          padding: "4em",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <p style={{ fontSize: "24px", fontWeight: 300 }}>Welcome To</p>
            <h1 className={"title"}>JamNetwork UW</h1>
            <p style={{ fontSize: "28px" }}>
              A music club at the University of Waterloo open to musicians of
              all styles, genres, and levels of experience!
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <a
              className="link-button"
              href={MAIL_LINK}
              rel="noreferrer noopener"
            >
              Get In Touch
            </a>
            <a
              className="link-button"
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer noopener"
            >
              Join Our Discord
            </a>
          </div>
          {/* {isArrowVisible && (
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "2em",
                cursor: "pointer",
              }}
              onClick={scrollToAbout}
            >
              &#8595;
            </div>
          )} */}
        </div>
        <Logo3DModel />
      </div>
      <About />
      <Events />
      <SubClubs />
      <Execs />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          alignItems: "center",
          gap: "4em",
          height: "70vh",
          padding: "4em",
          overflow: "hidden",
          backgroundColor: "black",
        }}
      >
        <div
          className="circle-link"
          style={{
            backgroundColor: "#4AF8BA",
            color: "black",
          }}
        >
          <span>
            <Link href="/forms" className="link-text">
              Sign Ups
            </Link>
          </span>
        </div>
        <div className="circle-link" style={{ backgroundColor: "#736afd" }}>
          <span>
            <Link href="/docs" className="link-text">
              Docs
            </Link>
          </span>
        </div>
        <div
          className="circle-link"
          style={{ backgroundColor: "#FFD449", color: "black" }}
        >
          <span>
            <Link href="/newsletter" className="link-text">
              Newsletter
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}
