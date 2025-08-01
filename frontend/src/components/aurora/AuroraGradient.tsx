import React, { memo, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import type {} from "framer-motion";

// Array of colors to be animated
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// interface AuroraGradientProps extends HTMLMotionProps<"section"> {
//   children: ReactNode;
//   className?: string;
// }

interface AuroraProps {
  className?: string;
}

// const AuroraGradient: React.FC<AuroraGradientProps> = ({
const AuroraGradient: React.FC<AuroraProps> = ({ className = "" }) => {
  // Initialize motion value with the first color
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    // Animate the color changes in a loop
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // Use motion template to create a dynamic background gradient
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, transparent 40%, ${color})`;

  return (
    <motion.div
      style={{ backgroundImage }}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};

export default memo(AuroraGradient);
