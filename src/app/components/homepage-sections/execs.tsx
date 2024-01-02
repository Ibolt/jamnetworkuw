import Image from "next/image";
import "../../../styles/components/homepage-sections/execs.css";

const Execs = () => {
  const imageBubble = (src: string, name: string, role: string) => {
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
        <p style={{ fontSize: "32px" }}>{name}</p>
        <div
          style={{
            position: "relative",
            width: "400px",
            height: "400px",
          }}
          key={name}
          className="exec-bubble"
        >
          <Image
            src={src}
            alt={`Image of ${name}: ${role} of JamNet`}
            className="exec-bubble"
            width={400}
            height={400}
          />
        </div>
        <p style={{ fontSize: "32px", fontWeight: 300 }}>{role}</p>
      </div>
    );
  };

  const colors = ["#736afd", "#698eec", "#5fb1dc", "#54d5cb", "#4af8ba"];

  const backgroundBubbles = Array.from({
    length: window.innerWidth / 200,
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

  const bubbles = [
    imageBubble("/media/execs/will.jpg", "Will Bernier", "President"),
    imageBubble("/media/execs/eric.jpg", "Eric Folino", "Treasurer"),
    imageBubble("/media/execs/imaan.jpg", "Imaan Gill", "Secretary"),
    imageBubble(
      "/media/execs/alex.jpg",
      "Alex Bouliane",
      "Social Media Manager"
    ),
    imageBubble(
      "/media/execs/melina.jpg",
      "Melina Liu",
      "Social Media Manager"
    ),
    imageBubble(
      "/media/execs/charlie.jpg",
      "Charlie Dickson",
      "Assistant Events Leader"
    ),
    imageBubble(
      "/media/execs/bastian.jpg",
      "Bastian Perez",
      "Equipment Team Director"
    ),
    imageBubble(
      "/media/execs/emma.jpg",
      "Emma Mihajlovic",
      "Education Director"
    ),
  ];

  return (
    <div
      style={{
        height: "100vh",
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
          <div className="execs-slider__moving-content">
            <div className="execs-slider__running-bubbles">{bubbles}</div>
            <div className="execs-slider__running-bubbles">{bubbles}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execs;
