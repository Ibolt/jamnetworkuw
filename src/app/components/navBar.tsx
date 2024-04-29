"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { SocialIcons, SocialLinks } from "./navLinks";
import "../../styles/navBar.css";
import { GOOGLE_CAL_LINK } from "./constants";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <nav
      className="navbar-container"
      style={{
        top: visible ? "0" : "-100px",
        backgroundColor: prevScrollPos > 100 ? "black" : "transparent",
      }}
    >
      <Link href="/" className="navbar-icon" onClick={handleMenuClick}>
        <Image
          src="/media/logo.png"
          width={50}
          height={50}
          alt="JamNetwork Logo"
        />
      </Link>

      <FontAwesomeIcon
        icon={faBars}
        className="navbar-hamburger navbar-icon"
        onClick={handleMenuClick}
      />
      <div className={`navbar-links-container ${mobileMenuOpen ? "show" : ""}`}>
        <div className="navbar-links-inner-container">
          <div className="navbar-page-links">
            <Link
              href="/"
              className="navbar-link"
              key="about-nav-link"
              onClick={handleMenuClick}
            >
              About
            </Link>
            <Link
              href="/forms"
              className="navbar-link"
              key="forms-nav-link"
              onClick={handleMenuClick}
            >
              Forms
            </Link>
            <a
              href={GOOGLE_CAL_LINK}
              className="navbar-link"
              key="gallery-nav-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              Event Calendar
            </a>
            <Link
              href="/docs"
              className="navbar-link"
              key="docs-nav-link"
              onClick={handleMenuClick}
            >
              Documents
            </Link>
          </div>
          <SocialLinks childClass="navbar-social-link" flexDirection="row">
            {SocialIcons}
          </SocialLinks>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
