import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import Form from "./Form";

const ContactUs = () => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
    className="flex justify-center items-center bg-black">
      <h1 className="text-2xl text-secondary font-clash font-medium">Contact Us</h1>
      <main>
        <Form />
      </main>
    </motion.div>
  );
};

export default ContactUs;
