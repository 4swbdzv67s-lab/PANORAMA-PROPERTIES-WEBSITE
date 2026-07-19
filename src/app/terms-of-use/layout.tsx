import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Panorama Properties",
  description: "The terms governing your use of the Panorama Properties website.",
};

export default function TermsOfUseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
