"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { NAV_ITEMS, OFFICIAL_CONTACT } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  // Close drawer and reset accordion states
  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobileAccordion(null);
  }, []);

  // Track scroll position for subtle shadow & height change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while mobile drawer is open; restore on close or unmount
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close drawer automatically on route navigation
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Keyboard accessibility: Escape key closes the drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMenu]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-[#E6E1DA]"
            : "bg-white py-3 sm:py-4 border-b border-[#E6E1DA]/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* Logo matching naharbuilders.com */}
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center group focus:outline-none"
              aria-label="Nahar Builders Home"
            >
              <div className="relative h-9 sm:h-11 w-auto flex items-center">
                <Image
                  src="/nahar/logo-dark.png"
                  alt="Nahar Builders Logo"
                  width={190}
                  height={50}
                  priority
                  className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links (>=1024px) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href);
                const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

                if (hasDropdown) {
                  return (
                    <div key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium tracking-wide transition-colors ${
                          active
                            ? "text-[#8A7257] font-semibold"
                            : "text-[#1F2429] hover:text-[#8A7257]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#8A7257] transition-transform duration-200 group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-[#E6E1DA] rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {item.dropdown!.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="px-4 py-2 text-xs sm:text-sm text-[#525960] hover:text-[#8A7257] hover:bg-[#FAF8F5] transition-colors block text-left"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-3.5 py-2 text-sm font-medium tracking-wide transition-colors ${
                      active
                        ? "text-[#8A7257] font-semibold"
                        : "text-[#1F2429] hover:text-[#8A7257]"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Get A Quote CTA button matching naharbuilders.com */}
              <div className="ml-3">
                <Link
                  href="/contact#quote"
                  className="bg-[#8A7257] hover:bg-[#705944] text-white px-5 py-2.5 text-xs tracking-wider uppercase font-medium rounded transition shadow-sm inline-block"
                >
                  Get A Quote
                </Link>
              </div>
            </nav>

            {/* Mobile Header Controls (<1024px) */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact#quote"
                onClick={closeMenu}
                className="bg-[#8A7257] hover:bg-[#705944] text-white px-3 py-1.5 text-xs tracking-wider uppercase font-medium rounded transition"
              >
                Get A Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="p-2 text-[#1F2429] hover:text-[#8A7257] focus:outline-none rounded-lg transition"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Clean Full-Viewport Mobile Menu Overlay & Drawer (<1024px) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden"
        >
          {/* Full viewport backdrop */}
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300"
            onClick={closeMenu}
          />

          {/* Drawer panel */}
          <div className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-[#F8F6F2] text-[#111827] shadow-2xl overflow-y-auto flex flex-col justify-between p-6 border-l border-[#E6E1DA] animate-in slide-in-from-right duration-250">
            {/* Top Section: Logo & Close Button */}
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-[#E6E1DA]">
                <Link href="/" onClick={closeMenu} className="inline-block">
                  <Image
                    src="/nahar/logo-dark.png"
                    alt="Nahar Builders"
                    width={140}
                    height={36}
                    className="h-8 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="p-1.5 text-slate-600 hover:text-[#8A7257] rounded-lg transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.href);
                  const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                  const isExpanded = mobileAccordion === item.name;

                  if (hasDropdown) {
                    return (
                      <div key={item.name} className="border-b border-[#E6E1DA]/70 py-1">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={`py-2 text-sm font-medium tracking-wide ${
                              active ? "text-[#8A7257] font-semibold" : "text-[#1F2429]"
                            }`}
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleMobileAccordion(item.name)}
                            aria-label={`Toggle ${item.name} submenu`}
                            className="p-2 text-slate-500 hover:text-[#8A7257] focus:outline-none"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded ? "rotate-180 text-[#8A7257]" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {isExpanded && (
                          <div className="pl-4 pb-2 space-y-2 pt-1 border-l-2 border-[#8A7257]/30 ml-1">
                            {item.dropdown!.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={closeMenu}
                                className="block py-1 text-xs text-[#525960] hover:text-[#8A7257] transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={`block py-2.5 border-b border-[#E6E1DA]/70 text-sm font-medium tracking-wide ${
                        active
                          ? "text-[#8A7257] font-semibold"
                          : "text-[#1F2429] hover:text-[#8A7257]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Get A Quote CTA button inside drawer */}
              <div className="pt-2">
                <Link
                  href="/contact#quote"
                  onClick={closeMenu}
                  className="w-full text-center block bg-[#8A7257] hover:bg-[#705944] text-white py-3 text-xs tracking-widest uppercase font-semibold rounded-md shadow-sm transition"
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>

            {/* Bottom Section: Official Contact Information */}
            <div className="pt-6 mt-6 border-t border-[#E6E1DA] text-xs text-[#525960] space-y-2.5">
              <p className="font-semibold text-[#1F2429] text-sm">{OFFICIAL_CONTACT.companyName}</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8A7257] shrink-0 mt-0.5" />
                <span className="leading-snug">{OFFICIAL_CONTACT.shortAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8A7257] shrink-0" />
                <a
                  href={`tel:${OFFICIAL_CONTACT.phoneRaw}`}
                  className="hover:text-[#8A7257] transition font-medium text-[#1F2429]"
                >
                  {OFFICIAL_CONTACT.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8A7257] shrink-0" />
                <a
                  href={`mailto:${OFFICIAL_CONTACT.email}`}
                  className="hover:text-[#8A7257] transition"
                >
                  {OFFICIAL_CONTACT.email}
                </a>
              </div>
              <p className="text-[11px] text-[#A0A7AE] pt-1">{OFFICIAL_CONTACT.workingHours}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
