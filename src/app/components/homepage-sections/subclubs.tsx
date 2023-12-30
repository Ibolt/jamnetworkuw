import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "../../../styles/components/homepage-sections/subclubs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

// import Swiper styles
import "swiper/css";

const SubClubs = () => {
  const runningTextRef = useRef<HTMLDivElement>(null);

  const slides = [
    <div className="subclub-card swiper-slide">
      <Image
        src="/media/subclubs/bandwidth_card_cover.jpg"
        alt="Bandwidth Card Background Image"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="subclub-card__text-container">
        <h1
          style={{
            fontSize: "92px",
            fontWeight: 400,
          }}
        >
          BANDWIDTH
        </h1>
        <p
          style={{
            fontSize: "24px",
          }}
        >
          Bandwidth is JamNet's very own radio show on Radio Waterloo's CKMS
          102.7 FM, Mondays at 7PM! We play student submissions, feature themed
          episodes around specific musical topics, and have even hosted some
          interviews! Every show is accompnied by an in-person listening party
          where we come to hang out and listen to the show together!
        </p>
      </div>
    </div>,
    <div className="subclub-card swiper-slide">
      <Image
        src="/media/subclubs/vocal_victories_card_cover.jpg"
        alt="Vocal Victories Card Background Image"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="subclub-card__text-container">
        <h1
          style={{
            fontSize: "92px",
            fontWeight: 400,
          }}
        >
          VOCAL VICTORIES
        </h1>
        <p
          style={{
            fontSize: "24px",
          }}
        >
          Some stuff about learning how to sing and allat.
        </p>
      </div>
    </div>,
    <div className="subclub-card swiper-slide">
      <Image
        src="/media/subclubs/prod_club_card_cover.jpg"
        alt="Production Club Card Background Image"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="subclub-card__text-container">
        <h1
          style={{
            fontSize: "92px",
            fontWeight: 400,
          }}
        >
          PRODUCTION CLUB
        </h1>
        <p
          style={{
            fontSize: "24px",
          }}
        >
          Track roasts and mixing workshops etc.
        </p>
      </div>
    </div>,
  ];

  return (
    <div
      style={{
        height: "100vh",
        overflowX: "clip",
      }}
    >
      <div
        style={{
          height: "inherit",
          // pointerEvents: "none"
        }}
      >
        <div className="subclubs-slider" style={{ transform: "rotate(5deg)" }}>
          <div className="subclubs-slider__moving-content" ref={runningTextRef}>
            <div className="subclubs-slider__running-text">
              Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs •
            </div>
            <div className="subclubs-slider__running-text">
              Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs •
            </div>
          </div>
        </div>
        <div className="subclubs-slider" style={{ transform: "rotate(-5deg)" }}>
          <div className="subclubs-slider__moving-content" ref={runningTextRef}>
            <div
              className="subclubs-slider__running-text"
              style={{ animationDirection: "reverse" }}
            >
              Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs •
            </div>
            <div
              className="subclubs-slider__running-text"
              style={{ animationDirection: "reverse" }}
            >
              Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs •
            </div>
          </div>
        </div>
        <Swiper
          loop
          grabCursor
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={3000}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[Autoplay, EffectCreative]}
          style={{ height: "inherit" }}
        >
          {slides.map((slide) => (
            <SwiperSlide>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SubClubs;
