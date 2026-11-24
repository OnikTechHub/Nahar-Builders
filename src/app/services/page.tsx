import React from "react";
import Link from "next/link";
import {
  Building2,
  Building,
  Layers,
  RefreshCw,
  ClipboardCheck,
  FileCheck2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Boxes,
  Wind,
  Layers as MaterialsIcon,
  Factory,
} from "lucide-react";
import { VERIFIED_SERVICES_LIST, SUPPLY_CHAIN_ITEMS } from "@/data/homeData";

export const metadata = {
  title: "Services | Nahar Builders | Luxury Engineering & Construction Solutions",
  description:
    "Comprehensive architectural design, civil engineering, project management, and heavy material logistics by Nahar Builders in Chattogram, Bangladesh.",
};

export default function ServicesPage() {
  const serviceIcons = [
    Building2,
    Building,
    Layers,
    RefreshCw,
    ClipboardCheck,
    FileCheck2,
  ];

  const supplyIcons = [Boxes, Wind, MaterialsIcon, Factory];

  return (
    <div className="w-full bg-white font-jost text-[#1F2429]">
      {/* 1. Page Header matching naharbuilders.com/services */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E1DA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#8A7257]">
            <span className="w-2 h-2 rounded-full bg-[#8A7257]" />
            <span>What We Deliver</span>
          </div>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-normal text-[#1F2429] tracking-tight leading-[1.1]">
            Engineering &amp; Design Capabilities
          </h1>
          <p className="text-[#525960] text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive architectural design, civil engineering, project management, and heavy material logistics.
          </p>
        </div>
      </section>

      {/* 2. Core 6 Services Listing */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VERIFIED_SERVICES_LIST.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <div
                key={service.id}
                className="bg-[#FAF8F5] rounded-lg p-8 border border-[#E6E1DA] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#8A7257] bg-[#8A7257]/10 px-3 py-1 rounded">
                      {service.tag}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E6E1DA] text-[#8A7257] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#1F2429]">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#525960] font-light leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-[#E6E1DA]/80 space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-[#525960] font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#8A7257] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6E1DA]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8A7257] hover:text-[#705944] transition"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Building Material Import & Supply Chain */}
      <section className="py-20 lg:py-24 bg-[#F5F2EC] border-y border-[#E6E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
              Logistics
            </span>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429]">
              Material Import &amp; Supply Chain
            </h2>
            <p className="text-[#525960] text-sm sm:text-base font-light">
              Importing certified building components and machinery for high-rise infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPLY_CHAIN_ITEMS.map((item, idx) => {
              const SupplyIcon = supplyIcons[idx % supplyIcons.length];
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] p-6 rounded-lg border border-[#E6E1DA] text-center space-y-3 shadow-xs"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-[#E6E1DA] text-[#8A7257] flex items-center justify-center mx-auto">
                    <SupplyIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8A7257] block">
                    {item.tag}
                  </span>
                  <h4 className="font-cormorant text-xl font-normal text-[#1F2429]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#525960] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Public & Private Sector Engagements */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Public Sector Card */}
          <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-lg border-l-4 border-l-[#8A7257] border border-[#E6E1DA] space-y-4 shadow-xs">
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#8A7257] block">
              Public Sector
            </span>
            <h3 className="font-cormorant text-3xl font-normal text-[#1F2429]">
              Government Construction
            </h3>
            <p className="text-sm text-[#525960] font-light leading-relaxed">
              Nahar Builders possesses full technical capacity, heavy fleet machinery, and compliance certifications to execute government infrastructure, public works, and sub-contracting engagements with strict adherence to BNBC standards.
            </p>
          </div>

          {/* Private Sector Card */}
          <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-lg border-l-4 border-l-[#8A7257] border border-[#E6E1DA] space-y-4 shadow-xs">
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#8A7257] block">
              Private Sector
            </span>
            <h3 className="font-cormorant text-3xl font-normal text-[#1F2429]">
              Private &amp; Commercial Projects
            </h3>
            <p className="text-sm text-[#525960] font-light leading-relaxed">
              We collaborate with private land owners, real estate developers, and commercial entities to design, construct, and manage bespoke residential towers and commercial centers across Bangladesh.
            </p>
          </div>
        </div>

        {/* 5. Bottom Call-To-Action Banner */}
        <div className="p-8 sm:p-10 bg-[#FAF8F5] rounded-lg border border-[#E6E1DA] flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#1F2429]">
              Need Turnkey Civil Engineering or CDA Approvals?
            </h4>
            <p className="text-xs sm:text-sm text-[#525960] font-light">
              Speak directly with our senior civil engineers at our corporate head office in Bahaddarhat, Chattogram.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#8A7257] hover:bg-[#705944] text-white text-xs tracking-wider uppercase font-medium rounded transition flex items-center gap-2 shadow-sm"
            >
              <span>Get A Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
