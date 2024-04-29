"use client";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

import "../../styles/homepage-sections/logo3DModel.css";
import logo from "../../../public/media/logo.png";

export default function Logo3DModel({
  animationsEnabled,
}: {
  animationsEnabled: boolean;
}) {
  const SPLINE_LINK =
    "https://prod.spline.design/G7AW3OKpjV4oWnPn/scene.splinecode";

  return animationsEnabled ? (
    <Spline scene={SPLINE_LINK} className="spline-container" />
  ) : (
    <div style={{ position: "relative", flex: 1 }}>
      <Image
        src={logo}
        alt="JamNetwork Logo"
        sizes={"100vw"}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
