"use client";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import "swiper/css";
import "../../../styles/homepage-sections/subclubs.css";

const SubClubs = () => {
  const sectionContainerRef = useRef<HTMLDivElement>(null);
  const execsTransitionWrapperRef = useRef<HTMLDivElement>(null);
  const execsTransitionTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      execsTransitionTextRef.current === null ||
      execsTransitionWrapperRef.current === null ||
      sectionContainerRef.current === null
    )
      return;
    gsap.registerPlugin(ScrollTrigger);

    const getScrollAmount = () => {
      return (
        -1 * (execsTransitionTextRef.current!.offsetWidth - window.innerWidth)
      );
    };

    gsap.to(execsTransitionWrapperRef.current, {
      x: getScrollAmount,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionContainerRef.current,
        start: "top+=35 top",
        end: "+=" + -1 * getScrollAmount(),
        pin: true,
        scrub: 0.5,
        markers: true,
      },
      onUpdate: () => {
        console.log("x now: ");
      },
    });
  });

  const slideKeys = ["bandwidth", "vocal_victories", "prod_club"];
  const slides = [
    <div key={slideKeys[0]} className="subclub-card swiper-slide">
      <Image
        src="/media/subclubs/bandwidth_card_cover.jpg"
        alt="Bandwidth Card Background Image"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="subclub-card__text-container">
        <h2>BANDWIDTH</h2>
        <p>
          Bandwidth is JamNet&apos;s very own radio show on Radio Waterloo CKMS
          102.7 FM, Mondays at 7PM! We play student submissions, feature themed
          episodes around specific musical topics, and have even hosted some
          interviews! Every show is accompnied by an in-person listening party
          where we come to hang out and listen to the show together!
        </p>
      </div>
    </div>,
    <div key={slideKeys[1]} className="subclub-card swiper-slide">
      <Image
        src="/media/subclubs/vocal_victories_card_cover.jpg"
        alt="Vocal Victories Card Background Image"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="subclub-card__text-container">
        <h2>VOCAL VICTORIES</h2>
        <p>
          Vocal Victories emodies the educational, fun and enthusitic spirit of
          JamNetwork, focusing on vocals and singing. Through these sessions, we
          hope to improve members abilities and confidence to sing in all
          different sorts of environments, having fun along the way. We do vocal
          drills, practice songs, and perform in a very special tunnel on
          campus. Only victories here!
        </p>
      </div>
    </div>,
    <div key={slideKeys[2]} className="subclub-card swiper-slide">
      <Image
        src="/media/subclubs/prod_club_card_cover.jpg"
        alt="Production Club Card Background Image"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="subclub-card__text-container">
        <h2 className="subheading">PRODUCTION CLUB</h2>
        <p>
          Production club is a bunch of music-loving people who want to make
          tunes and share them! Everyone is welcome, from complete beginners to
          more advanced members! We usually do track roasts, where we share
          songs with each other to get constructive feedback, as well as
          workshops on specific aspects of producing/mixing. No fancy stuff,
          just a bunch of DAWs, a pair of monitors, and a room full of a good
          vibes.
        </p>
      </div>
    </div>,
  ];

  return (
    <div
      ref={sectionContainerRef}
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
            delay: 2000,
            disableOnInteraction: true,
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
          style={{ height: "inherit", paddingBottom: "2em" }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slideKeys[i]}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        ref={execsTransitionWrapperRef}
        style={{
          height: "100vh",
          width: "max-content",
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          transform: "translate3d(100%, 35px, 0)",
        }}
      >
        <div ref={execsTransitionTextRef} style={{ whiteSpace: "nowrap" }}>
          <h1 className="execs-transition-text">Meet The Execs</h1>
        </div>
      </div>
    </div>
  );
};

export default SubClubs;
