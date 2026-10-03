import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import Button from "./Button";
import arLogo from "../assets/AR logo.png";



export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Logo />

        <ul className="hidden md:flex gap-8 text-white items-center">
          <motion.a
            href="#home"
            className="fixed top-6 right-6 z-50"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.15,
              rotate: 5,
            }}
          >
            <img
              src={arLogo}
              alt="ARTREELAND"
              className="h-12 md:h-16 w-auto"
            />
          </motion.a>
        </ul>
      </div>
    </motion.nav>
  );
}