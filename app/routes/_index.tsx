import type { MetaFunction } from "@remix-run/node";
import { HeroSection } from "~/components/HeroSection";

export const meta: MetaFunction = () => {
  return [
    { title: "Three d websites" },
    { name: "description", content: "Elevate your brand to new heights with our creative 3D website solutions. We specialize in crafting innovative, professional 3D websites that transform your product or brand, taking it to the next level.Explore our 3D web design services for businesses seeking unparalleled visual impact and user engagement." },
  ];
};

export default function Index() {
  return (
  <HeroSection />
  );
}
