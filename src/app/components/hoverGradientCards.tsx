import { CSSProperties } from "react";
import "../../styles/components/hoverGradientCard.css";

type HoverGradientCardProps = {
  title: string;
  desc: string;
  additionalClasses?: string;
  overrideStyles?: CSSProperties;
};

export const HoverGradientEventCard = ({
  title,
  desc,
  additionalClasses,
  overrideStyles,
}: HoverGradientCardProps) => {
  const textToSpanList = (string: string) => {
    return string.split(" ").map((word, i) => {
      return (
        <span
          key={`${word}-${i}`}
          className="gradient-card-event-subtitle-word"
          style={{
            transitionDelay: `${i * 40}ms`,
          }}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div
      className={`gradient-card ${additionalClasses ? additionalClasses : ""}`}
      style={overrideStyles ? overrideStyles : {}}
    >
      <div className="gradient-card-content">
        <h3 className="gradient-card-title">{title}</h3>
        <h4 className="gradient-card-event-subtitle">{textToSpanList(desc)}</h4>
      </div>
    </div>
  );
};

type HoverGradientFileCardProps = {
  id: string;
  title: string;
  webViewLink: string;
  buttonText?: string;
};

export const HoverGradientFileCard = ({
  id,
  title,
  webViewLink,
  buttonText,
}: HoverGradientFileCardProps) => {
  return (
    <div key={id} className="gradient-card" style={{ aspectRatio: 0 }}>
      <div className="gradient-card-content">
        <h3
          className="gradient-card-title"
          style={{ fontSize: "1.5rem", marginBottom: "2rem" }}
        >
          {title}
        </h3>
        <a
          className="gradient-card-file-button"
          href={webViewLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          {buttonText ? buttonText : "View"}
        </a>
      </div>
    </div>
  );
};
