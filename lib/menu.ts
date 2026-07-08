import type { Localized } from "./i18n";

export interface MenuItem {
  id: string;
  name: Localized;
  subtitle?: Localized;
  /** Price in IDR, as an integer. */
  price: number;
  /** "From …" / "Mulai …" pricing. */
  from?: boolean;
}

export interface MenuCategory {
  id: string;
  label: Localized;
  items: MenuItem[];
}

export interface MenuTab {
  id: "men" | "women";
  brand: Localized;
  categories: MenuCategory[];
}

export const menu: MenuTab[] = [
  {
    id: "men",
    brand: { en: "Elite Barber", id: "Elite Barber" },
    categories: [
      {
        id: "signature-cuts",
        label: { en: "Signature Cuts", id: "Potongan Signature" },
        items: [
          {
            id: "express-cut",
            name: { en: "Express Hair Cut", id: "Potong Rambut Express" },
            subtitle: {
              en: "Precision haircut, professional wash, and premium tonic styling.",
              id: "Potong rambut presisi, keramas profesional, dan penataan tonik premium.",
            },
            price: 95000,
          },
          {
            id: "premium-cut",
            name: { en: "Premium Hair Cut", id: "Potong Rambut Premium" },
            subtitle: {
              en: "Tailored haircut, relaxing wash, signature hot & cold towel treatment, head massage, soothing aloe vera mask, and premium pomade styling.",
              id: "Potong rambut sesuai gaya, keramas menenangkan, perawatan handuk panas & dingin khas, pijat kepala, masker lidah buaya menyejukkan, dan penataan pomade premium.",
            },
            price: 110000,
          },
          {
            id: "executive-cut",
            name: { en: "Executive Hair Cut", id: "Potong Rambut Executive" },
            subtitle: {
              en: "Elite haircut experience, wash, signature hot & cold towel treatment, extended massage, specialized revitalizing facial, and custom pomade styling.",
              id: "Pengalaman potong rambut elite, keramas, perawatan handuk panas & dingin khas, pijat lebih lama, facial revitalisasi khusus, dan penataan pomade custom.",
            },
            price: 200000,
          },
          {
            id: "kids-cut",
            name: { en: "Kids Hair Cut", id: "Potong Rambut Anak" },
            subtitle: {
              en: "Gentle haircut, refreshing wash, nourishing tonic, and clean pomade styling.",
              id: "Potong rambut lembut, keramas menyegarkan, tonik menutrisi, dan penataan pomade rapi.",
            },
            price: 80000,
          },
        ],
      },
      {
        id: "technical",
        label: {
          en: "Technical Treatments & Texturing",
          id: "Perawatan Teknis & Tekstur",
        },
        items: [
          {
            id: "down-perm",
            name: { en: "Down Perm", id: "Down Perm" },
            price: 200000,
          },
          {
            id: "perming",
            name: { en: "Perming / Curly", id: "Perming / Keriting" },
            price: 300000,
            from: true,
          },
          {
            id: "cornrow",
            name: { en: "Cornrow Texturing", id: "Cornrow / Kepang" },
            price: 450000,
            from: true,
          },
        ],
      },
      {
        id: "artistry",
        label: {
          en: "Artistry, Shaving & Add-ons",
          id: "Seni, Cukur & Tambahan",
        },
        items: [
          {
            id: "classic-shaving",
            name: { en: "Classic Shaving", id: "Cukur Klasik" },
            subtitle: {
              en: "Full traditional hot towel razor shave and skin treatment.",
              id: "Cukur tradisional lengkap dengan handuk panas dan perawatan kulit.",
            },
            price: 40000,
          },
          {
            id: "man-hair-spa",
            name: { en: "Man Hair Spa", id: "Hair Spa Pria" },
            subtitle: {
              en: "Deep cleansing wash, therapeutic creambath, targeted head massage, and hair-strengthening serum.",
              id: "Keramas pembersihan mendalam, creambath terapeutik, pijat kepala terfokus, dan serum penguat rambut.",
            },
            price: 110000,
            from: true,
          },
          {
            id: "hair-tattoo",
            name: { en: "Hair Tattoo / Hair Art", id: "Hair Tattoo / Seni Rambut" },
            price: 50000,
          },
          {
            id: "black-mask",
            name: { en: "Additional Black Mask", id: "Tambahan Black Mask" },
            price: 45000,
          },
          {
            id: "gold-mask",
            name: { en: "Additional Gold Mask", id: "Tambahan Gold Mask" },
            price: 50000,
          },
        ],
      },
      {
        id: "colouring-men",
        label: { en: "Advanced Colouring", id: "Pewarnaan Lanjutan" },
        items: [
          {
            id: "colour-basic-men",
            name: { en: "Colour Basic", id: "Warna Basic" },
            price: 130000,
            from: true,
          },
          {
            id: "colour-fashion-men",
            name: { en: "Colour Fashion", id: "Warna Fashion" },
            price: 300000,
            from: true,
          },
          {
            id: "highlights-men",
            name: { en: "Premium Highlights", id: "Highlight Premium" },
            price: 350000,
            from: true,
          },
        ],
      },
      {
        id: "at-home",
        label: { en: "Exclusive At-Home Care", id: "Layanan Rumah Eksklusif" },
        items: [
          {
            id: "home-service",
            name: {
              en: "Home Service (The Essential Cut)",
              id: "Home Service (Potong Esensial)",
            },
            subtitle: {
              en: "Premium professional grooming brought directly to your doorstep.",
              id: "Perawatan grooming profesional premium langsung ke rumah Anda.",
            },
            price: 200000,
          },
        ],
      },
    ],
  },
  {
    id: "women",
    brand: { en: "Elite Hair Studio", id: "Elite Hair Studio" },
    categories: [
      {
        id: "signature-styling",
        label: {
          en: "Signature Styling & Cuts",
          id: "Penataan & Potongan Signature",
        },
        items: [
          {
            id: "executive-package",
            name: { en: "Executive Package", id: "Paket Executive" },
            subtitle: {
              en: "Premium wash, precision haircut, signature natural blowout, and nourishing vitamin treatment.",
              id: "Keramas premium, potong rambut presisi, blow natural khas, dan perawatan vitamin menutrisi.",
            },
            price: 250000,
          },
          {
            id: "premium-styling-cut",
            name: { en: "Premium Styling Cut", id: "Potong & Styling Premium" },
            subtitle: {
              en: "Master haircut, custom runway styling, and protective vitamin finish.",
              id: "Potong rambut oleh ahli, penataan ala runway custom, dan sentuhan akhir vitamin pelindung.",
            },
            price: 150000,
          },
          {
            id: "styling-women",
            name: { en: "Styling Women", id: "Styling Wanita" },
            subtitle: {
              en: "Refreshing wash and a flawless, long-lasting natural blowout.",
              id: "Keramas menyegarkan dan blow natural sempurna yang tahan lama.",
            },
            price: 125000,
          },
        ],
      },
      {
        id: "therapy",
        label: {
          en: "Advanced Therapy & Texturing",
          id: "Terapi & Tekstur Lanjutan",
        },
        items: [
          {
            id: "luxury-mask",
            name: { en: "Luxury Hair Mask", id: "Masker Rambut Luxury" },
            price: 200000,
            from: true,
          },
          {
            id: "smoothing",
            name: { en: "Premium Smoothing", id: "Smoothing Premium" },
            price: 700000,
            from: true,
          },
          {
            id: "keratin",
            name: { en: "Keratin Smooth Treatment", id: "Perawatan Keratin Smooth" },
            price: 600000,
            from: true,
          },
        ],
      },
      {
        id: "colouring-women",
        label: {
          en: "Couture Colouring & Technical Art",
          id: "Pewarnaan Couture & Seni Teknis",
        },
        items: [
          {
            id: "colour-basic-women",
            name: { en: "Colour Basic", id: "Warna Basic" },
            price: 300000,
            from: true,
          },
          {
            id: "colour-fashion-women",
            name: { en: "Colour Fashion", id: "Warna Fashion" },
            price: 500000,
            from: true,
          },
          {
            id: "balayage",
            name: { en: "Balayage Artistry", id: "Balayage Artistry" },
            price: 1000000,
            from: true,
          },
          {
            id: "studio-highlights",
            name: { en: "Studio Highlights", id: "Highlight Studio" },
            price: 1000000,
            from: true,
          },
          {
            id: "peek-a-boo",
            name: { en: "Peek-A-Boo Colour", id: "Warna Peek-A-Boo" },
            price: 800000,
            from: true,
          },
        ],
      },
    ],
  },
];
