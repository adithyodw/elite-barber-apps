import type { Localized } from "./i18n";

export interface MenuItem {
  name: Localized;
  /** Price in IDR, as an integer. */
  price: number;
  from?: boolean;
  subtitle?: Localized;
}

export interface MenuCategory {
  name: Localized;
  items: MenuItem[];
}

export interface MenuTab {
  brand: Localized;
  categories: MenuCategory[];
}

export type MenuGender = "men" | "women";
export type BranchMenuKey = "penuin" | "bizpark";

const lengthTiers = {
  en: "Short · Medium · Long · Extra Long",
  id: "Pendek · Medium · Panjang · Extra Panjang",
};

function tierSubtitle(
  tiers: [number, number, number, number],
  langNote?: Localized,
): Localized {
  const fmt = (n: number) =>
    n >= 1_000_000
      ? `${n / 1_000_000}jt${n % 1_000_000 ? "+" : ""}`
      : `${n / 1_000}k`;

  const prices = tiers.map(fmt).join(" · ");
  return {
    en: `${lengthTiers.en}: ${prices}${langNote ? ` — ${langNote.en}` : ""}`,
    id: `${lengthTiers.id}: ${prices}${langNote ? ` — ${langNote.id}` : ""}`,
  };
}

const penuinMen: MenuTab = {
  brand: { en: "Elite Barber", id: "Elite Barber" },
  categories: [
    {
      name: { en: "Signature Cuts", id: "Potongan Signature" },
      items: [
        {
          name: { en: "Express Hair Cut", id: "Potong Rambut Express" },
          price: 95000,
          subtitle: {
            en: "Precision haircut, professional wash, and premium tonic styling.",
            id: "Potong presisi, keramas profesional, dan styling tonik premium.",
          },
        },
        {
          name: { en: "Premium Hair Cut", id: "Potong Rambut Premium" },
          price: 110000,
          subtitle: {
            en: "Tailored haircut, relaxing wash, signature hot & cold towel, head massage, soothing aloe vera mask, and premium pomade styling.",
            id: "Potong rambut, keramas, handuk panas & dingin, pijat kepala, masker lidah buaya, dan styling pomade premium.",
          },
        },
        {
          name: { en: "Executive Hair Cut", id: "Potong Rambut Executive" },
          price: 200000,
          subtitle: {
            en: "Elite haircut, wash, signature hot & cold towel, extended massage, revitalizing facial, and custom pomade styling.",
            id: "Pengalaman potong elite, keramas, handuk panas & dingin, pijat lebih lama, facial revitalisasi, dan styling pomade custom.",
          },
        },
        {
          name: { en: "Kids Hair Cut", id: "Potong Rambut Anak" },
          price: 80000,
          subtitle: {
            en: "Gentle haircut, refreshing wash, nourishing tonic, and clean pomade styling.",
            id: "Potong lembut, keramas menyegarkan, tonik bernutrisi, dan styling pomade rapi.",
          },
        },
      ],
    },
    {
      name: {
        en: "Technical Treatments & Texturing",
        id: "Perawatan Teknis & Tekstur",
      },
      items: [
        { name: { en: "Down Perm", id: "Down Perm" }, price: 200000 },
        {
          name: { en: "Perming / Curly", id: "Perming / Curly" },
          price: 300000,
          from: true,
        },
        {
          name: { en: "Cornrow Texturing", id: "Cornrow / Kepang" },
          price: 450000,
          from: true,
        },
      ],
    },
    {
      name: {
        en: "Artistry, Shaving & Add-ons",
        id: "Cukur, Artistry & Tambahan",
      },
      items: [
        {
          name: { en: "Classic Shaving", id: "Cukur Klasik" },
          price: 40000,
          subtitle: {
            en: "Full traditional hot-towel razor shave and skin treatment.",
            id: "Cukur pisau tradisional dengan handuk panas & perawatan kulit.",
          },
        },
        {
          name: { en: "Man Hair Spa", id: "Hair Spa Pria" },
          price: 110000,
          from: true,
          subtitle: {
            en: "Deep cleansing wash, therapeutic creambath, targeted head massage, and hair-strengthening serum.",
            id: "Keramas pembersih dalam, creambath terapi, pijat kepala, dan serum penguat rambut.",
          },
        },
        {
          name: { en: "Hair Tattoo / Hair Art", id: "Hair Tattoo / Hair Art" },
          price: 50000,
        },
        {
          name: { en: "Additional Black Mask", id: "Masker Hitam Tambahan" },
          price: 45000,
        },
        {
          name: { en: "Additional Gold Mask", id: "Masker Emas Tambahan" },
          price: 50000,
        },
      ],
    },
    {
      name: { en: "Advanced Colouring", id: "Pewarnaan Lanjutan" },
      items: [
        {
          name: { en: "Colour Basic", id: "Warna Basic" },
          price: 130000,
          from: true,
        },
        {
          name: { en: "Colour Fashion", id: "Warna Fashion" },
          price: 300000,
          from: true,
        },
        {
          name: { en: "Premium Highlights", id: "Highlight Premium" },
          price: 350000,
          from: true,
        },
      ],
    },
    {
      name: {
        en: "Exclusive At-Home Care",
        id: "Layanan ke Rumah Eksklusif",
      },
      items: [
        {
          name: {
            en: "Home Service — The Essential Cut",
            id: "Home Service — Essential Cut",
          },
          price: 200000,
          subtitle: {
            en: "Premium professional grooming brought directly to your doorstep.",
            id: "Grooming profesional premium langsung ke depan pintu Anda.",
          },
        },
      ],
    },
  ],
};

