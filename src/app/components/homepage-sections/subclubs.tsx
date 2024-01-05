import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import "swiper/css";
import "../../../styles/components/homepage-sections/subclubs.css";

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
        end: "+=" + -2 * getScrollAmount(),
        pin: true,
        scrub: 0.5,
        markers: true,
      },
    });
  });

  const slideKeys = ["bandwidth", "vocal_victories", "prod_club"];
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
          Some stuff about learning how to sing and so on.
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
      ref={sectionContainerRef}
      style={{
        height: "100vh",
        overflowX: "clip",
        position: "relative",
      }}
    >
      <div
        ref={execsTransitionWrapperRef}
        style={{
          height: "100vh",
          width: "max-content",
          backgroundColor: "black",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          transform: "translate3d(100%, 35px, 0)",
        }}
      >
        <div ref={execsTransitionTextRef} style={{ whiteSpace: "nowrap" }}>
          <h1 style={{ fontSize: "23em" }}>Meet The Execs</h1>
        </div>
      </div>
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
          style={{ height: "inherit" }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slideKeys[i]}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SubClubs;
