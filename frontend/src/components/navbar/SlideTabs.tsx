import { useRef, useState, type ReactNode } from "react";
import { type HTMLMotionProps, motion } from "framer-motion";
import { navItems } from "../../utils/NavData";

interface BgColorProps {
  bgColor: string;
}

// The shape of the position object
interface TabPosition {
  width: number;
  left: number;
  opacity: number;
}

// Pick up all the normal <li> motion props, plus our setPostion callback
type TabProps = HTMLMotionProps<"li"> & {
  children: ReactNode;
  setPosition: (pos: TabPosition) => void;
};

export const SlideTabsExample: React.FC<BgColorProps> = ({ bgColor }) => {
  return <SlideTabs bgColor={bgColor} />;
};

const SlideTabs: React.FC<BgColorProps> = ({ bgColor }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className={`relative mx-auto flex w-fit ${bgColor} p-1 font-clash`}
    >
      {navItems.map(({ id, label }) => (
        <Tab key={id} setPosition={setPosition}>
          {label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }: TabProps) => {
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
        cursor: "pointer",
      }}
      className="relative z-10 block cursor-pointer xs:px-1 sm:px-3 py-1.5 mt-5 rounded-full xs:text-xs sm:text-base uppercase text-white font-medium hover:text-primary md:px-5 md:py-3 md:mt-0 md:text-sm"
    >
      {children}
    </motion.li>
  );
};

interface motionPosition {
  position: { left: number; width: number; opacity: number };
}

const Cursor = ({ position }: motionPosition) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 mt-6 h-7 rounded-full bg-secondary md:h-12 md:mt-0"
    />
  );
};
