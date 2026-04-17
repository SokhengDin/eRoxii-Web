"use client";

import { Arrow, Ring, DialRing, Camera, CpuChip, GateIcon } from "./Icons";
import type { Lang, Translation } from "@/lib/translations";
import type { ReactNode } from "react";

export const CornerTicksNavy = () => (
  <>
    <span className="absolute top-0 left-0 w-3 h-px bg-[#0D1F6B]" />
    <span className="absolute top-0 left-0 w-px h-3 bg-[#0D1F6B]" />
    <span className="absolute top-0 right-0 w-3 h-px bg-[#0D1F6B]" />
    <span className="absolute top-0 right-0 w-px h-3 bg-[#0D1F6B]" />
    <span className="absolute bottom-0 left-0 w-3 h-px bg-[#0D1F6B]" />
    <span className="absolute bottom-0 left-0 w-px h-3 bg-[#0D1F6B]" />
    <span className="absolute bottom-0 right-0 w-3 h-px bg-[#0D1F6B]" />
    <span className="absolute bottom-0 right-0 w-px h-3 bg-[#0D1F6B]" />
  </>
);

const SectionHeader = ({ tag, title, sub }: { tag: string; title: string; sub?: string }) => (
  <div className="max-w-3xl">
    <div className="text-[11px] font-mono tracking-[0.22em] text-[#0D1F6B]/60">{tag}</div>
    <h2 className="mt-3 text-[#0D1F6B] text-[36px] lg:text-[52px] font-semibold tracking-tight leading-[1.05]">{title}</h2>
    {sub && <p className="mt-4 text-[#0D1F6B]/75 text-[15.5px] leading-relaxed">{sub}</p>}
  </div>
);

function ProductCard({ kicker, heading, title, body, tags, link, href, icon }: {
  kicker: string; heading: string; title: string; body: string; tags: readonly string[]; link: string; href: string; icon: ReactNode;
}) {
  return (
    <div className="group relative bg-white border border-[#0D1F6B]/15 hover:border-[#0D1F6B] transition-colors">
      <CornerTicksNavy />
      <div className="p-7 lg:p-9">
        <div className="flex items-start justify-between">
          <div className="text-[11px] font-mono tracking-[0.2em] text-[#0D1F6B]/60">{kicker}</div>
          <div className="text-[#0D1F6B]">{icon}</div>
        </div>
        <div className="mt-8 text-[12px] font-mono tracking-[0.18em] text-[#0D1F6B]/50 uppercase">{heading}</div>
        <h3 className="mt-2 text-[#0D1F6B] text-2xl lg:text-[28px] font-semibold leading-[1.15] tracking-tight">{title}</h3>
        <p className="mt-4 text-[14.5px] leading-relaxed text-[#0D1F6B]/75">{body}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-[11px] font-mono tracking-wider text-[#0D1F6B] border border-[#0D1F6B]/25 px-2 py-1 bg-[#0D1F6B]/[0.03]">{tag}</span>
          ))}
        </div>
        <a href={href} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#0D1F6B] border-b border-[#0D1F6B] pb-0.5 hover:gap-3 transition-all">
          {link}<Arrow />
        </a>
      </div>
    </div>
  );
}

export function Products({ t }: { t: Translation }) {
  return (
    <section id="products" className="py-20 lg:py-28 border-b border-[#0D1F6B]/15">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader tag={t.products.tag} title={t.products.title} sub={t.products.sub} />
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <ProductCard kicker={t.products.a.kicker} heading={t.products.a.heading} title={t.products.a.title} body={t.products.a.body} tags={t.products.a.tags} link={t.products.a.link} href="https://alpr-condo-271.eroxii.com/dashboard" icon={<Ring size={44} />} />
          <ProductCard kicker={t.products.b.kicker} heading={t.products.b.heading} title={t.products.b.title} body={t.products.b.body} tags={t.products.b.tags} link={t.products.b.link} href="https://solar-pi.eroxii.com/" icon={<DialRing size={44} />} />
        </div>
      </div>
    </section>
  );
}

