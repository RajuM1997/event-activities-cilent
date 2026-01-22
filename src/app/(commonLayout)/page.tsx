import AboutSection from "@/components/Home/AboutSection";
import CategoriesSection from "@/components/Home/CategorySection";
import EventSection from "@/components/Home/EventSection";
import HeroSection from "@/components/Home/HeroSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import WhyChooseUs from "@/components/Home/WhyChooseUsSection";
import { getUserInfo } from "@/services/auth/getUserInfo";

export default async function Home() {
  const userInfo = await getUserInfo();

  return (
    <div>
      <HeroSection user={userInfo} />
      <EventSection />
      <CategoriesSection />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialSection />
    </div>
  );
}
