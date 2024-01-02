"use client";

import Spline from "@splinetool/react-spline";

import "../styles/pages/about.css";
import About from "./components/homepage-sections/about";
import SubClubs from "./components/homepage-sections/subclubs";
import Execs from "./components/homepage-sections/execs";

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
            <button>Get In Touch</button>
            <button>Join Our Discord</button>
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
        <Spline
          scene="https://prod.spline.design/Ime2Ryj2HiWaRopu/scene.splinecode"
          style={{
            pointerEvents: "none",
          }}
        />
      </div>
      <About />
      <SubClubs />
      <Execs />
    </main>
  );
}
