import { type SVGMotionProps, motion } from 'framer-motion';

type PathProps = SVGMotionProps<SVGPathElement>;

const Path = (props: PathProps) => (
  <motion.path
    // fill="transparent"
    strokeWidth="3"
    // stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);
interface MenuToggleProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

const MenuToggle = ({ menuOpen, setMenuOpen }: MenuToggleProps) => (
  <motion.button 
  onClick={() => setMenuOpen(!menuOpen)}
  initial={false}
  animate={menuOpen ? "open" : "closed"}
  style={toggleContainer} 
  className='z-10 w-12 h-12 rounded-full border-none cursor-pointer flex items-center justify-center' 
  >
    <motion.svg className="burger-icon" width="24" height="24" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </motion.svg>
  </motion.button>
);

const toggleContainer = {
  outline: "none",
  border: "none",
  // WebkitUserSelect: "none",
  // MozUserSelect: "none",
  cursor: "pointer",
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
  fill: "yellow",
};

export default MenuToggle;
