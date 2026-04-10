import { createContext, useContext, useState, useEffect } from "react";
import translations from "../translations";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
