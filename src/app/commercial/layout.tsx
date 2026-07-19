import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial | Panorama Properties",
  description:
    "Panorama Properties' commercial and logistics infrastructure projects, alongside our residential developments.",
};

export default function CommercialLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
