"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

import "swiper/css";
import "../../../styles/homepage-sections/subclubs.css";

const SubClubSlide = ({
  imgPath,
  imgAltText,
  title,
  desc,
}: {
  imgPath: string;
  imgAltText: string;
  title: string;
  desc: string;
}) => {
  return (
    <SwiperSlide>
      <div className="subclub-card swiper-slide">
        <Image
          src={imgPath}
          alt={imgAltText}
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <div className="subclub-card__text-container">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </SwiperSlide>
  );
};

const SubClubs = () => {
  const slideKeys = [
    "bandwidth",
    "vocal_victories",
    "prod_club",
    "theory_club",
  ];
  const slides = [
    <SubClubSlide
      key={slideKeys[0]}
      imgPath="/media/subclubs/bandwidth_card_cover.jpg"
      imgAltText="Bandwidth Card Background Image"
      title="BANDWIDTH"
      desc="Bandwidth is JamNet's very own radio show on Radio Waterloo CKMS 102.7 FM, Mondays at 7PM! We play student submissions, feature themed episodes around specific musical topics, and have even hosted some interviews! Every show is accompnied by an in-person listening party where we come to hang out and listen to the show together!"
    />,
    <SubClubSlide
      key={slideKeys[1]}
      imgPath="/media/subclubs/vocal_victories_card_cover.jpg"
      imgAltText="Vocal Victories Card Background Image"
      title="VOCAL VICTORIES"
      desc="Vocal Victories emodies the educational, fun and enthusitic spirit of JamNetwork, focusing on vocals and singing. Through these sessions, we hope to improve members abilities and confidence to sing in all different sorts of environments, having fun along the way. We do vocal drills, practice songs, and perform in a very special tunnel on campus. Only victories here!"
    />,
    <SubClubSlide
      key={slideKeys[2]}
      imgPath="/media/subclubs/prod_club_card_cover.jpg"
      imgAltText="Production Club Card Background Image"
      title="PRODUCTION CLUB"
      desc="Production club is a bunch of music-loving people who want to make tunes and share them! Everyone is welcome, from complete beginners to more advanced members! We usually do track roasts, where we share songs with each other to get constructive feedback, as well as workshops on specific aspects of producing/mixing. No fancy stuff, just a bunch of DAWs, a pair of monitors, and a room full of a good vibes."
    />,
    <SubClubSlide
      key={slideKeys[3]}
      imgPath="/media/subclubs/theory_club_card_cover.jpg"
      imgAltText="Theory and Composition Club Card Background Image"
      title="THEORY AND COMPOSITION CLUB"
      desc="Every Wednesday at 6pm in MC 4060, we delve into a variety of topics relating to music theory and composition. Each week has a theme ranging from basic harmony, to composing for brass, to song analysis, to showcasing original compositions."
    />,
  ];

  return (
    <div
      style={{
        height: "100vh",
        overflowX: "clip",
        position: "relative",
      }}
    >
      <div style={{ height: "inherit" }}>
        <div className="subclubs-slider" style={{ transform: "rotate(5deg)" }}>
          <div className="subclubs-slider__moving-content">
            <div className="subclubs-slider__running-text">
              Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs •
            </div>
            <div className="subclubs-slider__running-text">
              Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs • Sub Clubs •
            </div>
          </div>
        </div>
        <div className="subclubs-slider" style={{ transform: "rotate(-5deg)" }}>
          <div className="subclubs-slider__moving-content">
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
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={2000}
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
          {slides.map((slide, i) => (
            <SwiperSlide key={`swiper-${slideKeys[i]}`}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SubClubs;
