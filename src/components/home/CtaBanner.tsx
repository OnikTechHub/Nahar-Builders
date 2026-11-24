"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Calendar, ArrowRight, Sparkles, Mail, ShieldCheck } from "lucide-react";
import { CONSULTATION_CTA } from "@/data/homeData";
import QuickInquiryModal from "../QuickInquiryModal";

export default function CtaBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white relative overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/25">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{CONSULTATION_CTA.tagline}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                {CONSULTATION_CTA.heading}
              </h2>

              <p className="text-white/95 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                {CONSULTATION_CTA.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-white/95">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  Free Civil Engineering Feasibility Study
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  Private Site Inspection with Project Director
                </span>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-950 active:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-red-500" />
                <span>SCHEDULE SITE VISIT / QUOTE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={`tel:${CONSULTATION_CTA.hotline.replace(/[^0-9+]/g, "")}`}
                className="w-full py-3.5 px-6 bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-red-600" />
                <span>CALL HOTLINE: {CONSULTATION_CTA.hotline}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuickInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultProject="Consultation & Site Visit Request"
      />
    </>
  );
}
