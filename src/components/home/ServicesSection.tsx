import React from "react";
import Link from "next/link";
import {
  Building2,
  Building,
  Compass,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { CORE_SERVICES } from "@/data/homeData";

export default function ServicesSection() {
  const iconMap = {
    Building2,
    Building,
    Compass,
    ShieldCheck,
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100/70 border border-red-200 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <span>OUR CORE SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Real Estate & Construction Solutions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From initial structural engineering to turnkey interior finishes, Nahar&apos;s Builders delivers complete architectural and construction capabilities under one trusted roof.
          </p>
        </div>

        {/* 4-Card Services Grid on Clean White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CORE_SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName];

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
              >
                {/* Top Crimson Accent line */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-transparent group-hover:bg-red-600 rounded-t-full transition-colors duration-300" />

                <div className="space-y-4">
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center p-3">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-200 group-hover:text-red-100 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 space-y-2 border-t border-slate-100">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2 text-[11px] text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <Link
                    href={service.ctaLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-red-600 transition-colors"
                  >
                    <span>EXPLORE SERVICE</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultancy Note */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">
              Need custom architectural design or land development consulting?
            </h4>
            <p className="text-xs text-slate-500">
              Our civil structural engineers and legal land advisors offer comprehensive feasibility studies.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0"
          >
            Consult Our Engineers
          </Link>
        </div>
      </div>
    </section>
  );
}
