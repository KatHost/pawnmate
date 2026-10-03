import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Mdau",
    company: "Tech Solutions",
    review:
      "Working with Artreeland was an amazing experience. They delivered a modern website that exceeded our expectations.",
  },
  {
    name: "Sarah Johnson",
    company: "Marketing Director",
    review:
      "Professional, creative and always available. Our new brand identity completely transformed our business.",
  },
  {
    name: "Michael Brown",
    company: "IT Solutions",
    review:
      "Excellent communication and outstanding quality. I highly recommend Artreeland for any digital project.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            We build lasting relationships through creativity,
            quality and exceptional customer service.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((client, index) => (

            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg"
            >

              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400 mr-1"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-300">
                "{client.review}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-white">
                  {client.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  {client.company}
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
