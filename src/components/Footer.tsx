import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Shield,
  CheckCircle2,
  Award,
} from "lucide-react";
import { NAV_ITEMS, COMPANY_CONTACT } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200">
      {/* Top Value Banner - Clean White Surface Strip */}
      <div className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-900 text-sm font-bold">100% Structural Safety</h4>
                <p className="text-slate-500 text-xs">BUET-tested Grade 72/60 steel & 5000+ PSI concrete</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-900 text-sm font-bold">Clear Freehold Titles</h4>
                <p className="text-slate-500 text-xs">Complete mutation, Rajuk & CDA verified records</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-slate-900 text-sm font-bold">Guaranteed On-Time Handover</h4>
                <p className="text-slate-500 text-xs">Contractual delivery milestone compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white p-1 shadow-sm flex items-center justify-center">
                <Image
                  src="/nahar-builders-logo.jpg"
                  alt="Nahar's Builders Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-slate-900 block leading-tight">
                  NAHAR&apos;S <span className="text-red-600">BUILDERS</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                  Building Trust
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed">
              Nahar&apos;s Builders stands at the pinnacle of modern structural engineering and corporate credibility. We transform residential living and commercial high-rises into timeless, dependable landmarks.
            </p>

            <div className="pt-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-red-600 mb-1">
                Corporate Motto
              </div>
              <p className="text-xs font-semibold text-slate-800 tracking-wide border-l-2 border-red-600 pl-3">
                &ldquo;{COMPANY_CONTACT.tagline}&rdquo;
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-2">
              {COMPANY_CONTACT.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-white hover:bg-red-600 hover:border-red-600 flex items-center justify-center text-xs font-bold transition shadow-2xl"
                  aria-label={social.platform}
                >
                  {social.platform.substring(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-slate-900 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Quick Navigation</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>About Nahar&apos;s Builders</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Engineering & Services</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Featured Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Project Gallery</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Contact & Inquiry</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Portfolio & Categories */}
          <div className="space-y-4">
            <h3 className="text-slate-900 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Projects & Sectors</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/projects?status=Ongoing" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Ongoing Landmarks</span>
                </Link>
              </li>
              <li>
                <Link href="/projects?status=Completed" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Completed Handover Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/projects?status=Upcoming" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Upcoming Pre-Launch Suites</span>
                </Link>
              </li>
              <li>
                <Link href="/services#residential" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Residential Condominiums</span>
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Commercial Glass Towers</span>
                </Link>
              </li>
              <li>
                <Link href="/services#interior" className="hover:text-red-600 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-600" />
                  <span>Turnkey Architectural Fitouts</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices & Contact */}
          <div className="space-y-4">
            <h3 className="text-slate-900 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Offices & Contact</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-600">
              {/* Chattogram HQ */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1 shadow-sm">
                <span className="text-red-600 font-bold block text-[11px] uppercase">
                  Chattogram Corporate HQ
                </span>
                <p className="leading-relaxed">
                  Nahar&apos;s Tower, Level 8, CDA Avenue, GEC Circle, Chattogram
                </p>
                <p className="text-slate-900 font-bold pt-0.5">
                  Hotline: +880 1819-334455
                </p>
              </div>

              {/* Dhaka Regional Office */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-1 shadow-sm">
                <span className="text-slate-800 font-bold block text-[11px] uppercase">
                  Dhaka Regional Office
                </span>
                <p className="leading-relaxed">
                  Suite 402, Nahar&apos;s Heritage, Road 11, Banani, Dhaka-1213
                </p>
                <p className="text-slate-900 font-bold pt-0.5">
                  Phone: +880 1711-223344
                </p>
              </div>

              <div className="pt-1 flex items-center gap-2 text-slate-700">
                <Mail className="w-3.5 h-3.5 text-red-600" />
                <a href="mailto:info@naharbuilders.com" className="hover:text-red-600 transition">
                  info@naharbuilders.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-200 bg-white py-5 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {currentYear} <strong className="text-slate-800">Nahar&apos;s Builders</strong>. All rights reserved. &ldquo;Building Trust, Engineering Excellence&rdquo;.
          </p>

          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/about#overview" className="hover:text-slate-800 transition">
              Corporate Overview
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/contact" className="hover:text-slate-800 transition">
              Customer Support
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/contact" className="hover:text-slate-800 transition">
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
