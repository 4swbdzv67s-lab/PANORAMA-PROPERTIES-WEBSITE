export const translations = {
  en: {
    nav: {
      home: "HOME",
      properties: "PROPERTIES",
      developments: "DEVELOPMENTS",
      services: "SERVICES",
      about: "ABOUT US",
      contact: "CONTACT",
    },
    hero: {
      tagline: "YOUR REAL ESTATE PARTNER",
      startExperience: "START EXPERIENCE",
      scrollToExplore: "SCROLL TO EXPLORE",
      discoverLine1: "DISCOVER",
      discoverLine2: "LUXURY",
      discoverLine3: "WITHOUT LIMITS",
      watchVideo: "WATCH VIDEO",
    },
    features: {
      luxuryLiving: {
        title: "Luxury Living",
        description: "Exceptional homes designed for elite lifestyles.",
      },
      primeLocations: {
        title: "Prime Locations",
        description: "Carefully selected locations with maximum value.",
      },
      modernDesign: {
        title: "Modern Design",
        description: "Architectural excellence blending comfort and elegance.",
      },
      trustSecurity: {
        title: "Trust & Security",
        description:
          "Safe investments with transparent process and legal security.",
      },
      viewAllProperties: "VIEW ALL PROPERTIES",
    },
    developments: {
      heading: "Our Developments",
      viewDevelopment: "VIEW DEVELOPMENT",
      allDevelopments: "ALL DEVELOPMENTS",
      ourPortfolio: "OUR PORTFOLIO",
      title: "Developments",
      subtitle:
        "Every Panorama development is built around the same idea: architecture that respects how people actually want to live.",
      highlights: "HIGHLIGHTS",
      enquireNow: "ENQUIRE NOW",
      gallery: "GALLERY",
      scrollToExplore: "Scroll to explore",
      siteAndMasterplan: "SITE & MASTERPLAN",
      nowSelling: "NOW SELLING",
      comingSoon: "COMING SOON",
    },
    footer: {
      rights: "All Rights Reserved.",
    },
    theme: {
      day: "DAY",
      night: "NIGHT",
    },
  },
  fr: {
    nav: {
      home: "ACCUEIL",
      properties: "PROPRIÉTÉS",
      developments: "PROJETS",
      services: "SERVICES",
      about: "À PROPOS",
      contact: "CONTACT",
    },
    hero: {
      tagline: "VOTRE PARTENAIRE IMMOBILIER",
      startExperience: "DÉCOUVRIR",
      scrollToExplore: "FAITES DÉFILER",
      discoverLine1: "DÉCOUVREZ",
      discoverLine2: "LE LUXE",
      discoverLine3: "SANS LIMITES",
      watchVideo: "REGARDER LA VIDÉO",
    },
    features: {
      luxuryLiving: {
        title: "Vie de Luxe",
        description: "Des maisons exceptionnelles conçues pour les élites.",
      },
      primeLocations: {
        title: "Emplacements Privilégiés",
        description:
          "Des emplacements soigneusement sélectionnés pour une valeur maximale.",
      },
      modernDesign: {
        title: "Design Moderne",
        description:
          "Excellence architecturale alliant confort et élégance.",
      },
      trustSecurity: {
        title: "Confiance et Sécurité",
        description:
          "Investissements sûrs avec un processus transparent et une sécurité juridique.",
      },
      viewAllProperties: "VOIR TOUTES LES PROPRIÉTÉS",
    },
    developments: {
      heading: "Nos Projets",
      viewDevelopment: "VOIR LE PROJET",
      allDevelopments: "TOUS LES PROJETS",
      ourPortfolio: "NOTRE PORTEFEUILLE",
      title: "Projets",
      subtitle:
        "Chaque projet Panorama repose sur la même idée : une architecture qui respecte la façon dont les gens veulent vraiment vivre.",
      highlights: "POINTS FORTS",
      enquireNow: "DEMANDER UNE INFO",
      gallery: "GALERIE",
      scrollToExplore: "Faites défiler pour explorer",
      siteAndMasterplan: "PLAN DU SITE",
      nowSelling: "EN VENTE",
      comingSoon: "BIENTÔT DISPONIBLE",
    },
    footer: {
      rights: "Tous Droits Réservés.",
    },
    theme: {
      day: "JOUR",
      night: "NUIT",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type Translations = (typeof translations)[Locale];
