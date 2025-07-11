import { useState } from "react";
import { SlideTabsExample } from "./SlideTabs";
import { motion, AnimatePresence } from "framer-motion";
import MenuToggle from "./MenuToggle";
import { AnimatedButton } from "./Button";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative mr-3 block text-center lg:hidden">
      {/* The fixed MenuToggle */}
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* AnimatePresence for the dropdown panel */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bg-primary-dark top-full -left-[30vw] mt-2 w-100 transform -translate-x-1/2 h-100 rounded-md shadow-lg z-20"
            >
            <div className="mt-5"></div>
            <SlideTabsExample bgColor="bg-primary-dark" />
            <div className="mt-10"></div>
            <AnimatedButton children={"See Hecate in Action"} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
