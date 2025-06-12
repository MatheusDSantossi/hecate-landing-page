import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="grid place-content-center">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
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
    className="relative mx-auto flex w-fit bg-primary p-1">
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Products</Tab>
      <Tab setPosition={setPosition}>Register</Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  // useEffect(() => {
  //     if (!ref.current) {
  //         return;
  //     }
  //     console.log(ref.current.getBoundingClientRect());
  // })

  return (
    <li
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-secondary md:h-12"
    />
  );
};
