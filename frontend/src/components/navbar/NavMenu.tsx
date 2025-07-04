import { useState } from "react";
import { SlideTabsExample } from "./SlideTabs";
import { motion, AnimatePresence } from "framer-motion";
import MenuToggle from "./MenuToggle";
import { AnimatedButton } from "./Button";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative block md:hidden">
      {/* The fixed MenuToggle */}
      <MenuToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* AnimatePresence for the dropdown panel */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bg-primary-dark top-full -left-[500px] mt-2 w-100 h-100 rounded-md shadow-lg z-20"
          >
            <SlideTabsExample bgColor="bg-primary-dark" />
            <AnimatedButton children={"See Hecate in Action"} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMenu;
