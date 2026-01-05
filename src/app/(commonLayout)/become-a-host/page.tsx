import Faq from "@/components/Modules/BecomeHost/Faq";
import Hero from "@/components/Modules/BecomeHost/Hero";
import OurTem from "@/components/Modules/BecomeHost/OurTem";

export default function BecomeHostPage() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <Hero />

      {/* Our Team Section */}
      <OurTem />

      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
