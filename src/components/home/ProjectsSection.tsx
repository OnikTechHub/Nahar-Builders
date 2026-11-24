"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/data/projectsData";
import ProjectCard from "../ProjectCard";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"All" | "Ongoing" | "Completed" | "Upcoming">("All");

  const filteredProjects =
    activeTab === "All"
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.status === activeTab);

  const tabs: Array<"All" | "Ongoing" | "Completed" | "Upcoming"> = [
    "All",
    "Ongoing",
    "Completed",
    "Upcoming",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <span>FEATURED DEVELOPMENTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Landmarks Built with Precision & Integrity
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our portfolio of premium residential towers and corporate landmarks across prime locations in Chattogram and Dhaka.
            </p>
          </div>

          {/* Filter Tabs on Clean White Theme */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
            {tabs.map((tab) => {
              const count =
                tab === "All"
                  ? FEATURED_PROJECTS.length
                  : FEATURED_PROJECTS.filter((p) => p.status === tab).length;

              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                      isActive
                        ? "bg-red-600 text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA to Projects Archive */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow group"
          >
            <span>VIEW COMPLETE PROJECTS ARCHIVE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
