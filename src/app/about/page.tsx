import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight, Building2, MapPin, Compass, Target, Gem, Phone } from "lucide-react";
import { OFFICIAL_CONTACT } from "@/data/navigation";

export const metadata = {
  title: "About Us | Nahar Builders | Premier Civil Engineering in Chattogram",
  description:
    "Learn about Nahar Builders' company overview, history, business focus, mission, vision, and engineering standards in Chattogram, Bangladesh.",
};

export default function AboutPage() {
  const businessFocusAreas = [
    {
      title: "Civil Construction & Structural Safety",
      description:
        "Execution of reinforced concrete frames (RCC), deep pile foundations, and multi-level basements complying strictly with the Bangladesh National Building Code (BNBC).",
      icon: Building2,
    },
    {
      title: "Real Estate Development",
      description:
        "Developing high-end residential towers, luxury condominiums, and strategic commercial properties in prime growth corridors of Chattogram.",
      icon: Compass,
    },
    {
      title: "Specialized Healthcare Infrastructure",
      description:
        "Demonstrated technical capability delivering complex clinical landmarks such as the 19-storied Nahar Specialized Hospital with double-basement foundations.",
      icon: ShieldCheck,
    },
    {
      title: "Project Supervision & Laboratory Testing",
      description:
        "Continuous on-site engineering oversight, BUET-tested Grade 72/60 rebar verification, and batch-by-batch concrete cylinder compression tests.",
      icon: Target,
    },
  ];

  return (
    <div className="w-full bg-white font-jost text-[#1F2429]">
      {/* 1. Page Header */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E1DA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#8A7257]">
            <span className="w-2 h-2 rounded-full bg-[#8A7257]" />
            <span>About Nahar Builders</span>
          </div>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-normal text-[#1F2429] tracking-tight leading-[1.1]">
            Committed to Structural Integrity, Precision &amp; Client Trust
          </h1>
          <p className="text-[#525960] text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            A distinguished civil construction and real estate development company in Chattogram, Bangladesh, delivering enduring residential towers, commercial complexes, and healthcare infrastructure.
          </p>
        </div>
      </section>

      {/* 2. Two-Column Company Overview & Background (Using User's HeroImg) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[3px] text-[#8A7257] block">
              Company Overview &amp; Experience
            </span>

            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F2429] leading-tight">
              Building Enduring Landmarks Across Chattogram
            </h2>

            <p className="text-[#525960] text-base leading-relaxed font-light">
              Nahar Builders is a premier civil construction and real estate development enterprise headquartered at Nahar Square, Bahaddarhat, Chattogram. Guided by an unwavering commitment to structural durability and architectural elegance, we deliver landmarks that stand resilient against time and environmental stress.
            </p>

            <p className="text-[#525960] text-base leading-relaxed font-light">
              Our multidisciplinary team of experienced civil engineers, MEP consultants, architects, and on-site directors manage complete project lifecycles — from soil mechanics and deep foundation piling to structural framing and turnkey interior handovers.
            </p>

            {/* Corporate Profile Card */}
            <div className="p-6 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] space-y-3">
              <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block">
                Corporate Headquarters &amp; Operations
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#1F2429] leading-relaxed">
                {OFFICIAL_CONTACT.address}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#525960]">
                <span>Hotlines: <strong className="text-[#1F2429]">{OFFICIAL_CONTACT.phonePrimary}</strong></span>
                <span>•</span>
                <span>Email: <strong className="text-[#1F2429]">{OFFICIAL_CONTACT.emailGeneral}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Image Column: High-Res User Image from public/HeroImg/ */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl border border-[#E6E1DA] aspect-[4/3]">
              <Image
                src="/HeroImg/img.avif"
                alt="Nahar Builders Architectural Engineering Landmark"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11161B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-semibold text-[#C2AF98] uppercase tracking-[2px] block">
                  Chattogram • Architectural Engineering
                </span>
                <p className="font-cormorant text-xl text-white mt-1">
                  Precision Engineering, Seismic Safety &amp; Enduring Value
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Core Values Section */}
      <section className="py-20 bg-[#F5F2EC] border-y border-[#E6E1DA]" id="mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
              Core Principles
            </span>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429]">
              Our Mission, Vision &amp; Philosophy
            </h2>
            <p className="text-[#525960] text-sm sm:text-base font-light">
              The fundamental standards governing every blueprint, foundation, and structural milestone at Nahar Builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Mission */}
            <div className="bg-[#FAF8F5] p-8 rounded-lg border border-[#E6E1DA] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#8A7257]/10 text-[#8A7257] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block">
                01 / Our Mission
              </span>
              <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                Architectural Excellence
              </h3>
              <p className="text-[#525960] text-xs sm:text-sm font-light leading-relaxed">
                To translate innovative architectural visions into structurally resilient, aesthetically superior physical landmarks that strictly adhere to national building codes and elevate the urban environment of Chattogram.
              </p>
            </div>

            {/* Card 2: Vision */}
            <div className="bg-[#FAF8F5] p-8 rounded-lg border border-[#E6E1DA] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#8A7257]/10 text-[#8A7257] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block">
                02 / Our Vision
              </span>
              <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                National Benchmark of Quality
              </h3>
              <p className="text-[#525960] text-xs sm:text-sm font-light leading-relaxed">
                To stand as the most trusted civil engineering and real estate development partner in Bangladesh, recognized for seismic durability, transparent client partnerships, and timely milestone handovers.
              </p>
            </div>

            {/* Card 3: Values & Philosophy */}
            <div className="bg-[#FAF8F5] p-8 rounded-lg border border-[#E6E1DA] shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#8A7257]/10 text-[#8A7257] flex items-center justify-center">
                <Gem className="w-6 h-6" />
              </div>
              <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block">
                03 / Core Philosophy
              </span>
              <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                Trust &amp; Technical Precision
              </h3>
              <p className="text-[#525960] text-xs sm:text-sm font-light leading-relaxed">
                We believe architecture is more than creating concrete structures; it is building lasting human trust, backed by rigorous on-site supervision, BUET-certified materials, and zero compromise on safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Business Focus & Areas of Operation */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
            Capabilities &amp; Scope
          </span>
          <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429]">
            Business Focus &amp; Areas of Operation
          </h2>
          <p className="text-[#525960] text-sm sm:text-base font-light">
            Comprehensive civil engineering and development solutions across Chattogram Metropolitan Area.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {businessFocusAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] hover:border-[#8A7257]/50 transition flex items-start gap-5 shadow-xs"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-[#E6E1DA] text-[#8A7257] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525960] font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5. Bottom Action CTA */}
        <div className="p-8 sm:p-10 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#1F2429]">
              Explore Our Landmark Construction Projects
            </h4>
            <p className="text-xs sm:text-sm text-[#525960] font-light">
              Review completed residential towers, corporate spaces, and healthcare institutions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/projects"
              className="px-6 py-3 bg-[#8A7257] hover:bg-[#705944] text-white text-xs tracking-wider uppercase font-medium rounded transition flex items-center gap-2 shadow-sm"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-[#8A7257] text-[#8A7257] hover:bg-[#8A7257] hover:text-white text-xs tracking-wider uppercase font-medium rounded transition"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
