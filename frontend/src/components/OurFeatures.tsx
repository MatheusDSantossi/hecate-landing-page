import line from "/line.svg";
import { features } from "../utils/OurFeaturesContent";
import { motion } from "framer-motion";

const OurFeatures = () => {
  return (
    <div>
      <motion.img 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.25,
        ease: 'easeInOut'
      }}
      src={line} alt="Gradient line" />
      <div className="flex justify-center mt-16 mb-16 lg:justify-start lg:ml-30 text-white font-medium text-6xl font-clash">
        Our Features
      </div>
      <div className="space-y-12 md:ml-30">
        {features.map(
          (
            {
              imgSrc,
              imgAlt,
              imgClass,
              flexClass,
              contentMargin,
              text,
              buttonLabel,
              iconSrc,
            },
            i
          ) => (
            <div
              key={i}
              className={`flex flex-col ${flexClass} items-center md:space-x-8`}
            >
              <img src={imgSrc} alt={imgAlt} className={`mb-10 ${imgClass}`} />
              <div
                className={`flex flex-1 space-y-4 flex-col items-center ${contentMargin} md:text-end md:items-start`}
              >
                <p className="text-2xl lg:text-3xl font-medium text-start">
                  {text}
                </p>
                <div className="flex items-center justify-center">
                  <button className="inline-flex items-center space-x-2 px-6 py-2 bg-secondary rounded-full text-primary-dark font-semibold hover:bg-secondary-dark cursor-pointer">
                    <span>{buttonLabel}</span>
                  </button>
                  <img
                    src={iconSrc}
                    alt="Check icon"
                    className="w-9 h-9 ml-8"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OurFeatures;
