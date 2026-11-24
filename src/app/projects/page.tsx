import React from "react";
import ProjectsSection from "@/components/home/ProjectsSection";
import CtaBanner from "@/components/home/CtaBanner";

export const metadata = {
  title: "Projects | Nahar's Builders | Ongoing, Completed & Upcoming Landmarks",
  description: "Browse Nahar's Builders' architectural portfolio including ongoing developments, completed handover residences, and upcoming pre-launch projects in Chattogram and Dhaka.",
};

export default function ProjectsPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header on Clean White / Soft Slate */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100/70 border border-red-200 px-3 py-1 rounded-full">
            <span>DEVELOPMENT PORTFOLIO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Architectural Landmarks
          </h1>
          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Every project by Nahar&apos;s Builders reflects our devotion to structural integrity, functional luxury, and transparent on-time handovers.
          </p>
        </div>
      </section>

      {/* Projects Showcase with interactive filtering */}
      <ProjectsSection />

      {/* CTA */}
      <CtaBanner />
    </div>
  );
}
