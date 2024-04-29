"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../../../styles/homepage-sections/about.css";

const About = ({ animationsEnabled }: { animationsEnabled: boolean }) => {
  function useMovement() {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const [directionX, setDirectionX] = useState(1);
    const [directionY, setDirectionY] = useState(1);

    useEffect(() => {
      if (!animationsEnabled) return;

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
    <div className="about-us-container">
      <div className="about-us-slider">
        <>
          <h1 className="about-us-slider__running-text">
            About us • About us • About us
          </h1>
          <h1 className="about-us-slider__running-text-mobile">About us</h1>
        </>
      </div>
      <div className="about-us-content-container">
        <p className="p--large about-us-content-container__text">
          If you’re thinking,
          <span style={{ fontStyle: "italic", color: "#FCBF49" }}>
            “I do music. Where does one do music around here? How do I run into
            cool people that I can form a band with?”
          </span>
          , then you’re in the right place! Regardless of your level of formal
          training or lack thereof, you can join our community of musicians and
          come along on our collective journey of musical growth.
        </p>
        <div className="about-us-content-container__images">
          <Image
            src="/media/about-us/about_us_1.jpeg"
            alt="Crowd gathered around campfire with some playing guitar."
            width={600}
            height={450}
            id="about-us__image-1"
            className="about-us__image"
            style={{
              borderRadius: "15% 85% 0% 100% / 0% 47% 53% 100%",
              transform: animationsEnabled
                ? `translate(${movement1!.translateX}px, ${
                    movement1!.translateY
                  }px)`
                : "none",
            }}
          />
          <Image
            src="/media/about-us/about_us_2.jpeg"
            alt="Person sat on cajon playing acoustic guitar and singing to an audience."
            width={600}
            height={400}
            id="about-us__image-2"
            className="about-us__image"
            style={{
              borderRadius: "0% 100% 86% 14% / 0% 30% 70% 100%",
              transform: animationsEnabled
                ? `translate(${movement2!.translateX}px, ${
                    movement2!.translateY
                  }px)`
                : "none",
            }}
          />

          <Image
            src="/media/about-us/about_us_3.jpeg"
            alt="Person standing playing electric guitar."
            width={400}
            height={600}
            id="about-us__image-3"
            className="about-us__image"
            style={{
              borderRadius: "0% 100% 0% 100% / 28% 58% 42% 72%",
              transform: animationsEnabled
                ? `translate(${movement3!.translateX}px, ${
                    movement3!.translateY
                  }px)`
                : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
