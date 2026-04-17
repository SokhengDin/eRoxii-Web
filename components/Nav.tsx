"use client";

import { useState } from "react";
import { Wordmark } from "./Wordmark";
import { Menu } from "./Icons";
import type { Lang, Translation } from "@/lib/translations";

export function Nav({ t, lang, setLang }: { t: Translation; lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const items: [string, string][] = [
    ["home", t.nav.home],
    ["products", t.nav.products],
    ["useCases", t.nav.useCases],
    ["blog", t.nav.blog],
    ["contact", t.nav.contact],
  ];
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#0D1F6B]/15">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[84px] flex items-center justify-between">
        <Wordmark logoSize={44} />
        <nav className="hidden md:flex items-center gap-8">
          {items.map(([k, label]) => (
            <a key={k} href={`#${k}`} className="text-sm text-[#0D1F6B]/80 hover:text-[#0D1F6B] transition-colors relative py-1">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <button className="md:hidden text-[#0D1F6B]" onClick={() => setOpen((o) => !o)} aria-label="menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#0D1F6B]/10 px-6 py-3 flex flex-col gap-3">
          {items.map(([k, label]) => (
            <a key={k} href={`#${k}`} onClick={() => setOpen(false)} className="text-sm text-[#0D1F6B]">
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex items-center border border-[#0D1F6B]/30 text-[11px] font-mono tracking-wider">
      <button
        className={`px-2.5 py-1.5 ${lang === "en" ? "bg-[#0D1F6B] text-white" : "text-[#0D1F6B]"}`}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <button
        className={`px-2.5 py-1.5 km-font text-[12px] ${lang === "km" ? "bg-[#0D1F6B] text-white" : "text-[#0D1F6B]"}`}
        onClick={() => setLang("km")}
      >
        ខ្មែរ
      </button>
    </div>
  );
}
