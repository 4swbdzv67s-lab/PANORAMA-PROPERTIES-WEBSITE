import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developments | Panorama Properties",
  description:
    "Explore Panorama Properties' portfolio of luxury developments, from golf-course residences to waterfront living and urban high-rises.",
};

export default function DevelopmentsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
