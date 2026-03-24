import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import useFadeIn from "../hooks/useFadeIn";

export default function Home() {
  const { t } = useLang();
  useFadeIn();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest to-green-mid min-h-[85vh] flex items-center">
      {/* Background decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-mid/10 rounded-full blur-2xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 w-full">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-start">
          <h1 className="fade-in stagger-1 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t.heroTitle}
          </h1>
          <p className="fade-in stagger-2 text-white/80 text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
            {t.heroSubtitle}
          </p>
          <div className="fade-in stagger-3">
            <Link
              to="/contact"
              className="inline-block bg-kraft text-forest font-semibold px-8 py-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {t.heroCta}
            </Link>
          </div>
        </div>

        {/* Decorative SVG — stacked cardboard + recycling */}
        <div className="fade-in stagger-2 flex-shrink-0">
          <svg
            width="320"
            height="280"
            viewBox="0 0 320 280"
            fill="none"
            className="drop-shadow-2xl"
          >
            {/* Bottom box */}
            <rect x="60" y="140" width="200" height="100" rx="8" fill="#C9A96E" opacity="0.9" />
            <rect x="60" y="140" width="200" height="100" rx="8" stroke="#8B5E3C" strokeWidth="2" />
            <line x1="160" y1="140" x2="160" y2="240" stroke="#8B5E3C" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="60" y1="190" x2="260" y2="190" stroke="#8B5E3C" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Middle box */}
            <rect x="80" y="80" width="180" height="80" rx="8" fill="#D4B896" opacity="0.9" />
            <rect x="80" y="80" width="180" height="80" rx="8" stroke="#8B5E3C" strokeWidth="2" />
            <line x1="170" y1="80" x2="170" y2="160" stroke="#8B5E3C" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Top box */}
            <rect x="100" y="30" width="140" height="70" rx="8" fill="#E8D5B7" opacity="0.9" />
            <rect x="100" y="30" width="140" height="70" rx="8" stroke="#8B5E3C" strokeWidth="2" />
            <line x1="170" y1="30" x2="170" y2="100" stroke="#8B5E3C" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Recycling arrows */}
            <g transform="translate(230, 10)">
              <path
                d="M30 5 L45 25 L35 25 L35 45 L25 45 L25 25 L15 25 Z"
                fill="#52B788"
                opacity="0.8"
                transform="rotate(0, 30, 25)"
              />
              <path
                d="M30 5 L45 25 L35 25 L35 45 L25 45 L25 25 L15 25 Z"
                fill="#52B788"
                opacity="0.8"
                transform="rotate(120, 30, 25)"
              />
              <path
                d="M30 5 L45 25 L35 25 L35 45 L25 45 L25 25 L15 25 Z"
                fill="#52B788"
                opacity="0.8"
                transform="rotate(240, 30, 25)"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
