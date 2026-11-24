import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, Send } from "lucide-react";
import { COMPANY_CONTACT } from "@/data/navigation";

export const metadata = {
  title: "Contact Us | Nahar's Builders | Chattogram & Dhaka Offices",
  description: "Connect with Nahar's Builders senior architectural consultants and relationship managers at our Chattogram headquarters or Dhaka regional office.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      {/* Page Header on Clean White / Soft Slate */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100/70 border border-red-200 px-3 py-1 rounded-full">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Connect with Nahar&apos;s Builders
          </h1>
          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            Visit our corporate headquarters, request a private site visit, or speak with our senior engineers today.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
                Direct Contact
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Our Corporate Offices
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We welcome prospective homebuyers, corporate tenants, and joint-venture land partners to visit our offices.
              </p>
            </div>

            {/* Offices Cards on Clean White */}
            <div className="space-y-4">
              {COMPANY_CONTACT.offices.map((office) => (
                <div
                  key={office.title}
                  className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2.5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-red-600 tracking-wider">
                      {office.title}
                    </span>
                    {office.isPrimary && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                        Corporate HQ
                      </span>
                    )}
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Phone className="w-3.5 h-3.5 text-red-600" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* General Info Card on Clean Light Surface */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Office Hours & Hotline
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-red-600" />
                <span>{COMPANY_CONTACT.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Mail className="w-4 h-4 text-red-600" />
                <a href={`mailto:${COMPANY_CONTACT.emailGeneral}`} className="hover:text-red-600">
                  {COMPANY_CONTACT.emailGeneral}
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-900 font-bold">
                <Phone className="w-4 h-4 text-red-600" />
                <span>Priority Hotline: {COMPANY_CONTACT.phonePrimary}</span>
              </div>
            </div>
          </div>

          {/* Right: Direct Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600 block">
                Send Us a Message
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Request a Consultation or Site Visit
              </h3>
              <p className="text-xs text-slate-500">
                Fill out the form below and a Nahar&apos;s Builders Senior Relationship Manager will respond within 4 hours.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariqul Islam"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+880 1819-..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Interest
                  </label>
                  <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white">
                    <option>Residential Apartment Booking</option>
                    <option>Commercial Glass Tower Lease</option>
                    <option>Turnkey Architectural Construction</option>
                    <option>Land Joint Venture Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message & Specific Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements, preferred location, or questions..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <span>SEND MESSAGE</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
