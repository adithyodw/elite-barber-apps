"use client";

import type { ReactNode } from "react";
import { useApp } from "@/app/providers";
import { INSTAGRAM_URL } from "@/lib/branches";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const artworks: ReactNode[] = [
  // Signature fades — scissors
  <svg key="a" viewBox="0 0 48 48" {...stroke}>
    <circle cx="12" cy="34" r="5" />
    <circle cx="12" cy="14" r="5" />
    <path d="M16 31 38 12M16 17l22 19" />
  </svg>,
  // Editorial styling — comb
  <svg key="b" viewBox="0 0 48 48" {...stroke}>
    <path d="M8 18h32v6H8z" />
    <path d="M12 24v10M18 24v10M24 24v10M30 24v10M36 24v10" />
  </svg>,
  // Barber pole
  <svg key="c" viewBox="0 0 48 48" {...stroke}>
    <rect x="18" y="10" width="12" height="28" rx="6" />
    <path d="M18 18l12-6M18 26l12-6M18 34l12-6" />
    <path d="M15 10h18M15 38h18" />
  </svg>,
  // Couture colour — droplet
  <svg key="d" viewBox="0 0 48 48" {...stroke}>
    <path d="M24 8c6 8 10 12 10 18a10 10 0 0 1-20 0c0-6 4-10 10-18Z" />
  </svg>,
  // Hot-towel shave — razor
  <svg key="e" viewBox="0 0 48 48" {...stroke}>
    <path d="M10 14h20l-4 8H10z" />
    <path d="M30 18l8-6M22 22v16" />
  </svg>,
  // Beard sculpting — face
  <svg key="f" viewBox="0 0 48 48" {...stroke}>
    <path d="M14 12v10a10 10 0 0 0 20 0V12" />
    <path d="M16 26c2 8 6 12 8 12s6-4 8-12" />
  </svg>,
];

export function SocialHub() {
  const { dict } = useApp();

  return (
    <section id="social" className="bg-[#0c0c0c] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-[clamp(2.25rem,7vw,3.5rem)] font-bold leading-tight text-white">
            {dict.social.title}
          </h2>
          <p className="mt-3 text-[15px] text-slate">{dict.social.subtitle}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-bold text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            {dict.social.button}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {artworks.map((art, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-card border border-white/10 bg-[#141414] text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-red hover:text-white"
            >
              <span className="h-16 w-16 text-white/70 transition-colors duration-300 group-hover:text-red">
                {art}
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-slate group-hover:text-white/80">
                {dict.social.tiles[i]}
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-slate">
          {dict.social.caption} &rarr;
        </p>
      </div>
    </section>
  );
}
