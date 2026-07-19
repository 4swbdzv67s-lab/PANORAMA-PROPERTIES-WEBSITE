import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Panorama Properties",
  description: "How Panorama Properties collects, uses, and protects your information.",
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
