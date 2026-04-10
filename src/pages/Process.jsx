import { useLang } from "../context/LangContext";
import useFadeIn from "../hooks/useFadeIn";

const stepIcons = [
  // Phone / contact
  <svg key="s1" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="10" y="4" width="20" height="32" rx="4" stroke="#52B788" strokeWidth="2" />
    <circle cx="20" cy="30" r="2" fill="#52B788" />
    <line x1="15" y1="8" x2="25" y2="8" stroke="#52B788" strokeWidth="1.5" />
  </svg>,
  // Truck / collect
  <svg key="s2" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="4" y="14" width="22" height="14" rx="2" stroke="#52B788" strokeWidth="2" />
    <path d="M26 18h6l4 6v4h-10V18z" stroke="#52B788" strokeWidth="2" fill="none" />
    <circle cx="12" cy="30" r="3" stroke="#8B5E3C" strokeWidth="2" />
    <circle cx="32" cy="30" r="3" stroke="#8B5E3C" strokeWidth="2" />
  </svg>,
  // Gears / process
  <svg key="s3" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="16" cy="20" r="7" stroke="#52B788" strokeWidth="2" />
    <circle cx="16" cy="20" r="3" fill="#52B788" />
    <circle cx="28" cy="14" r="5" stroke="#8B5E3C" strokeWidth="2" />
    <circle cx="28" cy="14" r="2" fill="#8B5E3C" />
    <circle cx="30" cy="28" r="4" stroke="#52B788" strokeWidth="1.5" />
  </svg>,
  // Handshake / sell
  <svg key="s4" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M6 22l8-8 6 4 8-6 6 6" stroke="#52B788" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 18v12h6V18" stroke="#8B5E3C" strokeWidth="2" />
    <circle cx="20" cy="34" r="2" fill="#52B788" />
  </svg>,
];

const CheckBullet = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
    <path d="M6 10l3 3 5-5" stroke="#52B788" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Process() {
  const { t } = useLang();
  useFadeIn();

  const steps = [
    {
      num: "01",
      title: t.step1Title,
      desc: t.step1Desc,
      long: t.step1Long,
      bullets: t.step1Bullets,
      icon: stepIcons[0],
      image: "/pic4.jpeg",
      imageAlt: "ECO VALOR sorted collection bins",
    },
    {
      num: "02",
      title: t.step2Title,
      desc: t.step2Desc,
      long: t.step2Long,
      bullets: t.step2Bullets,
      icon: stepIcons[1],
      image: "/pic1.jpeg",
      imageAlt: "ECO VALOR truck collecting cardboard and plastic",
    },
    {
      num: "03",
      title: t.step3Title,
      desc: t.step3Desc,
      long: t.step3Long,
      bullets: t.step3Bullets,
      icon: stepIcons[2],
      image: "/pic3.jpeg",
      imageAlt: "Industrial baling machine compressing cardboard",
    },
    {
      num: "04",
      title: t.step4Title,
      desc: t.step4Desc,
      long: t.step4Long,
      bullets: t.step4Bullets,
      icon: stepIcons[3],
      image: "/pic6.jpeg",
      imageAlt: "ECO VALOR workers sorting and baling materials",
    },
  ];

  return (
    <section className="py-20 bg-kraft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            {t.processTitle}
          </h2>
          <p className="text-brown/80 text-lg">{t.processSubtitle}</p>
          <div className="mt-6 mx-auto w-24 h-1 bg-green-mid rounded-full animate-draw-line" />
        </div>

        {/* Desktop: horizontal timeline overview */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-green-mid/30" />

            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="scale-in text-center"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <div className="relative mx-auto w-32 h-32 rounded-full bg-white border-4 border-green-mid flex flex-col items-center justify-center shadow-md mb-6 z-10 animate-pulse-green group hover:border-forest transition-colors duration-500">
                    <span className="text-green-mid text-2xl font-bold font-heading group-hover:text-forest transition-colors duration-500">
                      {step.num}
                    </span>
                    <div className="mt-1 transition-transform duration-500 group-hover:scale-110">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-forest mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brown/70 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline overview */}
        <div className="lg:hidden mb-16">
          <div className="relative">
            <div className="absolute top-0 bottom-0 start-8 w-0.5 bg-green-mid/30" />
            <div className="space-y-10">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="fade-in flex items-start gap-6 relative"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-white border-4 border-green-mid flex items-center justify-center shadow-md animate-pulse-green">
                    <span className="text-green-mid text-lg font-bold font-heading">
                      {step.num}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-lg font-bold text-forest mb-1">
                      {step.title}
                    </h3>
                    <p className="text-brown/70 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery strip — pic2 */}
        <div className="fade-in mb-16 rounded-2xl overflow-hidden shadow-lg relative group">
          <img
            src="/pic2.jpeg"
            alt="ECO VALOR cardboard and plastic collection bins"
            className="w-full h-56 sm:h-72 object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div>
              <span className="inline-block bg-green-mid text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                Eco Valor Tlemcen
              </span>
              <p className="text-white font-heading text-xl sm:text-2xl font-bold drop-shadow">
                {t.processSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed step descriptions */}
        <div className="space-y-20">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={`detail-${i}`}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 items-stretch`}
              >
                {/* Step image */}
                <div
                  className={`flex-shrink-0 w-full lg:w-[420px] ${
                    isEven ? "slide-in-left" : "slide-in-right"
                  }`}
                  style={{ transitionDelay: "0.1s" }}
                >
                  <div className="relative h-64 sm:h-72 lg:h-full min-h-[280px] rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Step number badge overlaid on image */}
                    <div className="absolute top-4 start-4 w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm border-2 border-green-mid flex flex-col items-center justify-center shadow-md">
                      <span className="text-green-mid text-lg font-heading font-bold leading-none">
                        {step.num}
                      </span>
                      <div className="mt-0.5 scale-75">{step.icon}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 ${
                    isEven ? "slide-in-right" : "slide-in-left"
                  }`}
                  style={{ transitionDelay: "0.2s" }}
                >
                  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <h3 className="font-heading text-2xl font-bold text-forest mb-4">
                      {step.title}
                    </h3>
                    <p className="text-brown/80 leading-relaxed mb-5 text-lg">
                      {step.long}
                    </p>
                    <ul className="space-y-2">
                      {step.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-brown/70"
                        >
                          <CheckBullet />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
