import React from "react";
import { Star, Quote, MapPin, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/homeData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            <span>CLIENT REPUTATION & REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Families & Corporate Leaders
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover why home buyers, civil engineers, and leading business corporations choose Nahar&apos;s Builders for their real estate journey.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 relative"
            >
              {/* Quote Icon */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-slate-300" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </div>

              {/* Author & Project Info */}
              <div className="pt-4 border-t border-slate-200 space-y-1">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>

                <p className="text-xs font-semibold text-red-600">
                  {testimonial.role}
                </p>

                <div className="flex items-center gap-1 text-[11px] text-slate-500 pt-0.5">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>
                    {testimonial.project} • {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-600">
          <div>
            <span className="font-extrabold text-xl text-slate-900 block">1,200+</span>
            <span>Happy Families in Residence</span>
          </div>
          <div>
            <span className="font-extrabold text-xl text-slate-900 block">100%</span>
            <span>On-Time Delivery Record</span>
          </div>
          <div>
            <span className="font-extrabold text-xl text-slate-900 block">Zero</span>
            <span>Title or Legal Disputes</span>
          </div>
          <div>
            <span className="font-extrabold text-xl text-slate-900 block">4.9 / 5</span>
            <span>Client Satisfaction Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
