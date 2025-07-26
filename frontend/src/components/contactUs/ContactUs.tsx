import { memo } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import Form from "./Form";
import { content } from "../../utils/ContactUsContent";
import TextAnimation from "../quote/TextAnimation";

const ContactUs = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center bg-black py-10"
    >
      <div className="absolute inset-0 bg-[url(/contactUs/stars_contact_us_2.jpg)] bg-cover bg-center opacity-30 pointer-events-none" />

      <div className="relative sm: flex flex-col h-50 z-10">
        {content.map(({className, text}) => (
          <motion.h1 className={className}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          ><TextAnimation children={text} useCursor={false} />
          </motion.h1>
        ))}
      </div>

      <Form />
    </div>
  );
};

export default memo(ContactUs);
