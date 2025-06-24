import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "../../utils/NavData";

export const SlideTabsExample = ({ bgColor }) => {
  return (
      <SlideTabs bgColor={bgColor} />
  );
};

const SlideTabs = ({ bgColor }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul 
    onMouseLeave={() => {
        setPosition(pv => ({
            ...pv,
            opacity: 0,
        }));
    }}
    className={`relative mx-auto flex w-fit ${bgColor} p-1`}>
      {navItems.map(({ id, label }) => (
        <Tab key={id} setPosition={setPosition}>{label}</Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <motion.li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      // animate
      whileTap={{
        opacity: 1,
        scale: 1.05,
        boxShadow: "0px 5px 8px #407",
        cursor: "pointer"
      }}

      className="relative z-10 block cursor-pointer px-3 py-1.5 mt-5 rounded-full text-base uppercase text-white font-medium hover:text-primary md:px-5 md:py-3 md:mt-0 md:text-sm"
    >
      {children}
    </motion.li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 mt-6 h-7 rounded-full bg-secondary md:h-12 md:mt-0"
    />
  );
};
