import { motion } from "framer-motion";

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
  },
  {
    number: "20+",
    label: "Happy Clients",
  },
  {
    number: "5+",
    label: "Years Experience",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-semibold uppercase tracking-widest">
            About Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            We Turn Creative Ideas Into Powerful Digital Experiences
          </h2>

          <p className="mt-8 text-slate-400 leading-8">
            At Artreeland, we combine creativity, technology and strategy to
            build websites, mobile applications and digital brands that inspire
            people and help businesses grow.
          </p>

          <p className="mt-6 text-slate-400 leading-8">
            Every project is crafted with attention to detail, modern design
            principles and high-performance development to ensure lasting
            results.
          </p>

          <button className="mt-10 rounded-full bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400 hover:scale-105">
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center shadow-lg"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {stat.number}
              </h3>

              <p className="mt-4 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}