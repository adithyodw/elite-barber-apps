"use client";

import Image from "next/image";
import { useApp } from "@/app/providers";
import { whatsappLink } from "@/lib/branches";

export function Hero() {
  const { dict, branch, lang } = useApp();
  const waHref = whatsappLink(dict.whatsapp.message + branch.name[lang]);

  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-16"
    >
      {/* Backdrop layers */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, #1c1c1c 0%, #141414 40%, #0d0d0d 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #fff 0 1px, transparent 1px 26px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[8%] h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-40 blur-[110px]"
        style={{ background: "rgba(230,57,70,0.5)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 w-[min(78vw,560px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      >
        <Image src="/logo.svg" alt="" width={560} height={560} priority />
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate">
            <span className="h-1.5 w-1.5 rounded-full bg-red animate-dotPulse" />
            {dict.hero.kicker}
          </span>

          <h1 className="mt-6 font-serif text-[clamp(3.25rem,13vw,7rem)] font-black leading-[0.94] tracking-[-0.01em] text-white">
            {dict.hero.titleTop}
            <br />
            <span className="italic text-red">{dict.hero.titleAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate sm:text-base">
            {dict.hero.subcopy}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(230,57,70,0.4)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {dict.hero.ctaBook}
            </a>
            <a
              href="#branches"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors duration-200 hover:bg-white/10"
            >
              {dict.hero.ctaBranch}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
