import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck2,
  Leaf,
  CheckCircle2,
} from "lucide-react";
import { ABOUT_DATA } from "@/data/homeData";

export default function AboutSection() {
  const pillarIcons = [ShieldCheck, FileCheck2, Building2, Leaf];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Imagery & Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/5] sm:aspect-[3/4]">
              <Image
                src={ABOUT_DATA.image}
                alt="Nahar's Builders Construction Excellence"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Bottom Quote inside Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-slate-950/75 backdrop-blur-md rounded-xl border border-slate-700/60">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                  Corporate Philosophy
                </span>
                <p className="text-sm font-semibold italic mt-1 text-slate-100">
                  &ldquo;A building is not just steel and concrete; it is a lifetime promise of safety and happiness.&rdquo;
                </p>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-white text-slate-900 p-5 rounded-2xl shadow-xl border-2 border-red-600 max-w-[200px] z-10">
              <div className="text-3xl sm:text-4xl font-extrabold text-red-600">
                {ABOUT_DATA.experienceBadge.years}
              </div>
              <div className="text-xs font-bold text-slate-800 mt-1 uppercase tracking-wider">
                {ABOUT_DATA.experienceBadge.caption}
              </div>
            </div>

            {/* Subtle decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-100 rounded-3xl -z-10" />
          </div>

          {/* Right Column: Mission & Core Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span>{ABOUT_DATA.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {ABOUT_DATA.heading}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-red-600">
                {ABOUT_DATA.subheading}
              </p>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {ABOUT_DATA.description1}
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {ABOUT_DATA.description2}
            </p>

            {/* Core Pillars 2x2 Grid on Clean Light Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ABOUT_DATA.pillars.map((pillar, idx) => {
                const Icon = pillarIcons[idx % pillarIcons.length];
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-red-200 hover:bg-red-50/20 transition-all duration-200 space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-10">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={ABOUT_DATA.ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors duration-200 shadow-sm group"
              >
                <span>{ABOUT_DATA.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
