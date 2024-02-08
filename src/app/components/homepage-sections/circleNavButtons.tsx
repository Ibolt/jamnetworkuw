import Link from "next/link";

import "../../../styles/homepage-sections/circleNavButtons.css";

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
        style={{ backgroundColor: "#FFD449", color: "black" }}
      >
        <span>
          <Link
            href="https://calendar.google.com/calendar/u/1?cid=amFtbmV0d29ya3V3QGdtYWlsLmNvbQ"
            className="link-text"
          >
            Event Calendar
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CircleNavButtons;
