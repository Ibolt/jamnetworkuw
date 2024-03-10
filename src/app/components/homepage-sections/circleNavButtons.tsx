import Link from "next/link";

import "../../../styles/homepage-sections/circleNavButtons.css";
import { GOOGLE_CAL_LINK } from "../constants";

const CircleNavButtons = () => {
  return (
    <div className="circle-nav-buttons-container">
      <div
        className="circle-link"
        style={{
          backgroundColor: "#4AF8BA",
          color: "black",
        }}
      >
        <span>
          <Link href="/forms" className="link-text">
            Sign Ups
          </Link>
        </span>
      </div>
      <div className="circle-link" style={{ backgroundColor: "#736afd" }}>
        <span>
          <Link href="/docs" className="link-text">
            Docs
          </Link>
        </span>
      </div>
      <div
        className="circle-link"
        style={{ backgroundColor: "#FCBF49", color: "black" }}
      >
        <span>
          <a
            href={GOOGLE_CAL_LINK}
            className="link-text"
            target="_blank"
            rel="noreferrer noopener"
          >
            Event Calendar
          </a>
        </span>
      </div>
    </div>
  );
};

export default CircleNavButtons;
