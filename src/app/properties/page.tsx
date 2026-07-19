import type { Metadata } from "next";
import { PropertiesContent } from "@/components/PropertiesContent";

export const metadata: Metadata = {
  title: "Properties | Panorama Properties",
  description:
    "Browse Panorama Properties' listings for rent and for sale, each with a full site walkthrough.",
};

export default function PropertiesPage() {
  return <PropertiesContent />;
}
