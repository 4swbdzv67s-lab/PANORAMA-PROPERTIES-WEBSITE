export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "Now Selling" | "Coming Soon";
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
    tagline: "Coastal serenity meets modern design",
    status: "Now Selling",
    description:
      "A waterfront development built for calm, unhurried living — open layouts, natural light, and spaces designed to slow down in.",
    highlights: [
      "Direct waterfront access",
      "Floor-to-ceiling windows",
      "Private terraces and gardens",
      "On-site concierge",
    ],
    fr: {
      tagline: "La sérénité côtière rencontre le design moderne",
      description:
        "Un projet en bord d'eau conçu pour une vie calme et sereine — espaces ouverts, lumière naturelle et lieux pensés pour ralentir le rythme.",
      highlights: [
        "Accès direct à l'eau",
        "Fenêtres du sol au plafond",
        "Terrasses et jardins privés",
        "Conciergerie sur place",
      ],
    },
  },
  {
    slug: "amytheste",
    name: "Amytheste",
    tagline: "Urban sophistication at its peak",
    status: "Coming Soon",
    description:
      "A landmark high-rise in the heart of the city, built for those who want skyline views without leaving the center of everything.",
    highlights: [
      "Panoramic skyline views",
      "Rooftop lounge and sky deck",
      "Smart-home integration",
      "Steps from the city center",
    ],
    fr: {
      tagline: "Le raffinement urbain à son apogée",
      description:
        "Une tour emblématique au cœur de la ville, conçue pour ceux qui veulent une vue sur les toits sans quitter le centre de tout.",
      highlights: [
        "Vue panoramique sur la ville",
        "Lounge et terrasse sur le toit",
        "Domotique intégrée",
        "À quelques pas du centre-ville",
      ],
    },
  },
  {
    slug: "kimpika",
    name: "Kimpika",
    tagline: "Where community meets craftsmanship",
    status: "Coming Soon",
    description:
      "A neighborhood-scale development built around shared green space, walkable streets, and homes designed to last generations.",
    highlights: [
      "Central green and community park",
      "Walkable, tree-lined streets",
      "Family-sized floor plans",
      "On-site retail and amenities",
    ],
    fr: {
      tagline: "Où la communauté rencontre le savoir-faire",
      description:
        "Un projet à échelle humaine conçu autour d'espaces verts partagés, de rues piétonnes et de maisons pensées pour durer des générations.",
      highlights: [
        "Parc communautaire central",
        "Rues piétonnes bordées d'arbres",
        "Plans adaptés aux familles",
        "Commerces et services sur place",
      ],
    },
  },
];
