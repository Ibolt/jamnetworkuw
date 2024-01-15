import Link from "next/link";

import "../../../styles/components/homepage-sections/circleNavButtons.css";

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
          <Link href="/newsletter" className="link-text">
            Newsletter
          </Link>
        </span>
      </div>
    </div>
  );
};

export default CircleNavButtons;
