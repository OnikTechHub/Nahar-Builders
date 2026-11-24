import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VERIFIED_PROJECTS } from "@/data/projectsData";

export const metadata = {
  title: "Gallery | Nahar Builders | Architectural & Construction Portfolio",
  description: "Visual portfolio of Nahar Builders' verified construction milestones and landmark architectural projects across Chattogram.",
};

export default function GalleryPage() {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      title: "Nahar Specialized Hospital - Healthcare Landmark",
      category: "Healthcare Infrastructure",
    },
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      title: "Nakeeb Heights - Chandgaon R/A Residential Tower",
      category: "Residential Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      title: "Hotel Tower Inn - Jubilee Road Hospitality Landmark",
      category: "Commercial & Hospitality",
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      title: "Nahar Square - Bahaddarhat Commercial Center",
      category: "Corporate Commercial",
    },
    {
      src: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
      title: "Civil Construction & Structural Frame Work",
      category: "Civil Engineering",
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      title: "Architectural Planning & Engineering Supervision",
      category: "Project Oversight",
    },
  ];

  return (
    <div className="w-full bg-white font-jost text-[#1F2429]">
      {/* Page Header on Warm Surface */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E1DA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#8A7257]">
            <span className="w-2 h-2 rounded-full bg-[#8A7257]" />
            <span>Project Gallery</span>
          </div>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-normal text-[#1F2429] tracking-tight leading-[1.1]">
            Architectural &amp; Construction Gallery
          </h1>
          <p className="text-[#525960] text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            A visual showcase of verified structural landmarks and civil works delivered by Nahar Builders in Chattogram.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-semibold text-[#C2AF98] tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold text-white mt-0.5">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
