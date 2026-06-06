import Features from "@/app/components/sections/Features";
import Hero from "@/app/components/sections/Hero";
import Pricing from "@/app/components/sections/Pricing";
import Testimonials from "@/app/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </>
  );
}