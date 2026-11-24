import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Truck,
  Building2,
  CheckCircle2,
  Award,
  Layers,
  ArrowRight,
  ClipboardCheck,
  Users2,
  HardHat,
} from "lucide-react";

const STRENGTHS = [
  {
    number: "01",
    tag: "Engineering Standard",
    title: "Structural Integrity & Seismic Design",
    description:
      "All structural frameworks are designed strictly under Bangladesh National Building Code (BNBC) guidelines, incorporating BUET-compliant RCC details, seismic shear walls, and deep cast-in-situ pile foundations.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    tag: "Equipment & Logistics",
    title: "100% Company-Owned Heavy Fleet",
    description:
      "Nahar Builders maintains an extensive, owned inventory of hydraulic excavators, high-pressure concrete pumps, batching plants, and soundproof generators — eliminating rental bottlenecks and ensuring strict timeline control.",
    icon: Truck,
  },
  {
    number: "03",
    tag: "Proven Track Record",
    title: "Complex High-Rise & Healthcare Expertise",
    description:
      "Demonstrated engineering capability delivering technically demanding landmarks — including 14-storied residential towers and the 19-storied Nahar Specialized Hospital featuring double basement parking and clinical MEP systems.",
    icon: Building2,
  },
  {
    number: "04",
    tag: "Quality Control",
    title: "Batch Testing & Material Verification",
    description:
      "Independent laboratory testing for every structural batch: verified Grade 72/60 high-yield rebar, cylinder concrete compression crush tests, and continuous on-site civil engineering oversight.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    tag: "Regulatory Mastery",
    title: "Turnkey CDA Approvals & Clearances",
    description:
      "Full-service regulatory management from sub-soil investigation and structural vetting to Chittagong Development Authority (CDA) approvals, environmental safety clearances, and utility routing.",
    icon: Layers,
  },
  {
    number: "06",
    tag: "Client Partnership",
    title: "Transparent Management & Direct Leadership",
    description:
      "Direct accessibility to senior project directors and chartered engineers at our Bahaddarhat headquarters, coupled with transparent milestone billing and regular structural progress reporting.",
    icon: Users2,
  },
];

const CREDENTIAL_METRICS = [
  {
    value: "19 Stories",
    label: "Healthcare Landmark",
    sub: "Nahar Specialized Hospital",
  },
  {
    value: "100% Owned",
    label: "Machinery Fleet",
    sub: "Zero 3rd-party rental delay",
  },
  {
    value: "BNBC & CDA",
    label: "Regulatory Compliance",
    sub: "Full seismic safety adherence",
  },
  {
    value: "Turnkey",
    label: "Full Lifecycle Delivery",
    sub: "Soil test to final handover",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#E6E1DA] font-jost text-[#1F2429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#8A7257]">
            <span className="w-2 h-2 rounded-full bg-[#8A7257]" />
            <span>Company Strengths &amp; Standards</span>
          </div>
          <h2 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429] tracking-tight leading-tight">
            Why Partner with Nahar Builders
          </h2>
          <p className="text-[#525960] text-sm sm:text-base font-light leading-relaxed">
            Founded on engineering discipline, proven high-rise construction capabilities, and an extensive company-owned machinery fleet, Nahar Builders ensures safety, structural resilience, and enduring value.
          </p>
        </div>

        {/* Verifiable Credentials Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CREDENTIAL_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg border border-[#E6E1DA] shadow-xs text-center space-y-1.5"
            >
              <div className="font-cormorant text-2xl sm:text-3xl text-[#8A7257] font-semibold">
                {metric.value}
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-[#1F2429]">
                {metric.label}
              </div>
              <p className="text-[11px] text-[#525960] font-light">
                {metric.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 6 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STRENGTHS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-white p-8 rounded-lg border border-[#E6E1DA] shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7257] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E6E1DA]">
                      {item.number} • {item.tag}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E6E1DA] text-[#8A7257] group-hover:bg-[#8A7257] group-hover:text-white transition flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-cormorant text-2xl font-normal text-[#1F2429] group-hover:text-[#8A7257] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#525960] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E1DA] flex items-center gap-2 text-xs text-[#525960]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8A7257] shrink-0" />
                  <span>Verified Operational Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust CTA */}
        <div className="p-8 sm:p-10 bg-[#11161B] text-white rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-cormorant text-2xl sm:text-3xl font-normal text-white">
              Planning a Residential, Commercial, or Healthcare Development?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Collaborate with an engineering firm with verifiable projects and proven execution standards.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#8A7257] hover:bg-[#705944] text-white text-xs tracking-wider uppercase font-medium rounded transition flex items-center gap-2 shadow-sm"
            >
              <span>Consult Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-white/30 hover:border-white/60 text-white text-xs tracking-wider uppercase font-medium rounded transition hover:bg-white/5"
            >
              <span>View Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
