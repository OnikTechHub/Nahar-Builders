export interface HeroSlide {
  id: number;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/HeroImg/img.avif",
    subtitle: "Premier Construction Partner in Chattogram",
    title: "Building Your Dreams with Trust & Quality",
    description:
      "A distinguished engineering & development partner dedicated to architectural distinction, safety compliance, and enduring value.",
    primaryCtaText: "Explore Portfolio",
    primaryCtaLink: "/projects",
    secondaryCtaText: "Consult Our Team",
    secondaryCtaLink: "/contact",
  },
  {
    id: 2,
    image: "/HeroImg/img1.jpg",
    subtitle: "Healthcare & High-Rise Infrastructure",
    title: "19-Storied Nahar Specialized Hospital",
    description:
      "Engineered with a reinforced double-basement foundation, clinical-grade medical gas infrastructure, and specialized hospital architectural planning.",
    primaryCtaText: "View Hospital Project",
    primaryCtaLink: "/projects",
    secondaryCtaText: "Our Services",
    secondaryCtaLink: "/services",
  },
  {
    id: 3,
    image: "/HeroImg/img2.jpg",
    subtitle: "Luxury Residential Engineering",
    title: "Nakeeb Heights in Chandgaon R/A",
    description:
      "A 14-storied luxury residential tower in Chandgaon Residential Area, built with seismic-resistant RCC framing, natural ventilation, and modern lifestyle amenities.",
    primaryCtaText: "View Portfolio",
    primaryCtaLink: "/projects",
    secondaryCtaText: "Get a Quote",
    secondaryCtaLink: "/contact",
  },
];

export const CORE_PILLARS = [
  {
    title: "Civil Construction",
    description: "Residential towers, commercial hubs, and healthcare structures.",
    link: "/services",
  },
  {
    title: "Real Estate Development",
    description: "Prime residential and commercial projects across Chattogram.",
    link: "/services",
  },
  {
    title: "Project Supervision",
    description: "Rigorous engineering oversight and strict BNBC compliance.",
    link: "/services",
  },
  {
    title: "Heavy Equipment & Materials",
    description: "In-house machinery fleet and reliable material logistics.",
    link: "/services",
  },
];

export interface OfficialService {
  id: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
}

export const VERIFIED_SERVICES_LIST: OfficialService[] = [
  {
    id: "residential-construction",
    title: "Residential Construction",
    tag: "Civil Engineering",
    description:
      "High-end residential construction focused on structural longevity, modern architectural layout, and BNBC code compliance.",
    features: [
      "Multi-storied Apartment Towers",
      "Duplexes & Private Luxury Residences",
      "Reinforced Concrete (RCC) Structural Erection",
      "Seismic Zone 2/3 Earthquake Resistance",
    ],
  },
  {
    id: "commercial-complexes",
    title: "Commercial Complexes",
    tag: "Commercial Sector",
    description:
      "Commercial towers, shopping centers, and corporate office complexes designed for high footfall, safety, and business operations.",
    features: [
      "Commercial Malls & Retail Outlets",
      "Corporate Office Towers & Floorplates",
      "Mixed-Use Developments",
      "NFPA Standard Emergency Egress",
    ],
  },
  {
    id: "interior-design",
    title: "Interior Design & Finishing",
    tag: "Aesthetics",
    description:
      "Bespoke interior architecture and finishing solutions, uniting spatial efficiency with luxury craftsmanship and materials.",
    features: [
      "Luxury Apartment & Corporate Interiors",
      "Custom Ceilings, Acoustic & Joinery Work",
      "High-Grade Marble & Porcelain Flooring",
      "Ergonomic Spatial Layout Optimization",
    ],
  },
  {
    id: "renovation-remodeling",
    title: "Renovation & Remodeling",
    tag: "Renovation",
    description:
      "Structural retrofitting, facade transformation, and modernizing existing properties to enhance market value and structural safety.",
    features: [
      "Structural Retrofitting & Carbon-Fiber Reinforcement",
      "Architectural Exterior Facade Modernization",
      "Interior Space Reconfiguration & Re-engineering",
      "Mechanical & Plumbing Modernization",
    ],
  },
  {
    id: "project-planning-supervision",
    title: "Project Planning & Supervision",
    tag: "Management",
    description:
      "Turnkey project management, timeline scheduling, quality assurance, safety audit, and transparent client progress reporting.",
    features: [
      "Quality Control & Material Testing Audit (BUET certified)",
      "On-Site Senior Civil Engineer Supervision",
      "HSE Industrial Safety Compliance & Risk Mitigation",
      "Milestone-Driven Fast-Track Project Scheduling",
    ],
  },
  {
    id: "design-cda-approvals",
    title: "Design & CDA Approvals",
    tag: "Architectural Approvals",
    description:
      "Architectural drafting, structural calculations, plumbing blueprints, soil testing, and CDA (Chattogram Development Authority) approvals.",
    features: [
      "Architectural, Structural & MEP Engineering Drawings",
      "Geotechnical Soil Analytics & Load Capacity Testing",
      "CDA & Local Statutory Government Approvals",
      "Strict Compliance with BNBC Building Standards",
    ],
  },
];

export interface SupplyChainItem {
  title: string;
  tag: string;
  description: string;
}

export const SUPPLY_CHAIN_ITEMS: SupplyChainItem[] = [
  {
    title: "High-Speed Elevators",
    tag: "Equipment",
    description: "Imported passenger and cargo elevator systems for residential & commercial towers.",
  },
  {
    title: "Centralized Cooling (HVAC)",
    tag: "HVAC",
    description: "VRF and centralized AC solutions for corporate towers & healthcare centers.",
  },
  {
    title: "Stone Chips & Tiles",
    tag: "Materials",
    description: "High-grade imported stone chips, marble, and porcelain tiles for heavy structures.",
  },
  {
    title: "Certified Steel & Cement",
    tag: "Supply",
    description: "Laboratory-tested high-yield Grade 72/60 steel rebar and cement for seismic resistance.",
  },
];

export const VERIFIED_STRENGTHS_LIST = [
  {
    title: "Seismic Safety & BNBC Code Compliance",
    category: "Structural Standards",
    description:
      "Every project is engineered strictly to Bangladesh National Building Code (BNBC) seismic standards, ensuring robust resistance against earthquakes and environmental stresses.",
  },
  {
    title: "Experienced Engineering Workforce",
    category: "Technical Expertise",
    description:
      "Led by qualified civil engineers and project directors who manage complex structural framing, MEP installations, and structural stability audits.",
  },
  {
    title: "Specialized Healthcare & Landmark Capabilities",
    category: "Proven Track Record",
    description:
      "Demonstrated ability to execute complex 19-storied healthcare institutions like Nahar Specialized Hospital with double-basement foundations.",
  },
  {
    title: "Rigorous Multi-Tier Quality Oversight",
    category: "Quality Assurance",
    description:
      "Continuous inspection of rebar placement, concrete mix proportions, cylinder compression tests, and electrical/plumbing safety protocols.",
  },
  {
    title: "Self-Sufficient Machinery & Logistics Fleet",
    category: "Operational Capacity",
    description:
      "In-house heavy equipment and material transport network ensuring uninterrupted construction operations and timely execution.",
  },
  {
    title: "Established Corporate Presence in Chattogram",
    category: "Local Credibility",
    description:
      "Conveniently headquartered at Nahar Square, Bahaddarhat, Chattogram, offering open consultation and transparent client engagement.",
  },
];
