"use client";

import React from "react";

export const Ring = ({ size = 24, ticks = true }: { size?: number; ticks?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
    {ticks && (
      <g>
        <line x1="12" y1="1.5" x2="12" y2="3.5" />
        <line x1="12" y1="20.5" x2="12" y2="22.5" />
        <line x1="1.5" y1="12" x2="3.5" y2="12" />
        <line x1="20.5" y1="12" x2="22.5" y2="12" />
      </g>
    )}
  </svg>
);

export const DialRing = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 12a9 9 0 1 1-9-9" />
    <path d="M12 3a9 9 0 0 1 7.5 4" strokeDasharray="1.5 2" />
    <circle cx="12" cy="12" r="2.5" />
    <line x1="12" y1="12" x2="16" y2="8" />
  </svg>
);

export const Camera = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="6.5" width="18" height="13" />
    <path d="M8 6.5l1.5-2.5h5L16 6.5" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const CpuChip = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="6" width="12" height="12" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="3" y1="9" x2="6" y2="9" /><line x1="3" y1="12" x2="6" y2="12" /><line x1="3" y1="15" x2="6" y2="15" />
    <line x1="18" y1="9" x2="21" y2="9" /><line x1="18" y1="12" x2="21" y2="12" /><line x1="18" y1="15" x2="21" y2="15" />
    <line x1="9" y1="3" x2="9" y2="6" /><line x1="12" y1="3" x2="12" y2="6" /><line x1="15" y1="3" x2="15" y2="6" />
    <line x1="9" y1="18" x2="9" y2="21" /><line x1="12" y1="18" x2="12" y2="21" /><line x1="15" y1="18" x2="15" y2="21" />
  </svg>
);

export const GateIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="3" y1="20" x2="21" y2="20" />
    <line x1="5" y1="20" x2="5" y2="8" />
    <line x1="5" y1="8" x2="20" y2="4" />
    <line x1="5" y1="14" x2="18" y2="10.5" />
    <line x1="11" y1="20" x2="11" y2="12.5" />
  </svg>
);

export const Arrow = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="14 6 20 12 14 18" />
  </svg>
);

export const Menu = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);
