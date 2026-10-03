import { motion } from "framer-motion";

const projects = [
  {
    title: "Creative Website",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
  },
  {
    title: "Mobile Application",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900",
  },
  {
    title: "Brand Identity",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
  {
    title: "Dashboard UI",
    category: "UI / UX",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
  },
  {
    title: "E-Commerce Store",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900",
  },
  {
    title: "Creative Agency",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Portfolio
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            A collection of creative projects crafted with
            passion, innovation and attention to detail.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-slate-800 shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-6">

                <p className="text-cyan-400 text-sm">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}