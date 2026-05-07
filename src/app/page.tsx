import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { Templates } from "@/components/sections/Templates";
import { OtherProducts } from "@/components/sections/OtherProducts";
import { Offer } from "@/components/sections/Offer";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Templates />
      <OtherProducts />
      <Offer />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
