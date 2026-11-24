"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Award,
  Clock,
  Users,
  Building,
  CheckCircle2,
  Sparkles,
  Phone,
} from "lucide-react";
import { HERO_DATA } from "@/data/homeData";
import { COMPANY_CONTACT } from "@/data/navigation";
import QuickInquiryModal from "../QuickInquiryModal";

export default function HeroSection() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const statIcons = [Clock, Building, CheckCircle2, Users];

  return (
    <section className="relative bg-white text-slate-900 overflow-hidden border-b border-slate-200/80">
      {/* Background Architectural Canvas with Soft Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85"
          alt="Nahar's Builders Architectural Landmark"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-15 filter"
        />
        {/* Soft light gradient overlays to ensure clean white readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-12 w-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold tracking-wider uppercase text-red-600">
              {HERO_DATA.tagline}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-semibold text-slate-600">
              {HERO_DATA.badge}
            </span>
          </div>

          {/* Bold Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Building Landmarks,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-amber-600">
              Elevating Lifestyles.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
            {HERO_DATA.subtitle}
          </p>

          {/* Dual Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href={HERO_DATA.primaryCta.href}
              className="px-7 py-3.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>{HERO_DATA.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="px-7 py-3.5 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-red-600" />
              <span>{HERO_DATA.secondaryCta.label}</span>
            </button>
          </div>

          {/* Micro trust indicators */}
          <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Shield className="w-4 h-4 text-red-600" />
              <span>BUET-Tested Seismic Structural Safety</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Freehold Dispute-Free Titles</span>
            </span>
          </div>
        </div>
      </div>

      {/* Clean White Stats Bar */}
      <div className="relative z-10 w-full border-t border-slate-200 bg-slate-50/70 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {HERO_DATA.stats.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-3.5 border-l-2 border-red-600 pl-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-800">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 hidden sm:block">
                      {stat.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <QuickInquiryModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </section>
  );
}
