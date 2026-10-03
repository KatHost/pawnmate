import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={40} />,
    title: "Web Development",
    description:
      "Modern, responsive websites built for speed, performance, and growth.",
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: "Creative Design",
    description:
      "Beautiful branding, UI/UX design, and visual experiences that stand out.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "Mobile Apps",
    description:
      "Powerful Android and iOS applications with intuitive user experiences.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            We create digital products that combine creativity,
            technology and strategy to help businesses grow.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg transition overflow-hidden"
            >

              <motion.div
                className="w-full h-full"
                animate={{ x: [ -6, 6, -6 ] }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <div className="text-cyan-400">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>
              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}