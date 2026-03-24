import { useLang } from "../context/LangContext";
import useFadeIn from "../hooks/useFadeIn";

const CollectIcon = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
    <rect x="8" y="16" width="32" height="24" rx="3" stroke="#52B788" strokeWidth="2.5" />
    <path d="M8 22h32" stroke="#52B788" strokeWidth="2" />
    <path d="M18 10h12l4 6H14l4-6z" stroke="#52B788" strokeWidth="2" fill="none" />
    <circle cx="24" cy="30" r="4" stroke="#8B5E3C" strokeWidth="2" />
  </svg>
);

const TriIcon = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke="#52B788" strokeWidth="2.5" />
    <path d="M16 24h16M24 16v16" stroke="#52B788" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="18" cy="18" r="3" fill="#8B5E3C" opacity="0.6" />
    <circle cx="30" cy="30" r="3" fill="#8B5E3C" opacity="0.6" />
  </svg>
);

const CompactIcon = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
    <rect x="10" y="8" width="28" height="32" rx="3" stroke="#52B788" strokeWidth="2.5" />
    <path d="M16 16h16M16 24h16M16 32h16" stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 20l-4-4m0 0v8m0-8h8" stroke="#52B788" strokeWidth="2" strokeLinecap="round" />
    <path d="M38 28l4 4m0 0v-8m0 8h-8" stroke="#52B788" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ReventeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke="#52B788" strokeWidth="2.5" />
    <path d="M20 18c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2-1.5 3-4 4m0 4v2" stroke="#8B5E3C" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M18 30h12" stroke="#52B788" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="10" cy="10" r="9" stroke="#52B788" strokeWidth="1.5" />
    <path d="M6 10l3 3 5-5" stroke="#52B788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Services() {
  const { t } = useLang();
  useFadeIn();

  const services = [
    {
      icon: <CollectIcon />,
      title: t.serviceCollectTitle,
      desc: t.serviceCollectDesc,
      long: t.serviceCollectLong,
      bullets: t.serviceCollectBullets,
      accent: "border-green-mid",
      bgAccent: "bg-green-mid/5",
    },
    {
      icon: <TriIcon />,
      title: t.serviceTriTitle,
      desc: t.serviceTriDesc,
      long: t.serviceTriLong,
      bullets: t.serviceTriBullets,
      accent: "border-brown",
      bgAccent: "bg-brown/5",
    },
    {
      icon: <CompactIcon />,
      title: t.serviceCompactTitle,
      desc: t.serviceCompactDesc,
      long: t.serviceCompactLong,
      bullets: t.serviceCompactBullets,
      accent: "border-brown",
      bgAccent: "bg-brown/5",
    },
    {
      icon: <ReventeIcon />,
      title: t.serviceReventeTitle,
      desc: t.serviceReventeDesc,
      long: t.serviceReventeLong,
      bullets: t.serviceReventeBullets,
      accent: "border-green-mid",
      bgAccent: "bg-green-mid/5",
    },
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-brown/80 text-lg max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-green-mid rounded-full animate-draw-line" />
        </div>

        {/* Service cards overview — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, i) => (
            <div
              key={i}
              className={`fade-in bg-white rounded-xl p-8 border-l-4 ${service.accent} shadow-sm hover:shadow-xl hover:border-l-forest transition-all duration-500 transform hover:-translate-y-2 group`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-forest mb-3">
                {service.title}
              </h3>
              <p className="text-brown/70 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed service sections — alternating layout */}
        <div className="space-y-24">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={`detail-${i}`}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Icon side */}
                <div
                  className={`${
                    isEven ? "slide-in-left" : "slide-in-right"
                  } flex-shrink-0`}
                  style={{ transitionDelay: "0.1s" }}
                >
                  <div
                    className={`w-48 h-48 rounded-2xl ${service.bgAccent} flex items-center justify-center shadow-md animate-pulse-green`}
                  >
                    <div className="transform scale-150">{service.icon}</div>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={isEven ? "slide-in-right" : "slide-in-left"}
                  style={{ transitionDelay: "0.2s" }}
                >
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-forest mb-4">
                    {service.title}
                  </h3>
                  <p className="text-brown/80 leading-relaxed mb-6 text-lg">
                    {service.long}
                  </p>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-brown/70"
                      >
                        <CheckIcon />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
