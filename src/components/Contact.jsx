import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="font-[Nunito] bg-gray-950 text-white">
      {/* Location Section */}
      <section
        id="contact"
        className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20 bg-[#070011] py-16 px-6 md:px-16 overflow-hidden"
      >
        {/* Text Content with Animation */}
        <motion.div
          className="text-center md:text-left w-full md:w-1/2 max-w-lg lg:max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            OUR <span className="text-cyan-400">LOCATION</span>
          </h1>
          <div className="w-20 h-1 bg-cyan-400 mb-6 mx-auto md:mx-0 rounded"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed tracking-wide">
            At <span className="text-cyan-400 font-semibold">A1 Laptop Solutions</span>,
            we specialize in professional laptop repair and maintenance in{" "}
            <span className="text-cyan-400 font-medium">Bangalore</span>. Located near{" "}
            <span className="text-cyan-400 font-medium">Bommanhalli, Virat Nagar, Bangalore</span>, we
            offer reliable hardware repairs, expert software troubleshooting, and complete
            laptop care — ensuring your device performs like new.
          </p>
        </motion.div>

        {/* Animated Map */}
        <motion.div
          className="w-full md:w-1/2 max-w-lg lg:max-w-xl flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=a1 laptop service center bangalore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            className="rounded-2xl shadow-[0_0_25px_rgba(6,182,212,0.3)] opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-500 border-0"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
