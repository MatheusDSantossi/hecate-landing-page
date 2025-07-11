import React from "react";
import { motion, type Variants } from "framer-motion";

const ShinyLine: React.FC = () => {
  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  // const lineVariants = {
  //   hidden: { x1: 0, y1: 1, strokeWidth: 0 },
  //   visible: {
  //     x2: 100,
  //     y2: 1,
  //     strokeWidth: 2,
  //     transition: { ease: [0.42, 0, 0.58, 1] as const, duration: 2 },
  //   },
  // };

  return (
    <motion.svg
      width="100%"
      height="2"
      viewBox="0 0 100 2"
      initial="hidden"
      whileInView="visible"
      variants={lineVariants}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="myGradient"
          gradientUnits="userSpaceOnUse" /* ensure it maps 0→100 in SVG coords */
          x1="0"
          y1="2"
          x2="100"
          y2="2"
        >
          <stop offset="0%" stopColor="#FFF629" stopOpacity={1} />
          <stop offset="100%" stopColor="#FFF629" stopOpacity={0.2} />
        </linearGradient>
      </defs>

      <motion.line
        x1="0"
        y1="1"
        x2="100"
        y2="1"
        strokeWidth="2"
        variants={lineVariants}
        stroke="url(#myGradient)"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default ShinyLine;
