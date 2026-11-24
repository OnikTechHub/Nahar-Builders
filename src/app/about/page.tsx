import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { ABOUT_DATA } from "@/data/homeData";

export const metadata = {
  title: "About Us | Nahar's Builders | Building Trust, Engineering Excellence",
  description: "Learn about Nahar's Builders' legacy, executive engineering board, and commitment to structural excellence and transparent real estate ownership.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header on Clean White / Soft Slate */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100/70 border border-red-200 px-3 py-1 rounded-full">
            <span>ABOUT NAHAR&apos;S BUILDERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Building Landmarks, Elevating Lifestyles
          </h1>
          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Discover our journey of blending corporate engineering discipline with a refreshingly transparent real estate experience across Bangladesh.
          </p>
        </div>
      </section>

      {/* Section 1: Overview */}
      <section id="overview" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
              Company Overview
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              A Legacy Built on Unyielding Engineering Standards
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Nahar&apos;s Builders was founded with a clear mandate: to eliminate the ambiguity, hidden costs, and delayed handovers that too frequently plague the construction sector.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              With over 25 years of industry experience, 60+ completed landmarks, and more than 1,200 happy families residing in our developments, we stand as one of the most reliable and forward-thinking real estate builders in Chattogram and Dhaka.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-2xl font-black text-red-600 block">25+</span>
                <span className="text-xs font-bold text-slate-700">Years of Experience</span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-2xl font-black text-red-600 block">100%</span>
                <span className="text-xs font-bold text-slate-700">On-Time Handover</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80"
              alt="Nahar's Builders Site Engineering"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Management */}
      <section id="management" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
              Leadership
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Nahar&apos;s Management & Engineering Governance
            </h2>
            <p className="text-slate-600 text-sm">
              Our executive board pairs veteran civil structural engineers with seasoned real estate legal advisors and progressive urban architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Engineering Board</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supervising every concrete pour, rebar layout, and foundation load test with zero deviation from national building codes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Legal Audit Panel</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Executing comprehensive freehold mutation title searches and ensuring 100% legal clarity for seamless buyer registration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Client Care Division</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated personal managers keeping clients informed with bi-weekly photographic milestones and direct communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Vision & Quality */}
      <section id="vision" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">
              Vision & Quality Benchmarks
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Uncompromising Quality in Every Square Foot
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We pledge to build structures that withstand tests of time and nature, prioritizing safety, eco-conscious efficiency, and long-term asset value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-red-600 font-bold text-sm block">01. Seismic Safety</span>
              <p className="text-xs text-slate-600">Strict adherence to BNBC 2020 Zone 2/3 earthquake parameters.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-red-600 font-bold text-sm block">02. Concrete Quality</span>
              <p className="text-xs text-slate-600">Automated batch mixing with minimum 5000 PSI strength verification.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-red-600 font-bold text-sm block">03. Green Architecture</span>
              <p className="text-xs text-slate-600">Rainwater harvesting, natural cross-ventilation, and rooftop gardens.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <span className="text-red-600 font-bold text-sm block">04. 100% Transparency</span>
              <p className="text-xs text-slate-600">Itemized billing, certified deeds, and zero surprise escalation fees.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
