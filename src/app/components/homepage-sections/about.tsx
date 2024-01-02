import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "../../../styles/components/homepage-sections/about.css";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const runningTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      console.log("handle scroll from about");
      const scrollPercentage =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollPosition(scrollPercentage * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (runningTextRef.current) {
      runningTextRef.current.style.transform = `translate3d(-${
        scrollPosition / 2
      }vw, 0, 0)`;
    }
  }, [scrollPosition]);

  function useMovement() {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [directionX, setDirectionX] = useState(1);
    const [directionY, setDirectionY] = useState(1);

    useEffect(() => {
      const intervalId = setInterval(() => {
        let incrementX = Math.random() * (1 - 0.2) + 0.2;
        let incrementY = Math.random() * (1 - 0.2) + 0.2;

        if (translateX < -40 || translateX > 40) incrementX *= 0.5;
        if (translateY < -20 || translateY > 20) incrementY *= 0.5;

        let newTranslateX = translateX + incrementX * directionX;
        let newTranslateY = translateY + incrementY * directionY;

        if (newTranslateX < -50 || newTranslateX > 50) {
          setDirectionX(-directionX);
          newTranslateX = translateX - incrementX * directionX;
        }
        if (newTranslateY < -30 || newTranslateY > 30) {
          setDirectionY(-directionY);
          newTranslateY = translateY - incrementY * directionY;
        }

        setTranslateX(newTranslateX);
        setTranslateY(newTranslateY);
      }, 50);

      return () => clearInterval(intervalId);
    }, [translateX, translateY, directionX, directionY]);

    return { translateX, translateY };
  }

  const movement1 = useMovement();
  const movement2 = useMovement();
  const movement3 = useMovement();

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <div className="about-us-slider">
        <div className="about-us-slider__moving-content" ref={runningTextRef}>
          <h1
            className="about-us-slider__running-text"
            style={{ fontSize: "124px" }}
          >
            • About us • About us • About us • About us • About us • About us
          </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "8em 0em 8em 8em",
          gap: "12em",
        }}
      >
        <p style={{ fontSize: "32px", width: "50%" }}>
          If you’re thinking,
          <span style={{ fontStyle: "italic", color: "#FFD449" }}>
            “I do music. Where does one do music around here? How do I run into
            cool people that I can form a band with?”
          </span>
          , then you’re in the right place! Regardless of your level of formal
          training or lack thereof, you can join our community of musicians and
          come along on our collective journey of musical growth.
        </p>
        <div style={{ position: "relative" }}>
          <Image
            src="/media/about-us/about_us_1.jpeg"
            alt="Crowd gathered around campfire with some playing guitar."
            width={600}
            height={450}
            className="about-us__image"
            style={{
              borderRadius: "15% 85% 0% 100% / 0% 47% 53% 100%",
              bottom: "22px",
              left: "-40px",
              transform: `translate(${movement1.translateX}px, ${movement1.translateY}px)`,
            }}
          />
          <Image
            src="/media/about-us/about_us_2.jpeg"
            alt="Person sat on cajon playing acoustic guitar and singing to an audience."
            width={600}
            height={400}
            className="about-us__image"
            style={{
              borderRadius: "0% 100% 86% 14% / 0% 30% 70% 100%",
              left: "191px",
              top: "167px",
              transform: `translate(${movement2.translateX}px, ${movement2.translateY}px)`,
            }}
          />
          <Image
            src="/media/about-us/about_us_3.jpeg"
            alt="Person standing playing electric guitar."
            width={400}
            height={600}
            className="about-us__image"
            style={{
              borderRadius: "0% 100% 0% 100% / 28% 58% 42% 72%",
              left: "-150px",
              top: "-21px",
              transform: `translate(${movement3.translateX}px, ${movement3.translateY}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
