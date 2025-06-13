import { motion } from "framer-motion";

export const AnimatedButton = ({ children }: { children: React.ReactNode }) => {
  const borderVariants = {
    rest: { opacity: 0, rotate: 0 },
    hover: {
      opacity: 1,
      rotate: 360,
      transition: {
        // continuous spin, 2s per loop
        rotate: { repeat: Infinity, duration: 2, ease: "linear" },
        // quick fade
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      className="relative inline-block rounded-lg p-[2px] overflow-hidden"
    >
      {/* 1️⃣ Gradient-border layer (absolutely positioned) */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{ background: "linear-gradient(90deg, #3db82f, #8b5cf6)" }}
        variants={borderVariants}
      />

      {/* 2️⃣ Your actual button face (on top) */}
      <span
        className="
          relative 
          inline-flex             /* make it size itself */
          items-center 
          justify-center 
          bg-secondary 
          text-primary 
          rounded-md 
          px-4 py-2              /* padding for a real button shape */
          cursor-pointer
        "
      >
        {children}
      </span>
    </motion.button>
  );
};
