import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";
import useFadeIn from "../hooks/useFadeIn";

function AnimatedCounter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const num = parseInt(target.replace(/[^0-9]/g, ""), 10);
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {target.startsWith("+") ? "+" : ""}
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const { t } = useLang();
  useFadeIn();

  const stats = [
    { value: t.heroStat1, label: t.heroStat1Label },
    { value: t.heroStat2, label: t.heroStat2Label },
    { value: t.heroStat3, label: t.heroStat3Label },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-forest via-forest to-green-mid animate-gradient min-h-[90vh] flex items-center">
        {/* Animated background shapes */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-5 w-56 h-56 bg-green-mid/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-green-mid/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />

        {/* Decorative spinning recycling symbol */}
        <div className="absolute bottom-10 right-10 opacity-5 animate-spin-slow">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="white">
            <path d="M50 10 L60 30 L55 30 L55 45 L45 45 L45 30 L40 30 Z" />
            <path d="M50 10 L60 30 L55 30 L55 45 L45 45 L45 30 L40 30 Z" transform="rotate(120 50 50)" />
            <path d="M50 10 L60 30 L55 30 L55 45 L45 45 L45 30 L40 30 Z" transform="rotate(240 50 50)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 w-full relative z-10">
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
                className="inline-block bg-kraft text-forest font-semibold px-8 py-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                {t.heroCta}
              </Link>
            </div>
          </div>

          {/* Decorative SVG — stacked cardboard + recycling */}
          <div className="fade-in stagger-2 flex-shrink-0 animate-float">
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
                <path d="M30 5 L45 25 L35 25 L35 45 L25 45 L25 25 L15 25 Z" fill="#52B788" opacity="0.8" />
                <path d="M30 5 L45 25 L35 25 L35 45 L25 45 L25 25 L15 25 Z" fill="#52B788" opacity="0.8" transform="rotate(120, 30, 25)" />
                <path d="M30 5 L45 25 L35 25 L35 45 L25 45 L25 25 L15 25 Z" fill="#52B788" opacity="0.8" transform="rotate(240, 30, 25)" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-kraft py-16 -mt-1">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="scale-in text-center"
                style={{ transitionDelay: `${i * 0.2}s` }}
              >
                <div className="text-4xl sm:text-5xl font-heading font-bold text-forest mb-2 animate-pulse-green inline-block px-4 py-2 rounded-xl">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.value.includes("%") ? "%" : ""}
                  />
                </div>
                <p className="text-brown/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
