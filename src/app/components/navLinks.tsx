import {
  faInstagram,
  faYoutube,
  faSoundcloud,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IG_LINK, YT_LINK, SOUNDCLOUD_LINK, DISCORD_LINK } from "./constants";
import "../../styles/components/footer.css";

export const NavLinks = ({
  className,
  childClass,
}: {
  className: string;
  childClass: string;
}) => {
  return (
    <div className={className}>
      <Link href="/" className={childClass} key="about-nav-link">
        About
      </Link>
      <Link href="/forms" className={childClass} key="forms-nav-link">
        Sign Ups
      </Link>
      <Link href="" className={childClass} key="gallery-nav-link">
        Gallery
      </Link>
      <Link href="/docs" className={childClass} key="docs-nav-link">
        Documents
      </Link>
    </div>
  );
};

export const SocialLinks = ({
  childClass,
  flexDirection,
  children,
}: {
  childClass: string;
  flexDirection: "row" | "column";
  children?: React.ReactElement[];
}) => {
  return (
    <div style={{ display: "flex", gap: "1rem", flexDirection: flexDirection }}>
      <a
        href={IG_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className={childClass}
        key="ig-nav-link"
      >
        {children ? children[0] : <></>}
      </a>

      <a
        href={YT_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className={childClass}
        key="yt-nav-link"
      >
        {children ? children[1] : <></>}
      </a>

      <a
        href={SOUNDCLOUD_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className={childClass}
        key="soundcloud-nav-link"
      >
        {children ? children[2] : <></>}
      </a>

      <a
        href={DISCORD_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className={childClass}
        key="disc-nav-link"
      >
        {children ? children[3] : <></>}
      </a>
    </div>
  );
};

export const SocialIcons = [
  <FontAwesomeIcon icon={faInstagram} key="JN_IG" />,
  <FontAwesomeIcon icon={faYoutube} key="JN_YT" />,
  <FontAwesomeIcon icon={faSoundcloud} key="JN_SOUND" />,
  <FontAwesomeIcon icon={faDiscord} key="JN_DISC" />,
];
