import { motion, useSpring, useTime, useTransform } from "framer-motion";
import { useEffect } from "react";

export const AnimatedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button className="hidden md:block cursor-pointer px-6 py-2 rounded-md radial-gradient"
    initial={{ "--x": "100%", scale: 1}}
    animate={{ "--x": "-100%"}}
    whileTap={{ scale: 0.97 }}
    whileHover={{ scale: 1.05 }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1,
      type: "spring",
      stiffness: 20,
      damping: 15,
      mass: 2,
      scale: {
        type: "spring",
        stiffness: 10,
        damping: 5,
        mass: 0.1
      }
    }}
    >
      <span className="text-primary tracking-wide font-medium h-full w-full block relative linear-mask">
        {children}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay"></span>
    </motion.button>
  );
};
