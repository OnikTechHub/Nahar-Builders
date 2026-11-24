import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { OFFICIAL_CONTACT } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11161B] text-white/80 border-t border-white/10 font-jost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Contact Headquarters */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/nahar/logo-light.png"
                alt="Nahar Builders Logo"
                width={180}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-xs text-white/70 leading-relaxed font-light">
              A premier civil construction &amp; real estate development company in Chattogram, Bangladesh. Dedicated to structural safety, architectural distinction, and client trust.
            </p>

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
            </ul>
          </div>

          {/* Column 4: Head Office */}
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
                  <a href={`tel:${OFFICIAL_CONTACT.phonePrimary.replace(/[^0-9+]/g, "")}`} className="hover:text-white block">
                    {OFFICIAL_CONTACT.phonePrimary}
                  </a>
                  <a href={`tel:${OFFICIAL_CONTACT.phoneSecondary.replace(/[^0-9+]/g, "")}`} className="hover:text-white block">
                    {OFFICIAL_CONTACT.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#8A7257] shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${OFFICIAL_CONTACT.emailGeneral}`} className="hover:text-white block">
                    {OFFICIAL_CONTACT.emailGeneral}
                  </a>
                  <a href={`mailto:${OFFICIAL_CONTACT.emailAlternate}`} className="hover:text-white block">
                    {OFFICIAL_CONTACT.emailAlternate}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-xs text-white/50 text-center font-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          © {currentYear} Nahar Builders. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
