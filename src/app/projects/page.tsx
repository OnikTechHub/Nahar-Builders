"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { VERIFIED_PROJECTS, RealProject } from "@/data/projectsData";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";
import { MapPin, ArrowRight, Eye, Building2, Layers } from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<RealProject | null>(null);

  const filters = [
    { label: "All Projects", key: "All" },
    { label: "Completed", key: "Completed" },
    { label: "Ongoing", key: "Ongoing" },
    { label: "Residential", key: "Residential" },
    { label: "Commercial", key: "Commercial" },
    { label: "Healthcare", key: "Healthcare" },
    { label: "Hospitality", key: "Hospitality" },
    { label: "Infrastructure", key: "Infrastructure" },
  ];

  const filteredProjects = VERIFIED_PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Completed") return project.status === "Completed";
    if (activeFilter === "Ongoing") return project.status === "Ongoing" || project.status === "Landmark";
    return project.category === activeFilter;
  });

  return (
    <div className="w-full bg-white font-jost text-[#1F2429]">
      {/* 1. Page Header matching naharbuilders.com */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E1DA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#8A7257]">
            <span className="w-2 h-2 rounded-full bg-[#8A7257]" />
            <span>Official Portfolio</span>
          </div>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-normal text-[#1F2429] tracking-tight leading-[1.1]">
            Landmarks &amp; Developments
          </h1>
          <p className="text-[#525960] text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            A verified portfolio of landmark residential towers, commercial markets, healthcare institutions, and infrastructure engineered by Nahar Builders across Bangladesh.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter Tabs & Projects Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-[#FAF8F5] p-2 rounded-lg border border-[#E6E1DA] max-w-4xl mx-auto">
          {filters.map((tab) => {
            const count = VERIFIED_PROJECTS.filter((p) => {
              if (tab.key === "All") return true;
              if (tab.key === "Completed") return p.status === "Completed";
              if (tab.key === "Ongoing") return p.status === "Ongoing" || p.status === "Landmark";
              return p.category === tab.key;
            }).length;

            const isActive = activeFilter === tab.key;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded text-xs font-medium tracking-wider uppercase transition flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#8A7257] text-white shadow-xs"
                    : "text-[#525960] hover:text-[#1F2429] hover:bg-black/[0.04]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActive ? "bg-white/20 text-white" : "bg-[#E6E1DA] text-[#525960]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid (3 columns, consistent image size, badges, meta, and View Details) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#E6E1DA] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11161B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Status & Category Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                  <span className="px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider bg-white/95 text-[#1F2429] shadow-xs">
                    {project.category}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider text-white shadow-xs ${
                      project.status === "Landmark"
                        ? "bg-[#8A7257]"
                        : project.status === "Ongoing"
                        ? "bg-amber-700"
                        : "bg-[#11161B]/85"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Scale / Stories Meta on image bottom */}
                <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                  <span className="text-xs bg-[#11161B]/80 backdrop-blur-xs px-2.5 py-1 rounded text-white/90">
                    {project.stories}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block">
                    {project.tagline}
                  </span>

                  <h3 className="font-cormorant text-2xl font-normal text-[#1F2429] group-hover:text-[#8A7257] transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#525960]">
                    <MapPin className="w-3.5 h-3.5 text-[#8A7257] shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#525960] font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Card Action Buttons: View Details (Modal) & Inquire */}
                <div className="pt-4 border-t border-[#E6E1DA] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A7257] hover:text-[#705944] group/btn uppercase tracking-wider transition"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <Link
                    href="/contact"
                    className="px-3.5 py-1.5 text-xs font-medium text-[#8A7257] hover:text-white bg-[#8A7257]/10 hover:bg-[#8A7257] rounded transition"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] space-y-3">
            <Building2 className="w-12 h-12 text-[#8A7257]/40 mx-auto" />
            <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
              No Projects in this Category
            </h3>
            <p className="text-sm text-[#525960] font-light">
              Select another category filter to explore Nahar Builders landmarks.
            </p>
          </div>
        )}

        {/* Bottom Call-To-Action Banner */}
        <div className="p-8 sm:p-10 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#1F2429]">
              Planning a High-Rise, Commercial, or Healthcare Development?
            </h4>
            <p className="text-xs sm:text-sm text-[#525960] font-light">
              Collaborate with Nahar Builders for turnkey structural engineering, architectural consultancy, and construction management.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#8A7257] hover:bg-[#705944] text-white text-xs tracking-wider uppercase font-medium rounded transition flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>Consult Our Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Project Details Modal Popup */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
