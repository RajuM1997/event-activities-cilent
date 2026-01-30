import AboutSection from "@/components/Home/AboutSection";
import CategoriesSection from "@/components/Home/CategorySection";
import EventSection from "@/components/Home/EventSection";
import HeroSection from "@/components/Home/HeroSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import WhyChooseUs from "@/components/Home/WhyChooseUsSection";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { getEvents } from "@/services/event/event.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JoinUp | Discover & Join Events Near You",
  description:
    "JoinUp helps you discover, join, and host events easily. From music and tech to sports and community meetups — connect with people and experiences around you.",
  keywords: [
    "JoinUp",
    "events platform",
    "local events",
    "meetups",
    "event booking",
    "community events",
    "host events",
    "Bangladesh events",
  ],
  authors: [{ name: "JoinUp Team" }],
  creator: "JoinUp",
  metadataBase: new URL("https://joinup.com"), // change to your real domain
  openGraph: {
    title: "JoinUp | Discover & Join Events Near You",
    description:
      "Find exciting events, meet new people, and create memorable experiences with JoinUp.",
    url: "https://joinup.com",
    siteName: "JoinUp",
    images: [
      {
        url: "/og-home.png", // create this image (1200x630)
        width: 1200,
        height: 630,
        alt: "JoinUp - Discover Events",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JoinUp | Discover & Join Events Near You",
    description:
      "Discover events, connect with people, and join activities around you using JoinUp.",
    images: ["/og-home.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function Home() {
  const userInfo = await getUserInfo();
  const limit = "limit=3&page=1";
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
