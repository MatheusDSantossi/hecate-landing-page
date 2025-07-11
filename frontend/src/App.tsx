import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import WhyHecate from "./components/WhyHecate";

import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, tweenIn } from "./lib/animations";
import Carousel from "./components/carousel/Carousel";
import type { EmblaOptionsType } from "embla-carousel";

import "./styles/embla.css";

import giantRobotHand from "/huge_robot_hand.png";

//  TODO: Add a loading overlay in the main page

const OPTIONS: EmblaOptionsType = {
  loop: true,
};
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

import { slides as SLIDES } from "./utils/CarouselSlides";
import OurFeatures from "./components/ourFeatures/OurFeatures";
import Quote from "./components/quote/Quote";

function App() {
  return (
    <AnimatePresence>
      <motion.div
        key="app"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeIn}
        className="w-full bg-primary-dark"
      >
        <Navbar />

        <div className="relative">
          <Home />
        </div>

        <div className="relative">
          <WhyHecate />
        </div>

        <div className="relative overflow-visible">
          <div className="relative z-20">
            <Carousel slides={SLIDES} options={OPTIONS} />
            <motion.img
              src={giantRobotHand}
              alt="Robot hand"
              className="absolute -z-10 -bottom-35 lg:-bottom-70 left-1/3 lg:left-[26%] transform -translate-x-1/2 rotate-180 pointer-events-none w-[90%] lg:w-[800px]"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 1 }}
              transition={{
                ...tweenIn,
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1],
                delay: 2,
              }}
            />
          </div>
        </div>
        <div className="relative mt-76">
          <Quote />
        </div>
        <div className="relative my-56">
          <OurFeatures />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