const penuinWomen: MenuTab = {
  brand: { en: "Elite Hair Studio", id: "Elite Hair Studio" },
  categories: [
    {
      name: {
        en: "Signature Styling & Cuts",
        id: "Styling & Potongan Signature",
      },
      items: [
        {
          name: { en: "Executive Package", id: "Paket Executive" },
          price: 250000,
          subtitle: {
            en: "Premium wash, precision haircut, signature natural blowout, and nourishing vitamin treatment.",
            id: "Keramas premium, potong presisi, blowout natural signature, dan perawatan vitamin bernutrisi.",
          },
        },
        {
          name: { en: "Premium Styling Cut", id: "Potong & Styling Premium" },
          price: 150000,
          subtitle: {
            en: "Master haircut, custom runway styling, and protective vitamin finish.",
            id: "Potong master, styling runway custom, dan finishing vitamin pelindung.",
          },
        },
        {
          name: { en: "Styling Women", id: "Styling Wanita" },
          price: 125000,
          subtitle: {
            en: "Refreshing wash and a flawless, long-lasting natural blowout.",
            id: "Keramas menyegarkan dan blowout natural tahan lama yang sempurna.",
          },
        },
      ],
    },
    {
      name: {
        en: "Advanced Therapy & Texturing",
        id: "Terapi & Tekstur Lanjutan",
      },
      items: [
        {
          name: { en: "Luxury Hair Mask", id: "Masker Rambut Luxury" },
          price: 200000,
          from: true,
        },
        {
          name: { en: "Premium Smoothing", id: "Smoothing Premium" },
          price: 700000,
          from: true,
        },
        {
          name: { en: "Keratin Smooth Treatment", id: "Perawatan Keratin Smooth" },
          price: 600000,
          from: true,
        },
      ],
    },
    {
      name: {
        en: "Couture Colouring & Technical Art",
        id: "Pewarnaan Couture & Teknik Warna",
      },
      items: [
        {
          name: { en: "Colour Basic", id: "Warna Basic" },
          price: 300000,
          from: true,
        },
        {
          name: { en: "Colour Fashion", id: "Warna Fashion" },
          price: 500000,
          from: true,
        },
        {
          name: { en: "Balayage Artistry", id: "Balayage Artistry" },
          price: 1000000,
          from: true,
        },
        {
          name: { en: "Studio Highlights", id: "Studio Highlights" },
          price: 1000000,
          from: true,
        },
        {
          name: { en: "Peek-A-Boo Colour", id: "Warna Peek-A-Boo" },
          price: 800000,
          from: true,
        },
      ],
    },
  ],
};

