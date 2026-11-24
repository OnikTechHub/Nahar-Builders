"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Truck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  X,
  ChevronRight,
  Zap,
  Layers,
  Phone,
  HardHat,
} from "lucide-react";
import { OFFICIAL_CONTACT } from "@/data/navigation";

interface FleetCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
}

const FLEET_INVENTORY: FleetCard[] = [
  {
    id: "fleet-1",
    tag: "Excavators & Earthmovers",
    title: "Heavy Machinery & Excavation Fleet",
    description:
      "Hydraulic excavators, heavy earthmovers, and deep basement foundation equipment engineered for rapid site preparation and massive earth excavation.",
    image: "/nahar/equipment-38.png",
  },
  {
    id: "fleet-2",
    tag: "Concrete & Pumping",
    title: "Concrete Batching & High-Pressure Pumps",
    description:
      "Stationary and mobile high-pressure concrete pump networks for seamless vertical casting across multi-story high-rise structures.",
    image: "/nahar/equipment-39.png",
  },
  {
    id: "fleet-3",
    tag: "Formwork & Hoists",
    title: "Scaffolding & Vertical Hoisting Gear",
    description:
      "Certified steel shuttering props, heavy-duty scaffolding towers, high-capacity material lifts, and motorized high-rise winches.",
    image: "/nahar/equipment-40.png",
  },
  {
    id: "fleet-4",
    tag: "Industrial Power",
    title: "Industrial Diesel Generators & Support",
    description:
      "High-capacity soundproof industrial generator units and mobile backup substations ensuring 24/7 uninterrupted construction operations.",
    image: "/nahar/equipment-41.png",
  },
];

const CAPABILITIES = [
  {
    tag: "Earthwork",
    title: "Excavators & Earthmovers",
    description:
      "Heavy hydraulic excavators and earthmoving machinery for foundation digging, deep basement excavation, and site clearance.",
  },
  {
    tag: "Concrete",
    title: "Batching & Concrete Pumps",
    description:
      "Diesel & electric concrete mixers, batching plant support, and stationary high-pressure concrete pumps for multi-story pouring.",
  },
  {
    tag: "Compaction",
    title: "Vibrators & Compactors",
    description:
      "High-frequency concrete needle vibrators, plate compactors, and rammers ensuring concrete void elimination and maximum density.",
  },
  {
    tag: "Formwork",
    title: "Steel Scaffolding & Props",
    description:
      "Heavy-duty steel scaffolding, adjustable MS props, steel shuttering plates, and safety netting for high-rise slab pouring.",
  },
  {
    tag: "Power",
    title: "Soundproof Generators",
    description:
      "High-capacity industrial diesel generators providing 24/7 power for site machinery, tower lighting, and welding plant.",
  },
  {
    tag: "Lifting",
    title: "Hoisting & Material Lifts",
    description:
      "Construction material hoists, motorized winches, and lifting gear for vertical movement of rebar and concrete to upper floors.",
  },
];

