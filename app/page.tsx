import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StudioSection } from "@/components/studio-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <StudioSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
