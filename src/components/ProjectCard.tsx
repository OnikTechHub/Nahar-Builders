"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Building,
  Maximize2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Project } from "@/data/projectsData";
import QuickInquiryModal from "./QuickInquiryModal";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  // Status badge styling on clean white theme
  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Ongoing":
        return {
          bg: "bg-amber-50 text-amber-800 border-amber-300",
          dot: "bg-amber-500 animate-pulse",
          label: "Under Construction",
        };
      case "Completed":
        return {
          bg: "bg-emerald-50 text-emerald-800 border-emerald-300",
          dot: "bg-emerald-600",
          label: "100% Handed Over",
        };
      case "Upcoming":
        return {
          bg: "bg-rose-50 text-rose-800 border-rose-300",
          dot: "bg-rose-600",
          label: "Pre-Launch / Booking",
        };
      default:
        return {
          bg: "bg-slate-100 text-slate-800 border-slate-300",
          dot: "bg-slate-600",
          label: status,
        };
    }
  };

  const statusStyle = getStatusBadge(project.status);

  return (
    <>
      <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
        {/* Project Thumbnail with Badges */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <Image
            src={project.image}
            alt={`${project.title} - Nahar's Builders Landmark`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2 z-10">
            {/* Status Badge */}
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm border backdrop-blur-md ${statusStyle.bg}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
              <span>{statusStyle.label}</span>
            </span>

            {/* Category Badge */}
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 text-slate-800 backdrop-blur-sm border border-slate-200 shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Bottom Completion Date Overlay */}
          <div className="absolute bottom-3 left-3 right-3 text-white z-10 flex items-center justify-between text-xs font-medium">
            <span className="bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] text-white">
              Handover: {project.completionYear}
            </span>
          </div>
        </div>

        {/* Content Body on Clean White */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">
              {project.title}
            </h3>

            {/* Location */}
            <div className="flex items-start gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{project.location}</span>
            </div>

            {/* Key Specs Bar */}
            <div className="grid grid-cols-2 gap-2 py-3 px-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <div className="flex items-center gap-1.5 text-slate-700">
                <Maximize2 className="w-3.5 h-3.5 text-red-600" />
                <span className="truncate">{project.area}</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Building className="w-3.5 h-3.5 text-red-600" />
                <span className="truncate">{project.units}</span>
              </div>
            </div>

            {/* Description Snippet */}
            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Card Footer Actions */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 group/btn"
            >
              <span>INQUIRE DETAILS</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </button>

            <Link
              href={`/projects#${project.slug}`}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition"
            >
              View Specs
            </Link>
          </div>
        </div>
      </div>

      <QuickInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProject={`${project.title} (${project.location})`}
      />
    </>
  );
}
