"use client";
import { DISABLE_ANIMATIONS_COOKIE } from "./constants";

const DisableAnimationsButton = () => {
  const disableAnimations = () => {
    document.cookie = `${DISABLE_ANIMATIONS_COOKIE}=true; max-age=31536000;`;
  };

  return <button onClick={disableAnimations}>Disable Animations</button>;
};

export default DisableAnimationsButton;
