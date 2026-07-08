"use client";

import { useRef, useState } from "react";
import { useApp } from "@/app/providers";
import { menu } from "@/lib/menu";
import { formatPrice } from "@/lib/format";

const SWIPE_THRESHOLD = 55;

export function Menu() {
  const { dict, lang } = useApp();
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const tabLabels = [dict.menu.tabMen, dict.menu.tabWomen];
  const tab = menu[active];

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0 && active < menu.length - 1) setActive(active + 1);
      if (delta > 0 && active > 0) setActive(active - 1);
    }
    touchStartX.current = null;
  };

  return (
    <section id="menu" className="bg-bone py-20 text-ink sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-[clamp(2.25rem,7vw,3.5rem)] font-bold leading-tight">
            {dict.menu.title}
          </h2>
          <p className="mt-3 text-[15px] text-ink/55">{dict.menu.subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="mt-9 flex justify-center">
          <div
            role="tablist"
            aria-label={dict.menu.title}
            className="flex items-center rounded-full bg-ink/5 p-1 ring-1 ring-ink/10"
          >
            {tabLabels.map((label, i) => (
              <button
                key={label}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={[
                  "rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide transition-colors duration-200 sm:text-sm",
                  active === i
                    ? "bg-ink text-white"
                    : "text-ink/60 hover:text-ink",
                ].join(" ")}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center font-serif text-lg italic text-red">
          {tab.brand[lang]}
        </p>

        {/* Rows */}
        <div
          className="mt-4 animate-fadeUp"
          key={tab.id}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {tab.categories.map((category) => (
            <div key={category.id}>
              <div className="mb-1 mt-10 flex items-center gap-4">
                <h3 className="text-[12px] font-bold uppercase tracking-[0.2em] text-ink/45">
                  {category.label[lang]}
                </h3>
                <span className="h-px flex-1 bg-ink/12" />
              </div>

              <ul>
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between gap-6 border-b border-ink/[0.08] py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-[16px] font-semibold text-ink">
                        {item.name[lang]}
                      </p>
                      {item.subtitle ? (
                        <p className="mt-1 max-w-md text-[13px] leading-relaxed text-ink/55">
                          {item.subtitle[lang]}
                        </p>
                      ) : null}
                    </div>
                    <p className="tabular whitespace-nowrap pt-0.5 text-[15px] font-bold text-red">
                      {formatPrice(item.price, item.from ?? false, lang)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Footnote */}
          <div className="mt-12 rounded-card border border-ink/10 bg-white/60 p-5">
            <p className="text-center text-[12.5px] leading-relaxed text-ink/60">
              {dict.menu.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
