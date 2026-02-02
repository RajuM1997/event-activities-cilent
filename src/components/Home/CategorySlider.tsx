"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { categories } from "@/data/homePageData";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

const CategorySlider = () => {
  return (
    <section>
      {/* Categories Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="category-swiper"
      >
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <SwiperSlide key={category.slug}>
              <Link href={`/events?category=${category.slug}`}>
                <Card className="group cursor-pointer transition hover:shadow-lg">
                  <CardContent className="flex flex-col items-center justify-center py-8">
                    <div className="mb-4 rounded-full bg-primary/10 p-4 transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-sm font-medium text-center">
                      {category.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default CategorySlider;
