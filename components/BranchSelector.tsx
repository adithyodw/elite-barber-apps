"use client";

import { useApp } from "@/app/providers";
import { branches, whatsappLink } from "@/lib/branches";

function BannerArt() {
  return (
    <svg
      viewBox="0 0 400 120"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="400" height="120" fill="#161616" />
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1={i * 28} y1="0" x2={i * 28 - 60} y2="120" />
        ))}
      </g>
      <g transform="translate(320 20)">
        <rect x="0" y="0" width="26" height="80" rx="13" fill="none" stroke="#E63946" strokeWidth="2" />
        <g stroke="#E63946" strokeWidth="2" opacity="0.9">
          <line x1="0" y1="20" x2="26" y2="6" />
          <line x1="0" y1="38" x2="26" y2="24" />
          <line x1="0" y1="56" x2="26" y2="42" />
          <line x1="0" y1="74" x2="26" y2="60" />
        </g>
      </g>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-red"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function BranchSelector() {
  const { dict, lang, branchId, setBranchId } = useApp();

  return (
    <section id="branches" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-[clamp(2.25rem,7vw,3.5rem)] font-bold leading-tight text-white">
            {dict.branches.title}
          </h2>
          <p className="mt-3 text-[15px] text-slate">{dict.branches.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {branches.map((branch) => {
            const isActive = branchId === branch.id;
            const waHref = whatsappLink(dict.whatsapp.message + branch.name[lang]);
            return (
              <button
                key={branch.id}
                type="button"
                onClick={() => setBranchId(branch.id)}
                className={[
                  "group overflow-hidden rounded-card border bg-[#151515] text-left transition-colors duration-300",
                  isActive
                    ? "border-red"
                    : "border-white/10 hover:border-white/25",
                ].join(" ")}
              >
                <div className="relative h-28 w-full">
                  <BannerArt />
                  {isActive ? (
                    <span className="absolute right-3 top-3 rounded-full bg-red px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      {dict.branches.activeTag}
                    </span>
                  ) : null}
                </div>

                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red">
                    {branch.eyebrow[lang]}
                  </p>
                  <h3 className="mt-1 font-serif text-2xl font-bold text-white">
                    {branch.name[lang]}
                  </h3>
                  <p className="mt-1 text-[12px] font-medium uppercase tracking-wider text-slate">
                    {branch.area[lang]}
                  </p>

                  <div className="mt-4 flex gap-2.5">
                    <PinIcon />
                    <p className="text-[13px] leading-relaxed text-white/70">
                      {branch.address[lang]}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                    <a
                      href={branch.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                    >
                      {dict.branches.directions}
                    </a>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-red px-5 py-3 text-[13px] font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {dict.branches.book}
                    </a>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
