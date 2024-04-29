"use client";
import Image from "next/image";
import "../../../styles/homepage-sections/execs.css";
import { EXECS_DATA } from "@/app/content/execs";

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
      <div key={name} className="exec-bubble">
        <Image
          src={src}
          alt={`Image of ${name}: ${role} of JamNet`}
          className="exec-bubble"
          sizes="200px"
          fill
        />
      </div>
      <p className="p--large" style={{ fontWeight: 300, textAlign: "center" }}>
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
      className="background-bubble"
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

const Execs = ({ animationsEnabled }: { animationsEnabled: boolean }) => {
  const execBubbles = EXECS_DATA.map((exec) => (
    <ImageBubble
      key={`bubble1-${exec.name}`}
      src={exec.src}
      name={exec.name}
      role={exec.role}
    />
  ));

  const execBubblesCopy = animationsEnabled
    ? EXECS_DATA.map((exec) => (
        <ImageBubble
          key={`bubble2-${exec.name}`}
          src={exec.src}
          name={exec.name}
          role={exec.role}
        />
      ))
    : [];

  return (
    <div
      style={{
        height: animationsEnabled ? "100vh" : "max-content",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "inherit",
          justifyContent: "center",
          transform: "translate(0px 0px)",
        }}
      >
        {backgroundBubbles}
        <div className="execs-slider">
          <div
            className="execs-slider__moving-content"
            data-animations-enabled={animationsEnabled}
          >
            <div
              className="execs-slider__running-bubbles"
              data-animations-enabled={animationsEnabled}
            >
              {execBubbles}
            </div>
            {animationsEnabled && (
              <div
                className="execs-slider__running-bubbles"
                data-animations-enabled={animationsEnabled}
              >
                {execBubblesCopy}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execs;
