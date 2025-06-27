import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import WhyHecate from "./components/WhyHecate";

import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "./lib/animations";
import Carousel from "./components/carousel/Carousel";
import type { EmblaOptionsType } from "embla-carousel";

import "./styles/embla.css";

//  TODO: Add a loading overlay in the main page

const OPTIONS: EmblaOptionsType = {
  loop: true,
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

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
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
          <Home />
          <WhyHecate />
          <Carousel slides={SLIDES} options={OPTIONS} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
