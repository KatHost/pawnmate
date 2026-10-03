import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "creative-website",
    title: "Creative Website",
    category: "Web Design",
    startingPrice: "R1,500 - R5,000",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description:
      "Custom websites focused on performance, accessibility and design that converts visitors into customers.",
    services: [
      "Responsive UI / UX design",
      "SEO-friendly markup",
      "CMS or headless integrations",
      "Performance optimization",
    ],
  },
  {
    id: "mobile-app",
    title: "Mobile Application",
    category: "App Development",
    startingPrice: "R11,000 - R80,000",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900",
    description:
      "Native and cross-platform mobile apps built for speed, reliability and delightful UX.",
    services: [
      "React Native / Expo development",
      "Native module integrations",
      "App store submission support",
      "Backend + realtime sync",
    ],
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    category: "Branding",
    startingPrice: "R4,500 - R15,000",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    description:
      "Strategic brand systems including naming, identity, style guides and assets for consistent storytelling.",
    services: [
      "Logo & mark design",
      "Visual identity system",
      "Brand guidelines",
      "Marketing asset templates",
    ],
  },
  {
    id: "dashboard-ui",
    title: "Dashboard UI",
    category: "UI / UX",
    startingPrice: "R6,500 - R30,000",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
    description:
      "Data-driven interfaces and dashboards that make complex information digestible and actionable.",
    services: [
      "Design systems & components",
      "Data visualization",
      "Prototyping & usability testing",
      "Accessibility reviews",
    ],
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    category: "Web Development",
    startingPrice: "R1,500 - R10,000",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900",
    description:
      "Full-featured e-commerce stores with conversion-first product pages, checkout flows and analytics.",
    services: [
      "Shopify / WooCommerce / custom carts",
      "Payments & subscriptions",
      "Inventory sync",
      "Conversion optimization",
    ],
  },
  {
    id: "creative-agency",
    title: "Creative Agency",
    category: "Marketing",
    startingPrice: "R7,500 - R50,000/month",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
    description:
      "Integrated campaigns and creative direction to help brands reach and engage their audiences.",
    services: [
      "Campaign strategy",
      "Content production",
      "Social media creative",
      "Performance marketing",
    ],
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelected(null);
    }

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="bg-slate-900 py-24 px-6 text-white"
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
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl bg-slate-800 shadow-xl cursor-pointer hover:shadow-cyan-500/20 transition-all"
              onClick={() => setSelected(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelected(project);
                }
              }}
            >
              <div className="overflow-hidden">
                {project.image}
              </div>

              <div className="p-6">
                <p className="text-cyan-400 text-sm">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400 border border-green-500/20">
                    From {project.startingPrice}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full bg-slate-800 rounded-2xl overflow-auto shadow-2xl"
            >
              <div className="p-6 md:p-8">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-cyan-400 text-sm">
                      {selected.category}
                    </p>

                    <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                      {selected.title}
                    </h3>

                    <div className="mt-3">
                      <span className="inline-flex items-center rounded-full bg-green-500/10 px-4 py-2 text-lg font-bold text-green-400 border border-green-500/20">
                        From {selected.startingPrice}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="bg-slate-700 hover:bg-slate-600 text-white rounded-full p-2"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">

                  {selected.image}

                  <div>
                    <p className="text-slate-300">
                      {selected.description}
                    </p>

                    <h4 className="mt-5 font-semibold text-slate-100">
                      How we deliver
                    </h4>

                    <ul className="mt-2 list-inside list-disc text-slate-300 space-y-1">
                      {selected.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-700/30 p-4">
                      <p className="text-sm text-slate-400">
                        Estimated Investment
                      </p>

                      <p className="text-2xl font-bold text-green-400 mt-1">
                        {selected.startingPrice}
                      </p>

                      <p className="text-sm text-slate-400 mt-2">
                        Final pricing depends on project scope,
                        integrations, content requirements,
                        custom functionality and timelines.
                      </p>
                    </div>

                    <div className="mt-6">
                      <a
                        href="#contact"
                        onClick={() => setSelected(null)}
                        className="inline-block bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition"
                      >
                        Get a Quote
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}

      </div>
    </section>
  );
}