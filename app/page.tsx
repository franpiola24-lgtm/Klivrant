import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StackStrip } from "@/components/StackStrip";
import { Capabilities } from "@/components/Capabilities";
import { CaseStudy } from "@/components/CaseStudy";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { CTAFinal, Footer } from "@/components/CTAFinal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StackStrip />
      <Capabilities />
      <CaseStudy />
      <Pricing />
      <Process />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
