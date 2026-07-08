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

export const menu: Record<"men" | "women", MenuTab> = {
  men: {
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
  },
  women: {
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
  },
};
