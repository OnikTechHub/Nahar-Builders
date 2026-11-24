"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Mail, Building, Sparkles } from "lucide-react";

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
}

export default function QuickInquiryModal({
  isOpen,
  onClose,
  defaultProject = "",
}: QuickInquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: defaultProject || "Residential Luxury Apartment",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      interest: "Residential Luxury Apartment",
      message: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog on Clean White Theme */}
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-200 p-6 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500" />
          
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-red-600 text-xs font-bold tracking-wider uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nahar&apos;s Builders Consultation</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900">
            Request a Quote & Site Inspection
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Connect directly with a Nahar&apos;s Builders senior civil engineer or relationship advisor.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-200 shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">
                Thank You, {formData.name || "Valued Client"}!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                Your inquiry has been registered. A Nahar&apos;s Builders Senior Relationship Manager will contact you at{" "}
                <span className="font-semibold text-slate-900">{formData.phone || "your number"}</span> within 4 business hours.
              </p>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left max-w-sm mx-auto text-xs text-slate-600 mb-6 space-y-1.5">
                <p>
                  <strong className="text-slate-800">Inquiry Target:</strong> {formData.interest}
                </p>
                <p>
                  <strong className="text-slate-800">Priority Hotline:</strong> +880 1819-334455
                </p>
                <p>
                  <strong className="text-slate-800">Promise:</strong> 100% Transparency & Unyielding Quality
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-red-600 transition shadow-sm"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariqul Islam"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition"
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
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition"
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
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Interested In
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition cursor-pointer"
                  >
                    <option value="Residential Luxury Apartment">Residential Luxury Apartment</option>
                    <option value="Commercial Office Space">Commercial / Office Space</option>
                    <option value="Turnkey Construction">Turnkey Architectural Construction</option>
                    <option value="Land Joint Venture">Land Development / Joint Venture</option>
                    <option value="Site Inspection Booking">Schedule Private Site Visit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message or Specific Requirements (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Preferred sq.ft size, location preference, or inquiry details..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-white transition resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-75"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  Hotline: <strong className="text-slate-800">+880 1819-334455</strong>
                </span>
                <span className="text-slate-400">Strict Privacy Guaranteed</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
