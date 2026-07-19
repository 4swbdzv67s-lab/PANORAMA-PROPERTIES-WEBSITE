import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

const SITE_URL = "https://www.panoramaproperties.cd";
const SITE_TITLE = "Panorama Properties | Building the Future of Real Estate";
const SITE_DESCRIPTION =
  "Panorama Properties is a next-generation luxury real estate platform showcasing premium residential and commercial developments through immersive digital experiences.";
const SHARE_IMAGE = "/images/golf-kabulameshi/hero.jpg";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Panorama Properties",
    images: [{ url: SHARE_IMAGE, width: 1535, height: 1024 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

const themeInitScript = `
(function() {
  try {
    var theme = localStorage.getItem('panorama-theme');
    document.documentElement.setAttribute('data-theme', theme === 'day' ? 'day' : 'night');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'night');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="night" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
