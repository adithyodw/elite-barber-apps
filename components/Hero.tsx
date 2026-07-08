"use client";

import { useApp } from "@/app/providers";
import { SERIF } from "@/lib/theme";

export function Hero() {
  const { dict, activeWa } = useApp();

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "clamp(580px,90vh,880px)",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#0b0b0b",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(135% 95% at 82% 8%, #262626 0%, #151515 44%, #0a0a0a 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,.03) 0 2px, transparent 2px 24px)",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-white.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          zIndex: 0,
          right: "-8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "min(780px,74%)",
          opacity: 0.065,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          zIndex: 0,
          left: -160,
          bottom: -140,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230,57,70,.22), transparent 68%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(11,11,11,.55) 0%, rgba(11,11,11,.15) 32%, rgba(11,11,11,.72) 74%, rgba(11,11,11,.97) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "radial-gradient(120% 60% at 15% 100%, rgba(230,57,70,.22), transparent 60%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          pointerEvents: "none",
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "clamp(28px,6vw,72px) clamp(16px,4vw,40px)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "7px 15px",
            border: "1px solid rgba(255,255,255,.22)",
            borderRadius: 999,
            background: "rgba(0,0,0,.28)",
            backdropFilter: "blur(6px)",
            marginBottom: 22,
            animation: "fadeUp .7s ease both",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#E63946",
              boxShadow: "0 0 10px #E63946",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "#eee",
            }}
          >
            {dict.heroKicker}
          </span>
        </div>

        <h1
          style={{
            fontFamily: SERIF,
            fontWeight: 800,
            fontSize: "clamp(3rem,10vw,6.6rem)",
            lineHeight: 0.94,
            letterSpacing: "-.01em",
            margin: "0 0 20px",
            textShadow: "0 4px 40px rgba(0,0,0,.5)",
            animation: "fadeUp .8s ease .05s both",
          }}
        >
          {dict.heroL1}
          <br />
          <span style={{ fontStyle: "italic", color: "#E63946" }}>{dict.heroL2}</span>
        </h1>

        <p
          style={{
            maxWidth: 540,
            fontSize: "clamp(15px,2.1vw,18px)",
            lineHeight: 1.6,
            color: "rgba(255,255,255,.82)",
            fontWeight: 400,
            margin: "0 0 30px",
            animation: "fadeUp .8s ease .12s both",
          }}
        >
          {dict.heroSub}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 13,
            pointerEvents: "auto",
            animation: "fadeUp .8s ease .18s both",
          }}
        >
          <a
            href={activeWa}
            target="_blank"
            rel="noopener noreferrer"
            className="eb-btn-red"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: ".01em",
              padding: "15px 28px",
              borderRadius: 999,
              boxShadow: "0 10px 30px rgba(230,57,70,.4)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.42 1.27 4.86L2 22l5.28-1.38A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
            {dict.heroCta1}
          </a>
          <a
            href="#branches"
            className="eb-btn-glass"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#fff",
              fontWeight: 600,
              fontSize: 15,
              padding: "15px 26px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,.28)",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {dict.heroCta2}
          </a>
        </div>
      </div>
    </section>
  );
}
