import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { ArrowRight, MapPin, Building, Building2, Compass, Layers } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white">
      {/* 1. Fullscreen Hero Section with Smooth Slider Animation */}
      <HeroSection />

      {/* 2. Location & Category Strip (Sanmar Grid Style from naharbuilders.com) */}
      <section className="bg-[#FAF8F5] py-16 border-b border-[#E6E1DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category Card 1: Residential Towers */}
            <Link
              href="/projects"
              className="group relative h-[380px] rounded-lg overflow-hidden shadow-md block"
            >
              <Image
                src="/nahar/nakeeb-heights.png"
                alt="Residential Portfolio"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11161B]/90 via-[#11161B]/40 to-transparent flex flex-col justify-end p-7 transition-all duration-300 group-hover:from-[#11161B]/95">
                <span className="text-[#C2AF98] text-xs font-medium uppercase tracking-[2px] block mb-1">
                  Chattogram • Portfolio
                </span>
                <h3 className="text-white text-2xl font-cormorant font-normal">
                  Residential Towers
                </h3>
              </div>
            </Link>

            {/* Category Card 2: Commercial & Healthcare */}
            <Link
              href="/projects#hospital"
              className="group relative h-[380px] rounded-lg overflow-hidden shadow-md block"
            >
              <Image
                src="/nahar/nahar-hospital.png"
                alt="Commercial & Healthcare"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11161B]/90 via-[#11161B]/40 to-transparent flex flex-col justify-end p-7 transition-all duration-300 group-hover:from-[#11161B]/95">
                <span className="text-[#C2AF98] text-xs font-medium uppercase tracking-[2px] block mb-1">
                  Infrastructure • Landmark
                </span>
                <h3 className="text-white text-2xl font-cormorant font-normal">
                  Commercial &amp; Healthcare
                </h3>
              </div>
            </Link>

            {/* Category Card 3: Machinery & Heavy Fleet */}
            <Link
              href="/services#equipment"
              className="group relative h-[380px] rounded-lg overflow-hidden shadow-md block"
            >
              <Image
                src="/nahar/equipment-38.png"
                alt="Heavy Machinery & Equipment"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11161B]/90 via-[#11161B]/40 to-transparent flex flex-col justify-end p-7 transition-all duration-300 group-hover:from-[#11161B]/95">
                <span className="text-[#C2AF98] text-xs font-medium uppercase tracking-[2px] block mb-1">
                  Logistics • Fleet
                </span>
                <h3 className="text-white text-2xl font-cormorant font-normal">
                  Machinery &amp; Heavy Fleet
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. About Preview matching naharbuilders.com */}
      <section className="py-20 lg:py-24 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg border border-[#E6E1DA] aspect-[4/3]">
                <Image
                  src="/HeroImg/img.avif"
                  alt="Nahar Builders About Us"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
                Our Heritage
              </span>

              <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F2429] leading-tight">
                Committed to Excellence in Civil Engineering
              </h2>

              <p className="text-[#525960] text-base leading-relaxed font-light">
                Nahar Builders is a trusted construction company based in Chattogram, Bangladesh, committed to delivering high-quality residential and commercial projects.
              </p>

              <p className="text-[#525960] text-base leading-relaxed font-light">
                With a strong emphasis on modern design, structural integrity, and long-term durability, we create spaces that seamlessly combine functionality with aesthetic appeal.
              </p>

              <p className="text-[#525960] text-base leading-relaxed font-light">
                Our team of experienced engineers and skilled professionals works closely with clients to understand their vision and bring it to life with precision and care.
              </p>

              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-[#8A7257] text-[#8A7257] hover:bg-[#8A7257] hover:text-white px-6 py-3 rounded text-xs tracking-wider uppercase font-medium transition group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Developments matching naharbuilders.com */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
              Portfolio
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F2429]">
              Featured Developments
            </h2>
            <p className="text-[#525960] text-sm sm:text-base font-light">
              A selection of our landmark residential, hospitality, and healthcare structures.
            </p>
          </div>

          {/* 3 Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1: Nakeeb Heights */}
            <div className="bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#E6E1DA] shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/nahar/nakeeb-heights.png"
                  alt="Nakeeb Heights"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#11161B]/80 text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  Completed
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block mb-1">
                    Residential • Chattogram
                  </span>
                  <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                    Nakeeb Heights
                  </h3>
                  <p className="text-[#525960] text-xs sm:text-sm font-light leading-relaxed mt-2">
                    14-Storied Luxury Residential Tower designed with state-of-the-art structural safety &amp; modern amenities.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E1DA] flex items-center justify-between text-xs text-[#525960]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8A7257]" />
                    <span>Chandgaon R/A</span>
                  </span>
                  <span>14 Stories</span>
                </div>
              </div>
            </div>

            {/* Project 2: Nahar Specialized Hospital */}
            <div className="bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#E6E1DA] shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/nahar/nahar-hospital.png"
                  alt="Nahar Specialized Hospital"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#8A7257] text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  Landmark
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block mb-1">
                    Healthcare • Infrastructure
                  </span>
                  <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                    <Link href="/hospital" className="hover:text-[#8A7257] transition">
                      Nahar Specialized Hospital
                    </Link>
                  </h3>
                  <p className="text-[#525960] text-xs sm:text-sm font-light leading-relaxed mt-2">
                    19-Storied Modern Healthcare Facility featuring double basement foundation &amp; clinical infrastructure.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E1DA] flex items-center justify-between text-xs text-[#525960]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8A7257]" />
                    <span>Chattogram</span>
                  </span>
                  <Link
                    href="/hospital"
                    className="text-[#8A7257] hover:text-[#705944] font-medium flex items-center gap-1"
                  >
                    <span>View Showcase</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3: Hotel Tower Inn */}
            <div className="bg-[#FAF8F5] rounded-lg overflow-hidden border border-[#E6E1DA] shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/nahar/hotel-tower-inn.png"
                  alt="Hotel Tower Inn"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#11161B]/80 text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                  Completed
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block mb-1">
                    Hospitality • Commercial
                  </span>
                  <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                    Hotel Tower Inn
                  </h3>
                  <p className="text-[#525960] text-xs sm:text-sm font-light leading-relaxed mt-2">
                    10-Storied 3-Star Hospitality Landmark hosting 110 premium guest rooms and corporate event spaces.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6E1DA] flex items-center justify-between text-xs text-[#525960]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8A7257]" />
                    <span>Jubilee Road</span>
                  </span>
                  <span>10 Stories</span>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="text-center pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#8A7257] hover:bg-[#705944] text-white px-7 py-3.5 text-xs tracking-wider uppercase font-medium rounded transition shadow-sm"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Luxury Dark Vision Banner matching naharbuilders.com */}
      <section className="py-20 bg-[#11161B] text-white text-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <blockquote className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-normal italic leading-relaxed text-white/95">
            “Architecture is not merely erect structures; it is crafting spaces of enduring trust, technical precision, and timeless elegance.”
          </blockquote>

          <div className="text-xs uppercase tracking-[3px] text-[#C2AF98] font-semibold">
            Nahar Builders Executive Leadership
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/70 hover:bg-white hover:text-[#11161B] text-white px-6 py-3 rounded text-xs tracking-wider uppercase font-medium transition"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Explore Our Vision</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive Engineering Solutions (Services Preview) */}
      <section className="py-20 lg:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-[3px] block">
              Capabilities
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F2429]">
              Comprehensive Engineering Solutions
            </h2>
            <p className="text-[#525960] text-sm sm:text-base font-light">
              From initial site evaluation to turnkey architectural delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg border border-[#E6E1DA] shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block bg-[#8A7257]/10 px-2.5 py-1 rounded">
                    01 / Construction
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E6E1DA] text-[#8A7257] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                  Residential Construction
                </h3>
                <p className="text-[#525960] text-xs sm:text-sm font-light leading-relaxed">
                  Bespoke residential towers crafted for structural longevity, BNBC compliance, and refined living.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E1DA]/80">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8A7257] hover:text-[#705944] transition"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg border border-[#E6E1DA] shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block bg-[#8A7257]/10 px-2.5 py-1 rounded">
                    02 / Development
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E6E1DA] text-[#8A7257] flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                  Commercial Complexes
                </h3>
                <p className="text-[#525960] text-xs sm:text-sm font-light leading-relaxed">
                  High-performance commercial spaces, corporate offices, and retail centers tailored for productivity.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E1DA]/80">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8A7257] hover:text-[#705944] transition"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg border border-[#E6E1DA] shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#8A7257] text-xs font-semibold uppercase tracking-wider block bg-[#8A7257]/10 px-2.5 py-1 rounded">
                    03 / Finishing
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E6E1DA] text-[#8A7257] flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-normal text-[#1F2429]">
                  Interior Design &amp; Finishing
                </h3>
                <p className="text-[#525960] text-xs sm:text-sm font-light leading-relaxed">
                  Artistic interior layouts, premium material selection, and flawless finishing execution.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E1DA]/80">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8A7257] hover:text-[#705944] transition"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#8A7257] hover:bg-[#705944] text-white px-7 py-3.5 text-xs tracking-wider uppercase font-medium rounded transition shadow-sm"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
