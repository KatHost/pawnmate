import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
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
          <p className="text-cyan-400 uppercase tracking-widest font-semibold">
            Contact
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            We'd love to hear about your project. Send us a message and we'll
            get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">

              <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-5">
                <FaEnvelope className="text-cyan-400 text-xl" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-400">
                    artreeland@icloud.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-5">
                <FaPhone className="text-cyan-400 text-xl" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-slate-400">
                    +27818635629
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-slate-800 p-5">
                <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-400">
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <a href="#" className="rounded-full bg-slate-800 p-4 hover:bg-cyan-500 transition">
                <FaFacebook />
              </a>

              <a href="#" className="rounded-full bg-slate-800 p-4 hover:bg-cyan-500 transition">
                <FaInstagram />
              </a>

              <a href="#" className="rounded-full bg-slate-800 p-4 hover:bg-cyan-500 transition">
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          

        </div>

      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full bg-cyan-500 p-4 shadow-lg hover:bg-cyan-400 transition"
      >
        <FaArrowUp />
      </button>
    </section>
  );
}