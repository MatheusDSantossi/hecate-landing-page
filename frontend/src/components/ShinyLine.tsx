import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ShinyLine = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-1">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFF629" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFF629" stopOpacity="1" />
          </linearGradient>
        </defs>

        <motion.path
          ref={pathRef}
          d="M100 0.5 L0 0.5"
          stroke="url(#lineGradient)"
          strokeWidth={1}
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: pathLength }}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              strokeDashoffset: 0,
              transition: { duration: 1.5, ease: "easeInOut" },
            },
            hidden: { strokeDashoffset: pathLength },
          }}
        />
      </svg>
    </div>
  );
};

export default ShinyLine;
