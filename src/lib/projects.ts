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
    tagline: "Kinshasa's gated townhouse community",
    status: "Now Selling",
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
