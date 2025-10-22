

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
        {/* About */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">A1 LAPTOPS</h3>
          <p className="text-sm leading-relaxed max-w-xs mx-auto lg:mx-0">
            A1 LAPTOPS Solutions is a high-quality computer repair company
            focused on delivering outstanding laptop services and providing
            digital solutions.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="/services" className="hover:text-cyan-400 transition">Services</a></li>
            <li><a href="/product" className="hover:text-cyan-400 transition">Product</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/blog" className="hover:text-cyan-400 transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-cyan-400 transition">Contact Us</a></li>
            <li><a href="/support" className="hover:text-cyan-400 transition">Support</a></li>
          </ul>
        </div>

        {/* Social / Follow Us */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex justify-center lg:justify-start gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition text-sm"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition text-sm"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs md:text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} A1 LAPTOPS Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
