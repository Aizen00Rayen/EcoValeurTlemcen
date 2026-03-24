import { useLang } from "../context/LangContext";
import useFadeIn from "../hooks/useFadeIn";

const CollectIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="8" y="16" width="32" height="24" rx="3" stroke="#52B788" strokeWidth="2.5" />
    <path d="M8 22h32" stroke="#52B788" strokeWidth="2" />
    <path d="M18 10h12l4 6H14l4-6z" stroke="#52B788" strokeWidth="2" fill="none" />
    <circle cx="24" cy="30" r="4" stroke="#8B5E3C" strokeWidth="2" />
  </svg>
);

const TriIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke="#52B788" strokeWidth="2.5" />
    <path d="M16 24h16M24 16v16" stroke="#52B788" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="18" cy="18" r="3" fill="#8B5E3C" opacity="0.6" />
    <circle cx="30" cy="30" r="3" fill="#8B5E3C" opacity="0.6" />
  </svg>
);

const CompactIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <rect x="10" y="8" width="28" height="32" rx="3" stroke="#52B788" strokeWidth="2.5" />
    <path d="M16 16h16M16 24h16M16 32h16" stroke="#8B5E3C" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 20l-4-4m0 0v8m0-8h8" stroke="#52B788" strokeWidth="2" strokeLinecap="round" />
    <path d="M38 28l4 4m0 0v-8m0 8h-8" stroke="#52B788" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ReventeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="18" stroke="#52B788" strokeWidth="2.5" />
    <path
      d="M20 18c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2-1.5 3-4 4m0 4v2"
      stroke="#8B5E3C"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path d="M18 30h12" stroke="#52B788" strokeWidth="2" strokeLinecap="round" />
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
      accent: "border-green-mid",
    },
    {
      icon: <TriIcon />,
      title: t.serviceTriTitle,
      desc: t.serviceTriDesc,
      accent: "border-brown",
    },
    {
      icon: <CompactIcon />,
      title: t.serviceCompactTitle,
      desc: t.serviceCompactDesc,
      accent: "border-brown",
    },
    {
      icon: <ReventeIcon />,
      title: t.serviceReventeTitle,
      desc: t.serviceReventeDesc,
      accent: "border-green-mid",
    },
  ];

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-brown/80 text-lg max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`fade-in bg-white rounded-xl p-8 border-l-4 ${service.accent} shadow-sm hover:shadow-lg hover:border-l-forest transition-all duration-300 transform hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-heading text-xl font-bold text-forest mb-3">
                {service.title}
              </h3>
              <p className="text-brown/70 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
