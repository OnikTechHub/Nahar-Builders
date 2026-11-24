"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAccordion(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E6E1DA]"
          : "bg-white py-4 border-b border-[#E6E1DA]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo matching naharbuilders.com */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none"
            aria-label="Nahar Builders Home"
          >
            <div className="relative h-11 sm:h-12 w-auto flex items-center">
              <Image
                src="/nahar/logo-dark.png"
                alt="Nahar Builders Logo"
                width={190}
                height={50}
                priority
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
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
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-[#E6E1DA] rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.dropdown!.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="px-4 py-2.5 text-sm text-[#525960] hover:text-[#8A7257] hover:bg-[#FAF8F5] transition-colors block text-left"
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

            {/* Get A Quote CTA button matching naharbuilders.com (routes directly to contact form) */}
            <div className="ml-3">
              <Link
                href="/contact#quote"
                className="bg-[#8A7257] hover:bg-[#705944] text-white px-5 py-2.5 text-xs tracking-wider uppercase font-medium rounded transition shadow-sm inline-block"
              >
                Get A Quote
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact#quote"
              className="bg-[#8A7257] hover:bg-[#705944] text-white px-3.5 py-1.5 text-xs tracking-wider uppercase font-medium rounded transition"
            >
              Get A Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-[#1F2429] hover:text-[#8A7257] rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-white ml-auto h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#E6E1DA] animate-in slide-in-from-right duration-250 p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E6E1DA]">
                <Image
                  src="/nahar/logo-dark.png"
                  alt="Nahar Builders"
                  width={140}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-900 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.href);
                  const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                  const isExpanded = mobileAccordion === item.name;

                  if (hasDropdown) {
                    return (
                      <div key={item.name} className="border-b border-[#E6E1DA]/60 py-1">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`py-2 text-sm font-medium ${
                              active ? "text-[#8A7257] font-semibold" : "text-[#1F2429]"
                            }`}
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleMobileAccordion(item.name)}
                            aria-label={`Toggle ${item.name} menu`}
                            className="p-2 text-slate-500 hover:text-[#8A7257]"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isExpanded ? "rotate-180 text-[#8A7257]" : ""
                              }`}
                            />
                          </button>
                        </div>
                        {isExpanded && (
                          <div className="pl-4 pb-2 space-y-2 pt-1">
                            {item.dropdown!.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs text-[#525960] hover:text-[#8A7257]"
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
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2.5 border-b border-[#E6E1DA]/60 text-sm font-medium ${
                        active ? "text-[#8A7257] font-semibold" : "text-[#1F2429] hover:text-[#8A7257]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3">
                <Link
                  href="/contact#quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block bg-[#8A7257] hover:bg-[#705944] text-white py-2.5 text-xs tracking-wider uppercase font-medium rounded transition"
                >
                  Get A Quote
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E6E1DA] text-xs text-[#525960] space-y-1">
              <p className="font-semibold text-[#1F2429]">Nahar Builders</p>
              <p>Nahar Square, Bahaddarhat, Chattogram</p>
              <p className="text-[#8A7257] font-medium">+880 1811 44 77 52</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
