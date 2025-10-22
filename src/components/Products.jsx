import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg", name: "PC Build Starts From", price: "₹55,000" },
  { img: "https://images.pexels.com/photos/2582935/pexels-photo-2582935.jpeg", name: "Motherboard Repair", price: "₹5,000" },
  { img: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg", name: "Laptop Keyboard Repair", price: "₹1,200" },
  { img: "https://images.pexels.com/photos/28666524/pexels-photo-28666524.jpeg", name: "SSD Upgrade", price: "₹3,500" },
  { img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg", name: "Wireless Mouse", price: "₹800" },
  { img: "https://images.pexels.com/photos/32463116/pexels-photo-32463116.jpeg", name: "Laptop Charger", price: "₹1,200" },
  { img: "https://images.pexels.com/photos/13073600/pexels-photo-13073600.jpeg", name: "Screen Replacement", price: "₹10,500" },
  { img: "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg", name: "RAM Upgrade", price: "₹6,000" },
  { img: "https://images.pexels.com/photos/34338615/pexels-photo-34338615.jpeg", name: "Cooling Fan", price: "₹900" },
  { img: "https://images.pexels.com/photos/7639370/pexels-photo-7639370.jpeg", name: "Hinge Replacement", price: "₹1,500" },
  { img: "https://images.pexels.com/photos/18338417/pexels-photo-18338417.jpeg", name: "Graphics Card", price: "₹12,100" },
  { img: "https://images.pexels.com/photos/159376/turntable-top-view-audio-equipment-159376.jpeg", name: "Speaker Repair", price: "₹1,300" },
];

const Products = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="products" className="py-20 bg-gray-950 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white tracking-wide">
        Our <span className="text-cyan-400">Services & Products</span>
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <AnimatePresence>
          {(showAll || window.innerWidth >= 768 ? products : products.slice(0, 4)).map((p, i) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 shadow-lg backdrop-blur-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="bg-gray-900/70 rounded-2xl overflow-hidden flex flex-col items-center p-4">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-40 w-full object-cover rounded-xl mb-4 shadow-md hover:scale-105 transition-transform duration-500"
                />
                <h3 className="text-lg font-semibold text-white text-center">{p.name}</h3>
                <p className="text-cyan-400 font-bold mt-2">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less button only for mobile */}
      <div className="mt-12 text-center md:hidden">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Products;
