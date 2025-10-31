import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const reviews = [
  {
    name: "Pavan Kumar",
    text: "Excellent service! My laptop issue was fixed quickly with great communication and smooth pickup and delivery. Very professional and timely support!",
    rating: 5,
  },
  {
    name: "Gopal Naik",
    text: "Had my keyboard replaced here. The technician worked carefully and explained everything. Super satisfied with the service!",
    rating: 5,
  },
  {
    name: "Guruprasad A",
    text: "Fast and professional repair at a reasonable price. A1 Computers is my go-to for any laptop issue. Highly recommended!",
    rating: 4,
  },
  {
    name: "Sarthak S Kumar",
    text: "Using their service for over a year. Genuine, transparent, and reliable. The best support and quality I've experienced.",
    rating: 5,
  },
  {
    name: "Sahil Kr",
    text: "My GPU got replaced at almost half the official cost. Honest, transparent, and highly skilled. Worth every rupee!",
    rating: 5,
  },
  {
    name: "Ravi Raj Singh",
    text: "Owner is polite and trustworthy. My dead laptop came back to life! Thank you for the great service.",
    rating: 5,
  },
  {
    name: "Siddhant Vijay",
    text: "Apple care quoted 20k, they fixed it for 7.5k with genuine parts. Fantastic service experience!",
    rating: 5,
  },
  {
    name: "Tathagata Sau",
    text: "The best laptop service I’ve seen. Burnt IC fixed and everything works like new now. Highly trustworthy!",
    rating: 5,
  },
  {
    name: "Pratham Patel",
    text: "They fixed faulty ICs instead of replacing the motherboard, saving me a lot! Honest and efficient work.",
    rating: 5,
  },
  {
    name: "Channabasavana Gowda",
    text: "Water-damaged laptop fully restored with all data recovered. Exceptional and professional service!",
    rating: 5,
  },
];

export default function ReviewCarousel() {
  const controls = useAnimation();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth / 2;

    const animateScroll = async () => {
      while (true) {
        await controls.start({
          x: -scrollWidth,
          transition: { duration: 180, ease: "linear" },
        });
        controls.set({ x: 0 });
      }
    };

    animateScroll();
  }, [controls]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-14 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 tracking-tight">
        What Our Clients Say
      </h2>

      <div className="overflow-hidden w-full max-w-7xl">
        <motion.div
          ref={scrollRef}
          animate={controls}
          className="flex space-x-6 px-4"
        >
          {[...reviews, ...reviews].map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[280px] md:min-w-[320px] max-w-[320px] bg-white shadow-md hover:shadow-2xl rounded-2xl p-6 border border-gray-200 transition-all duration-300 flex-shrink-0"
            >
              <div className="flex flex-col h-full">
                <div className="mb-3">
                  <p className="font-semibold text-gray-800 text-lg">{r.name}</p>
                  <p className="text-yellow-500 text-sm">
                    {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                  </p>
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed flex-grow">
                  “{r.text}”
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
