import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  const whatsappNumber = "+919035188637";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <section
      id="about"
      className="bg-gray-950 text-gray-200 py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Image with animation */}
        <motion.div
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1721333089073-215a56fd710c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
              alt="Laptop Repair Service"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:scale-105 transition-transform duration-500"
            />
            {/* Glassy blurred overlay */}
            <div className="absolute -bottom-6 -right-6 bg-cyan-400/20 rounded-2xl w-40 h-40 blur-3xl"></div>
          </div>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-10 shadow-lg"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Expert <span className="text-cyan-400">Laptop Repair</span> & Complete{" "}
            <span className="text-cyan-400">Device Care</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            At <span className="text-cyan-400 font-semibold">A1 Laptop Solutions</span>,
            we believe your device deserves expert attention. Whether it’s a
            cracked screen, motherboard issue, or slow performance — our certified
            technicians ensure high-quality repairs using genuine components and
            advanced diagnostic tools.
          </p>

          <p className="text-lg leading-relaxed text-gray-400">
            Based near <span className="text-cyan-400">Viratnagar Main Rd, Bommanahalli, Bangalore</span>,
            we’ve built a reputation for reliability, fast service, and transparent pricing.
            Our goal is simple — to bring your laptop back to life while saving you time
            and cost.
          </p>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold shadow-lg hover:bg-[#20b358] hover:shadow-[#25D366]/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
