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
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className="transition-transform group-hover:rotate-12"
            >
              <circle cx="18" cy="18" r="17" stroke="#52B788" strokeWidth="2" />
              <path
                d="M18 8c-2 4-6 6-6 10a6 6 0 0 0 12 0c0-4-4-6-6-10z"
                fill="#52B788"
              />
              <path
                d="M12 22l3-3m6 3l-3-3m0-6v9"
                stroke="#1B4332"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-white font-heading text-xl font-bold">
              ♻ Eco Valeur
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-green-mid ${
                  location.pathname === link.to
                    ? "text-green-mid"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="ml-2 px-3 py-1 rounded-full bg-green-mid/20 text-green-mid text-sm font-semibold hover:bg-green-mid/30 transition-colors border border-green-mid/30"
            >
              {t.langToggle}
            </button>
          </div>

          {/* Hamburger */}
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
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
      {menuOpen && (
        <div className="md:hidden bg-forest/98 border-t border-green-mid/20">
          <div className="px-4 py-3 space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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
      )}
    </nav>
  );
}
