export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const rendersDay: GalleryImage[] = [
  {
    src: "/images/golf-kabulameshi/render-01-gate-day.jpg",
    alt: "Aerial view of the gated entrance and villas at Golf Kabulameshi",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/golf-kabulameshi/render-02-gate-wide.jpg",
    alt: "Wide aerial view of Golf Kabulameshi's tree-lined boulevard and residences",
    width: 1535,
    height: 1024,
  },
  {
    src: "/images/golf-kabulameshi/render-08-villa-closeup.jpg",
    alt: "Close-up of a Golf Kabulameshi villa with private pool",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/golf-kabulameshi/render-09-townhouse-row.jpg",
    alt: "Row of modern townhouses at Golf Kabulameshi",
    width: 1501,
    height: 1048,
  },
  {
    src: "/images/golf-kabulameshi/render-03-gate-ground.jpg",
    alt: "Ground-level view of the Golf Kabulameshi entrance gate",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/golf-kabulameshi/render-05-river-view.jpg",
    alt: "Waterfront view of Golf Kabulameshi along the river",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/golf-kabulameshi/render-06-grid-view-a.jpg",
    alt: "Aerial overview of the Golf Kabulameshi residential grid",
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/golf-kabulameshi/render-07-grid-view-b.jpg",
    alt: "Aerial overview of Golf Kabulameshi toward the river",
    width: 1536,
    height: 1024,
  },
];

export const rendersNight: GalleryImage[] = [
  {
    src: "/images/golf-kabulameshi/render-04-night-aerial.jpg",
    alt: "Golf Kabulameshi illuminated at night",
    width: 1536,
    height: 1024,
  },
];

export const plans: (GalleryImage & { label: string })[] = [
  {
    src: "/images/golf-kabulameshi/site-context.jpg",
    alt: "Aerial context photo of the Golf Kabulameshi site before development",
    label: "Site Context",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/golf-kabulameshi/plan-zoning.jpg",
    alt: "Golf Kabulameshi zoning and area breakdown plan",
    label: "Zoning Plan",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/golf-kabulameshi/plan-land-use.jpg",
    alt: "Golf Kabulameshi land use distribution map",
    label: "Land Use Distribution",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/golf-kabulameshi/plan-plot-size.jpg",
    alt: "Golf Kabulameshi plot size map",
    label: "Plot Size Map",
    width: 1536,
    height: 1024,
  },
  {
    src: "/images/golf-kabulameshi/plan-roads.jpg",
    alt: "Golf Kabulameshi road network plan",
    label: "Road Network",
    width: 1536,
    height: 1024,
  },
];
