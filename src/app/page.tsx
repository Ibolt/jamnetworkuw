"use client";

import Spline, { SPEObject } from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

import "../styles/pages/about.css";
import { useRef, useEffect, useState } from "react";
import About from "./components/homepage-sections/about";
import SubClubs from "./components/homepage-sections/subclubs";

export default function Home() {
  // 3D
  // const [splineLoaded, setSplineLoaded] = useState(false);
  // const splineRef = useRef<SPEObject>();
  // const onSplineLoad = (spline: Application) => {
  //   const obj = spline.findObjectById("25a0d3f2-276b-4711-a056-17b358e6f88e");
  //   splineRef.current = obj;
  //   setTimeout(() => {
  //     setSplineLoaded(true);
  //   }, 0);
  // };

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   console.log("in here", splineRef.current);
  //   if (splineRef.current) {
  //     // Initial Setup
  //     gsap.set(splineRef.current.scale, { x: 1, y: 1, z: 1 });
  //     gsap.set(splineRef.current.position, { x: 250, y: 200 });

  //     // Scroll Animation
  //     console.log(document.readyState);
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: "#about-section",
  //           start: "top center",
  //           end: "bottom bottom",
  //           scrub: true,
  //         },
  //       })
  //       // .to(
  //       //   splineRef.current.rotation,
  //       //   { x: -Math.PI / 14, z: Math.PI / 36 },
  //       //   0
  //       // )
  //       .to(splineRef.current.position, { x: -800, y: -20 }, 0);
  //   }
  // }, [splineLoaded]);

  // Scrolling Utils
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const subheadingContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsArrowVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      console.log("in scroll to about");
      setIsArrowVisible(false);
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if (!subheadingContainerRef.current) return;
          // Animate background fill and text fade in when visible
          if (entry.isIntersecting) {
            subheadingContainerRef.current.style.backgroundPosition = "right";
            const h1Element =
              subheadingContainerRef.current.querySelector("h1");
            const pElement = subheadingContainerRef.current.querySelector("p");
            if (h1Element && pElement) {
              h1Element.style.opacity = "1";
              pElement.style.opacity = "1";
            }
          } else {
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Content
  const logo = (
    <Image
      src="/media/JN-minimal-logo.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );

  const eventSection = (title: string, desc: string): JSX.Element => {
    return (
      <div className="event-section">
        <h3 style={{ fontWeight: 300, fontSize: "2.5em" }}>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  };

  const subClubCard = (
    title: string,
    desc: string,
    imgPath: string
  ): JSX.Element => {
    return (
      <div className="event-section">
        <h3 style={{ fontWeight: 300, fontSize: "2.5em" }}>{title}</h3>
        {/* <div
          style={{
            width: "100%",
            height: "60%",
            position: "relative",
            flexShrink: 0,
          }}
        > */}
        {/* <Image
          src={imgPath}
          // sizes="100vw"
          // layout="fill"
          height={350}
          width={250}
          objectFit="contain"
          alt="CKMS 102.7 Radio Studio"
        /> */}
        {/* </div> */}

        <p>{desc}</p>
      </div>
    );
  };

  return (
    <main>
      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
          padding: "4em",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <p style={{ fontSize: "24px", fontWeight: 300 }}>Welcome To</p>
            <h1 className={"title"}>JamNetwork UW</h1>
            <p style={{ fontSize: "28px" }}>
              A music club at the University of Waterloo open to musicians of
              all styles, genres, and levels of experience!
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <button>Get In Touch</button>
            <button>Join Our Discord</button>
          </div>
          {/* {isArrowVisible && (
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "2em",
                cursor: "pointer",
              }}
              onClick={scrollToAbout}
            >
              &#8595;
            </div>
          )} */}
        </div>
        <Spline
          scene="https://prod.spline.design/Ime2Ryj2HiWaRopu/scene.splinecode"
          style={{
            pointerEvents: "none",
          }}
        />
      </div>
      {/* <div id="about-section" ref={aboutRef}>
        <div ref={subheadingContainerRef} className="about-section-heading">
          <h1
            className="subheading"
            style={{
              opacity: 0,
              transition: "opacity 1.5s ease-in",
              paddingTop: "1.5em",
            }}
          >
            About Us
          </h1>
          <p
            style={{
              width: "50%",
              lineHeight: "160%",
              opacity: 0,
              transition: "opacity 1.5s ease-in",
              paddingBottom: "3em",
            }}
          >
            If you’re thinking, “I do music. Where does one do music around
            here? How do I serendipitously run into cool people that I can form
            a band with?”, then you’re in the right place! Regardless of your
            level of formal training or lack thereof, you can join our community
            of musicians and come along on our collective journey of musical
            growth.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "1em",
              paddingBottom: "2em",
            }}
          >
            <h2
              style={{ fontWeight: 400, fontSize: "3.5em", padding: "0.5em" }}
            >
              Events
            </h2>
            {eventSection(
              "Jams",
              "We bring our instruments (or our voices), split off into groups if needed and play music together. We converse, connect, figure out what songs we like, and then jam out to them!"
            )}
            {eventSection(
              "Open Mics",
              "People show off their sick skills, an original song they wrote or a cover they’ve been working on recently."
            )}
            {eventSection(
              "Workshops",
              "We pick an instrument/skill and learn it together. Sometimes, we have one or more people who are able to teach it and sometimes, we just rent out an instrument that nobody knows how to play and figure it out!"
            )}
            {eventSection(
              "Jamboree",
              "Our end of term event that's simply too grand to just be called an EOT Concert, the Jamboree is the culimination of each term's musical journey, with your chance to show off everything you've learned and all the musical connections you've made in an all-out musical celebration!"
            )}
            {eventSection(
              "Performance Opportunities",
              "JamNet is always collabing with other clubs and communities on campus and beyond, which means a ton of opporunties for members to go out and perform at campus events or even paid gigs!"
            )}
            {eventSection(
              "And so much more...",
              "From Live Album Cover Concerts to Local Music Field Trips to Trivia Nights, there's no end to the diversity of JamNet events, and we're always open to new suggestions!"
            )}
          </div>
          <div></div>
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "black",
            height: "4em",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "black",
            width: "60%",
          }}
        >
          <h2 style={{ fontWeight: 400, fontSize: "3.5em", padding: "0.5em" }}>
            Sub-Clubs
          </h2>
          <div style={{ display: "flex", gap: "1em" }}>
            {subClubCard(
              "Bandwidth",
              "JamNet's very own radio show on CKMS 102.7 FM! Each Monday at 7PM we play a mix of student submissions and songs curated to fit a weekly theme. Each show is accompanied by a listening party in the SLC where you can come hang out, study, do crafts, and listen to the show!",
              "/media/bandwidth_card_cover.jpg"
            )}
            {subClubCard(
              "Vocal Victories",
              "Come work on your singing skills in fun and supportive environment open to singers of all skill levels!",
              "/media/bandwidth_card_cover.jpg"
            )}
            {subClubCard(
              "Production Club",
              "Master the art of production through workshops and weekly track roasts aimed at helping you improve on everything from arranging to mixing and mastering!",
              "/media/bandwidth_card_cover.jpg"
            )}
          </div>
        </div>
      </div> */}
      <About />
      <SubClubs />
    </main>
  );
}
