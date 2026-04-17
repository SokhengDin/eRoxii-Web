"use client";

import { useEffect, useState } from "react";
import { Nav } from "@/components/Nav";
import { Hero, Stats } from "@/components/Hero";
import { Products, HowItWorks, Investor, Blog, Footer } from "@/components/Sections";
import { TRANSLATIONS, type Lang } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Lang>("km");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("eroxii:lang") as Lang)) || null;
    if (saved === "en" || saved === "km") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("eroxii:lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = TRANSLATIONS[lang];

  return (
    <main className={lang === "km" ? "km-font" : ""}>
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} lang={lang} />
      <Stats t={t} />
      <Products t={t} />
      <HowItWorks t={t} />
      <Investor t={t} lang={lang} />
      <Blog t={t} />
      <Footer t={t} />
    </main>
  );
}
