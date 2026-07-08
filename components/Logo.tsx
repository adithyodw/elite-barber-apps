import Image from "next/image";

export function LogoChip({ size = 46 }: { size?: number }) {
  const pad = Math.round(size * 0.1);
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-black/10"
      style={{ width: size, height: size, padding: pad }}
      aria-hidden="true"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={size - pad * 2}
        height={size - pad * 2}
        priority
      />
    </span>
  );
}

/** Editorial wordmark: ELIT + reversed red E + BARBER. */
export function Wordmark({ studio }: { studio?: string }) {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-serif text-[19px] font-extrabold tracking-[0.06em] text-white sm:text-[21px]">
        ELIT
        <span className="inline-block -scale-x-100 text-red">E</span>
        <span className="ml-[0.28em] font-bold">BARBER</span>
      </span>
      {studio ? (
        <span className="mt-1 font-sans text-[9.5px] font-semibold uppercase tracking-[0.34em] text-slate">
          {studio}
        </span>
      ) : null}
    </span>
  );
}
