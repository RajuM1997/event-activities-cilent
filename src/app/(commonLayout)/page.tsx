import AboutSection from "@/components/Home/AboutSection";
import CategoriesSection from "@/components/Home/CategorySection";
import EventSection from "@/components/Home/EventSection";
import HeroSection from "@/components/Home/HeroSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import WhyChooseUs from "@/components/Home/WhyChooseUsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <EventSection />
      <CategoriesSection />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialSection />
    </div>
  );
}
