import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Panorama Properties",
  description:
    "Get in touch with Panorama Properties about our developments in Kinshasa and Lubumbashi.",
};

export default function ContactPage() {
  return <ContactContent />;
}
