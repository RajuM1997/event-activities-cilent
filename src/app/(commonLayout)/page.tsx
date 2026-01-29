import AboutSection from "@/components/Home/AboutSection";
import CategoriesSection from "@/components/Home/CategorySection";
import EventSection from "@/components/Home/EventSection";
import HeroSection from "@/components/Home/HeroSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import WhyChooseUs from "@/components/Home/WhyChooseUsSection";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getEvents } from "@/services/event/event.service";

export default async function Home() {
  const userInfo = await getUserInfo();
  const limit = "limit=3";
  const { data } = await getEvents(limit);

  return (
    <div>
      <HeroSection user={userInfo} />
      <EventSection events={data} />
      <CategoriesSection />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialSection />
    </div>
  );
}