/** Tunas Bizpark (KDA) — Women's Studio price list */
const bizparkWomen: MenuTab = {
  brand: { en: "Elite Hair Studio · KDA", id: "Elite Hair Studio · KDA" },
  categories: [
    {
      name: {
        en: "Signature Styling & Cuts",
        id: "Styling & Potongan Signature",
      },
      items: [
        {
          name: {
            en: "Wash + Haircut + Blow Natural + Vitamin",
            id: "Keramas + Potong + Blow Natural + Vitamin",
          },
          price: 250000,
        },
        {
          name: {
            en: "Wash + Blow Natural",
            id: "Keramas + Blow Natural",
          },
          price: 125000,
        },
        {
          name: {
            en: "Creambath + Dry + Blow",
            id: "Creambath Biasa + Dry + Blow Biasa",
          },
          price: 150000,
        },
      ],
    },
    {
      name: { en: "Treatments & Therapy", id: "Perawatan & Terapi" },
      items: [
        {
          name: { en: "Hair Mask", id: "Masker Rambut" },
          price: 200000,
          from: true,
          subtitle: tierSubtitle([200_000, 350_000, 400_000, 500_000]),
        },
        {
          name: { en: "Smoothing", id: "Smoothing" },
          price: 600000,
          from: true,
          subtitle: tierSubtitle([600_000, 800_000, 1_000_000, 1_000_000], {
            en: "Extra Long from 1jt",
            id: "Extra Panjang mulai 1jt",
          }),
        },
      ],
    },
    {
      name: {
        en: "Couture Colouring & Highlights",
        id: "Pewarnaan & Highlight",
      },
      items: [
        {
          name: { en: "Full Colour", id: "Colouring Full Colour" },
          price: 500000,
          from: true,
          subtitle: tierSubtitle([500_000, 700_000, 900_000, 1_000_000], {
            en: "Extra Long 1jt+",
            id: "Extra Panjang 1jt ke atas",
          }),
        },
        {
          name: { en: "Colour + Bleach", id: "Colouring + Bleach" },
          price: 800000,
          from: true,
          subtitle: {
            en: "Short 800k · Medium 1jt · Long & Extra Long 1jt+",
            id: "Pendek 800k · Medium 1jt · Panjang & Extra Panjang 1jt ke atas",
          },
        },
        {
          name: { en: "Highlights", id: "Highlight" },
          price: 900000,
          from: true,
          subtitle: {
            en: "Short 900k · Medium 1.2jt · Long 1.5jt · Extra Long 1.5jt+",
            id: "Pendek 900k · Medium 1,2jt · Panjang 1,5jt · Extra Panjang 1,5jt+",
          },
        },
        {
          name: { en: "Balayage", id: "Balayage" },
          price: 1_000_000,
          from: true,
          subtitle: {
            en: "Short 1jt · Medium 1.5jt · Long 1.9jt · Extra Long 2jt+",
            id: "Pendek 1jt · Medium 1,5jt · Panjang 1,9jt · Extra Panjang 2jt ke atas",
          },
        },
        {
          name: { en: "Peek-A-Boo Colour", id: "Pekaboo" },
          price: 600000,
          from: true,
          subtitle: {
            en: "Short 600k · Medium 900k · Long 1jt+ · Extra Long 1jt+",
            id: "Pendek 600k · Medium 900k · Panjang 1jt+ · Extra Panjang 1jt+",
          },
        },
        {
          name: { en: "Asymmetric Colour", id: "Asimetris Colour" },
          price: 600000,
          from: true,
          subtitle: tierSubtitle([600_000, 800_000, 1_000_000, 1_000_000], {
            en: "Extra Long 1jt+",
            id: "Extra Panjang 1jt+",
          }),
        },
      ],
    },
    {
      name: { en: "Texturing & Extensions", id: "Tekstur & Extension" },
      items: [
        {
          name: { en: "Perming", id: "Perming" },
          price: 700000,
          from: true,
          subtitle: tierSubtitle([700_000, 900_000, 1_000_000, 1_000_000], {
            en: "Long & Extra Long 1jt+",
            id: "Panjang & Extra Panjang 1jt ke atas",
          }),
        },
        {
          name: { en: "Hair Extension", id: "Hair Extension" },
          price: 1_000_000,
          subtitle: {
            en: "Per package (100 strands)",
            id: "Per paket (100 btg)",
          },
        },
      ],
    },
  ],
};

export const menus: Record<BranchMenuKey, Record<MenuGender, MenuTab>> = {
  penuin: { men: penuinMen, women: penuinWomen },
  bizpark: { men: penuinMen, women: bizparkWomen },
};

/** @deprecated Use getMenu() for branch-aware pricing. */
export const menu: Record<MenuGender, MenuTab> = menus.penuin;

export function branchMenuKey(branchIndex: number): BranchMenuKey {
  return branchIndex === 1 ? "bizpark" : "penuin";
}

export function getMenu(branchIndex: number, tab: MenuGender): MenuTab {
  return menus[branchMenuKey(branchIndex)][tab];
}
