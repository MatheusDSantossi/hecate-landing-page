import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "../../utils/contactShema";
import { AnimatedButton } from "../navbar/Button";

import { motion, AnimatePresence } from "framer-motion";
import { memo, useState } from "react";

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await emailjs.send(
        "service_dfwcdlr",
        "template_ezvldob",
        {
          from_name: data.fullName,
          email: data.email,
          contact: data.contact,
          message: data.message,
        },
        "oaoj7C6T5_1hNgRnz"
      );

      console.log("Email sent! ", result.status);
      reset();
      alert("Thanks! We received your message!");
    } catch (err) {
      console.error("Email error: ", err);
      alert("Oops - something went wrong. Please try again later.");
    }
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-8 md:mx-auto lg:mt-16">
          {/* Full name */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative z-0 w-full my-5 group"
          >
            <input
              {...register("fullName")}
              type="text"
              placeholder=""
              id="fullName"
              className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary peer"
            />
            <label
              htmlFor="fullName"
              className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name<span className="text-secondary"> *</span>
            </label>
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                {errors.fullName.message}
              </p>
            )}
          </motion.div>

          {/* Email */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("email")}
              type="text"
              placeholder=""
              id="email"
              className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary peer"
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email<span className="text-secondary"> *</span>
            </label>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone number */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              {...register("contact")}
              type="text"
              placeholder=""
              id="contact"
              className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary peer"
            />
            <label
              htmlFor="contact"
              className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contact<span className="text-secondary"> *</span>
            </label>
            {errors.contact && (
              <p className="mt-1 text-sm text-red-500">
                {errors.contact.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              {...register("message")}
              name="message"
              placeholder=""
              id="message"
              cols={30}
              rows={5}
              className="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-secondary peer"
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message <span className="text-secondary"> *</span>
            </label>
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <p
            id="helper-text-explanation"
            className="mt-2 text-lg text-gray-300 relative text-center"
          >
            We'll never share your details. Read our{" "}
            <a href="#" className="font-medium text-secondary hover:underline">
              Privacy Policy
            </a>
          </p>

          <div className="flex relative justify-center items-center my-4">
            <AnimatedButton disabled={isSubmitting} children={isSubmitting ? "Sending..." : "Contact Us"} />
          </div>
        </form>
      ) : (
        <div className="relative">
          <button
            className="bg-secondary p-2 rounded-2xl relative text-primary font-medium cursor-pointer hover:bg-secondary-dark"
            onClick={() => setIsVisible(true)}
          >
            Show Form
          </button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default memo(Form);
