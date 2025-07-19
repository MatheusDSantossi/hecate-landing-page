import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import CursorBlinker from "./CursorBlinker";
import { useEffect, useRef } from "react";

const TextAnimation = ({ children, useCursor }) => {
  const baseText = children;

  // Create a ref a nd derive an "inView" boolean
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Motion values for counting up
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [isInView, baseText.length, count]);

  return (
    <span ref={ref}>
      <motion.span>{displayText}</motion.span>
      {useCursor && <CursorBlinker />}
    </span>
  );
};

export default TextAnimation;
