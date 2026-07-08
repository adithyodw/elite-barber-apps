"use client";

import { useApp } from "@/app/providers";

export function Marquee() {
  const { dict } = useApp();
  const phrases = dict.marquee;

  const Track = () => (
    <div className="flex shrink-0 items-center">
      {phrases.map((phrase, i) => (
        <span key={i} className="flex items-center">
          <span className="px-5 font-serif text-lg italic text-white sm:text-xl">
            {phrase}
          </span>
          <span className="text-white/50" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-red py-3" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        <Track />
        <Track />
      </div>
    </div>
  );
}