export function HowItWorks({ t }: { t: Translation }) {
  const icons = [<Camera key="a" size={22} />, <CpuChip key="b" size={22} />, <GateIcon key="c" size={22} />];
  return (
    <section id="useCases" className="py-20 lg:py-28 bg-[#0D1F6B]/[0.04] border-b border-[#0D1F6B]/15">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader tag={t.how.tag} title={t.how.title} />
        <div className="mt-14 lg:mt-20 relative">
          <div className="hidden md:block absolute top-[34px] left-[8%] right-[8%] h-px border-t border-dashed border-[#0D1F6B]/30" />
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
            {t.how.steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-[68px] h-[68px] shrink-0 rounded-full border border-[#0D1F6B] flex items-center justify-center bg-white relative">
                    <div className="text-[#0D1F6B]">{icons[i]}</div>
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-2 bg-[#0D1F6B]" />
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-px h-2 bg-[#0D1F6B]" />
                    <span className="absolute top-1/2 -left-1 -translate-y-1/2 h-px w-2 bg-[#0D1F6B]" />
                    <span className="absolute top-1/2 -right-1 -translate-y-1/2 h-px w-2 bg-[#0D1F6B]" />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-[11px] font-mono tracking-[0.22em] text-[#0D1F6B]/60">STEP {s.n}</div>
                  <h4 className="mt-1 text-[#0D1F6B] text-xl lg:text-[22px] font-semibold tracking-tight">{s.t}</h4>
                  <p className="mt-2 text-[#0D1F6B]/75 text-[14.5px] leading-relaxed max-w-sm">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Investor({ t, lang }: { t: Translation; lang: Lang }) {
  return (
    <section id="contact" className="bg-[#0D1F6B] text-white py-20 lg:py-28 relative overflow-hidden">
      <svg className="absolute -right-40 -top-40 opacity-[0.06] hidden md:block" width="680" height="680" viewBox="0 0 680 680" fill="none" stroke="white" strokeWidth="1">
        <circle cx="340" cy="340" r="338" />
        <circle cx="340" cy="340" r="270" />
        <circle cx="340" cy="340" r="200" strokeDasharray="2 4" />
        <circle cx="340" cy="340" r="130" />
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2;
          const cos = Math.cos(a);
          const sin = Math.sin(a);
          const x1 = +(340 + cos * 338).toFixed(4);
          const y1 = +(340 + sin * 338).toFixed(4);
          const x2 = +(340 + cos * 318).toFixed(4);
          const y2 = +(340 + sin * 318).toFixed(4);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </svg>
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <div className="text-[11px] font-mono tracking-[0.22em] opacity-70">{t.investor.tag}</div>
          <h2 className={`mt-3 text-[36px] lg:text-[56px] font-semibold tracking-tight leading-[1.05] ${lang === "km" ? "km-hero" : ""}`}>{t.investor.h}</h2>
          <p className="mt-5 text-white/75 text-[15.5px] leading-relaxed max-w-2xl">{t.investor.body}</p>
          <a href="mailto:din.sokheng08@gmail.com" className="mt-8 inline-flex items-center gap-2 bg-white text-[#0D1F6B] px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors">
            {t.investor.cta}<Arrow />
          </a>
        </div>
        <div className="lg:col-span-4">
          <div className="grid grid-cols-1 divide-y divide-white/20 border border-white/20">
            {t.investor.metrics.map((m, i) => (
              <div key={i} className="px-5 py-4 flex items-baseline justify-between">
                <span className="text-[11px] font-mono tracking-[0.18em] opacity-70">{m.k}</span>
                <span className="text-lg font-medium">{m.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Blog({ t }: { t: Translation }) {
  return (
    <section id="blog" className="py-20 lg:py-28 border-b border-[#0D1F6B]/15">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader tag={t.blog.tag} title={t.blog.title} />
        <a href="https://sokhengdin.dev/projects/building-a-production-smart-parking-system-from-gate-to-payment" target="_blank" rel="noreferrer" className="mt-12 block group">
          <article className="grid md:grid-cols-12 border border-[#0D1F6B]/15 hover:border-[#0D1F6B] transition-colors">
            <div className="md:col-span-1 bg-[#0D1F6B] md:min-h-[260px] p-4 md:p-5 flex md:flex-col justify-between items-start text-white">
              <span className="text-[10px] font-mono tracking-[0.22em]">CS · 01</span>
            </div>
            <div className="md:col-span-11 p-7 lg:p-10">
              <div className="text-[11px] font-mono tracking-[0.22em] text-[#0D1F6B]/60">{t.blog.meta}</div>
              <h3 className="mt-3 text-[#0D1F6B] text-2xl lg:text-[32px] font-semibold tracking-tight leading-[1.15] max-w-3xl">{t.blog.post.title}</h3>
              <p className="mt-4 text-[#0D1F6B]/75 text-[15px] leading-relaxed max-w-3xl">{t.blog.post.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#0D1F6B] border-b border-[#0D1F6B] pb-0.5 group-hover:gap-3 transition-all">
                {t.blog.post.cta}<Arrow />
              </div>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
}

export function Footer({ t }: { t: Translation }) {
  return (
    <footer className="bg-white border-t border-[#0D1F6B]/15">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 lg:py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <FooterWordmark />
          <p className="mt-6 text-[14px] leading-relaxed text-[#0D1F6B]/75 max-w-sm">A Cambodian deep-tech studio shipping AI vision and IoT infrastructure — in production, in the field.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["YOLOv8", "TensorRT", "Modbus RTU", "TimescaleDB", "Docker Swarm"].map((x) => (
              <span key={x} className="text-[10px] font-mono tracking-[0.12em] text-[#0D1F6B]/70 border border-[#0D1F6B]/20 px-2 py-1">{x}</span>
            ))}
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="text-[11px] font-mono tracking-[0.22em] text-[#0D1F6B]/50">— NAVIGATE</div>
          <ul className="mt-4 space-y-2.5 text-[14px] text-[#0D1F6B]">
            <li><a href="#products" className="hover:underline underline-offset-4">{t.footer.products}</a></li>
            <li><a href="https://alpr-condo-271.eroxii.com/dashboard" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">ALPR Dashboard ↗</a></li>
            <li><a href="https://solar-pi.eroxii.com/" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Solar Dashboard ↗</a></li>
            <li><a href="#blog" className="hover:underline underline-offset-4">{t.footer.blog}</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-[11px] font-mono tracking-[0.22em] text-[#0D1F6B]/50">— CONTACT</div>
          <ul className="mt-4 space-y-2.5 text-[14px] text-[#0D1F6B]">
            <li className="flex items-start gap-2">
              <span className="text-[#0D1F6B]/40 font-mono text-[10px] tracking-[0.18em] mt-0.5 w-14 shrink-0">EMAIL</span>
              <div className="flex flex-col gap-1">
                <a href="mailto:din.sokheng08@gmail.com" className="hover:underline underline-offset-4">din.sokheng08@gmail.com</a>
                <a href="mailto:klengvireak@gmail.com" className="hover:underline underline-offset-4">klengvireak@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0D1F6B]/40 font-mono text-[10px] tracking-[0.18em] mt-0.5 w-14 shrink-0">TEL</span>
              <a href="tel:+855011542766" className="hover:underline underline-offset-4 font-mono">+855 011 542 766</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0D1F6B]/40 font-mono text-[10px] tracking-[0.18em] mt-0.5 w-14 shrink-0">LOC</span>
              <span className="font-mono">Phnom Penh, {t.footer.loc}</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0D1F6B]/40 font-mono text-[10px] tracking-[0.18em] mt-0.5 w-14 shrink-0">WEB</span>
              <a href="https://eroxii.com" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">eroxii.com ↗</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#0D1F6B]/20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono tracking-[0.18em] text-[#0D1F6B]/60">
          <span>{t.footer.rights}</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500" />
            <span>v26.04 · STATUS: NOMINAL</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

// Avoid circular import by inlining footer wordmark
import { Wordmark } from "./Wordmark";
function FooterWordmark() {
  return <Wordmark logoSize={56} showTagline variant="footer" />;
}
