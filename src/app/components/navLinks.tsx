import {
  faInstagram,
  faYoutube,
  faSoundcloud,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactElement } from "react";
import { IG_LINK, YT_LINK, SOUNDCLOUD_LINK, DISCORD_LINK } from "./constants";

export const NavLinks = [
  <Link href="/" className="link" key="about-nav-link">
    About
  </Link>,
  <Link href="/forms" className="link" key="forms-nav-link">
    Sign Ups
  </Link>,
  <Link href="" className="link" key="cal-nav-link">
    Event Calendar
  </Link>,
  <Link href="" className="link" key="gallery-nav-link">
    Gallery
  </Link>,
  <Link href="/docs" className="link" key="docs-nav-link">
    Documents
  </Link>,
];

export const SocialLinks = (children?: ReactElement[]) => {
  return [
    <a
      href={IG_LINK}
      target="_blank"
      rel="noreferrer noopener"
      className="link"
      key="ig-nav-link"
    >
      {children ? children[0] : <></>}
    </a>,

    <a
      href={YT_LINK}
      target="_blank"
      rel="noreferrer noopener"
      className="link"
      key="yt-nav-link"
    >
      {children ? children[1] : <></>}
    </a>,

    <a
      href={SOUNDCLOUD_LINK}
      target="_blank"
      rel="noreferrer noopener"
      className="link"
      key="soundcloud-nav-link"
    >
      {children ? children[2] : <></>}
    </a>,

    <a
      href={DISCORD_LINK}
      target="_blank"
      rel="noreferrer noopener"
      className="link"
      key="disc-nav-link"
    >
      {children ? children[3] : <></>}
    </a>,
  ];
};

export const SocialIcons = [
  <FontAwesomeIcon
    icon={faInstagram}
    className="clickable"
    width={25}
    height={25}
    key="JN_IG"
  />,

  <FontAwesomeIcon icon={faYoutube} width={25} height={25} key="JN_YT" />,

  <FontAwesomeIcon
    icon={faSoundcloud}
    className="clickable"
    width={25}
    height={25}
    key="JN_SOUND"
  />,

  <FontAwesomeIcon
    icon={faDiscord}
    className="clickable"
    width={25}
    height={25}
    key="JN_DISC"
  />,
];
