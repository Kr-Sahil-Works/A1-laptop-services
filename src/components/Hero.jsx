import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  { title: "Hardware Repair", description: "Fast and reliable laptop hardware fixes." },
  { title: "Software Troubleshooting", description: "Resolve software issues efficiently." },
  { title: "Laptop Upgrades", description: "Boost your laptop with RAM, SSD upgrades." },
];

const Hero = () => {
  const videoRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [showCards, setShowCards] = useState(false);

  const fullText = "A1 LAPTOP SERVICE CENTER";

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.9;

    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setShowCards(true);
      }
    }, 70); // faster typing
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-4 md:px-0">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover top-0 left-0"
      >
        <source src="/a1-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute w-full h-full top-0 left-0 bg-black/40"></div>
      <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-black/90 to-transparent pointer-events-none"></div>

      {/* Floating blobs */}
      <motion.div
        className="absolute top-10 left-10 w-36 h-36 bg-cyan-400/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-52 h-52 bg-pink-400/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-400/20 rounded-full filter blur-3xl"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Hero Title */}
      <h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white z-10 leading-tight"
        style={{
          textShadow: `
            0 0 5px #0a3d62, 
            0 0 10px #0a3d62, 
            0 0 15px #0a3d62
          `,
        }}
      >
        {typedText}
      </h1>

      {/* Hero Subtitle */}
      <motion.p
        className="hidden md:block text-lg md:text-2xl lg:text-3xl text-gray-200 mt-10 max-w-2xl z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
      >
        “Serving a loyal customer base with quality laptop repairs Since 2015”
      </motion.p>

      {/* Services Cards */}
      {showCards && (
        <motion.div
          className="mt-10 md:mt-20 flex flex-col md:flex-row gap-8 z-10 relative px-4 md:px-20 w-full max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 flex-1 cursor-pointer border border-white/20 hover:border-cyan-400/40 hover:shadow-xl hover:scale-105 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-gray-300">{s.description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
