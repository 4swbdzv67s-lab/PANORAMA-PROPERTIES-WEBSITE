export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "Now Selling" | "Coming Soon";
  description: string;
  highlights: string[];
  heroImage?: string;
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
    highlights: [
      "Fairway and championship course views",
      "Private clubhouse access",
      "Resort-style pool and wellness center",
      "24/7 gated security",
    ],
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
  },
];
