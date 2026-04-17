"use client";

import Image from "next/image";
import type { Translation } from "@/lib/translations";

export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="eRoxii"
      width={size}
      height={size}
      priority
      style={{ width: size, height: size, objectFit: "contain", display: "block" }}
    />
  );
}

export function Wordmark({
  size = "text-xl",
  logoSize = 44,
  showTagline = false,
  variant = "nav",
}: {
  size?: string;
  logoSize?: number;
  showTagline?: boolean;
  variant?: "nav" | "footer";
}) {
  const isBig = variant === "footer";
  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width: logoSize, height: logoSize }}>
        <span className="absolute -top-1 -left-1 w-2 h-px bg-[#0D1F6B]" />
        <span className="absolute -top-1 -left-1 w-px h-2 bg-[#0D1F6B]" />
        <span className="absolute -top-1 -right-1 w-2 h-px bg-[#0D1F6B]" />
        <span className="absolute -top-1 -right-1 w-px h-2 bg-[#0D1F6B]" />
        <span className="absolute -bottom-1 -left-1 w-2 h-px bg-[#0D1F6B]" />
        <span className="absolute -bottom-1 -left-1 w-px h-2 bg-[#0D1F6B]" />
        <span className="absolute -bottom-1 -right-1 w-2 h-px bg-[#0D1F6B]" />
        <span className="absolute -bottom-1 -right-1 w-px h-2 bg-[#0D1F6B]" />
        <LogoMark size={logoSize} />
      </div>
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span className={`${isBig ? "text-[34px]" : size} font-semibold tracking-tight text-[#0D1F6B] leading-none`}>
            eRoxii
          </span>
          <span className="text-[9px] font-mono tracking-[0.2em] text-[#0D1F6B]/50 hidden sm:inline">[v26]</span>
        </div>
        {showTagline && (
          <div className="mt-2 text-[10px] font-mono tracking-[0.18em] text-[#0D1F6B]/60 uppercase max-w-[240px] leading-[1.4]">
            ElectRobonics Matrix and<br />Innovative Integration
          </div>
        )}
      </div>
    </div>
  );
}
