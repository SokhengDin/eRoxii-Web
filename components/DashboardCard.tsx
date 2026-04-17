"use client";

import Image from "next/image";
import { GateIcon } from "./Icons";
import type { Translation } from "@/lib/translations";

export const CornerTicks = () => (
  <>
    <span className="absolute top-0 left-0 w-3 h-px bg-white/60" />
    <span className="absolute top-0 left-0 w-px h-3 bg-white/60" />
    <span className="absolute top-0 right-0 w-3 h-px bg-white/60" />
    <span className="absolute top-0 right-0 w-px h-3 bg-white/60" />
    <span className="absolute bottom-0 left-0 w-3 h-px bg-white/60" />
    <span className="absolute bottom-0 left-0 w-px h-3 bg-white/60" />
    <span className="absolute bottom-0 right-0 w-3 h-px bg-white/60" />
    <span className="absolute bottom-0 right-0 w-px h-3 bg-white/60" />
  </>
);

function Meter({ label, value, suffix, max = 100 }: { label: string; value: number; suffix: string; max?: number }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="border border-white/20 p-3">
      <div className="flex items-center justify-between text-[10px] tracking-[0.15em] font-mono opacity-70">
        <span>{label}</span>
      </div>
      <div className="mt-1 font-mono text-lg">
        {value}
        <span className="text-[10px] opacity-60 ml-0.5">{suffix}</span>
      </div>
      <div className="mt-1 h-[2px] w-full bg-white/15 relative overflow-hidden">
        <div className="h-full bg-white" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function DashboardCard({ t }: { t: Translation }) {
  const d = t.dash;
  const bars = Array.from({ length: 24 }).map((_, i) => {
    const v = Math.max(0, Math.sin(((i - 6) / 12) * Math.PI));
    return Math.round(v * 96 + (i % 3 === 0 ? 4 : 0));
  });

  return (
    <div className="relative bg-[#0D1F6B] text-white w-full">
      <CornerTicks />
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between text-[10px] tracking-[0.18em] font-mono">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            {d.label}
          </div>
          <div className="opacity-70">STN-03 / GATE-03</div>
        </div>

        <div className="mt-5 border border-white/20">
          <div className="px-3 py-1.5 border-b border-white/20 flex items-center justify-between">
            <span className="text-[10px] tracking-[0.18em] font-mono opacity-70">{d.plateHeader}</span>
            <span className="text-[10px] font-mono opacity-70">t+0.382s</span>
          </div>
          <div className="px-3 py-4 flex items-center gap-4">
            <div className="border-2 border-white/90 px-3 py-1.5 bg-[#0D1F6B]">
              <div className="text-[8px] tracking-[0.3em] font-mono text-center opacity-70 leading-none">កម្ពុជា · KINGDOM OF CAMBODIA</div>
              <div className="text-2xl sm:text-3xl font-mono font-bold tracking-wider leading-tight mt-0.5">2C-1234</div>
              <div className="text-[8px] tracking-[0.3em] font-mono text-center opacity-70 leading-none">PHNOM PENH</div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5">
                  <polyline points="5 12 10 17 19 7" />
                </svg>
                <span className="text-emerald-400 text-sm font-mono tracking-wider">{d.status}</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs font-mono opacity-80">
                <GateIcon size={14} />
                {d.gate}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <Meter label={d.confidence} value={98.4} suffix="%" />
          <Meter label={d.latency} value={382} suffix="ms" max={600} />
        </div>

        <div className="mt-4 border border-white/20">
          <div className="px-3 py-1.5 border-b border-white/20 flex items-center justify-between">
            <span className="text-[10px] tracking-[0.18em] font-mono opacity-70">{d.energy}</span>
            <span className="text-[10px] font-mono">
              <span className="opacity-60 mr-1">{d.kwhNow}</span>
              <span className="text-white">7.4kW</span>
            </span>
          </div>
          <div className="px-3 py-3 flex items-end gap-[3px] h-[76px]">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-white/80"
                style={{ height: `${h}%`, opacity: i === 14 ? 1 : 0.35 + (h / 100) * 0.55 }}
              />
            ))}
          </div>
          <div className="px-3 pb-2 flex justify-between text-[9px] font-mono opacity-50">
            <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
