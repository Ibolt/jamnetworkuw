"use client";
import Spline from "@splinetool/react-spline";

import "../../styles/homepage-sections/logo3DModel.css";

export default function Logo3DModel() {
  const SPLINE_LINK =
    "https://prod.spline.design/Y9EAtIwTGHctVaLs/scene.splinecode";

  // TODO: Logo clipped by container on mobile
  return <Spline scene={SPLINE_LINK} className="spline-container" />;
}