export default function EquipmentPage() {
  const [activeModalImg, setActiveModalImg] = useState<{ src: string; title: string } | null>(null);

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
            <Link href="/services" className="hover:text-[#8A7257] transition">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#8A7257] font-medium">Machinery &amp; Equipment</span>
          </div>
        </div>
      </div>

      {/* 2. Header */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E1DA] py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#8A7257]">
            <span className="w-2 h-2 rounded-full bg-[#8A7257]" />
            <span>Plant &amp; Logistics</span>
          </div>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-normal text-[#1F2429] tracking-tight leading-[1.1]">
            Construction Machinery &amp; Fleet
          </h1>
          <p className="text-[#525960] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            In-house inventory of heavy machinery and precision tools driving structural quality, strict timeline control, and engineering safety on site.
          </p>
        </div>
      </section>

      {/* 3. Fleet Overview Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
                Operational Excellence
              </span>
              <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429] leading-tight">
                Modern Heavy Equipment Fleet
              </h2>
            </div>

            <p className="text-[#525960] text-sm sm:text-base font-light leading-relaxed">
              Nahar Builders maintains an extensive, company-owned fleet of modern heavy construction machinery. Owning our equipment fleet guarantees timeline control, eliminates third-party rental bottlenecks, and ensures uncompromised safety across all high-rise sites.
            </p>

            <p className="text-[#525960] text-sm sm:text-base font-light leading-relaxed">
              Every machine undergoes routine preventive maintenance by certified mechanical engineers to ensure optimal performance, fuel efficiency, and environmental compliance.
            </p>

            {/* 3 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] space-y-1 text-center">
                <Truck className="w-5 h-5 text-[#8A7257] mx-auto" />
                <h4 className="font-medium text-xs uppercase tracking-wider text-[#1F2429]">
                  100% Owned Fleet
                </h4>
                <p className="text-[11px] text-[#525960] font-light">Zero rental delay</p>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] space-y-1 text-center">
                <ShieldCheck className="w-5 h-5 text-[#8A7257] mx-auto" />
                <h4 className="font-medium text-xs uppercase tracking-wider text-[#1F2429]">
                  Rigorous Safety
                </h4>
                <p className="text-[11px] text-[#525960] font-light">Certified operators</p>
              </div>

              <div className="p-4 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] space-y-1 text-center">
                <Zap className="w-5 h-5 text-[#8A7257] mx-auto" />
                <h4 className="font-medium text-xs uppercase tracking-wider text-[#1F2429]">
                  24/7 Continuity
                </h4>
                <p className="text-[11px] text-[#525960] font-light">Backup power units</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div
              onClick={() =>
                setActiveModalImg({
                  src: "/nahar/equipment-38.png",
                  title: "Nahar Builders Heavy Construction Machinery Fleet",
                })
              }
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E6E1DA] shadow-lg group cursor-pointer bg-[#FAF8F5]"
            >
              <Image
                src="/nahar/equipment-38.png"
                alt="Heavy Construction Machinery Fleet"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-[#11161B]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/95 text-[#1F2429] text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-[#8A7257]" />
                  <span>Enlarge Preview</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Equipment Showcase Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5] border-y border-[#E6E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
              Official Fleet Inventory
            </span>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429]">
              Equipment Showcase &amp; Plant Capabilities
            </h2>
            <p className="text-[#525960] text-sm sm:text-base font-light">
              Verified brochure sheets showcasing the primary heavy machinery categories actively deployed on Nahar Builders projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FLEET_INVENTORY.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden border border-[#E6E1DA] shadow-xs hover:shadow-md transition flex flex-col justify-between group"
              >
                {/* Image Container with Enlarge feature */}
                <div
                  onClick={() =>
                    setActiveModalImg({
                      src: item.image,
                      title: item.title,
                    })
                  }
                  className="relative aspect-[16/10] w-full bg-[#FAF8F5] overflow-hidden cursor-pointer border-b border-[#E6E1DA]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 p-1.5 rounded-full shadow-xs">
                    <Maximize2 className="w-4 h-4 text-[#8A7257]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7257] bg-[#FAF8F5] px-2.5 py-1 rounded inline-block border border-[#E6E1DA]">
                      {item.tag}
                    </span>
                    <h3 className="font-cormorant text-2xl font-normal text-[#1F2429] group-hover:text-[#8A7257] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525960] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E6E1DA] flex items-center justify-between text-xs text-[#525960]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8A7257]" />
                      <span>Company-Owned &amp; Maintained</span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveModalImg({
                          src: item.image,
                          title: item.title,
                        })
                      }
                      className="text-[#8A7257] hover:text-[#705944] font-medium"
                    >
                      View Sheet
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Machinery Capabilities (6-card Grid) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
            Inventory Highlights
          </span>
          <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429]">
            Machinery Capabilities
          </h2>
          <p className="text-[#525960] text-sm sm:text-base font-light">
            Comprehensive equipment categories supporting full turnkey civil construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-8 rounded-lg border border-[#E6E1DA] space-y-3 shadow-xs hover:shadow-md transition"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7257] block">
                {cap.tag}
              </span>
              <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#525960] font-light leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* 6. CTA Banner */}
        <div className="p-8 sm:p-10 bg-[#11161B] text-white rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-cormorant text-2xl sm:text-3xl font-normal text-white">
              Need Reliable Construction Machinery or Equipment Support?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Inquire about our plant capabilities, heavy civil contracting, and site engineering equipment.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#8A7257] hover:bg-[#705944] text-white text-xs tracking-wider uppercase font-medium rounded transition flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>Contact Equipment Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModalImg(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E6E1DA] pb-3">
              <h4 className="font-cormorant text-xl text-[#1F2429] font-normal">
                {activeModalImg.title}
              </h4>
              <button
                type="button"
                onClick={() => setActiveModalImg(null)}
                className="p-1 text-slate-400 hover:text-slate-800 rounded transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-[16/10] w-full bg-[#FAF8F5] rounded-lg overflow-hidden">
              <Image
                src={activeModalImg.src}
                alt={activeModalImg.title}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
