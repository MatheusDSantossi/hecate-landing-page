import { motion, type Variants } from "framer-motion";
import { memo } from "react";

const cursorVariants: Variants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]

        }
    }
};

const CursorBlinker = () => {
  return (
    <motion.div variants={cursorVariants} animate="blinking"
    className="inline-block h-10 w-[1px] translate-y-1 bg-white"
    />
  )
}

export default memo(CursorBlinker)
