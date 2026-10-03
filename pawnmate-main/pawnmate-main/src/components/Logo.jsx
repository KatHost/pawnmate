import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

export default function Logo() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  // Shrink logo while scrolling
  const scale = useTransform(scrollY, [0, 300], [1, 0.75]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85]);
  const y = useTransform(scrollY, [0, 300], [0, -5]);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <motion.a
        href="#home"
        onClick={toggleMenu}
        style={{
          scale,
          opacity,
          y,
        }}
        whileHover={{
          textShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
        }}
        className="text-2xl font-bold tracking-widest"
      >
        <span className="text-white">ARTR</span>
        <span className="text-amber-400">ƎE</span>
        <span className="text-white">LAND</span>

      </motion.a>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-cyan-500/20"
          >
            <ul className="flex flex-col items-center py-8 gap-6 text-white text-lg">
              <li>
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}