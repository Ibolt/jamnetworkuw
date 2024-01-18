import Image from "next/image";
import "../../../styles/homepage-sections/execs.css";

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

const Execs = () => {
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

  const execBubblesCopy = execsData.map((exec) => (
    <ImageBubble
      key={`bubble2-${exec.role}`}
      src={exec.src}
      name={exec.name}
      role={exec.role}
    />
  ));

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
            <div className="execs-slider__running-bubbles">{execBubbles}</div>
            <div className="execs-slider__running-bubbles">
              {execBubblesCopy}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execs;
