import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/FloatingWA";
import FadeIn from "@/components/ui/FadeIn";
import { siteData } from "@/config/site-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <Navbar brandName={siteData.general.brandName} />
      <FadeIn>
        <Hero heroData={siteData.hero} />
      </FadeIn>
      <FadeIn delay={0.1}>
        <Features />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Testimonials />
      </FadeIn>
      <FadeIn delay={0.3}>
        <CTA />
      </FadeIn>
      <Footer brandName={siteData.general.brandName} />
      <FloatingWA
        whatsappNumbers={siteData.general.whatsappNumbers}
        message={siteData.general.whatsappMessage}
        features={siteData.features}
      />
    </main>
  );
}
