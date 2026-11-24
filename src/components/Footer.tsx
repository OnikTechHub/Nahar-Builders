import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";
import { OFFICIAL_CONTACT } from "@/data/navigation";

// Social Media channels (Official Handle for Instagram + General Platforms for Direct Access)
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/naharbuilders",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11161B] text-white/80 border-t border-white/10 font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Contact Headquarters */}
          <div className="space-y-5">
            <Link href="/" className="inline-block group">
              <div className="relative flex items-center gap-2">
                <Image
                  src="/nahar/logo-light.png"
                  alt="Nahar Builders Logo"
                  width={180}
                  height={48}
                  className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-xs text-white/70 leading-relaxed font-light">
              A premier civil construction &amp; real estate development company in Chattogram, Bangladesh. Dedicated to structural safety, architectural distinction, and client trust.
            </p>

            {/* Social Media Channels */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-semibold text-[#C2AF98] uppercase tracking-wider block">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                      aria-label={`Visit ${item.name}`}
                      className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#8A7257] border border-white/10 hover:border-[#8A7257] text-white/80 hover:text-white flex items-center justify-center transition shadow-xs group"
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block border border-[#8A7257] text-[#C2AF98] hover:bg-[#8A7257] hover:text-white px-4 py-2 text-xs tracking-wider uppercase font-medium rounded transition"
              >
                Contact Headquarters
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-cormorant text-xl text-white font-normal">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/about" className="hover:text-[#C2AF98] transition">
                  About Company
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C2AF98] transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#C2AF98] transition">
                  Completed Projects
                </Link>
              </li>
              <li>
                <Link href="/hospital" className="hover:text-[#C2AF98] transition">
                  Nahar Hospital
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-[#C2AF98] transition">
                  Machinery Fleet
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C2AF98] transition">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C2AF98] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="font-cormorant text-xl text-white font-normal">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70 font-light">
              <li>
                <Link href="/services" className="hover:text-[#C2AF98] transition">
                  Residential Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C2AF98] transition">
                  Commercial Towers
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C2AF98] transition">
                  Interior Architecture
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C2AF98] transition">
                  Project Supervision
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#C2AF98] transition">
                  CDA Approvals
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-[#C2AF98] transition">
                  Machinery &amp; Logistics Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Head Office Contact */}
          <div className="space-y-4">
            <h3 className="font-cormorant text-xl text-white font-normal">
              Head Office
            </h3>
            <ul className="space-y-3 text-xs text-white/70 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8A7257] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {OFFICIAL_CONTACT.address}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#8A7257] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`tel:${OFFICIAL_CONTACT.phonePrimary.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-white block transition"
                  >
                    {OFFICIAL_CONTACT.phonePrimary}
                  </a>
                  <a
                    href={`tel:${OFFICIAL_CONTACT.phoneSecondary.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-white block transition"
                  >
                    {OFFICIAL_CONTACT.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#8A7257] shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`mailto:${OFFICIAL_CONTACT.emailGeneral}`}
                    className="hover:text-white block transition"
                  >
                    {OFFICIAL_CONTACT.emailGeneral}
                  </a>
                  <a
                    href={`mailto:${OFFICIAL_CONTACT.emailAlternate}`}
                    className="hover:text-white block transition"
                  >
                    {OFFICIAL_CONTACT.emailAlternate}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#8A7257] shrink-0 mt-0.5" />
                <a
                  href={OFFICIAL_CONTACT.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition flex items-center gap-1 text-[#C2AF98]"
                >
                  <span>www.naharbuilders.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-6 text-xs text-white/60 font-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © {currentYear} <strong className="text-white font-medium">Nahar Builders</strong>. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-white/50 text-[11px]">
            <span>BNBC &amp; CDA Compliant Engineering</span>
            <span>•</span>
            <span>Chattogram, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
