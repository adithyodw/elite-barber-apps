import { SERIF } from "@/lib/theme";

const NB = "\u00A0";
const G = NB + NB;
const PHRASE =
  G +
  [
    "Precision Cuts",
    "Hot-Towel Shaves",
    "Signature Pomade",
    "Luxury Studio Styling",
    "Man Hair Spa",
    "Couture Colour",
    "Look Your Best",
  ].join(`${G}·${G}`) +
  `${G}·${G}`;

const spanStyle = {
  fontFamily: SERIF,
  fontStyle: "italic" as const,
  fontWeight: 600,
  fontSize: 15,
  letterSpacing: ".05em",
  color: "#fff",
};

export function Marquee() {
  return (
    <div
      aria-hidden="true"
      style={{
        background: "#E63946",
        overflow: "hidden",
        padding: "13px 0",
        borderTop: "1px solid rgba(255,255,255,.15)",
        borderBottom: "1px solid rgba(0,0,0,.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 26s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        <span style={spanStyle}>{PHRASE}</span>
        <span style={spanStyle}>{PHRASE}</span>
      </div>
    </div>
  );
}
