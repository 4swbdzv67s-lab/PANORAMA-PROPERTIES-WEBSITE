export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "Now Selling" | "Coming Soon" | "Available to Rent";
  category: "development" | "listing";
  listingType: "rent" | "sale";
  description: string;
  highlights: string[];
  heroImage?: string;
  heroImageNight?: string;
  fr: {
    tagline: string;
    description: string;
    highlights: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "golf-kabulameshi",
    name: "Golf Kabulameshi",
    tagline: "Championship living, redefined",
    status: "Now Selling",
    category: "development",
    listingType: "sale",
    description:
      "Residences set along a championship golf course, pairing fairway views with modern architecture and resort-style amenities.",
    heroImage: "/images/golf-kabulameshi/hero.jpg",
    heroImageNight: "/images/golf-kabulameshi/render-04-night-aerial.jpg",
    highlights: [
      "Fairway and championship course views",
      "Private clubhouse access",
      "Resort-style pool and wellness center",
      "24/7 gated security",
    ],
    fr: {
      tagline: "Un art de vivre inspiré du golf",
      description:
        "Des résidences bordant un parcours de golf de championnat, alliant vues sur le fairway, architecture moderne et équipements dignes d'un resort.",
      highlights: [
        "Vue sur le fairway et le parcours de championnat",
        "Accès privé au clubhouse",
        "Piscine et espace bien-être de style resort",
        "Sécurité 24h/24 et 7j/7",
      ],
    },
  },
  {
    slug: "malaika",
    name: "Malaika",
    tagline: "Kinshasa's gated townhouse community",
    status: "Now Selling",
    category: "development",
    listingType: "sale",
    description:
      "Residence Malaika is a gated townhouse community in Kinshasa, offering finished modern homes with secured entry and private patios.",
    heroImage: "/images/malaika/render-06-gate-white.jpg",
    highlights: [
      "Located in Kinshasa",
      "Gated entrance with on-site security",
      "Modern townhouse interiors with private patios",
      "Move-in ready model homes",
    ],
    fr: {
      tagline: "La communauté résidentielle sécurisée de Kinshasa",
      description:
        "Résidence Malaika est une communauté résidentielle sécurisée à Kinshasa, offrant des maisons modernes finies avec entrée gardée et patios privés.",
      highlights: [
        "Situé à Kinshasa",
        "Entrée sécurisée avec surveillance sur place",
        "Intérieurs modernes avec patios privés",
        "Maisons témoins prêtes à emménager",
      ],
    },
  },
  {
    slug: "amethyste",
    name: "Amethyste",
    tagline: "Modern villas in a gated community",
    status: "Coming Soon",
    category: "development",
    listingType: "sale",
    description:
      "Amethyste is a gated community of modern villas, featuring private courtyards, a resident fountain plaza, and dedicated children's play areas.",
    heroImage: "/images/amethyste/render-02-gate-day.jpg",
    highlights: [
      "Gated entrance with secured access",
      "Modern architecture with private courtyards",
      "Central fountain plaza",
      "Dedicated children's playground",
    ],
    fr: {
      tagline: "Villas modernes dans une résidence sécurisée",
      description:
        "Amethyste est une résidence sécurisée de villas modernes, avec cours privées, place à fontaine et espaces de jeux dédiés aux enfants.",
      highlights: [
        "Entrée sécurisée avec accès contrôlé",
        "Architecture moderne avec cours privées",
        "Place centrale avec fontaine",
        "Aire de jeux dédiée aux enfants",
      ],
    },
  },
  {
    slug: "kimpika",
    name: "Kimpika",
    tagline: "Secure short-term parking for heavy trucks",
    status: "Coming Soon",
    category: "development",
    listingType: "sale",
    heroImage: "/images/kimpika/render-02-logistics-yard-aerial.jpg",
    description:
      "Kimpika is a dedicated short-term parking facility for heavy trucks and freight vehicles, offering a secure, monitored yard with dedicated loading bays and easy access for transit and logistics operations.",
    highlights: [
      "Dedicated short-term parking for heavy trucks",
      "Secure, monitored parking yard",
      "Dedicated loading and delivery bays",
      "Easy access for transit and logistics routes",
    ],
    fr: {
      tagline: "Stationnement sécurisé de courte durée pour poids lourds",
      description:
        "Kimpika est une installation de stationnement de courte durée dédiée aux poids lourds et véhicules de fret, offrant une cour sécurisée et surveillée avec des quais de chargement dédiés et un accès facile aux itinéraires de transit et de logistique.",
      highlights: [
        "Stationnement de courte durée dédié aux poids lourds",
        "Cour de stationnement sécurisée et surveillée",
        "Quais de chargement et de livraison dédiés",
        "Accès facile aux itinéraires de transit et de logistique",
      ],
    },
  },
  {
    slug: "kalemi-lake-view",
    name: "Kalemi Lake View",
    tagline: "Apartment living with a view",
    status: "Available to Rent",
    category: "listing",
    listingType: "rent",
    heroImage: "/images/kalemi-lake-view/render-01-aerial-lakefront.jpg",
    description:
      "Kalemi Lake View offers modern apartment units close to the water, with secure building access and easy access to local amenities.",
    highlights: [
      "Lake-facing views",
      "Modern apartment interiors",
      "Secure building access",
      "Close to local amenities",
    ],
    fr: {
      tagline: "Un appartement avec vue",
      description:
        "Kalemi Lake View propose des appartements modernes proches de l'eau, avec un accès sécurisé à l'immeuble et un accès facile aux commodités locales.",
      highlights: [
        "Vue sur le lac",
        "Intérieurs d'appartement modernes",
        "Accès sécurisé à l'immeuble",
        "Proche des commodités locales",
      ],
    },
  },
  {
    slug: "gombe-apartments",
    name: "Gombe Apartments",
    tagline: "Modern apartments in the heart of Gombe",
    status: "Available to Rent",
    category: "listing",
    listingType: "rent",
    heroImage: "/images/gombe-apartments/render-01-living-room-warm.jpg",
    description:
      "Gombe Apartments offers modern apartment units in Kinshasa's Gombe commune, within easy reach of the business district.",
    highlights: [
      "Located in Gombe",
      "Close to the business district",
      "Modern building amenities",
      "Flexible lease terms",
    ],
    fr: {
      tagline: "Appartements modernes au cœur de Gombe",
      description:
        "Gombe Apartments propose des appartements modernes dans la commune de la Gombe à Kinshasa, à proximité du quartier des affaires.",
      highlights: [
        "Situé à Gombe",
        "Proche du quartier des affaires",
        "Équipements modernes de l'immeuble",
        "Conditions de location flexibles",
      ],
    },
  },
  {
    slug: "hewa-bora",
    name: "Hewa Bora",
    tagline: "Contemporary apartment living",
    status: "Available to Rent",
    category: "listing",
    listingType: "rent",
    heroImage: "/images/hewa-bora/render-01-exterior-facade.jpg",
    description:
      "Hewa Bora offers contemporary apartment units in a secure residential building, close to schools and local shops.",
    highlights: [
      "Contemporary apartment design",
      "Secure residential building",
      "Close to schools and shops",
      "Flexible lease terms",
    ],
    fr: {
      tagline: "Un appartement contemporain",
      description:
        "Hewa Bora propose des appartements contemporains dans un immeuble résidentiel sécurisé, à proximité des écoles et des commerces.",
      highlights: [
        "Design d'appartement contemporain",
        "Immeuble résidentiel sécurisé",
        "Proche des écoles et commerces",
        "Conditions de location flexibles",
      ],
    },
  },
  {
    slug: "ngaliema-apartments",
    name: "Ngaliema Apartments",
    tagline: "Apartment living in Ngaliema",
    status: "Available to Rent",
    category: "listing",
    listingType: "rent",
    heroImage: "/images/ngaliema-apartments/render-01-exterior-row.jpg",
    description:
      "Ngaliema Apartments offers modern apartment units in Kinshasa's Ngaliema commune, in a quiet residential setting.",
    highlights: [
      "Located in Ngaliema",
      "Quiet residential setting",
      "Modern apartment interiors",
      "Flexible lease terms",
    ],
    fr: {
      tagline: "Un appartement à Ngaliema",
      description:
        "Ngaliema Apartments propose des appartements modernes dans la commune de la Ngaliema à Kinshasa, dans un cadre résidentiel calme.",
      highlights: [
        "Situé à Ngaliema",
        "Cadre résidentiel calme",
        "Intérieurs d'appartement modernes",
        "Conditions de location flexibles",
      ],
    },
  },
];
