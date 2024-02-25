"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Image from "next/image";
import "../../../styles/homepage-sections/execs.css";
import { useRef } from "react";

const ImageBubble = ({
  src,
  name,
  role,
}: {
  src: string;
  name: string;
  role: string;
}) => {
  return (
    <div
      key={name}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <p className="p--large">{name}</p>
      <div style={{}} key={name} className="exec-bubble">
        <Image
          src={src}
          alt={`Image of ${name}: ${role} of JamNet`}
          className="exec-bubble"
          fill
        />
      </div>
      <p className="p--large" style={{ fontWeight: 300 }}>
        {role}
      </p>
    </div>
  );
};

const colors = ["#736afd", "#698eec", "#5fb1dc", "#54d5cb", "#4af8ba"];
const backgroundBubbles = Array.from({
  length: 10,
}).map((_, i) => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  const animationDuration = Math.random() * 10 + 10; // Random duration between 10 and 20 seconds
  return (
    <div
      key={i}
      style={{
        position: "absolute",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        zIndex: 0,
        backgroundColor: colors[colorIndex],
        filter: "blur(25px)",
        left: i * 200,
        animation: `bubble-rise ${animationDuration}s linear infinite`,
      }}
    />
  );
});

const Execs = () => {
  const execBubblesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (execBubblesRef.current === null) return;
    gsap.registerPlugin(ScrollTrigger);

    const getScrollAmount = () =>
      -(execBubblesRef.current!.scrollWidth - window.innerWidth);

    const tween = gsap.to(execBubblesRef.current, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: "#exec-bubbles-wrapper",
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    });
  });

  const execsData = [
    { src: "/media/execs/will.jpg", name: "Will Bernier", role: "President" },
    { src: "/media/execs/eric.jpg", name: "Eric Folino", role: "Treasurer" },
    { src: "/media/execs/imaan.jpg", name: "Imaan Gill", role: "Secretary" },
    {
      src: "/media/execs/alex.jpg",
      name: "Alex Bouliane",
      role: "Social Media Manager",
    },
    {
      src: "/media/execs/melina.jpg",
      name: "Melina Liu",
      role: "Social Media Manager",
    },
    {
      src: "/media/execs/charlie.jpg",
      name: "Charlie Dickson",
      role: "Assistant Events Leader",
    },
    {
      src: "/media/execs/bastian.jpg",
      name: "Bastian Perez",
      role: "Equipment Team Director",
    },
    {
      src: "/media/execs/emma.jpg",
      name: "Emma Mihajlovic",
      role: "Education Director",
    },
  ];

  const execBubbles = execsData.map((exec) => (
    <ImageBubble
      key={`bubble1-${exec.role}`}
      src={exec.src}
      name={exec.name}
      role={exec.role}
    />
  ));

  return (
    <div
      style={{
        height: "fit-content",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "black",
      }}
      id="execs-section-container"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          height: "65vh",
        }}
      >
        <h1 style={{ fontSize: "10vw" }}>Meet The Execs</h1>
      </div>
      <div id="exec-bubbles-wrapper">
        <div ref={execBubblesRef} className="exec-bubbles">
          {execBubbles}
        </div>
      </div>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "inherit",
          justifyContent: "center",
        }}
      >
        {backgroundBubbles}
      </div> */}
    </div>
  );
};

export default Execs;
