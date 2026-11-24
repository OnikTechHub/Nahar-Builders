"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Building2, MessageSquare, ChevronLeft, ChevronRight, Gem } from "lucide-react";

interface HeroImage {
  id: number;
  src: string;
  alt: string;
}

const HERO_IMAGES: HeroImage[] = [
  {
    id: 1,
    src: "/HeroImg/img.avif",
    alt: "Nahar Builders Architectural Landmark Construction",
  },
  {
    id: 2,
    src: "/HeroImg/img1.jpg",
    alt: "High-Rise Real Estate Development in Chattogram",
  },
  {
    id: 3,
    src: "/HeroImg/img2.jpg",
    alt: "Structural Civil Engineering and Heavy Construction",
  },
  {
    id: 4,
    src: "/HeroImg/img3.jpg",
    alt: "Modern Healthcare and Commercial Infrastructure",
  },
];

const TRUST_ITEMS = [
  "Civil Construction",
  "Real Estate Development",
  "Project Supervision",
  "Heavy Equipment & Materials",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = HERO_IMAGES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel every 5 seconds matching naharbuilders.com
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="relative w-full h-[100vh] min-h-[650px] flex items-center overflow-hidden text-white select-none bg-[#11161B]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Nahar Builders Luxury Showcase"
    >
      {/* 1. Background Slider Slides (Scale 1.08 -> 1.0 with 1.2s Crossfade) */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={img.id}
              className={`hero-slide ${isActive ? "active" : ""}`}
              style={{
                backgroundImage: `url('${img.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}

        {/* Exact Dark Gradient Overlay from naharbuilders.com */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(17, 22, 27, 0.6) 0%, rgba(17, 22, 27, 0.35) 45%, rgba(17, 22, 27, 0.85) 100%)",
          }}
        />
      </div>

      {/* 2. Stationary Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <div className="max-w-3xl">
          {/* Subtitle Tag */}
          <div className="mb-5 pl-5 border-l-2 border-[#8A7257]">
            <span className="text-[#C2AF98] text-xs sm:text-sm font-semibold tracking-[4px] uppercase block">
              Premier Construction Partner in Chattogram
            </span>
          </div>

          {/* Main Title (Cormorant Garamond) */}
          <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-normal text-white mb-6 leading-[1.1] tracking-wide drop-shadow-md">
            Building Your Dreams with Trust &amp; Quality
          </h1>

          {/* Subtitle Description */}
          <p className="font-jost text-sm sm:text-lg lg:text-xl text-white/90 font-light mb-8 max-w-2xl leading-relaxed drop-shadow-sm">
            A distinguished engineering &amp; development partner dedicated to architectural distinction, safety compliance, and enduring value.
          </p>

          {/* Buttons matching naharbuilders.com */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/projects"
              className="bg-[#8A7257] hover:bg-[#705944] text-white px-7 py-3.5 text-xs tracking-widest uppercase font-medium rounded transition flex items-center gap-2.5 shadow-md"
            >
              <Building2 className="w-4 h-4 text-white/90" />
              <span>Explore Portfolio</span>
            </Link>

            <Link
              href="/contact"
              className="border border-white/70 hover:bg-white hover:text-[#11161B] text-white px-7 py-3.5 text-xs tracking-widest uppercase font-medium rounded transition flex items-center gap-2.5 backdrop-blur-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consult Our Team</span>
            </Link>
          </div>

          {/* Trust Bar matching naharbuilders.com */}
          <div className="border-t border-white/20 pt-6 flex flex-wrap items-center gap-6 lg:gap-8 text-xs sm:text-sm tracking-wider uppercase text-white/90">
            {TRUST_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Gem className="w-3.5 h-3.5 text-[#8A7257]" />
                <span className="font-normal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Slider Controls (Dots & Arrows) matching naharbuilders.com */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-30 flex items-center gap-5">
        {/* Dots */}
        <div className="flex items-center gap-2.5">
          {HERO_IMAGES.map((_, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#8A7257] border-2 border-[#8A7257] scale-125 shadow-[0_0_10px_rgba(138,114,87,0.6)]"
                    : "border-2 border-white/70 bg-transparent hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>

        {/* Circular Arrows */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-10 h-10 rounded-full border border-white/35 bg-[#11161B]/45 hover:bg-[#8A7257] hover:border-[#8A7257] text-white flex items-center justify-center transition backdrop-blur-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-10 h-10 rounded-full border border-white/35 bg-[#11161B]/45 hover:bg-[#8A7257] hover:border-[#8A7257] text-white flex items-center justify-center transition backdrop-blur-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
