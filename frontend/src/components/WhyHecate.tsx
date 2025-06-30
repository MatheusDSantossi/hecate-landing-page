import robotPointing from "/huge_robot_hand_pointing.png";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, tweenIn } from "../lib/animations";
import { iconData } from "../utils/WhyHecateIconsData";

const WhyHecate = () => {
  
  return (
    <section className="relative pt-30 pb-32 overflow-hidden">
      {/* Gradient card */}
      <div
        className="relative z-10 mx-auto max-w-4xl px-6 py-16 md:py-24 rounded-2xl text-center"
        style={{
          background:
            "radial-gradient(circle,rgba(255, 246, 41, 0.60) 0%, rgba(0, 46, 37, 0.60) 35%, rgba(0, 46, 37, 0.50) 100%)",
        }}
      >
        <h3 className="text-3xl font-medium md:text-4xl text-white text-center">
          Why Hecate?
        </h3>
        <p className="text-lg text-white md:text-xl mt-4 text-center">
          All the Intelligent Tools you Need for Seamless Customer Engagement
        </p>
        {/* Icon row */}
        <motion.div
          className="relative w-full h-[150px] mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {iconData.map(({ src, alt, className }, idx) => (
            <motion.img
              key={idx}
              src={src}
              alt={alt}
              className={className}
              variants={fadeIn}
            />
          ))}
        </motion.div>
      </div>

      {/* Giant robot hand (clipped on small screens) */}

      <motion.img
        className="block absolute top-1/3 -right-50 h-[140%] transform -translate-y-1/2 object-contain"
        src={robotPointing}
        alt="A robot hand pointing"
        initial={{ y: "-100vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 1 }}
        transition={{ ...tweenIn, duration: 1, ease: [0.42,0,0.58,1], delay: 2 }}
      />
    </section>
  );
};

export default WhyHecate;
