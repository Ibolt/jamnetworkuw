"use client";
import { useEffect, useRef } from "react";
import { HoverGradientEventCard } from "../hoverGradientCards";

import "../../../styles/homepage-sections/events.css";

const Events = ({ animationsEnabled }: { animationsEnabled: boolean }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (animationsEnabled) {
      const hiddenElements = document.querySelectorAll(".hidden");
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
        });
      });

      hiddenElements.forEach((el) => observerRef.current?.observe(el));

      return () => {
        if (observerRef.current) {
          hiddenElements.forEach((el) => observerRef.current?.unobserve(el));
        }
      };
    }
  }, [animationsEnabled]);

  const eventCardDescriptions = [
    "We bring our instruments (or our voices), split off into groups if needed and play music together. We converse, connect, figure out what songs we like, and then jam out to them!",
    "People show off their sick skills, an original song they wrote or a cover they’ve been working on recently.",
    "We pick an instrument/skill and learn it together. Sometimes, we have one or more people who are able to teach it and sometimes, we just rent out an instrument that nobody knows how to play and figure it out!",
    "An end of term event that's too special to be called an EOT Concert, the Jamboree is the culmination of months of worth of hard work and practice. It's a chance for everyone to show off what they've learned and how they've grown as musicians to our biggest audience of the term!",
  ];

  return (
    <div
      style={{
        height: "max-content",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "2em",
      }}
    >
      <h1 className={animationsEnabled ? "hidden" : "visible"}>Events</h1>
      <div className="event-cards-container">
        <div className="regular-event-cards-container">
          <HoverGradientEventCard
            title="Jams"
            desc={eventCardDescriptions[0]}
            additionalClasses={animationsEnabled ? "hidden" : "visible"}
            animationsEnabled={animationsEnabled}
          />
          <HoverGradientEventCard
            title="Open Mics"
            desc={eventCardDescriptions[1]}
            additionalClasses={animationsEnabled ? "hidden" : "visible"}
            overrideStyles={{ transitionDelay: "200ms" }}
            animationsEnabled={animationsEnabled}
          />
          <HoverGradientEventCard
            title="Workshops"
            desc={eventCardDescriptions[2]}
            additionalClasses={animationsEnabled ? "hidden" : "visible"}
            overrideStyles={{ transitionDelay: "400ms" }}
            animationsEnabled={animationsEnabled}
          />
        </div>
        <HoverGradientEventCard
          title="Jamboree"
          desc={eventCardDescriptions[3]}
          additionalClasses={animationsEnabled ? "hidden" : "visible"}
          overrideStyles={{ aspectRatio: "1/0.2" }}
          animationsEnabled={animationsEnabled}
        />
      </div>

      <p
        className={`${
          animationsEnabled ? "hidden" : "visible"
        } p--large events-text`}
      >
        We do a lot more too, like Album Cover Concerts, Trivia Nights, Movie
        Nights, Listening Parties, and pretty much anything our members can
        think of! Everyone&apos;s encouraged to suggest ideas no matter how out
        there they may seem!
      </p>
    </div>
  );
};

export default Events;
