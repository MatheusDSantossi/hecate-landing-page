import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import WhyHecate from "./components/WhyHecate";

import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "./lib/animations";

//  TODO: Add a loading overlay in the main page

function App() {
  return (
    <AnimatePresence>
      <motion.div 
      key="app"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeIn}
      className="w-full bg-primary-dark">
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
          <Home />
          <WhyHecate />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
