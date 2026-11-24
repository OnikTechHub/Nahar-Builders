"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { NAV_ITEMS, COMPANY_CONTACT } from "@/data/navigation";
import QuickInquiryModal from "./QuickInquiryModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Handle sticky scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMobileSubmenu = (name: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Top Corporate Bar - Clean White/Light Theme */}
        <div className="hidden lg:block bg-slate-50 text-slate-600 text-xs border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Chattogram • Dhaka</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-600">
                <Clock className="w-3.5 h-3.5 text-red-600" />
                <span>Sat - Thu: 9:00 AM - 7:30 PM</span>
              </span>
              <span className="hidden xl:inline-block text-red-700 font-bold tracking-wider text-[11px] uppercase bg-red-50 border border-red-200/70 px-2.5 py-0.5 rounded-full">
                {COMPANY_CONTACT.tagline}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={`mailto:${COMPANY_CONTACT.emailGeneral}`}
                className="flex items-center gap-1.5 text-slate-600 hover:text-red-600 transition"
              >
                <Mail className="w-3.5 h-3.5 text-red-600" />
                <span>{COMPANY_CONTACT.emailGeneral}</span>
              </a>
              <a
                href={`tel:${COMPANY_CONTACT.phonePrimary.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-1.5 font-bold text-slate-900 hover:text-red-600 transition"
              >
                <Phone className="w-3.5 h-3.5 text-red-600" />
                <span>Hotline: {COMPANY_CONTACT.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Sticky Navbar - Clean White Theme */}
        <div
          className={`w-full bg-white transition-all duration-300 ${
            isScrolled
              ? "shadow-md py-2.5 border-b border-slate-200"
              : "py-3.5 border-b border-slate-200/80"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Nahar's Builders Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="Nahar's Builders Home"
            >
              <div className="relative flex items-center gap-3">
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-slate-200/80 shadow-sm bg-white p-0.5 flex items-center justify-center">
                  <Image
                    src="/nahar-builders-logo.jpg"
                    alt="Nahar's Builders Logo"
                    width={48}
                    height={48}
                    priority
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-tight group-hover:text-red-600 transition-colors">
                    NAHAR&apos;S <span className="text-red-600 font-black">BUILDERS</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                    Engineering Excellence
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => {
                const active = isActiveLink(item.href);
                const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3.5 py-2 text-xs xl:text-sm font-bold tracking-wide transition-colors flex items-center gap-1 rounded-lg ${
                        active
                          ? "text-red-600 bg-red-50/70"
                          : "text-slate-800 hover:text-red-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{item.name}</span>
                      {hasDropdown && (
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                      )}

                      {/* Active indicator bar */}
                      {active && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-red-600 rounded-full" />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasDropdown && item.dropdown && (
                      <div className="absolute top-full left-0 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-2.5 overflow-hidden">
                          <div className="px-3.5 pb-2 mb-1 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {item.name} Details
                          </div>
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="px-3.5 py-2.5 block hover:bg-red-50/70 transition group/item"
                            >
                              <div className="text-xs font-bold text-slate-800 group-hover/item:text-red-600 flex items-center justify-between">
                                <span>{subItem.name}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-red-600" />
                              </div>
                              {subItem.description && (
                                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 font-normal">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop Right Action */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                <span>GET A QUOTE</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red-600 rounded-md"
              >
                QUOTE
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 text-slate-700 hover:text-red-600 hover:bg-slate-100 rounded-lg transition"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-over Drawer on Clean White Theme */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] z-50 flex">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Body */}
            <div className="relative w-full max-w-sm bg-white ml-auto h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200 animate-in slide-in-from-right duration-250">
              <div className="p-5 space-y-4">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5">
                      <Image
                        src="/nahar-builders-logo.jpg"
                        alt="Nahar's Builders Logo"
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-extrabold text-slate-900 text-sm tracking-tight block">
                        NAHAR&apos;S BUILDERS
                      </span>
                      <span className="text-[10px] uppercase font-bold text-red-600 tracking-wider">
                        Building Trust
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => {
                    const active = isActiveLink(item.href);
                    const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                    const isExpanded = mobileExpanded[item.name] || false;

                    return (
                      <div key={item.name} className="border-b border-slate-100 last:border-none">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex-1 py-3 text-sm font-bold tracking-wide transition ${
                              active ? "text-red-600" : "text-slate-800 hover:text-red-600"
                            }`}
                          >
                            {item.name}
                          </Link>

                          {hasDropdown && (
                            <button
                              type="button"
                              onClick={() => toggleMobileSubmenu(item.name)}
                              className="p-2 text-slate-400 hover:text-red-600 transition"
                              aria-label={`Toggle ${item.name} submenu`}
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isExpanded ? "rotate-180 text-red-600" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Collapsible Submenu */}
                        {hasDropdown && isExpanded && item.dropdown && (
                          <div className="pl-4 pb-2 space-y-2 border-l-2 border-red-200 ml-2 mb-2 bg-slate-50 rounded-r-lg p-2.5">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1.5 text-xs font-semibold text-slate-700 hover:text-red-600 transition"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="p-5 bg-slate-50 border-t border-slate-200 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm"
                >
                  GET A QUOTE
                </button>

                <div className="space-y-1.5 text-xs text-slate-600 pt-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-red-600" />
                    <span>Hotline: {COMPANY_CONTACT.phonePrimary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-red-600" />
                    <span>{COMPANY_CONTACT.emailGeneral}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Quick Inquiry Modal */}
      <QuickInquiryModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
