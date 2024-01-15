import { useEffect, useRef } from "react";
import "../../../styles/components/homepage-sections/events.css";
import { HoverGradientEventCard } from "../hoverGradientCards";

const Events = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
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
  }, []);

  const eventCardDescriptions = [
    "We bring our instruments (or our voices), split off into groups if needed and play music together. We converse, connect, figure out what songs we like, and then jam out to them!",
    "People show off their sick skills, an original song they wrote or a cover they’ve been working on recently.",
    "We pick an instrument/skill and learn it together. Sometimes, we have one or more people who are able to teach it and sometimes, we just rent out an instrument that nobody knows how to play and figure it out!",
    "An end of term that's too special to be called an end of term concert, the Jamboree is the culmination of a term's worth of hard work and practice. It's a chance for everyone to show off what they've learned and how they've grown as musicians!",
  ];

  return (
    <div
      style={{
        height: "max-content",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 className="hidden">Events</h1>
      <div className="event-cards-container">
        <div className="regular-event-cards-container">
          <HoverGradientEventCard
            title="Jams"
            desc={eventCardDescriptions[0]}
            additionalClasses="hidden"
          />
          <HoverGradientEventCard
            title="Open Mics"
            desc={eventCardDescriptions[1]}
            additionalClasses="hidden"
            overrideStyles={{ transitionDelay: "200ms" }}
          />
          <HoverGradientEventCard
            title="Workshops"
            desc={eventCardDescriptions[2]}
            additionalClasses="hidden"
            overrideStyles={{ transitionDelay: "400ms" }}
          />
        </div>
        <HoverGradientEventCard
          title="Jamboree"
          desc={eventCardDescriptions[3]}
          additionalClasses="hidden"
          overrideStyles={{ aspectRatio: "1/0.3" }}
        />
      </div>

      <p className="hidden p--large events-text">
        We do a lot more too, like Album Cover Concerts, Trivia Nights, Movie
        Nights, Listening Parties, and pretty much anything our members can
        think of! Everyone&apos;s encouraged to suggest ideas no matter how out
        there they may seem!
      </p>
    </div>
  );
};

export default Events;
