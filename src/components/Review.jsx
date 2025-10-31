import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    text: "Excellent service! My laptop feels brand new. Highly recommended.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Sneha Patel",
    text: "Very professional and quick service. Great experience overall!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Amit Verma",
    text: "Affordable rates and honest advice. Loved the transparency!",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Kiran Das",
    text: "Fixed my MacBook in just one day. Super happy with the result!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Ananya Singh",
    text: "The team is friendly and efficient. Highly satisfied with the repair.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Mohit Gupta",
    text: "Fast and reliable. My go-to place for laptop issues.",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=6",
  },
  {
    name: "Pooja Nair",
    text: "Great service, they even helped me recover lost data. Thank you!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=7",
  },
  {
    name: "Rohit Mehta",
    text: "Loved the ambience and support. Definitely coming back!",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=8",
  },
  {
    name: "Priya Iyer",
    text: "Best repair center in town. Polite staff and quick turnaround.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=9",
  },
  {
    name: "Vikram Kumar",
    text: "Top-notch service quality. I’m impressed!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=10",
  },
];

export default function ReviewCarousel() {
  const controls = useAnimation();
  const scrollRef = useRef(null);

  // Infinite scroll effect
  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth / 2;

    const animateScroll = async () => {
      while (true) {
        await controls.start({
          x: -scrollWidth,
          transition: { duration: 25, ease: "linear" },
        });
        controls.set({ x: 0 });
      }
    };

    animateScroll();
  }, [controls]);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Clients Say</h2>

      <div className="overflow-hidden w-full max-w-7xl">
        <motion.div
          ref={scrollRef}
          animate={controls}
          className="flex space-x-6 px-4"
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[320px] bg-white shadow-lg rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-800">{r.name}</p>
                  <p className="text-yellow-500 text-sm">
                    {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-3 italic">“{r.text}”</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
