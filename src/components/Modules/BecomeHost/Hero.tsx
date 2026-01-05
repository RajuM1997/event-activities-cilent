import React from "react";
import BecomeHostDialog from "./BecomeHostDialog";

const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-primary/20 to-primary/10 py-24 text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Become a Host on JoinUp
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
          Share your events with thousands of people, manage bookings easily,
          and grow your audience.
        </p>

        {/* Modal Trigger */}
        <BecomeHostDialog />
      </div>
    </section>
  );
};

export default Hero;
