import Link from "next/link";

import "../../../styles/homepage-sections/circleNavButtons.css";

const CircleNavButtons = ({
  animationsEnabled,
}: {
  animationsEnabled: boolean;
}) => {
  return (
    <div className="circle-nav-buttons-container">
      <div
        className="circle-link"
        data-animations-enabled={animationsEnabled}
        style={{
          backgroundColor: "#4AF8BA",
          color: "black",
        }}
      >
        <span>
          <Link href="/forms" className="link-text">
            Forms
          </Link>
        </span>
      </div>
      <div
        className="circle-link"
        data-animations-enabled={animationsEnabled}
        style={{ backgroundColor: "#736afd" }}
      >
        <span>
          <Link href="/docs" className="link-text">
            Docs
          </Link>
        </span>
      </div>
      <div
        className="circle-link"
        data-animations-enabled={animationsEnabled}
        style={{ backgroundColor: "#FCBF49", color: "black" }}
      >
        <span>
          <a href="/calendar" className="link-text">
            Event Calendar
          </a>
        </span>
      </div>
    </div>
  );
};

export default CircleNavButtons;
