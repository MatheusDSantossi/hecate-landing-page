import ShinyLine from "../ourFeatures/ShinyLine";
import logo_darker from "/logo_darker.svg";
import copyright from "/footer/Copyright.svg";
import { Options } from "../../utils/FooterOptions";
import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";

const Footer = () => {
  return (
    <footer>
      <ShinyLine />
      <div className="bg-secondary pb-8 text-primary">
        <div className="flex align-bottom items-end px-7 py-12 mt-10">
          <motion.img
            className="h-20"
            src={logo_darker}
            alt="Hecate logo green color"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
          />
        </div>
        <motion.div
          className="flex xs:flex-col sm:flex-row xs:mx-30 sm:mx-0 xs:justify-center sm:justify-around md:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
        >
          {Options.map(({ title, option1, option2, option3 }) => (
            <div className="flex flex-col mb-5 md:mr-16 xs:text-base lg:text-xl">
              <h2 className="font-medium mb-3 pointer-events-none">{title}</h2>
              <h3 className="cursor-pointer hover:underline">{option1}</h3>
              <h3 className="cursor-pointer hover:underline">{option2}</h3>
              <h3 className="cursor-pointer hover:underline">{option3}</h3>
            </div>
          ))}
        </motion.div>
        <div className="flex items-center mt-10 xs:text-xs sm:text-sm px-6">
          <img className="h-3 ml-4 mr-1" src={copyright} alt="Copyright Icon" />
          <motion.h3
            className="font-medium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
          >
            2025 matheusd.santosr. All rights reserved.{" "}
          </motion.h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
