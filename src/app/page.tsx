import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-white text-zinc-950 font-sans selection:bg-emerald-200">
      <Hero />
      <ProductGrid />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
