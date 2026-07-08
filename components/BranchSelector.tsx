"use client";

import { useApp } from "@/app/providers";
import { branches } from "@/lib/branches";
import { SERIF, COLORS } from "@/lib/theme";

export function BranchSelector() {
  const { dict, lang, branchIndex, wa } = useApp();

  return (
    <section
      id="branches"
      style={{
        background: COLORS.ink,
        padding: "clamp(56px,9vw,110px) clamp(16px,4vw,40px)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
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
            {dict.branchesKicker}
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontWeight: 800,
              fontSize: "clamp(2.4rem,7vw,4rem)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            {dict.branchesTitle}
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: 22,
          }}
        >
          {branches.map((b, i) => {
            const activeCard = branchIndex === i;
            return (
              <div
                key={b.short}
                style={{
                  background: "#161616",
                  border: `1px solid ${activeCard ? "rgba(230,57,70,.55)" : "rgba(255,255,255,.09)"}`,
                  borderRadius: 20,
                  overflow: "hidden",
                  transition: "border-color .25s",
                  boxShadow: "0 20px 50px rgba(0,0,0,.35)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 170,
                    overflow: "hidden",
                    background:
                      "linear-gradient(135deg, #202020 0%, #151515 58%, #0f0f0f 100%)",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage:
                        "repeating-linear-gradient(125deg, rgba(230,57,70,.16) 0 9px, transparent 9px 28px)",
                      opacity: 0.45,
                    }}
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,.12)"
                    strokeWidth="1.3"
                    style={{ position: "absolute", right: -14, top: -26, width: 210, height: 210 }}
                  >
                    <rect x="9" y="6" width="6" height="12" rx="1" />
                    <rect x="8" y="3.6" width="8" height="2.6" rx="1" />
                    <rect x="8" y="17.8" width="8" height="2.6" rx="1" />
                    <circle cx="12" cy="2" r="1.1" />
                    <line x1="9.4" y1="16.4" x2="14.6" y2="12" stroke="rgba(230,57,70,.4)" />
                    <line x1="9.4" y1="12.8" x2="14.6" y2="8.4" stroke="rgba(230,57,70,.4)" />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background:
                        "linear-gradient(180deg, rgba(17,17,17,.05), rgba(17,17,17,.9))",
                    }}
                  />
                  <div style={{ position: "absolute", left: 20, bottom: 16, right: 20, pointerEvents: "none" }}>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: ".2em",
                        textTransform: "uppercase",
                        color: COLORS.red,
                      }}
                    >
                      {b.brand}
                    </div>
                    <div
                      style={{
                        fontFamily: SERIF,
                        fontWeight: 700,
                        fontSize: 26,
                        lineHeight: 1.05,
                        marginTop: 4,
                      }}
                    >
                      {b.name}
                    </div>
                  </div>
                </div>

                <div style={{ padding: "22px 22px 24px" }}>
                  <div style={{ display: "flex", gap: 11, alignItems: "flex-start", marginBottom: 20 }}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#8E8E93"
                      strokeWidth="2"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.72)" }}>
                      {b.address[lang]}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 11, flexWrap: "wrap" }}>
                    <a
                      href={b.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eb-btn-maps"
                      style={{
                        flex: 1,
                        minWidth: 130,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        padding: "13px 16px",
                        borderRadius: 12,
                        border: "1px solid rgba(255,255,255,.2)",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="3 11 22 2 13 21 11 13 3 11" />
                      </svg>
                      {dict.branchDirections}
                    </a>
                    <a
                      href={wa(b.wa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eb-btn-red"
                      style={{
                        flex: 1,
                        minWidth: 130,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        padding: "13px 16px",
                        borderRadius: 12,
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
                      </svg>
                      {dict.branchBook}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
