import { CSSProperties } from "react";

import "../../styles/hoverGradientCard.css";

type HoverGradientCardProps = {
  title: string;
  desc: string;
  additionalClasses?: string;
  overrideStyles?: CSSProperties;
  isMobileDevice: boolean;
};

// Utility function
const isMobile = (userAgent: string) => {
  return /mobile/i.test(userAgent);
};

// getServerSideProps function
export async function getServerSideProps(context: {
  req: { headers: { [x: string]: any } };
}) {
  const userAgent = context.req.headers["user-agent"];
  const isMobileDevice = isMobile(userAgent);

  return {
    props: {
      isMobileDevice,
      // Pass other props as needed
    },
  };
}

export const HoverGradientEventCard = ({
  title,
  desc,
  additionalClasses,
  overrideStyles,
  isMobileDevice,
}: HoverGradientCardProps) => {
  console.log(isMobileDevice);

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
        <h3>{title}</h3>
        <p className="gradient-card-event-subtitle">{textToSpanList(desc)}</p>
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
        <p style={{ marginBottom: "2rem" }}>{title}</p>
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
