import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["home", "services", "products", "about", "contact"]; // must match section IDs

  const handleNavClick = (link) => {
    const target = document.getElementById(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // Hamburger animation variants
  const topBottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };
  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };
  const middleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="container mx-auto px-5 py-3 flex justify-between items-center backdrop-blur-lg bg-white/20 rounded-b-3xl shadow-md">
        {/* Logo */}
        <div
          className="flex items-center gap-2 text-primary font-extrabold text-2xl cursor-pointer select-none"
          onClick={() => handleNavClick("home")}
        >
          <FaLaptopCode size={28} />
          <span>A1 LAPTOP</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium text-gray-800">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="hover:text-cyan-500 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link);
              }}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div
          className="md:hidden flex flex-col justify-between w-7 h-6 cursor-pointer z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <motion.span
            className="block h-1 w-full bg-gray-800 rounded-lg"
            variants={topBottomVariants}
            animate={menuOpen ? "open" : "closed"}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
          <motion.span
            className="block h-1 w-full bg-gray-800 rounded-lg"
            variants={middleVariants}
            animate={menuOpen ? "open" : "closed"}
            transition={{ duration: 0.15 }}
          />
          <motion.span
            className="block h-1 w-full bg-gray-800 rounded-lg"
            variants={bottomVariants}
            animate={menuOpen ? "open" : "closed"}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-11/12 bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col items-center overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="py-3 w-full text-center border-b border-white/30 hover:bg-white/10 transition-colors text-gray-800 font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
