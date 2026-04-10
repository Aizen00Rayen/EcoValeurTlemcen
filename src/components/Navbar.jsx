import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LangContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: t.navHome },
    { to: "/services", label: t.navServices },
    { to: "/processus", label: t.navProcess },
    { to: "/contact", label: t.navContact },
  ];

  const toggleLang = () => setLang(lang === "fr" ? "ar" : "fr");

  return (
    <nav className="sticky top-0 z-50 bg-forest/95 backdrop-blur-md shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/ecovaleur.png"
              alt="Eco Valor Tlemcen"
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-white font-heading text-lg font-bold hidden sm:inline">
              Eco Valor
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-green-mid ${
                  location.pathname === link.to
                    ? "text-green-mid"
                    : "text-white/80"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-mid rounded-full" />
                )}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-1 rounded-full bg-green-mid/20 text-green-mid text-sm font-semibold hover:bg-green-mid/30 transition-all duration-300 border border-green-mid/30 hover:scale-105"
            >
              {t.langToggle}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-3 py-1 rounded-full bg-green-mid/20 text-green-mid text-sm font-semibold border border-green-mid/30"
            >
              {t.langToggle}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-1"
              aria-label="Menu"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-forest/98 border-t border-green-mid/20 px-4 py-3 space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-green-mid bg-green-mid/10"
                  : "text-white/80 hover:text-green-mid hover:bg-green-mid/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
