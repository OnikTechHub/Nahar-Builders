# Nahar Builders — Corporate Website Frontend

Official Website: [https://www.naharbuilders.com/](https://www.naharbuilders.com/)  
GitHub Repository: [https://github.com/OnikTechHub/Nahar-Builders.git](https://github.com/OnikTechHub/Nahar-Builders.git)  

A modern, high-end, original corporate web application frontend for **Nahar Builders**, a leading civil construction and real estate development company based in Chattogram, Bangladesh. Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS on a clean white theme (`#FFFFFF` / `#F8FAFC`)**.

---

## 1. Technologies Used

- **Framework:** Next.js 16.4.6 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 with `@tailwindcss/postcss` and PostCSS
- **Iconography:** Lucide React (`lucide-react`)
- **Image Optimization:** Next.js `<Image />` with Unsplash remote patterns
- **Typography:** System-ui font stack optimized for crisp contrast on light backgrounds

---

## 2. Key Features & Sections

1. **Broken CSS / Styling Solution:**
   - Fully resolved previous unstyled HTML link rendering by migrating to `@tailwindcss/postcss` and PostCSS with standard Webpack compilation, generating complete 50 KB minified Tailwind utility bundles.
2. **Clean White Corporate Theme:**
   - Pure crisp white (`#FFFFFF`) primary canvas, subtle light surface backgrounds (`#F8FAFC` / `bg-slate-50`), high-contrast slate text (`#0F172A`, `#1E293B`, `#334155`), and architectural crimson red accents (`#DC2626`).
3. **Sticky Responsive Navbar (`src/components/Navbar.tsx`):**
   - Clean white backdrop with subtle border (`border-slate-200/80`), official Nahar Builders logo, top contact bar, smooth navigation links, desktop CTA button, and mobile hamburger drawer (`320px` to `1024px+`).
4. **Hero Section (`src/components/home/HeroSection.tsx`):**
   - Professional headline, verified tagline (*"Civil Construction & Real Estate Development Built on Structural Integrity"*), high-resolution architectural canvas, dual CTA buttons, and verified pillars strip.
5. **About Us Section (`src/components/home/AboutSection.tsx`):**
   - Two-column layout highlighting Nahar Builders' verified philosophy, engineering governance, and 4 core focus areas.
6. **Services Section (`src/components/home/ServicesSection.tsx`):**
   - 4 verified service cards: *Civil Construction*, *Real Estate Development*, *Project Supervision*, and *Heavy Equipment & Logistics*.
7. **Projects / Portfolio Section (`src/components/home/ProjectsSection.tsx`):**
   - Filterable tabs (*All*, *Healthcare*, *Residential*, *Hospitality*, *Commercial*) displaying 4 verified real landmarks:
     - **Nahar Specialized Hospital** (19-storied healthcare landmark with double-basement foundation)
     - **Nakeeb Heights** (14-storied luxury residential tower in Chandgaon R/A)
     - **Hotel Tower Inn** (10-storied 3-star hospitality landmark on Jubilee Road, 110 rooms)
     - **Nahar Square** (corporate center & head office in Bahaddarhat)
   - Interactive **View Details Modal** with full verified specifications.
8. **Why Choose Us / Company Strengths (`src/components/home/WhyChooseUsSection.tsx`):**
   - 6 verified strengths (BNBC code compliance, experienced engineering workforce, healthcare/landmark capabilities, multi-tier quality oversight, self-sufficient machinery fleet, established corporate presence at Nahar Square).
9. **Contact Us Section (`src/components/home/ContactSection.tsx`):**
   - Official head office address at Nahar Square, Bahaddarhat, Chattogram.
   - Phone (+880 1811 44 77 52), email (info@naharbuilders.com), and website link.
   - Interactive Google Maps location preview.
   - Frontend-validated contact form with live field validation and confirmation feedback.
10. **Footer (`src/components/Footer.tsx`):**
    - Logo, quick route navigation links, verified project directory, official head office card, and copyright.

---

## 3. Strict Factual Accuracy & Research

This application follows strict factual verification referencing `https://www.naharbuilders.com/`.  
**Zero fake projects, zero fabricated addresses, zero fake testimonials, and zero invented statistics.**  
See [RESEARCH_NOTES.md](file:///h:/Exabyte%20Project/OD-Builder/RESEARCH_NOTES.md) for detailed research answers and source URL citations.

---

## 4. Setup & Running Instructions

### Prerequisites
- Node.js (v18+ or v20+)
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm run start
```

---

## 5. Design Decisions

- **Color Contrast:** Crisp dark charcoal (`#0F172A` / `#1E293B`) on pure white (`#FFFFFF`) to ensure WCAG AAA text legibility.
- **Logo Presentation:** The official Nahar Builders logo (`/nahar-builders-logo.jpg`) on pure white background is placed in a clean, border-harmonized container with high-DPI scaling.
- **Modularity:** All dummy and verified data is maintained in typed modules under `src/data/` for clean REST API plug-and-play adaptability.
