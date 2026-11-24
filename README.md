# Nahar Builders — Corporate Web Application Frontend

[![Live Website](https://img.shields.io/badge/Live%20Website-nahar--builders.vercel.app-8A7257?style=for-the-badge&logo=vercel)](https://nahar-builders.vercel.app/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-OnikTechHub%2FNahar--Builders-111827?style=for-the-badge&logo=github)](https://github.com/OnikTechHub/Nahar-Builders.git)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive, high-end corporate frontend web application for **Nahar Builders**, a premier civil construction and real estate development enterprise headquartered in Bahaddarhat, Chattogram, Bangladesh.

This frontend application was developed strictly according to verified public information from the official reference website ([https://www.naharbuilders.com/](https://www.naharbuilders.com/)), maintaining 100% factual accuracy without invented claims or fabricated statistics.

---

## 1. Student & Project Information

- **Student / Developer Name:** Onik Das
- **Student ID:** 786390
- **Internship Organization:** Brain Machine AI
- **Context & Purpose:** This frontend development project was completed as part of the internship evaluation and technical training program at **Brain Machine AI**, built to satisfy the corporate web application evaluation criteria while rigorously adhering to authentic business data, clean code architecture, and modern UI/UX engineering standards.

---

## 2. Live Deployment & Repository Links

- **Live Website URL:** [https://nahar-builders.vercel.app/](https://nahar-builders.vercel.app/)
- **GitHub Repository URL:** [https://github.com/OnikTechHub/Nahar-Builders.git](https://github.com/OnikTechHub/Nahar-Builders.git)
- **Official Reference Website:** [https://www.naharbuilders.com/](https://www.naharbuilders.com/)

---

## 3. Technologies Used

| Technology / Tool | Version | Purpose |
|---|---|---|
| **Next.js** | `16.4.6` | React framework with App Router, server/client components, and static page generation |
| **React** | `19.3.0` | Core UI library for component state, hooks, and client interactivity |
| **TypeScript** | `^5.0` | Strict static typing, custom interfaces, and compile-time code verification |
| **Tailwind CSS** | `4.3.3` | Utility-first CSS styling with CSS variables and design tokens |
| **@tailwindcss/postcss** | `^4.3.5` | Official Tailwind PostCSS compiler plugin for full CSS bundle generation |
| **PostCSS** | `^8.5.33` | CSS preprocessing and autoprefixing pipeline |
| **Webpack** | Built-in | Stable compilation target (`next build --webpack`) ensuring complete CSS output |
| **Lucide React** | `^1.16.0` | Consistent, accessible, and lightweight SVG icons |
| **Google Fonts** | Hosted | `Cormorant Garamond` (editorial serif headings) and `Jost` (clean sans-serif body) |
| **Git & GitHub** | Latest | Version control, modular commit history, and remote repository hosting |
| **Vercel** | Edge Platform | Continuous integration, production deployment, and asset hosting |

---

## 4. Main Features & Application Architecture

This application implements a complete multi-page App Router architecture (rather than a single-page dump), providing dedicated routes, smooth transitions, and deep-linkable URLs:

### 4.1. Core Pages & Routes

1. **Home Page (`/` — `src/app/page.tsx`):**
   - Fullscreen architectural hero slider with smooth zoom-out crossfade animation (`scale(1.08)` to `scale(1.0)` over 6 seconds) using high-resolution local photography.
   - Four-pillar category strip: *Civil Construction*, *Real Estate Development*, *Project Supervision*, and *Heavy Equipment & Materials*.
   - Concise corporate overview preview linking to the full About page.
   - Featured landmark developments preview highlighting three flagship projects (*Nahar Specialized Hospital*, *Nakeeb Heights*, and *Hotel Tower Inn*).
   - Executive architectural vision quote banner on luxury dark slate (`#11161B`).
   - Comprehensive engineering capabilities preview with direct service links.
   - Dedicated **Why Choose Us** strengths section.

2. **About Us Page (`/about` — `src/app/about/page.tsx`):**
   - Corporate background, headquarters location at Nahar Square, and history in Chattogram.
   - Two-column engineering overview with verified architectural imagery.
   - Three core principle cards: *Mission (Architectural Excellence)*, *Vision (National Benchmark of Quality)*, and *Philosophy (Trust & Technical Precision)*.
   - Four business focus cards covering RCC structural safety, luxury residential towers, specialized healthcare landmarks, and laboratory testing.

3. **Services Page (`/services` — `src/app/services/page.tsx`):**
   - Six verified core service domains:
     1. *Residential Construction* (earthquake-resistant high-rise towers)
     2. *Commercial Complexes* (retail markets and trade centres)
     3. *Interior Design & Finishing* (architectural finishes and fit-outs)
     4. *Renovation & Remodeling* (structural retrofitting and upgrades)
     5. *Project Planning & Supervision* (BUET-tested materials and field audits)
     6. *Design & CDA Approvals* (soil testing, architectural layout, and CDA clearances)
   - Certified building material import & supply chain breakdown.
   - Public sector government contracting and private development partnership cards.
   - Direct link to the dedicated machinery fleet showcase.

4. **Projects / Portfolio Page (`/projects` — `src/app/projects/page.tsx`):**
   - Comprehensive showcase of all **12 verified authentic projects** scraped and verified from `naharbuilders.com`:
     - *Nahar Specialized Hospital* (Healthcare Landmark, 19 Stories & Double Basement, Chattogram)
     - *Nakeeb Heights* (Luxury Residential, 14 Stories & Double Basement, Chandgaon R/A)
     - *Hotel Tower Inn* (Hospitality, 10 Stories & 110 Rooms, Jubilee Road)
     - *Akil Tower* (Residential, 10 Stories, Mozaffor Nagar)
     - *Alhaj SA Tower* (Residential, 9 Stories, Hillview R/A)
     - *Supreme Subhan* (Residential, 10 Stories, Asadgonj)
     - *Frank Mariada* (Residential, 12 Stories, War Cemetery Rd)
     - *Mismark Nur* (Residential, 8 Stories, Hillview)
     - *Patiya Nahar Park & Resort* (Hospitality & Recreation, Patiya)
     - *Dhaka Metro Rail & Airport 3rd Terminal* (Infrastructure Material Supply, Dhaka)
     - *Lohagara Trade Centre* (Commercial, 7 Stories Ongoing, Lohagara)
     - *Nahar School Market* (Commercial, Ongoing, Lohagara)
   - Interactive category and status filter tabs (*All Projects*, *Completed*, *Ongoing*, *Residential*, *Commercial*, *Healthcare*, *Hospitality*, *Infrastructure*) with live count badges.
   - Uniform `16:11` aspect ratio cards with scale/status badges, location pins, and hover zoom effects.
   - Interactive **Project Details Modal** (`src/components/ProjectDetailsModal.tsx`) showing comprehensive engineering specifications, double-basement details, BUET/BNBC compliance highlights, and direct consultation actions.

5. **Dedicated Nahar Specialized Hospital Page (`/hospital` — `src/app/hospital/page.tsx`):**
   - Flagship healthcare showcase matching `https://www.naharbuilders.com/hospital`.
   - Hero banner with *19 Floors*, *Double Basement Parking*, and *Active Development Landmark* badges.
   - Architectural milestone overview detailing seismic core shear walls and multi-level underground parking.
   - Six key engineering specifications: *Deep Piling Foundation*, *Double Basement Sub-Structure*, *Medical Elevator Systems*, *Specialized HVAC Ducting (OT/ICU)*, *Fire Evacuation Network*, and *Central Power & Gas Lines*.
   - Institutional healthcare engineering consultation banner.

6. **Dedicated Machinery & Equipment Fleet Page (`/equipment` — `src/app/equipment/page.tsx`):**
   - Plant & logistics overview matching `https://www.naharbuilders.com/equipment`.
   - Fleet narrative highlighting 100% company-owned equipment to eliminate rental delays and maintain timeline control.
   - Four official brochure sheets with interactive fullscreen lightbox inspection:
     1. *Heavy Machinery & Excavation Fleet* (`equipment-38.png`)
     2. *Concrete Batching & High-Pressure Pumps* (`equipment-39.png`)
     3. *Scaffolding & Vertical Hoisting Gear* (`equipment-40.png`)
     4. *Industrial Diesel Generators & Support* (`equipment-41.png`)
   - Six machinery capability modules: *Earthwork*, *Concrete*, *Compaction*, *Formwork*, *Power*, and *Lifting*.

7. **Why Choose Us / Company Strengths (`src/components/WhyChooseUs.tsx`):**
   - Integrated into the Home page.
   - Four verifiable numerical credentials: *19 Stories*, *100% Owned Fleet*, *BNBC & CDA Compliance*, and *Turnkey Lifecycle Delivery*.
   - Six structured strengths cards explaining structural safety, equipment independence, healthcare track record, laboratory testing, CDA liaison, and executive accessibility.

8. **Contact Us Page (`/contact` — `src/app/contact/page.tsx`):**
   - Verified head office address at Nahar Square, Bahaddarhat, Chattogram.
   - Primary & secondary phone lines with click-to-call support.
   - Official email addresses with click-to-email support.
   - Official website domain reference with external link.
   - Live embedded interactive Google Maps iFrame showing Nahar Square on Arakan Road, plus an external Google Maps link.
   - Frontend-validated contact form containing:
     - *Full Name* (required, instant validation)
     - *Email Address* (required, regex email validation)
     - *Phone Number* (required, numerical validation)
     - *Inquiry Subject* (custom dropdown selector covering major project categories)
     - *Message Details* (minimum 10 characters required)
     - *Submit Button* (active loading state and confirmation success card with reset option)
   - Deep-linked anchor `#quote` so clicking **"Get A Quote"** from anywhere in the application smoothly scrolls directly to the inquiry form.

9. **Navigation Bar (`src/components/Navbar.tsx`):**
   - Sticky header with clean white background, subtle border, and high-DPI transparent Nahar Builders logo (`/nahar/logo-dark.png`).
   - Desktop dropdown menus under *About Us*, *Services*, and *Projects*.
   - **"Contact"** link navigates to the top of `/contact` (contact details and map).
   - **"Get A Quote"** CTA button navigates to `/contact#quote` (directly focusing the inquiry form).
   - Full responsive mobile drawer with collapsible accordion submenus.

10. **Footer (`src/components/Footer.tsx`):**
    - High-resolution transparent logo, corporate overview, quick route links, and complete services index.
    - Official head office contact card with address, phones, emails, and website.
    - Verified social media channels (direct link to official Instagram `@naharbuilders` plus direct portals for Facebook, LinkedIn, and YouTube).
    - Standard copyright notice (`© 2026 Nahar Builders. All Rights Reserved.`).

11. **Custom 404 Not Found Page (`src/app/not-found.tsx`):**
    - Responsive, architectural-themed error page matching the corporate gold/white aesthetic.
    - Subtle 404 badge with rotating compass icon.
    - Clear reassuring headline and helpful recovery navigation buttons (*Back to Home*, *Explore Projects*, *Contact Us*) plus a quick-access directory grid.

---

## 5. Project Folder Structure

```text
OD-Builder/
├── public/
│   ├── HeroImg/                  # High-resolution architectural slideshow assets
│   │   ├── img.avif
│   │   ├── img1.jpg
│   │   ├── img2.jpg
│   │   └── img3.jpg
│   ├── nahar/                    # Official company branding & project renders
│   │   ├── logo-dark.png         # Transparent dark logo (used in Navbar & Favicon)
│   │   ├── logo-light.png        # Transparent light logo (used in Footer)
│   │   ├── about-us.png
│   │   ├── equipment-38.png      # Excavators & earthmovers fleet brochure sheet
│   │   ├── equipment-39.png      # Concrete batching & pumps brochure sheet
│   │   ├── equipment-40.png      # Formwork & scaffolding brochure sheet
│   │   ├── equipment-41.png      # Industrial generators brochure sheet
│   │   ├── hotel-tower-inn.png
│   │   ├── nahar-hospital.png
│   │   ├── nakeeb-heights.png
│   │   └── projects/             # 12 verified landmark project images
│   │       ├── akil-tower.png
│   │       ├── alhaj-sa-tower.png
│   │       ├── dhaka-metro-rail.png
│   │       ├── frank-mariada.png
│   │       ├── hotel-tower-inn.png
│   │       ├── lohagara-trade-centre.png
│   │       ├── mismark-nur.png
│   │       ├── nahar-hospital.png
│   │       ├── nahar-school-market.png
│   │       ├── nakeeb-heights.png
│   │       ├── patiya-resort.png
│   │       └── supreme-subhan.png
│   ├── favicon.ico               # 32-bit transparent ICO favicon
│   └── icon.png                  # Transparent PNG app icon
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # Dedicated About Us page
│   │   ├── contact/
│   │   │   └── page.tsx          # Dedicated Contact page with #quote form & map
│   │   ├── equipment/
│   │   │   └── page.tsx          # Dedicated Machinery & Equipment Fleet page
│   │   ├── gallery/
│   │   │   └── page.tsx          # Architectural media gallery
│   │   ├── hospital/
│   │   │   └── page.tsx          # Dedicated Nahar Specialized Hospital showcase
│   │   ├── projects/
│   │   │   └── page.tsx          # Dedicated Projects Portfolio & filter tabs
│   │   ├── services/
│   │   │   └── page.tsx          # Dedicated Services page
│   │   ├── apple-icon.png        # Transparent Apple touch icon
│   │   ├── favicon.ico           # Transparent root favicon
│   │   ├── globals.css           # Google Fonts imports, Tailwind directives, custom CSS
│   │   ├── icon.png              # App Router transparent icon
│   │   ├── layout.tsx            # Root layout with metadata, Navbar, and Footer
│   │   ├── not-found.tsx         # Custom 404 Page Not Found
│   │   └── page.tsx              # Home page with hero, pillars, previews & strengths
│   ├── components/
│   │   ├── Footer.tsx            # Global corporate footer with social channels
│   │   ├── HeroSection.tsx       # Smooth zoom-out slideshow hero section
│   │   ├── Navbar.tsx            # Sticky header with multi-level dropdowns & CTA
│   │   ├── ProjectDetailsModal.tsx # Interactive modal for verified project specifications
│   │   └── WhyChooseUs.tsx       # 4 credentials & 6 company strengths cards
│   └── data/
│       ├── homeData.ts           # Home page pillar items & preview metrics
│       ├── navigation.ts         # Global navigation items, dropdowns & official contact data
│       └── projectsData.ts       # Typed dataset of all 12 verified authentic projects
├── .gitignore                    # Git ignore file excluding build artifacts & temporary files
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies, scripts, and project metadata
├── postcss.config.mjs            # PostCSS configuration with @tailwindcss/postcss
├── tsconfig.json                 # TypeScript compiler options
└── README.md                     # Comprehensive project documentation
```

---

## 6. Project Setup & Local Running Instructions

Follow these step-by-step commands to run the project locally on your machine:

### 6.1. Prerequisites
- **Node.js:** `v18.18+` or `v20.x` installed ([https://nodejs.org/](https://nodejs.org/))
- **npm:** `v9+` or `v10+` (bundled with Node.js)
- **Git:** Latest version installed

### 6.2. Clone the Repository
```bash
git clone https://github.com/OnikTechHub/Nahar-Builders.git
cd Nahar-Builders
```

### 6.3. Install Dependencies
```bash
npm install
```

### 6.4. Start the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:3000
```

### 6.5. Create a Production Build
To test the production build locally (compiles static pages and minifies all assets):
```bash
npm run build
npm run start
```

---

## 7. External Resources & Asset Credits

1. **Company Information & Reference Source:**
   - [Nahar Builders Official Website](https://www.naharbuilders.com/) — Corporate background, service descriptions, project names, technical specifications, head office address, phone lines, email addresses, and official machinery fleet brochure sheets.
2. **Branding Assets:**
   - Official Nahar Builders high-resolution logos (`logo-dark.png` and `logo-light.png`) referenced directly from the corporate website.
3. **Typography:**
   - [Google Fonts — Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond): High-contrast serif typeface used for architectural elegance across all major headings.
   - [Google Fonts — Jost](https://fonts.google.com/specimen/Jost): Modern geometric sans-serif typeface used for clean, highly legible body copy and UI elements.
4. **Iconography:**
   - [Lucide React](https://lucide.dev/): Crisp, customizable vector iconography.
5. **Interactive Mapping:**
   - [Google Maps Platform](https://maps.google.com/): Embedded interactive iframe locating Nahar Square on Arakan Road, Bahaddarhat, Chattogram.

---

## 8. Design Decisions & Engineering Governance

- **Responsive Design Strategy (`320px` to `1024px+`):**
  - Mobile-first CSS architecture ensuring that grids adapt from single-column on mobile (`grid-cols-1`) to two-column on tablet (`md:grid-cols-2`) and three- or four-column on desktop (`lg:grid-cols-3` / `lg:grid-cols-4`).
  - Mobile hamburger drawer with accordion animation for multi-level dropdowns.
- **Color Palette & Visual Hierarchy:**
  - Crisp white background (`#FFFFFF`) and warm cream surfaces (`#FAF8F5`, `#F5F2EC`) provide an airy, modern foundation.
  - Deep slate/charcoal text (`#1F2429`, `#11161B`) ensures strict WCAG AAA contrast compliance against light surfaces.
  - Architectural warm gold (`#8A7257`, hover `#705944`) accents draw visual focus to active tabs, key metrics, and call-to-action buttons without overwhelming the eye.
- **Strict Factual Accuracy:**
  - Zero fabricated projects or fictitious claims. Every building name, story count, and location matches actual physical developments delivered or actively built by Nahar Builders in Chattogram, Dhaka, Lohagara, and Patiya.
- **Performance & SEO Optimization:**
  - Comprehensive OpenGraph and meta descriptions configured in `src/app/layout.tsx`.
  - Next.js `<Image />` optimization with explicit aspect ratios preventing Cumulative Layout Shift (CLS).
  - 100% static prerendering (`○ Static`) for all routes ensuring instantaneous page loads on CDN edge nodes.
- **Transparent Favicon Architecture:**
  - Utilizes the transparent PNG logo mark across `icon.png`, `apple-icon.png`, and `favicon.ico`, completely eliminating unsightly solid white background boxes in browser tabs.

---

## 9. License & Ownership

This project is created for evaluation and educational demonstration under the **Brain Machine AI** internship program.  
Corporate identity, branding, and reference information are the property of **Nahar Builders**, Chattogram, Bangladesh.  
Code architecture &copy; 2026 **Onik Das**.
