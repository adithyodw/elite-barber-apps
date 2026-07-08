"use client";

import type { ReactNode } from "react";
import { useApp } from "@/app/providers";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/branches";
import { SERIF, COLORS } from "@/lib/theme";

function IgGlyph() {
  return (
    <div style={{ position: "absolute", bottom: 10, right: 12, opacity: 0.45 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none" />
      </svg>
    </div>
  );
}

const iconBase = {
  fill: "none",
  stroke: "#fff",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const tiles: { label: string; art: ReactNode }[] = [
  {
    label: "Fades",
    art: (
      <svg viewBox="0 0 24 24" {...iconBase} style={{ width: "42%", height: "42%" }}>
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    label: "Styling",
    art: (
      <svg viewBox="0 0 24 24" {...iconBase} style={{ width: "42%", height: "42%" }}>
        <path d="M3 6 H21 V9 H3 Z" />
        <line x1="5.5" y1="9" x2="5.5" y2="19" />
        <line x1="8.5" y1="9" x2="8.5" y2="19" />
        <line x1="11.5" y1="9" x2="11.5" y2="19" />
        <line x1="14.5" y1="9" x2="14.5" y2="19" />
        <line x1="17.5" y1="9" x2="17.5" y2="19" />
      </svg>
    ),
  },
  {
    label: "Barber",
    art: (
      <svg viewBox="0 0 24 24" {...iconBase} style={{ width: "42%", height: "42%" }}>
        <rect x="9" y="6" width="6" height="12" rx="1" />
        <rect x="8" y="3.6" width="8" height="2.6" rx="1" />
        <rect x="8" y="17.8" width="8" height="2.6" rx="1" />
        <circle cx="12" cy="2" r="1.1" />
        <line x1="9.4" y1="16.4" x2="14.6" y2="12" stroke="#E63946" />
        <line x1="9.4" y1="12.8" x2="14.6" y2="8.4" stroke="#E63946" />
      </svg>
    ),
  },
  {
    label: "Colour",
    art: (
      <svg viewBox="0 0 24 24" {...iconBase} style={{ width: "42%", height: "42%" }}>
        <rect x="8" y="9" width="8" height="12" rx="1.5" />
        <path d="M9 9 V6 H14 V9" />
        <rect x="10.3" y="2.4" width="4" height="3" rx=".6" />
        <line x1="16" y1="3.4" x2="18.4" y2="3" stroke="#E63946" />
        <line x1="16" y1="5" x2="18.6" y2="5" stroke="#E63946" />
        <line x1="16" y1="6.6" x2="18.4" y2="7" stroke="#E63946" />
      </svg>
    ),
  },
  {
    label: "Hot Shave",
    art: (
      <svg viewBox="0 0 24 24" {...iconBase} style={{ width: "42%", height: "42%" }}>
        <rect x="9" y="13" width="6" height="8" rx="1" />
        <path d="M8.4 13 Q12 3 15.6 13 Z" />
        <line x1="9.3" y1="16.6" x2="14.7" y2="16.6" />
      </svg>
    ),
  },
  {
    label: "Beard",
    art: (
      <svg viewBox="0 0 24 24" fill="none" style={{ width: "44%", height: "44%" }}>
        <path
          d="M12 13 C 9.5 9.5, 5 10, 3 13.5 C 5.5 12.5, 7.5 13.5, 12 14.6 C 16.5 13.5, 18.5 12.5, 21 13.5 C 19 10, 14.5 9.5, 12 13 Z"
          fill="#fff"
        />
      </svg>
    ),
  },
];

export function SocialHub() {
  const { dict } = useApp();

  return (
    <section
      id="social"
      style={{
        background: "#0b0b0b",
        padding: "clamp(56px,9vw,110px) clamp(16px,4vw,40px)",
        borderTop: `1px solid ${COLORS.line}`,
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 34,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: ".3em",
                textTransform: "uppercase",
                color: COLORS.red,
                marginBottom: 14,
              }}
            >
              {dict.igKicker}
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontWeight: 800,
                fontSize: "clamp(2.2rem,6vw,3.6rem)",
                lineHeight: 1,
                margin: 0,
              }}
            >
              {dict.igTitle}
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eb-btn-white"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "13px 22px",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12 }}>
          {tiles.map((tile) => (
            <a
              key={tile.label}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eb-tile"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                aspectRatio: "1",
                borderRadius: 14,
                overflow: "hidden",
                background: "radial-gradient(120% 120% at 30% 18%, #1e1e1e, #0f0f0f)",
                border: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "repeating-linear-gradient(125deg, rgba(255,255,255,.03) 0 2px, transparent 2px 16px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 14,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: COLORS.red,
                }}
              >
                {tile.label}
              </div>
              {tile.art}
              <IgGlyph />
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 18, fontSize: 13, color: COLORS.slate }}>
          Tap any tile to open our live feed on Instagram →
        </div>
      </div>
    </section>
  );
}
