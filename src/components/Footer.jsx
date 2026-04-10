import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";

export default function Footer() {
  const { t } = useLang();

  const links = [
    { to: "/", label: t.navHome },
    { to: "/services", label: t.navServices },
    { to: "/processus", label: t.navProcess },
    { to: "/contact", label: t.navContact },
  ];

  return (
    <footer className="bg-forest text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/ecovaleur.png"
                alt="Eco Valor Tlemcen"
                className="h-14 w-auto"
              />
              <span className="text-white font-heading text-lg font-bold">
                Eco Valor
              </span>
            </div>
            <p className="text-white/60 text-sm">{t.footerTagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-green-mid font-semibold mb-3">
              {t.footerLinks}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-green-mid transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social icons */}
          <div>
            <h3 className="text-green-mid font-semibold mb-3">Social</h3>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61576425272740"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-mid/30 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/eco.valortlm?igsh=MXF6aTQ4ODQ4Z2s0bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-mid/30 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@eco.valor.tlm?_r=1&_t=ZS-954FOsgeswD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-mid/30 hover:scale-110 transition-all duration-300"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.014 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c-.01 2.37-1.1 4.74-3.08 6.07-1.88 1.25-4.32 1.55-6.42.79-2.07-.73-3.77-2.3-4.52-4.36-.75-2.08-.55-4.49.56-6.4 1.12-1.92 3.1-3.23 5.31-3.48v4.18c-1.43.14-2.82 1.09-3.45 2.4-.64 1.3-.46 2.89.47 3.96.95 1.09 2.5 1.5 3.9.96 1.41-.53 2.36-1.85 2.45-3.35v-16.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          {t.footerRights}
        </div>
      </div>
    </footer>
  );
}
