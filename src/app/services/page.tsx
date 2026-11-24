import React from "react";
import Link from "next/link";
import { Building2, Building, Compass, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { CORE_SERVICES } from "@/data/homeData";

export const metadata = {
  title: "Services | Nahar's Builders | Comprehensive Real Estate & Construction",
  description: "Explore Nahar's Builders core services: Residential Construction, Commercial Developments, Architectural Design & Consultancy, and Interior & Turnkey Solutions.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header on Clean White / Soft Slate */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100/70 border border-red-200 px-3 py-1 rounded-full">
            <span>OUR EXPERTISE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Engineering & Construction Services
          </h1>
          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Delivering full-lifecycle civil construction, architectural master planning, and turnkey property solutions with rigorous safety standards.
          </p>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Service 1: Residential */}
        <div id="residential" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
              Residential Development
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Luxury Apartments, Penthouses & Family Communities
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We design and construct premium residential living environments with special emphasis on acoustic insulation, natural ventilation, natural daylight, and family lifestyle amenities like rooftop infinity pools and landscaped sky parks.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Customizable 3 to 5-bedroom luxury apartments</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Heavy-duty seismic frame construction (BNBC 2020 compliant)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>100% Generator power backup with sound-attenuated canopies</span>
              </div>
            </div>
            <div className="pt-4">
              <Link
                href="/projects?status=Ongoing"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition"
              >
                <span>View Residential Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Residential Highlights</h3>
            <p className="text-xs text-slate-600">
              Every Nahar&apos;s Builders residential project is planned with zero compromise on child safety, privacy, and community integration.
            </p>
          </div>
        </div>

        {/* Service 2: Commercial */}
        <div id="commercial" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 p-8 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Commercial Landmarks</h3>
            <p className="text-xs text-slate-600">
              High visibility corporate glass towers built with energy-saving curtain walls, smart security turnstiles, and automated basement parking.
            </p>
          </div>
          <div className="order-1 lg:order-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
              Commercial Developments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Corporate Office Towers & Modern Retail Hubs
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We create flagship corporate addresses designed to elevate business prestige and tenant productivity. Featuring column-free modular floorplates, destination-dispatch elevators, and LEED gold compliance.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Multi-tier automated basement parking systems</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Energy-saving low-E acoustic glass curtain facade</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>High-capacity smart elevators and NFPA fire fighting systems</span>
              </div>
            </div>
            <div className="pt-4">
              <Link
                href="/projects?category=Commercial"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition"
              >
                <span>View Commercial Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Service 3: Architectural */}
        <div id="architectural" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
              Design & Consultancy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Architectural Design & Engineering Consultancy
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our multidisciplinary design studio provides comprehensive 3D Building Information Modeling (BIM), finite element structural seismic modeling, and statutory approval consultancy for Rajuk, CDA, and municipal bodies.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Dynamic finite element structural load simulations</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Fast-track CDA & Rajuk plan approvals and clearance</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Soil mechanics and deep foundation pile load testing</span>
              </div>
            </div>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Consultancy Solutions</h3>
            <p className="text-xs text-slate-600">
              From land feasibility audits to structural safety certifications, we offer end-to-end technical consultancy for landowners and developers.
            </p>
          </div>
        </div>

        {/* Service 4: Turnkey */}
        <div id="interior" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 p-8 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Turnkey Fitouts</h3>
            <p className="text-xs text-slate-600">
              Experience the ease of moving into a fully furnished, architect-crafted space without coordinating with multiple third-party vendors.
            </p>
          </div>
          <div className="order-1 lg:order-2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
              Interior & Turnkey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Interior & Turnkey Solutions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We turn empty floor shells into masterfully finished living and workspace interiors. Every custom closet, modular kitchen, and smart automation system is fabricated with premium materials and backed by our post-handover warranty.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>German and Italian hardware & sanitary fittings</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>Custom modular kitchen and acoustic ceiling treatments</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-red-600" />
                <span>1-Year comprehensive maintenance warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
