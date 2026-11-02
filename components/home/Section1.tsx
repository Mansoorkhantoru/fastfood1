"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image: "/images/hero1.webp",
    title: "Juicy Smash Burgers",
    subtitle: "Order now & get 20% off on your first order!",
  },
  {
    id: 2,
    image: "/images/hero2.webp",
    title: "Hot & Cheesy Pizza",
    subtitle: "Freshly baked with premium toppings.",
  },
  {
    id: 3,
    image: "/images/hero3.webp",
    title: "Family Feast Combos",
    subtitle: "Crispy chicken, fries, and drinks for everyone.",
  },
];

export default function HeroSlider() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover brightness-75"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg text-gray-200 mb-6 drop-shadow-sm max-w-xl">
                  {slide.subtitle}
                </p>
                {/* <div>
                  <a
                    href="#menu-section"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition duration-200 inline-block cursor-pointer"
                  >
                    Order Now
                  </a>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
