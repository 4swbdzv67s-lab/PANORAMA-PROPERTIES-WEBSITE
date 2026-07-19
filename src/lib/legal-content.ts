export type LegalSection = {
  heading: string;
  body: string;
};

export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export const legalContent: Record<"en" | "fr", { privacy: LegalDoc; terms: LegalDoc }> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: July 2026",
      intro:
        "Panorama Properties (\"we\", \"us\") respects your privacy. This policy explains what information we collect through this website and how we use it.",
      sections: [
        {
          heading: "Information We Collect",
          body: "When you submit our contact form, we collect the details you provide — your name, email address, phone number, and message, along with which development you're enquiring about.",
        },
        {
          heading: "How We Use Your Information",
          body: "We use this information only to respond to your enquiry and to follow up about our developments and listings. We do not sell or rent your information to third parties.",
        },
        {
          heading: "Cookies",
          body: "This site uses minimal local storage to remember your theme (day/night) and language preference. We do not currently use third-party tracking or advertising cookies.",
        },
        {
          heading: "Third-Party Services",
          body: "Our contact form may be processed through third-party form or email delivery services, and our site map uses embedded Google Maps. These providers have their own privacy policies governing data they process.",
        },
        {
          heading: "Your Rights",
          body: "You may request access to, correction of, or deletion of any personal information you've submitted to us by contacting us using the details below.",
        },
        {
          heading: "Contact Us",
          body: "Questions about this policy can be sent to info@panoramaproperties.cd.",
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      updated: "Last updated: July 2026",
      intro:
        "By accessing this website, you agree to the following terms. If you do not agree, please do not use this site.",
      sections: [
        {
          heading: "Use of This Website",
          body: "This website is provided for informational purposes to showcase Panorama Properties' developments and listings. You agree to use it only for lawful purposes.",
        },
        {
          heading: "Property Listings Disclaimer",
          body: "Renders, photos, floor plans, availability, and pricing are indicative and subject to change without notice. Nothing on this site constitutes a binding offer; all enquiries are subject to a formal agreement.",
        },
        {
          heading: "Intellectual Property",
          body: "All content on this site — including text, images, renders, and the Panorama Properties name and logo — is the property of Panorama Properties and may not be reproduced without permission.",
        },
        {
          heading: "Limitation of Liability",
          body: "Panorama Properties is not liable for any loss or damage arising from your use of this website or reliance on information presented on it.",
        },
        {
          heading: "Changes to These Terms",
          body: "We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.",
        },
        {
          heading: "Governing Law",
          body: "These terms are governed by the laws of the Democratic Republic of the Congo.",
        },
        {
          heading: "Contact Us",
          body: "Questions about these terms can be sent to info@panoramaproperties.cd.",
        },
      ],
    },
  },
  fr: {
    privacy: {
      title: "Politique de Confidentialité",
      updated: "Dernière mise à jour : juillet 2026",
      intro:
        "Panorama Properties (« nous ») respecte votre vie privée. Cette politique explique quelles informations nous collectons via ce site et comment nous les utilisons.",
      sections: [
        {
          heading: "Informations Que Nous Collectons",
          body: "Lorsque vous soumettez notre formulaire de contact, nous collectons les informations que vous fournissez — votre nom, votre adresse e-mail, votre numéro de téléphone et votre message, ainsi que le projet qui vous intéresse.",
        },
        {
          heading: "Utilisation de Vos Informations",
          body: "Nous utilisons ces informations uniquement pour répondre à votre demande et assurer le suivi concernant nos projets et annonces. Nous ne vendons ni ne louons vos informations à des tiers.",
        },
        {
          heading: "Cookies",
          body: "Ce site utilise un stockage local minimal pour mémoriser votre préférence de thème (jour/nuit) et de langue. Nous n'utilisons actuellement aucun cookie de suivi ou publicitaire tiers.",
        },
        {
          heading: "Services Tiers",
          body: "Notre formulaire de contact peut être traité via des services tiers de formulaire ou d'envoi d'e-mails, et notre plan d'accès utilise Google Maps intégré. Ces fournisseurs ont leurs propres politiques de confidentialité.",
        },
        {
          heading: "Vos Droits",
          body: "Vous pouvez demander l'accès, la correction ou la suppression de toute information personnelle que vous nous avez soumise en nous contactant aux coordonnées ci-dessous.",
        },
        {
          heading: "Nous Contacter",
          body: "Pour toute question concernant cette politique, écrivez à info@panoramaproperties.cd.",
        },
      ],
    },
    terms: {
      title: "Conditions d'Utilisation",
      updated: "Dernière mise à jour : juillet 2026",
      intro:
        "En accédant à ce site, vous acceptez les conditions suivantes. Si vous n'êtes pas d'accord, veuillez ne pas utiliser ce site.",
      sections: [
        {
          heading: "Utilisation de Ce Site",
          body: "Ce site est fourni à titre informatif pour présenter les projets et annonces de Panorama Properties. Vous acceptez de l'utiliser uniquement à des fins légales.",
        },
        {
          heading: "Avertissement Sur Les Annonces",
          body: "Les rendus, photos, plans, disponibilités et prix sont indicatifs et sujets à modification sans préavis. Rien sur ce site ne constitue une offre contractuelle ; toute demande est soumise à un accord formel.",
        },
        {
          heading: "Propriété Intellectuelle",
          body: "Tout le contenu de ce site — textes, images, rendus, nom et logo Panorama Properties — est la propriété de Panorama Properties et ne peut être reproduit sans autorisation.",
        },
        {
          heading: "Limitation de Responsabilité",
          body: "Panorama Properties ne peut être tenue responsable de toute perte ou dommage résultant de votre utilisation de ce site ou de votre confiance dans les informations qui y sont présentées.",
        },
        {
          heading: "Modifications de Ces Conditions",
          body: "Nous pouvons mettre à jour ces conditions de temps à autre. La poursuite de l'utilisation du site après publication des modifications vaut acceptation des conditions révisées.",
        },
        {
          heading: "Droit Applicable",
          body: "Ces conditions sont régies par les lois de la République Démocratique du Congo.",
        },
        {
          heading: "Nous Contacter",
          body: "Pour toute question concernant ces conditions, écrivez à info@panoramaproperties.cd.",
        },
      ],
    },
  },
};
