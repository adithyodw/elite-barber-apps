import type { Localized } from "./i18n";

export const WHATSAPP_NUMBER = "6282283712380";
export const WHATSAPP_DISPLAY = "+62 822-8371-2380";
export const INSTAGRAM_HANDLE = "elit3barber.official";
export const INSTAGRAM_URL = "https://www.instagram.com/elit3barber.official/";

export interface Branch {
  id: "penuin" | "bizpark";
  eyebrow: Localized;
  name: Localized;
  area: Localized;
  address: Localized;
  maps: string;
}

export const branches: Branch[] = [
  {
    id: "penuin",
    eyebrow: { en: "Elite Barber", id: "Elite Barber" },
    name: { en: "Penuin Centre", id: "Penuin Centre" },
    area: { en: "Lubuk Baja · Kota Batam", id: "Lubuk Baja · Kota Batam" },
    address: {
      en: "Jl. Komp. Penuin Centre No.15 Blk A, Batu Selicin, Kec. Lubuk Baja, Kota Batam, Kepulauan Riau 29411, Indonesia",
      id: "Jl. Komp. Penuin Centre No.15 Blk A, Batu Selicin, Kec. Lubuk Baja, Kota Batam, Kepulauan Riau 29411, Indonesia",
    },
    maps: "https://share.google/CSioaivqAjzvJZ5rf",
  },
  {
    id: "bizpark",
    eyebrow: { en: "Elite Hair Studio", id: "Elite Hair Studio" },
    name: { en: "Tunas Bizpark", id: "Tunas Bizpark" },
    area: { en: "Batam Centre · Belian", id: "Batam Centre · Belian" },
    address: {
      en: "Tunas Bizpark, Jl. Selasih No.08 Blok B, Belian, Batam Centre, Kota Batam, Kepulauan Riau 29432, Indonesia",
      id: "Tunas Bizpark, Jl. Selasih No.08 Blok B, Belian, Batam Centre, Kota Batam, Kepulauan Riau 29432, Indonesia",
    },
    maps: "https://share.google/IOH00zLVdamuI8Aw3",
  },
];

/** Builds a wa.me link with a localized, URL-encoded prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
