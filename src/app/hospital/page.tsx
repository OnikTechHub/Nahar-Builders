import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Building2,
  Layers,
  Activity,
  ShieldCheck,
  Wind,
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  Flame,
  Phone,
} from "lucide-react";
import { OFFICIAL_CONTACT } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Nahar Specialized Hospital | Healthcare Infrastructure Showcase | Nahar Builders",
  description:
    "Explore the 19-storied Nahar Specialized Hospital project in Chattogram featuring double basement parking, advanced seismic design, and state-of-the-art healthcare infrastructure.",
};

const SPECIFICATIONS = [
  {
    tag: "Sub-Structure",
    title: "Deep Piling Foundation",
    description:
      "Heavy cast-in-situ concrete piles engineered to support high-rise axial loads and secure structural foundation integrity on Chattogram soil conditions.",
    icon: Layers,
  },
  {
    tag: "Underground Facility",
    title: "Double Basement Sub-Structure",
    description:
      "Perimeter diaphragm retaining walls providing secure parking for 150+ vehicles, central mechanical plant rooms, and emergency water reservoirs.",
    icon: Building2,
  },
  {
    tag: "Logistics",
    title: "Medical Elevator Systems",
    description:
      "Equipped with high-speed passenger elevators and dedicated heavy-duty bed and stretcher lifts with redundant emergency power backup routing.",
    icon: Activity,
  },
  {
    tag: "HVAC & Airflow",
    title: "Specialized HVAC Ducting",
    description:
      "Dedicated HEPA air filtration ductwork for Operation Theatres (OT) and ICUs to maintain sterile air quality, positive pressure, and humidity differentials.",
    icon: Wind,
  },
  {
    tag: "Safety",
    title: "Fire Evacuation Network",
    description:
      "Integrated sprinkler networks, pressurized fire escape staircases, automated smoke evacuation systems, and high-capacity fire pump installations.",
    icon: Flame,
  },
  {
    tag: "Utilities",
    title: "Central Power & Gas Lines",
    description:
      "Redundant industrial diesel generator setups, dedicated transformer substations, and certified central medical gas piping integration.",
    icon: Zap,
  },
];

