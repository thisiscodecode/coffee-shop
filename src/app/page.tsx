import { menuCategories } from "@/lib/menu-data";
import HeroSection from "@/components/hero-section";
import StickyNav from "@/components/sticky-nav";
import MenuSection from "@/components/menu-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <StickyNav categories={menuCategories} />

      <main className="flex-1">
        {menuCategories.map((category, index) => (
          <MenuSection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
