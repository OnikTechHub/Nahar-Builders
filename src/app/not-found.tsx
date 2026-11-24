import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Compass, Home, Phone, Wrench } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] w-full bg-white font-jost text-[#1F2429] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Architectural 404 Badge & Visual */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E6E1DA] text-[#8A7257] text-xs font-semibold uppercase tracking-[3px]">
            <Building2 className="w-3.5 h-3.5" />
            <span>404 • Page Not Found</span>
          </div>

          <div className="relative flex items-center justify-center">
            <span className="font-cormorant text-8xl sm:text-9xl font-light text-[#E6E1DA] select-none tracking-widest">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 border border-[#8A7257]/40 shadow-sm flex items-center justify-center text-[#8A7257]">
                <Compass className="w-8 h-8 sm:w-10 sm:h-10 animate-spin-slow" />
              </div>
            </div>
          </div>
        </div>

        {/* Headline & Helpful Message */}
        <div className="space-y-3">
          <h1 className="font-cormorant text-3xl sm:text-5xl font-normal text-[#1F2429] tracking-tight leading-tight">
            The Structure You Are Looking For Does Not Exist
          </h1>
          <p className="text-[#525960] text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed">
            The page you requested may have been relocated, renamed, or is temporarily unavailable. Let us guide you back to our active corporate sections and verified developments.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#8A7257] hover:bg-[#705944] text-white text-xs font-medium tracking-wider uppercase rounded transition shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF8F5] hover:bg-[#F5F2EC] text-[#1F2429] border border-[#E6E1DA] text-xs font-medium tracking-wider uppercase rounded transition"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 text-[#8A7257]" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-transparent hover:border-[#E6E1DA] text-[#525960] hover:text-[#1F2429] text-xs font-medium tracking-wider uppercase rounded transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#8A7257]" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Quick Directory Links */}
        <div className="pt-8 border-t border-[#E6E1DA]/80">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7257] block mb-4">
            Quick Navigation Directory
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <Link
              href="/about"
              className="p-3 bg-[#FAF8F5] rounded border border-[#E6E1DA] hover:border-[#8A7257] hover:text-[#8A7257] transition text-center"
            >
              About Company
            </Link>
            <Link
              href="/services"
              className="p-3 bg-[#FAF8F5] rounded border border-[#E6E1DA] hover:border-[#8A7257] hover:text-[#8A7257] transition text-center"
            >
              Our Services
            </Link>
            <Link
              href="/hospital"
              className="p-3 bg-[#FAF8F5] rounded border border-[#E6E1DA] hover:border-[#8A7257] hover:text-[#8A7257] transition text-center"
            >
              Nahar Hospital
            </Link>
            <Link
              href="/equipment"
              className="p-3 bg-[#FAF8F5] rounded border border-[#E6E1DA] hover:border-[#8A7257] hover:text-[#8A7257] transition text-center"
            >
              Machinery Fleet
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
