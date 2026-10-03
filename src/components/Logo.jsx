import { useState, useEffect } from "react";
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
  // move left as user scrolls down
  const x = useTransform(scrollY, [0, 400], [0, -120]);

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  // track viewport width to choose menu shape
  const [isLarge, setIsLarge] = useState(false);
  useEffect(() => {
    function update() {
      setIsLarge(window.innerWidth >= 1024);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // shake when user scrolls: set a short-lived 'shaking' state
  const [shaking, setShaking] = useState(false);
  useEffect(() => {
    let t = null;
    function onScroll() {
      setShaking(true);
      clearTimeout(t);
      t = setTimeout(() => setShaking(false), 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="relative">
      <motion.a
        href="#home"
        onClick={toggleMenu}
        style={{
          scale,
          opacity,
          y,
          x,
        }}
        animate={shaking ? { x: [0, -6, 6, -4, 4, 0] } : undefined}
        transition={shaking ? { duration: 0.6 } : undefined}
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
          <>
            {isLarge ? (
              // Vertical sidebar on large screens (right-aligned)
              <motion.nav
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.18 }}
                className="fixed top-20 left-6 z-50 w-56 bg-black/95 rounded-r-2xl border border-cyan-600/8 shadow-2xl overflow-hidden"
              >
                <ul className="flex flex-col items-stretch py-4 text-white text-lg">
                  {[
                    ["Services", "#services"],
                    ["Portfolio", "#portfolio"],
                    ["About", "#about"],
                    ["Contact", "#contact"],
                    ["Testimonials", "#testimonials"],
                  ].map(([label, href]) => (
                    <li key={label} className="border-b border-cyan-600/6">
                      <a
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-left px-6 py-4 hover:text-cyan-400 transition"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            ) : (
              // Floating speech-bubble for small screens (larger tail)
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.96 }}
                transition={{ duration: 0.22 }}
                className="absolute top-full left-1/2 mt-3 -translate-x-1/2 w-72 bg-black/95 backdrop-blur-lg rounded-2xl border border-cyan-600/10 shadow-2xl overflow-hidden"
              >
                {/* large speech tail */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <svg width="48" height="28" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 28L0 0H48L24 28Z" fill="rgba(0,0,0,0.95)" />
                  </svg>
                </div>

                <ul className="flex flex-col items-stretch py-4 text-white text-lg">
                  {[
                    ["Services", "#services"],
                    ["Portfolio", "#portfolio"],
                    ["About", "#about"],
                    ["Contact", "#contact"],
                    ["Testimonials", "#testimonials"],
                  ].map(([label, href]) => (
                    <li key={label} className="border-t last:border-b-0 border-cyan-600/5">
                      <a
                        href={href}
                        onClick={() => setMenuOpen(false)}
                        className="block text-center py-4 hover:text-cyan-400 transition"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}