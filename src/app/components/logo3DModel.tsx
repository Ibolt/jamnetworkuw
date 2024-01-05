import Spline from "@splinetool/react-spline";

export default function Logo3DModel() {
  const SPLINE_LINK =
    "https://prod.spline.design/Ime2Ryj2HiWaRopu/scene.splinecode";

  return (
    <Spline
      scene={SPLINE_LINK}
      style={{
        pointerEvents: "none",
      }}
    />
  );
}
