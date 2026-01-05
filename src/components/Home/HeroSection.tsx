import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle } from "lucide-react";
import banner from "@/assets/banner.webp";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-150 overflow-hidden">
      {/* Background Image */}
      <Image
        src={banner}
        alt="People enjoying an event"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/40 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            {/* Badge */}
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
              🎉 Discover • Join • Create Events
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Bring People Together with{" "}
              <span className="text-primary">JoinUp</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Discover exciting events, join activities you love, and create
              unforgettable experiences — all in one powerful platform.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/events">
                <Button size="lg" className="gap-2">
                  Explore Events <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/create-event">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary text-primary hover:bg-white hover:text-black"
                >
                  Create Event <PlusCircle className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
