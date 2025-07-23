import robot from "/home/robot_image.png";
import computer from "/home/MacBook Air (15 inch).png";

import { motion } from "framer-motion";
import { fadeIn, tweenIn } from "../lib/animations";
import { memo } from "react";

const Home = () => {
  return (
    <div className="relative flex items-center justify-center bg-primary shadow-2xl">
      {/* Left-side robot image */}
      <motion.img
        className="hidden lg:block h-[500px] object-contain -ml-25"
        src={robot}
        alt="A robot"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 1 }}
        transition={{
          ...tweenIn,
          duration: 0.8,
          ease: [0.42, 0, 0.58, 1],
          delay: 0.4,
        }}
      />

      {/* Hero text */}
      <motion.div
        className="flex z-1 xs:py-16 sm:py-28 lg:py-8 
       justify-center text-center max-w-xl xs:mx-16 lg:mx-0 md:px-4 lg:mr-[300px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeIn}
      >
        <h1 className="text-white font-medium xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-clash">
          Elevate Your Business with{" "}
          <span className="text-secondary">AI-Powered</span> Conversations
        </h1>
      </motion.div>

      {/* Right-side laptop image */}
      <motion.img
        className="hidden lg:block absolute right-0 h-[700px] object-contain mt-10 pointer-events-none"
        src={computer}
        alt="A macbook showing the initial screen of the Chatbot Hecate"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 1 }}
        transition={{
          ...tweenIn,
          duration: 0.8,
          ease: [0.42, 0, 0.58, 1],
          delay: 0.4,
        }}
      />
    </div>
  );
};

export default memo(Home);
