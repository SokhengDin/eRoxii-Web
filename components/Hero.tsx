"use client";

import { Arrow } from "./Icons";
import { DashboardCard } from "./DashboardCard";
import type { Lang, Translation } from "@/lib/translations";

export function Hero({ t, lang }: { t: Translation; lang: Lang }) {
  return (
    <section id="home" className="relative border-b border-[#0D1F6B]/15">
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-[1280px] mx-auto h-full px-6 lg:px-10 grid grid-cols-12">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className={`border-l border-[#0D1F6B]/5 ${i === 12 ? "border-r" : ""}`} />
          ))}
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] text-[#0D1F6B]/70 border border-[#0D1F6B]/20 px-2.5 py-1.5">
            <span className="w-1 h-1 bg-[#0D1F6B]" />
            {t.hero.eyebrow}
          </div>
          <h1 className={`mt-6 text-[#0D1F6B] font-semibold tracking-tight text-[44px] sm:text-[60px] lg:text-[76px] leading-[0.98] ${lang === "km" ? "km-hero" : ""}`}>
            {t.hero.h1a}
            <br />
            <span className="text-[#0D1F6B]/60">{t.hero.h1b}</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] lg:text-[17px] leading-relaxed text-[#0D1F6B]/75">
            {t.hero.sub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="group inline-flex items-center gap-2 bg-[#0D1F6B] text-white px-5 py-3 text-sm font-medium hover:bg-[#0D1F6B]/90 transition-colors">
              {t.hero.cta1}
              <span className="transition-transform group-hover:translate-x-0.5"><Arrow /></span>
            </button>
            <button className="group inline-flex items-center gap-2 bg-white text-[#0D1F6B] px-5 py-3 text-sm font-medium border border-[#0D1F6B] hover:bg-[#0D1F6B]/5 transition-colors">
              {t.hero.cta2}
              <span className="transition-transform group-hover:translate-x-0.5"><Arrow /></span>
            </button>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono tracking-[0.18em] text-[#0D1F6B]/50">
            <span>◉ LIVE @ STN-01…08</span>
            <span className="hidden sm:inline w-px h-3 bg-[#0D1F6B]/20" />
            <span>YOLOv8 · TensorRT · Modbus RTU</span>
            <span className="hidden sm:inline w-px h-3 bg-[#0D1F6B]/20" />
            <span>UPTIME 99.7%</span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <DashboardCard t={t} />
        </div>
      </div>
    </section>
  );
}

export function Stats({ t }: { t: Translation }) {
  return (
    <section className="bg-[#0D1F6B] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20 border-x border-white/20">
          {t.stats.map((s, i) => (
            <div key={i} className="px-6 py-8 lg:py-10">
              <div className="text-[42px] lg:text-[52px] leading-none font-semibold tracking-tight">{s.n}</div>
              <div className="mt-3 text-[11px] font-mono tracking-[0.16em] uppercase opacity-75">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
