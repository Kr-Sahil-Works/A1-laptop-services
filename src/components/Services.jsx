import { motion } from "framer-motion";
import { FaTools, FaBatteryThreeQuarters, FaLaptop } from "react-icons/fa";

const services = [
  { icon: <FaTools />, title: "Hardware Repair", desc: "Fix keyboards, screens, and internal components with expert precision." },
  { icon: <FaBatteryThreeQuarters />, title: "Battery Replacement", desc: "Long-lasting batteries installed for all major brands." },
  { icon: <FaLaptop />, title: "Software Solutions", desc: "OS installation, virus removal, and performance optimization." },
];

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
   "/brands/acer.png",
   "/brands/asus.png",
   "/brands/hp.png",
   "/brands/dell.png",
   "/brands/lenovo.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "/brands/samsung.png",
    "/brands/Toshiba.png",
];

const Services = () => (
  <section id="services" className="py-20  relative overflow-hidden"
   style={{ backgroundColor: "#030712" }}>
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
      Our Services
    </h2>

    <div className="container mx-auto grid md:grid-cols-3 gap-8 px-5">
      {services.map((s, i) => (
        <motion.div
          key={i}
          className="bg-gray-800/80 rounded-3xl shadow-xl p-8 text-center backdrop-blur-md hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.3, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="text-cyan-400 text-5xl mb-4"
            whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            {s.icon}
          </motion.div>
          <h3 className="font-semibold text-2xl mb-2 text-white">{s.title}</h3>
          <p className="text-gray-300">{s.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* Trusted By Section */}
    <div className="relative z-10 mt-20 w-full overflow-hidden">
      <p className="text-white uppercase tracking-widest mb-6 text-sm md:text-base text-center">
        Trusted by the world's best clients
      </p>
      <div className="flex animate-scroll whitespace-nowrap gap-10 justify-center">
        {brands.concat(brands).map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt="brand logo"
            className="h-12 md:h-16 object-contain"
          />
        ))}
      </div>
    </div>

    {/* Infinite scroll animation (CSS) */}
    <style jsx>{`
      .animate-scroll {
        display: flex;
        animation: scroll 20s linear infinite;
      }
      @keyframes scroll {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  </section>
);

export default Services;
