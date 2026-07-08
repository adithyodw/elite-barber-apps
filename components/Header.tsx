"use client";

import { useApp } from "@/app/providers";
import { branches } from "@/lib/branches";
import type { Lang } from "@/lib/i18n";
import { LogoChip, Wordmark } from "./Logo";

function Segment({
  active,
  onClick,
  label,
  srLabel,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  srLabel?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-colors duration-200",
        active
          ? "bg-red text-white shadow-[0_2px_10px_rgba(230,57,70,0.45)]"
          : "text-slate hover:text-white",
      ].join(" ")}
    >
      {label}
      {srLabel ? <span className="sr-only"> {srLabel}</span> : null}
    </button>
  );
}

export function Header() {
  const { lang, setLang, branchId, setBranchId, dict } = useApp();

  const langs: { id: Lang; label: string }[] = [
    { id: "en", label: "EN" },
    { id: "id", label: "ID" },
  ];

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Elite Barber Batam home">
          <LogoChip size={42} />
          <span className="hidden sm:block">
            <Wordmark studio={dict.brand.studio} />
          </span>
        </a>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={dict.header.branchLabel}
            className="flex items-center rounded-full bg-white/5 p-0.5 ring-1 ring-white/10"
          >
            {branches.map((b) => (
              <Segment
                key={b.id}
                active={branchId === b.id}
                onClick={() => setBranchId(b.id)}
                label={b.name[lang]}
              />
            ))}
          </div>

          <div
            role="group"
            aria-label={dict.header.langLabel}
            className="flex items-center rounded-full bg-white/5 p-0.5 ring-1 ring-white/10"
          >
            {langs.map((l) => (
              <Segment
                key={l.id}
                active={lang === l.id}
                onClick={() => setLang(l.id)}
                label={l.label}
                srLabel={l.id === "en" ? "English" : "Bahasa Indonesia"}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
