"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { NavLinks, SocialIcons, SocialLinks } from "./navLinks";
import "../../styles/components/navBar.css";

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
        backgroundColor: prevScrollPos > 200 ? "black" : "transparent",
      }}
    >
      <Link href="/" className="navbar-icon">
        <Image
          src="/media/JN-minimal-logo.png"
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
          <NavLinks className="navbar-page-links" childClass="navbar-link" />
          <SocialLinks childClass="navbar-social-link" flexDirection="row">
            {SocialIcons}
          </SocialLinks>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
