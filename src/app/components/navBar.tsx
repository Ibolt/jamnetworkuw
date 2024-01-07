"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavLinks, SocialIcons, SocialLinks } from "./navLinks";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        position: "sticky",
        transition: "top 0.3s",
        zIndex: 999,
        top: visible ? "0" : "-100px",
        backgroundColor: prevScrollPos > 100 ? "black" : "transparent",
      }}
    >
      <Link href="/">
        <Image
          src="/media/JN-minimal-logo.png"
          className="clickable"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </Link>

      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        {NavLinks}
        {SocialLinks(SocialIcons)}
      </div>
    </nav>
  );
};

export default NavBar;
