import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panorama Properties | Building the Future of Real Estate",
  description:
    "Panorama Properties is a next-generation luxury real estate platform showcasing premium residential and commercial developments through immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
