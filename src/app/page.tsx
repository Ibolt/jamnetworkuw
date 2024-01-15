"use client";

import About from "./components/homepage-sections/about";
import SubClubs from "./components/homepage-sections/subclubs";
import Execs from "./components/homepage-sections/execs";
import Events from "./components/homepage-sections/events";
import Link from "next/link";
import Splash from "./components/homepage-sections/splash";
import CircleNavButtons from "./components/homepage-sections/circleNavButtons";

export default function Home() {
  return (
    <main>
      <Splash />
      <About />
      <Events />
      <SubClubs />
      <Execs />
      <CircleNavButtons />
    </main>
  );
}
