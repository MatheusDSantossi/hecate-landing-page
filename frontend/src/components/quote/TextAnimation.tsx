import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import CursorBlinker from "./CursorBlinker";
import React, { useEffect } from "react";

const TextAnimation = ({ children }) => {
  const baseText = children;
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => baseText.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, baseText.length, {
        type: "tween",
        duration: 1,
        ease: "easeInOut",
    });
    return controls.stop;
  }, [baseText.length, count]);

  return (
    <span>
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
};

export default TextAnimation;
