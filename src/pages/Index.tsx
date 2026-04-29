import { useReveal } from "@/hooks/useReveal";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Loader } from "@/components/site/Loader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  useReveal();
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Loader />
      <CustomCursor />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <WhyUs />
      <CTA />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
