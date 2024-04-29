"use client";
import { useEffect, useState } from "react";
import About from "./homepage-sections/about";
import CircleNavButtons from "./homepage-sections/circleNavButtons";
import Events from "./homepage-sections/events";
import Execs from "./homepage-sections/execs";
import Splash from "./homepage-sections/splash";
import SubClubs from "./homepage-sections/subclubs";

const ContextWrapper = () => {
  function useFPSLogger() {
    const [fps, setFPS] = useState(0);

    const [isAnimationEnabled, setIsAnimationEnabled] = useState(true);

    useEffect(() => {
      let fps = 0;
      let lastCalledTime = performance.now();
      let framesCount = 0;
      let requestId: any;

      const calculateFPS = () => {
        framesCount++;
        const delta = (performance.now() - lastCalledTime) / 1000;
        if (delta > 1) {
          fps = Math.round(framesCount / delta);
          console.log("FPS:", fps);
          setIsAnimationEnabled(fps > 30);
          framesCount = 0;
          lastCalledTime = performance.now();
        }
        requestId = requestAnimationFrame(calculateFPS);
      };

      requestId = requestAnimationFrame(calculateFPS);

      // Cancel the animation frame after 1 second
      const timeoutId = setTimeout(() => {
        cancelAnimationFrame(requestId);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
        cancelAnimationFrame(requestId);
      };
    }, []);
    return isAnimationEnabled;
  }

  const animationsEnabled = useFPSLogger();

  useEffect(() => {
    console.log(animationsEnabled);
  }, [animationsEnabled]);

  return (
    <main>
      <Splash animationsEnabled={animationsEnabled} />
      <About animationsEnabled={animationsEnabled} />
      <Events animationsEnabled={animationsEnabled} />
      <SubClubs animationsEnabled={animationsEnabled} />
      <Execs animationsEnabled={animationsEnabled} />
      <CircleNavButtons animationsEnabled={animationsEnabled} />
    </main>
  );
};

export default ContextWrapper;
