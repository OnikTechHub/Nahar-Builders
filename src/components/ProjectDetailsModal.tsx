"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MapPin, Building, CheckCircle2, ArrowRight, Shield } from "lucide-react";
import { RealProject } from "@/data/projectsData";
import { OFFICIAL_CONTACT } from "@/data/navigation";

interface ProjectDetailsModalProps {
  project: RealProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header Image */}
        <div className="relative aspect-[16/9] w-full bg-slate-100">
          <Image
            src={project.image}
            alt={`${project.title} - Nahar Builders`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges on image */}
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-[#8A7257] text-white shadow-xs">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-white/95 text-[#1F2429] backdrop-blur-xs shadow-xs">
                {project.status}
              </span>
            </div>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-normal text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#8A7257] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#1F2429] block">Location</span>
                <span className="text-[#525960]">{project.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Building className="w-4 h-4 text-[#8A7257] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#1F2429] block">Scale & Scope</span>
                <span className="text-[#525960]">{project.stories}</span>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-[#8A7257] uppercase tracking-wider">
              Project Overview
            </h4>
            <p className="text-sm text-[#525960] font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Verified Engineering Specifications */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F2429]">
              Verified Technical Highlights
            </h4>
            <div className="space-y-2">
              {project.verifiedDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#525960]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A7257] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#E6E1DA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#525960]">
              Official inquiry hotline: <strong className="text-[#1F2429]">{OFFICIAL_CONTACT.phonePrimary}</strong>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#1F2429] text-xs font-medium tracking-wider uppercase rounded transition"
              >
                Close
              </button>
              {project.slug === "nahar-specialized-hospital" && (
                <Link
                  href="/hospital"
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-[#11161B] hover:bg-[#252E38] text-white text-xs font-medium tracking-wider uppercase rounded transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Dedicated Showcase</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C2AF98]" />
                </Link>
              )}
              <Link
                href="/contact"
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-[#8A7257] hover:bg-[#705944] text-white text-xs font-medium tracking-wider uppercase rounded transition flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Consult On This Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
