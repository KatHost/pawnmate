import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp({ phone = "+27818635629", message = "Hi! I'm interested in your services." }) {
  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone.replace(/[^0-9]/g,"")}?text=${encoded}`;

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group floating-btn flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl hover:scale-105 transform transition"
      >
        <FaWhatsapp className="text-2xl drop-shadow-lg" />
      </a>

      <style>{`
        .floating-btn { animation: float 3.6s ease-in-out infinite; }
        .floating-btn:hover { animation-play-state: paused; }

        .group::after {
          content: '';
          position: absolute;
          right: 6px;
          bottom: 6px;
          width: 54px;
          height: 54px;
          border-radius: 9999px;
          box-shadow: 0 10px 30px rgba(16,185,129,0.15);
          opacity: 0.9;
          z-index: -1;
          animation: pulse 2.8s infinite ease-in-out;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.45; }
          50% { transform: scale(1.08); opacity: 0.25; }
          100% { transform: scale(1); opacity: 0.45; }
        }

        @media (prefers-reduced-motion: reduce) {
          .group::after { animation: none; }
          .group { transition: none; }
          .floating-btn { animation: none; }
        }
      `}</style>
    </div>
  );
}
