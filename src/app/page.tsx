import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ExcellenceSection from "@/components/home/ExcellenceSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaBanner from "@/components/home/CtaBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Section with Quick Stats */}
      <HeroSection />

      {/* 2. About Nahar's Builders Section */}
      <AboutSection />

      {/* 3. Core Services Grid */}
      <ServicesSection />

      {/* 4. Featured Projects Showcase (Filterable) */}
      <ProjectsSection />

      {/* 5. Construction Excellence / Why Choose Nahar's Builders */}
      <ExcellenceSection />

      {/* 6. Client Testimonials */}
      <TestimonialsSection />

      {/* 7. Quick Consultation CTA Banner */}
      <CtaBanner />
    </div>
  );
}
