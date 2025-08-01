import { AnimatePresence } from "framer-motion";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPageLayout from "./components/LandingPageLayout";
import { memo } from "react";
import Prices from "./components/prices/Prices";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<LandingPageLayout />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </AnimatePresence>
  );
}

export default memo(App);
