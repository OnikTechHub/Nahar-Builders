import React from "react";
import {
  Layers,
  CheckCircle2,
  Clock,
  Award,
  Shield,
  HeartHandshake,
  Check,
  Building,
} from "lucide-react";
import { EXCELLENCE_PILLARS } from "@/data/homeData";

export default function ExcellenceSection() {
  const iconMap = {
    Layers,
    CheckCircle2,
    Clock,
    Award,
    Shield,
    HeartHandshake,
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-700 bg-red-100/70 border border-red-200 px-3.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <span>CONSTRUCTION EXCELLENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Nahar&apos;s Builders?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We reject shortcuts. Every foundation pile, structural slab, and legal contract adheres to unyielding quality standards that protect your family and investment for generations.
          </p>
        </div>

        {/* 6-Pillar Excellence Grid on Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {EXCELLENCE_PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.iconName];

            return (
              <div
                key={pillar.title}
                className="bg-white border border-slate-200/90 hover:border-red-300 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Nahar&apos;s Builders Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Benchmark Comparison Callout on Clean White */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Rigorous Engineering Benchmark
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                BNBC 2020 Seismic Code Compliance
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our structural frames are designed using finite element dynamic earthquake analysis, providing superior structural damping against seismic events and severe cyclonic winds.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wide block">
                  Material Standards
                </span>
                <p className="text-xs text-slate-600">
                  Grade 72/60 deformed high-yield rebar and pre-tested cement brands with BUET lab certification for each cast.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wide block">
                  Legal Deed Clarity
                </span>
                <p className="text-xs text-slate-600">
                  Direct mutation records, non-encumbrance certificates, and zero third-party land mortgage entanglements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
