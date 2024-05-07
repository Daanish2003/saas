import HomeCta from "@/components/home/home-cta";
import HomeFeatures from "@/components/home/home-features";
import HomeFeatures2 from "@/components/home/home-features2";
import HomeHero from "@/components/home/home-hero";
import HomeLogo from "@/components/home/home-logo";
import HomeTestimonial from "@/components/home/home-testimonials";
import HomeWhy from "@/components/home/home-why";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeWhy />
      <HomeCta />
      <HomeLogo />
      <HomeFeatures2 />
      <HomeTestimonial />
    </>
  );
}
