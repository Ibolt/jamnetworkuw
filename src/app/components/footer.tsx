import { NavLinks, SocialLinks } from "./navLinks";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "black",
          padding: "4rem",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ marginBottom: "0.25em" }}>Site Map</p>
            <NavLinks className="footer-page-links" childClass="footer-link" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ marginBottom: "0.25em" }}>Socials</p>
            <SocialLinks childClass="footer-social-link" flexDirection="column">
              <div className="p--min">Instagram</div>
              <div className="p--min">YouTube</div>
              <div className="p--min">SoundCloud</div>
              <div className="p--min">Discord</div>
            </SocialLinks>
          </div>
        </div>
        <p>jamnetworkuw@gmail.com</p>
        <p className="p--min">
          &copy; {new Date().getFullYear()} JamNetwork UW
        </p>
      </div>
    </footer>
  );
};

export default Footer;
