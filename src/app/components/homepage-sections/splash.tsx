import {
  MAIL_LINK,
  DISCORD_LINK,
  W24_JAMBOREE_GOFUNDME_LINK,
} from "../constants";
import Logo3DModel from "../logo3DModel";
import "../../../styles/homepage-sections/splash.css";

const Splash = () => {
  return (
    <div className="splash-container">
      <div className="splash-text-container">
        <div>
          <p className="p--min" style={{ fontWeight: 300 }}>
            Welcome To
          </p>
          <h1>JamNetwork UW</h1>
          <p>
            A music club at the University of Waterloo open to musicians of all
            styles, genres, and levels of experience!
          </p>
        </div>
        <div style={{ display: "flex", gap: "2em" }}>
          <a
            className="gradient-link-button"
            href={MAIL_LINK}
            rel="noreferrer noopener"
          >
            Get In Touch
          </a>
          <a
            className="gradient-link-button"
            href={W24_JAMBOREE_GOFUNDME_LINK}
            rel="noreferrer noopener"
            target="_blank"
          >
            Support our EOT Jamboree
          </a>
          <a
            className="gradient-link-button"
            href={DISCORD_LINK}
            target="_blank"
            rel="noreferrer noopener"
          >
            Join Our Discord
          </a>
        </div>
      </div>
      <Logo3DModel />
    </div>
  );
};

export default Splash;
