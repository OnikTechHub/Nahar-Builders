import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS } from "@/data/projectsData";

export const metadata = {
  title: "Gallery | Nahar's Builders | Architectural & Construction Imagery",
  description: "Explore the visual gallery of Nahar's Builders' luxury residential towers, corporate facades, rooftop gardens, and structural milestones.",
};

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      title: "Nahar's Heritage Residence - Contemporary Exterior",
      category: "Residential Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      title: "Nahar's Skyline Commercial Hub - Glass Curtain Facade",
      category: "Commercial High-Rise",
    },
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      title: "Nahar's Bay View Heights - Handed Over Residences",
      category: "Completed Landmarks",
    },
    {
      src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      title: "Nahar's Imperial Avenue - Commercial Retail Atrium",
      category: "Commercial Development",
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      title: "Nahar's Palisades Lakefront - Penthouses & Water Vistas",
      category: "Luxury Living",
    },
    {
      src: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80",
      title: "Nahar's Zenith Corporate Tower - 22-Story Masterplan",
      category: "Upcoming Landmarks",
    },
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      title: "Double-Height Grand Entrance Lobby Design",
      category: "Interior Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
      title: "Civil Construction & Rebar Quality Verification",
      category: "Engineering & Safety",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Page Header on Clean White / Soft Slate */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100/70 border border-red-200 px-3 py-1 rounded-full">
            <span>VISUAL PORTFOLIO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Architectural & Construction Gallery
          </h1>
          <p className="text-slate-600 text-base max-w-2xl leading-relaxed">
            A visual showcase of our structural craftsmanship, elegant glass facades, and delivered residences.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold text-red-400">
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
