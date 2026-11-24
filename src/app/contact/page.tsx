"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Clock,
} from "lucide-react";
import { OFFICIAL_CONTACT } from "@/data/navigation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Frontend validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please select or provide an inquiry subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters describing your inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full bg-white font-jost text-[#1F2429]">
      {/* Page Header */}
      <section className="bg-[#FAF8F5] border-b border-[#E6E1DA] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[3px] text-[#8A7257]">
            <span className="w-2 h-2 rounded-full bg-[#8A7257]" />
            <span>Get In Touch</span>
          </div>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-normal text-[#1F2429] tracking-tight leading-[1.1]">
            Contact Nahar Builders
          </h1>
          <p className="text-[#525960] text-base sm:text-lg max-w-3xl font-light leading-relaxed">
            Reach out directly to our corporate head office in Chattogram for project consultations, civil tenders, or property inquiries.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#FAF8F5] border border-[#E6E1DA] rounded-lg space-y-6">
              <h3 className="font-cormorant text-2xl font-normal text-[#1F2429] border-b border-[#E6E1DA] pb-3">
                Official Corporate Head Office
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3.5 text-xs sm:text-sm text-[#525960]">
                <MapPin className="w-5 h-5 text-[#8A7257] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-[#1F2429] block font-semibold">
                    Nahar Square (1st Floor)
                  </strong>
                  <p className="text-[#525960] font-light leading-relaxed">
                    Holding No. 6/6, Arakan Road, Bahaddarhat, Chattogram, Bangladesh
                  </p>
                </div>
              </div>

              {/* Primary Phone */}
              <div className="flex items-center gap-3.5 text-xs sm:text-sm text-[#525960]">
                <Phone className="w-5 h-5 text-[#8A7257] shrink-0" />
                <div>
                  <span className="text-[#8A7257] block text-[11px] uppercase font-semibold">
                    Primary Telephone
                  </span>
                  <a
                    href={`tel:${OFFICIAL_CONTACT.phonePrimary.replace(/[^0-9+]/g, "")}`}
                    className="font-medium text-[#1F2429] hover:text-[#8A7257] transition"
                  >
                    {OFFICIAL_CONTACT.phonePrimary}
                  </a>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="flex items-center gap-3.5 text-xs sm:text-sm text-[#525960]">
                <Phone className="w-5 h-5 text-[#8A7257] shrink-0" />
                <div>
                  <span className="text-[#8A7257] block text-[11px] uppercase font-semibold">
                    Secondary Line
                  </span>
                  <a
                    href={`tel:${OFFICIAL_CONTACT.phoneSecondary.replace(/[^0-9+]/g, "")}`}
                    className="font-medium text-[#1F2429] hover:text-[#8A7257] transition"
                  >
                    {OFFICIAL_CONTACT.phoneSecondary}
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-center gap-3.5 text-xs sm:text-sm text-[#525960]">
                <Mail className="w-5 h-5 text-[#8A7257] shrink-0" />
                <div>
                  <span className="text-[#8A7257] block text-[11px] uppercase font-semibold">
                    Official Emails
                  </span>
                  <a
                    href={`mailto:${OFFICIAL_CONTACT.emailGeneral}`}
                    className="font-medium text-[#1F2429] hover:text-[#8A7257] transition block"
                  >
                    {OFFICIAL_CONTACT.emailGeneral}
                  </a>
                  <a
                    href={`mailto:${OFFICIAL_CONTACT.emailAlternate}`}
                    className="text-xs text-[#525960] hover:text-[#8A7257] transition block"
                  >
                    {OFFICIAL_CONTACT.emailAlternate}
                  </a>
                </div>
              </div>

              {/* Official Website */}
              <div className="flex items-center gap-3.5 text-xs sm:text-sm text-[#525960]">
                <ExternalLink className="w-5 h-5 text-[#8A7257] shrink-0" />
                <div>
                  <span className="text-[#8A7257] block text-[11px] uppercase font-semibold">
                    Official Website
                  </span>
                  <a
                    href={OFFICIAL_CONTACT.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#1F2429] hover:text-[#8A7257] transition flex items-center gap-1.5"
                  >
                    <span>www.naharbuilders.com</span>
                    <ExternalLink className="w-3 h-3 text-[#8A7257]" />
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-3.5 text-xs sm:text-sm text-[#525960] pt-2 border-t border-[#E6E1DA]">
                <Clock className="w-5 h-5 text-[#8A7257] shrink-0" />
                <div>
                  <span className="text-[#8A7257] block text-[11px] uppercase font-semibold">
                    Office Hours
                  </span>
                  <span className="text-[#525960] font-light">{OFFICIAL_CONTACT.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Google Maps Card with Embedded Interactive Map */}
            <div className="p-6 bg-[#FAF8F5] border border-[#E6E1DA] rounded-lg space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1F2429]">
                  Location on Arakan Road
                </span>
                <a
                  href={OFFICIAL_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#8A7257] hover:text-[#705944] flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-xs text-[#525960] font-light">
                Nahar Square is located at Holding No. 6/6, Arakan Road, Bahaddarhat, Chattogram — conveniently accessible from Chandgaon, Muradpur, and GEC Circle.
              </p>
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-[#E6E1DA] shadow-xs">
                <iframe
                  title="Nahar Builders Corporate Headquarters Map"
                  src="https://maps.google.com/maps?q=Nahar+Square+Bahaddarhat+Chattogram&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right Column: Full Frontend-Validated Contact / Quote Form */}
          <div id="quote" className="lg:col-span-7 scroll-mt-28 bg-[#FAF8F5] p-8 sm:p-10 rounded-lg border border-[#E6E1DA] shadow-xs">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-[#8A7257]/10 text-[#8A7257] rounded-full flex items-center justify-center mx-auto border border-[#8A7257]/30 shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-cormorant text-3xl font-normal text-[#1F2429]">
                  Inquiry Submitted Successfully!
                </h3>
                <p className="text-[#525960] text-sm max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong className="text-[#1F2429]">{formData.fullName}</strong>. Your inquiry regarding &ldquo;{formData.subject}&rdquo; has been received. Our engineering team will contact you at{" "}
                  <strong className="text-[#1F2429]">{formData.phone}</strong> or <strong className="text-[#1F2429]">{formData.email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#8A7257] hover:bg-[#705944] text-white text-xs tracking-wider uppercase font-medium rounded transition"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Send Us an Official Inquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    All fields marked with an asterisk (*) are required.
                  </p>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    placeholder="e.g. Tariqul Islam"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:bg-white transition ${
                      errors.fullName
                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                        : "border-[#E6E1DA] focus:ring-2 focus:ring-[#8A7257]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:bg-white transition ${
                        errors.email
                          ? "border-red-500 focus:ring-2 focus:ring-red-400"
                          : "border-[#E6E1DA] focus:ring-2 focus:ring-[#8A7257]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="+880 1811-..."
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:bg-white transition ${
                        errors.phone
                          ? "border-red-500 focus:ring-2 focus:ring-red-400"
                          : "border-[#E6E1DA] focus:ring-2 focus:ring-[#8A7257]"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Inquiry Subject *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:bg-white transition ${
                      errors.subject
                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                        : "border-[#E6E1DA] focus:ring-2 focus:ring-[#8A7257]"
                    }`}
                  >
                    <option value="">-- Select Subject --</option>
                    <option value="Civil Construction Tender / Partnership">Civil Construction Tender / Partnership</option>
                    <option value="Residential Property Inquiry">Residential Property Inquiry</option>
                    <option value="Commercial Development Inquiry">Commercial Development Inquiry</option>
                    <option value="Healthcare Infrastructure Consultancy">Healthcare Infrastructure Consultancy</option>
                    <option value="Project Supervision & Quality Audit">Project Supervision & Quality Audit</option>
                    <option value="Heavy Equipment & Logistics Rental">Heavy Equipment & Logistics Rental</option>
                    <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                  </select>
                  {errors.subject && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Provide details regarding your project requirements, location, or questions..."
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-lg text-sm text-slate-900 focus:outline-none focus:bg-white transition resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                        : "border-[#E6E1DA] focus:ring-2 focus:ring-[#8A7257]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-[#8A7257] hover:bg-[#705944] text-white text-xs tracking-wider uppercase font-medium rounded transition flex items-center justify-center gap-2 group disabled:opacity-75 shadow-sm"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
