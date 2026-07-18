import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Panorama Properties | Building the Future of Real Estate",
  description:
    "Panorama Properties is a next-generation luxury real estate platform showcasing premium residential and commercial developments through immersive digital experiences.",
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
