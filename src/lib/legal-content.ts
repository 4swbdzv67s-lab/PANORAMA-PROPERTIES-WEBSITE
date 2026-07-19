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
          body: "When you submit our contact form, we collect the details you provide — your name, email address, phone number, and message, along with which development you're enquiring about. If you message us via WhatsApp, we receive your phone number and message content through that platform.",
        },
        {
          heading: "How We Use Your Information",
          body: "We use this information only to respond to your enquiry and to follow up about our developments and listings. We do not sell or rent your information to third parties.",
        },
        {
          heading: "Data Retention",
          body: "We keep enquiry information only for as long as needed to respond to you and maintain a reasonable record of our communications, after which it is deleted.",
        },
        {
          heading: "Cookies & Local Storage",
          body: "This site uses minimal local storage to remember your theme (day/night) and language preference. We do not currently use third-party tracking or advertising cookies.",
        },
        {
          heading: "Third-Party Services",
          body: "Our contact form may be processed through third-party form or email delivery services, our site map uses embedded Google Maps, and our WhatsApp button connects to Meta's WhatsApp platform. These providers have their own privacy policies governing data they process.",
        },
        {
          heading: "Security",
          body: "We take reasonable measures to protect the information you share with us, though no method of electronic transmission or storage is completely secure.",
        },
        {
          heading: "Children's Privacy",
          body: "This website is intended for adults seeking real estate services and is not directed at children. We do not knowingly collect information from children.",
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
          heading: "Acceptance of Terms",
          body: "These terms apply to all visitors and users of this website. By browsing or submitting information through this site, you confirm that you accept and agree to be bound by them.",
        },
        {
          heading: "Use of This Website",
          body: "This website is provided for informational purposes to showcase Panorama Properties' developments and listings. You agree to use it only for lawful purposes, and not to attempt to disrupt, scrape, or misuse the site.",
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
          heading: "External Links & Third-Party Platforms",
          body: "This site links to third-party platforms, including WhatsApp, Facebook, Instagram, and LinkedIn, and embeds Google Maps. We are not responsible for the content, availability, or practices of these external platforms.",
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
          heading: "Severability",
          body: "If any provision of these terms is found unenforceable, the remaining provisions will continue in full force and effect.",
        },
        {
          heading: "Governing Law",
          body: "These terms are governed by the laws of the Democratic Republic of the Congo, and any disputes will be subject to the jurisdiction of the courts of Kinshasa.",
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
          body: "Lorsque vous soumettez notre formulaire de contact, nous collectons les informations que vous fournissez — votre nom, votre adresse e-mail, votre numéro de téléphone et votre message, ainsi que le projet qui vous intéresse. Si vous nous contactez via WhatsApp, nous recevons votre numéro de téléphone et le contenu de votre message via cette plateforme.",
        },
        {
          heading: "Utilisation de Vos Informations",
          body: "Nous utilisons ces informations uniquement pour répondre à votre demande et assurer le suivi concernant nos projets et annonces. Nous ne vendons ni ne louons vos informations à des tiers.",
        },
        {
          heading: "Conservation des Données",
          body: "Nous conservons les informations de demande uniquement le temps nécessaire pour vous répondre et maintenir un historique raisonnable de nos échanges, après quoi elles sont supprimées.",
        },
        {
          heading: "Cookies et Stockage Local",
          body: "Ce site utilise un stockage local minimal pour mémoriser votre préférence de thème (jour/nuit) et de langue. Nous n'utilisons actuellement aucun cookie de suivi ou publicitaire tiers.",
        },
        {
          heading: "Services Tiers",
          body: "Notre formulaire de contact peut être traité via des services tiers de formulaire ou d'envoi d'e-mails, notre plan d'accès utilise Google Maps intégré, et notre bouton WhatsApp vous connecte à la plateforme WhatsApp de Meta. Ces fournisseurs ont leurs propres politiques de confidentialité.",
        },
        {
          heading: "Sécurité",
          body: "Nous prenons des mesures raisonnables pour protéger les informations que vous nous transmettez, bien qu'aucune méthode de transmission ou de stockage électronique ne soit totalement sécurisée.",
        },
        {
          heading: "Confidentialité des Enfants",
          body: "Ce site est destiné aux adultes à la recherche de services immobiliers et ne s'adresse pas aux enfants. Nous ne collectons pas sciemment d'informations auprès d'enfants.",
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
          heading: "Acceptation des Conditions",
          body: "Ces conditions s'appliquent à tous les visiteurs et utilisateurs de ce site. En le parcourant ou en y soumettant des informations, vous confirmez les accepter et vous engager à les respecter.",
        },
        {
          heading: "Utilisation de Ce Site",
          body: "Ce site est fourni à titre informatif pour présenter les projets et annonces de Panorama Properties. Vous acceptez de l'utiliser uniquement à des fins légales, et de ne pas tenter de le perturber, de l'extraire (scraping) ou d'en abuser.",
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
          heading: "Liens Externes et Plateformes Tierces",
          body: "Ce site renvoie vers des plateformes tierces, notamment WhatsApp, Facebook, Instagram et LinkedIn, et intègre Google Maps. Nous ne sommes pas responsables du contenu, de la disponibilité ou des pratiques de ces plateformes externes.",
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
          heading: "Divisibilité",
          body: "Si une disposition de ces conditions s'avère inapplicable, les autres dispositions demeurent pleinement en vigueur.",
        },
        {
          heading: "Droit Applicable",
          body: "Ces conditions sont régies par les lois de la République Démocratique du Congo, et tout litige relèvera de la compétence des tribunaux de Kinshasa.",
        },
        {
          heading: "Nous Contacter",
          body: "Pour toute question concernant ces conditions, écrivez à info@panoramaproperties.cd.",
        },
      ],
    },
  },
};
