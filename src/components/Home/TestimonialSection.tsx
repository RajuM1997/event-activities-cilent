"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Event Attendee",
    comment:
      "JoinUp makes finding events super easy. I booked my first event in minutes!",
  },
  {
    name: "Nusrat Jahan",
    role: "Event Organizer",
    comment: "Creating and managing events on JoinUp is simple and smooth.",
  },
  {
    name: "Tanvir Hasan",
    role: "Community Member",
    comment: "Great platform to meet new people and explore activities.",
  },
  {
    name: "Ayesha Khan",
    role: "Event Attendee",
    comment: "Very user-friendly and helpful platform for local events.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-linear-to-b from-green-50/50 to-white/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900">
            What People Say
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Trusted by our growing community
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <Card className="bg-white/20 backdrop-blur-md border border-white/30 shadow-lg hover:shadow-2xl transition p-6 rounded-2xl flex flex-col justify-between h-56 py-5">
                <CardContent className="flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-green-500 text-green-500 animate-pulse"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    “{item.comment}”
                  </p>

                  {/* User */}
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