export default function HospitalPage() {
  return (
    <div className="w-full bg-white font-jost text-[#1F2429]">
      {/* 1. Breadcrumbs */}
      <div className="bg-[#FAF8F5] border-b border-[#E6E1DA]/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#525960]">
            <Link href="/" className="hover:text-[#8A7257] transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/projects" className="hover:text-[#8A7257] transition">
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#8A7257] font-medium">Nahar Specialized Hospital</span>
          </div>
        </div>
      </div>

      {/* 2. Flagship Hero Banner */}
      <section className="relative bg-[#11161B] text-white py-20 lg:py-28 overflow-hidden border-b border-[#8A7257]/30">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#8A7257_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8A7257]/20 border border-[#8A7257]/40 text-[#C2AF98] text-xs font-semibold uppercase tracking-[2px]">
            <span className="w-2 h-2 rounded-full bg-[#8A7257] animate-pulse" />
            <span>Flagship Healthcare Infrastructure</span>
          </div>

          <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.08]">
            Nahar Specialized Hospital
          </h1>

          <p className="text-white/80 text-base sm:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            A 19-Storied Medical Tower with Double Basement Sub-Structure &amp; Advanced Clinical Engineering in Chattogram.
          </p>

          {/* Key Metric Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/20 bg-white/5 text-white/90">
              <Building2 className="w-4 h-4 text-[#C2AF98]" />
              <strong className="font-medium">19 Floors</strong>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/20 bg-white/5 text-white/90">
              <Layers className="w-4 h-4 text-[#C2AF98]" />
              <strong className="font-medium">Double Basement Parking</strong>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#8A7257] text-white shadow-sm">
              <Activity className="w-4 h-4 animate-spin text-white" />
              <strong className="font-medium">Active Development Landmark</strong>
            </span>
          </div>
        </div>
      </section>

      {/* 3. Overview & Architectural Highlights */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
                Engineering Milestone
              </span>
              <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429] leading-tight">
                Healthcare Architecture Standard
              </h2>
            </div>

            <p className="text-[#525960] text-sm sm:text-base font-light leading-relaxed">
              Nahar Specialized Hospital represents one of Nahar Builders&apos; most complex structural achievements. Designed to meet international healthcare infrastructure standards, this 19-storied tower combines structural resilience with specialized clinical functionality.
            </p>

            <p className="text-[#525960] text-sm sm:text-base font-light leading-relaxed">
              From heavy cast-in-situ foundation piling engineered to withstand seismic forces, to medical gas pipeline routing and specialized HVAC air handling systems, every tier is being executed with technical precision.
            </p>

            {/* 2 Highlight Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-[#FAF8F5] rounded-lg border-l-4 border-l-[#8A7257] border border-[#E6E1DA] space-y-1.5 shadow-xs">
                <h4 className="font-cormorant text-xl font-normal text-[#1F2429]">
                  Seismic Core
                </h4>
                <p className="text-xs text-[#525960] font-light leading-relaxed">
                  Engineered reinforced concrete shear walls for lateral stability under earthquake loads.
                </p>
              </div>

              <div className="p-5 bg-[#FAF8F5] rounded-lg border-l-4 border-l-[#8A7257] border border-[#E6E1DA] space-y-1.5 shadow-xs">
                <h4 className="font-cormorant text-xl font-normal text-[#1F2429]">
                  Double Basement
                </h4>
                <p className="text-xs text-[#525960] font-light leading-relaxed">
                  Multi-level underground parking and central mechanical utility reservoirs.
                </p>
              </div>
            </div>

            {/* Verified Bullet Highlights */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#525960]">
                <CheckCircle2 className="w-4 h-4 text-[#8A7257] shrink-0" />
                <span>Compliant with Bangladesh National Building Code (BNBC) seismic standards</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#525960]">
                <CheckCircle2 className="w-4 h-4 text-[#8A7257] shrink-0" />
                <span>Continuous power redundancy via dedicated high-capacity transformer substations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#525960]">
                <CheckCircle2 className="w-4 h-4 text-[#8A7257] shrink-0" />
                <span>Dedicated vertical clinical zoning separating outpatient, inpatient, and emergency wings</span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#E6E1DA] shadow-lg group bg-slate-100">
              <Image
                src="/nahar/projects/nahar-hospital.png"
                alt="Nahar Specialized Hospital Architectural Rendering Concept"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11161B]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C2AF98] block">
                  Official Architectural Concept
                </span>
                <h3 className="font-cormorant text-2xl font-normal text-white">
                  19-Storied Medical Tower
                </h3>
                <p className="text-xs text-white/80 font-light">
                  Chattogram, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technical Specifications Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-y border-[#E6E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
              Technical Excellence
            </span>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429]">
              Key Engineering Specifications
            </h2>
            <p className="text-[#525960] text-sm sm:text-base font-light">
              High-specification structural, MEP, and life-safety engineering implemented throughout the medical complex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIFICATIONS.map((spec, idx) => {
              const Icon = spec.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg border border-[#E6E1DA] space-y-4 shadow-xs hover:shadow-md transition flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7257] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E6E1DA]">
                        {spec.tag}
                      </span>
                      <Icon className="w-5 h-5 text-[#8A7257]" />
                    </div>

                    <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                      {spec.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#525960] font-light leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Institutional Consultation CTA */}
      <section className="py-20 lg:py-24 bg-[#11161B] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="inline-block px-3 py-1 rounded bg-[#8A7257]/20 border border-[#8A7257]/40 text-[#C2AF98] text-xs font-semibold uppercase tracking-[2px]">
            Institutional Excellence
          </span>

          <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-white">
            Need Engineering Expertise for Healthcare Facilities?
          </h2>

          <p className="text-white/70 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Nahar Builders possesses the specialized technical capacity, machinery fleet, and senior engineering management to execute medical towers and complex commercial structures.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#8A7257] hover:bg-[#705944] text-white px-7 py-3 text-xs tracking-wider uppercase font-medium rounded transition flex items-center gap-2 shadow-sm"
            >
              <span>Consult Our Engineering Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={`tel:${OFFICIAL_CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-white/20 hover:border-white/40 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-white/5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C2AF98]" />
              <span>Call {OFFICIAL_CONTACT.phonePrimary}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
