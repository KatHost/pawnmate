import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import Button from "./Button";
import heroImg from "../assets/hero.png";


export default function Hero() {
  const title = "Welcome to ArtreelandCreativeLab Agency";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold leading-tight text-white md:text-7xl"
        >
          We Build
          <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Beautiful Digital Experiences
          </span>
        </motion.h1>

        <motion.p className="mb-6 uppercase tracking-[0.3em] font-semibold">
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-clip-text text-transparent"
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
                rotate: [0, 2, -2, 0],
                textShadow: [
                  "0 0 5px rgba(34,211,238,0.4)",
                  "0 0 25px rgba(34,211,238,1)",
                  "0 0 5px rgba(34,211,238,0.4)",
                ],
              }}
              transition={{
                duration: 0.6 + Math.random() * 0.4,
                delay: index * 0.04,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: "easeInOut",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
        >
          <Button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Project
          </Button> 

          <a
            href="#portfolio"
            className="rounded-full border border-cyan-400 px-8 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
          >
            View Portfolio
          </a>
        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 text-cyan-400 text-3xl"
      >
        ↓
      </motion.div>

    </section>
  );
}