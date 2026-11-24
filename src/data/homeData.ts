export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: "Building2" | "Building" | "Compass" | "ShieldCheck";
  description: string;
  features: string[];
  ctaLink: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  project: string;
  comment: string;
  rating: number;
  location: string;
}

export interface ExcellencePillar {
  title: string;
  badge: string;
  description: string;
  iconName: "Award" | "CheckCircle2" | "Layers" | "Shield" | "Clock" | "HeartHandshake";
}

export const HERO_DATA = {
  badge: "STRUCTURAL INTEGRITY • CORPORATE CREDIBILITY",
  headline: "Building Landmarks, Elevating Lifestyles.",
  tagline: "BUILDING TRUST, ENGINEERING EXCELLENCE",
  subtitle:
    "Nahar's Builders unites the timeless structural grandeur of civil engineering with an uncompromising commitment to transparent customer care. From premier residential addresses to iconic corporate towers, we build trust for generations.",
  primaryCta: {
    label: "Explore Projects",
    href: "/projects",
  },
  secondaryCta: {
    label: "Get a Quote",
    href: "/contact",
  },
  stats: [
    {
      value: "25+",
      label: "Years of Trust",
      description: "Proven civil & architectural pedigree",
    },
    {
      value: "60+",
      label: "Completed Projects",
      description: "Residential & corporate landmarks delivered",
    },
    {
      value: "100%",
      label: "On-Time Handover",
      description: "Strict contractual timeline compliance",
    },
    {
      value: "1,200+",
      label: "Happy Families",
      description: "Thriving owner community across Bangladesh",
    },
  ] as StatItem[],
};

export const ABOUT_DATA = {
  tag: "ABOUT NAHAR'S BUILDERS",
  heading: "Engineering Excellence with Uncompromising Corporate Credibility",
  subheading: "Where Structural Pedigree Meets Timeless Architectural Grandeur",
  description1:
    "At Nahar's Builders, our mission is built upon a single unyielding foundation: 'BUILDING TRUST, ENGINEERING EXCELLENCE.' We believe that acquiring a luxury home or corporate commercial space should be an inspiring, completely transparent journey.",
  description2:
    "With a distinguished reputation in heavy civil construction and high-end property development, Nahar's Builders oversees every dimension of execution — from BUET-certified seismic deep pile foundations to imported precision finishes. We guarantee enduring structural strength, dispute-free freehold titles, and scheduled handovers.",
  pillars: [
    {
      title: "Structural Integrity",
      description:
        "Engineered with BUET-tested Grade 72/60 rebar and 5000+ PSI automated concrete frames, surpassing BNBC seismic codes.",
    },
    {
      title: "Transparent Process",
      description:
        "Clear digital milestone reporting, 100% verified mutation and freehold titles, and iron-clad zero hidden cost assurances.",
    },
    {
      title: "Modern Architecture",
      description:
        "Optimal cross-ventilation, expansive floor-to-ceiling glass fenestrations, biophilic rooftop green spaces, and timeless facade geometry.",
    },
    {
      title: "End-to-End Client Care",
      description:
        "Dedicated Relationship Officers assisting from initial floor plan customization to hassle-free title deed registration and post-handover maintenance.",
    },
  ],
  experienceBadge: {
    years: "25+",
    caption: "Years of Engineering Trust & Precision",
  },
  ctaText: "Learn More About Us",
  ctaHref: "/about",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "residential-development",
    title: "Residential Development",
    iconName: "Building2",
    description:
      "Crafting iconic luxury condominiums, duplexes, and gated residences designed around natural light, privacy, and family wellness.",
    features: [
      "Customizable 3 to 5-bedroom layouts",
      "Earthquake resilient structural frame",
      "Rooftop infinity lounges & children's play areas",
      "Sound-dampening acoustic party walls",
    ],
    ctaLink: "/services#residential",
  },
  {
    id: "commercial-construction",
    title: "Commercial Developments",
    iconName: "Building",
    description:
      "Developing high-visibility corporate towers, mixed-use retail arenas, and IT hubs built to international green building benchmarks.",
    features: [
      "Column-free expansive office floor plates",
      "Double-glazed low-emissivity glass facades",
      "High-speed destination smart elevators",
      "Multi-tier automated basement parking",
    ],
    ctaLink: "/services#commercial",
  },
  {
    id: "architectural-design",
    title: "Architectural Design & Consultancy",
    iconName: "Compass",
    description:
      "Providing complete master planning, seismic structural modeling, MEP engineering, and Rajuk/CDA regulatory approval consultancy.",
    features: [
      "3D Building Information Modeling (BIM)",
      "Solar & wind orientation simulation",
      "Rigorous soil & structural load analysis",
      "Fast-track statutory approval management",
    ],
    ctaLink: "/services#architectural",
  },
  {
    id: "interior-turnkey",
    title: "Interior & Turnkey Solutions",
    iconName: "ShieldCheck",
    description:
      "Delivering turnkey interior architecture, bespoke woodwork, and high-end electro-mechanical fit-outs ready for instant occupancy.",
    features: [
      "German and Italian premium hardware fitouts",
      "Smart home automated lighting & climate",
      "Factory-finished modular kitchen & closets",
      "1-Year comprehensive post-handover warranty",
    ],
    ctaLink: "/services#interior",
  },
];

export const EXCELLENCE_PILLARS: ExcellencePillar[] = [
  {
    title: "5000+ PSI High-Strength Concrete",
    badge: "Structural",
    description:
      "Automated batching plant concrete with continuous slump and compression cylinder testing at recognized laboratories.",
    iconName: "Layers",
  },
  {
    title: "100% Clear Title & Fast Registration",
    badge: "Transparency",
    description:
      "Every parcel of land undergoes rigorous legal audit, ensuring 100% dispute-free ownership and seamless deed registration.",
    iconName: "CheckCircle2",
  },
  {
    title: "Zero Delay Handover Guarantee",
    badge: "Punctuality",
    description:
      "Structured critical-path scheduling backed by liquidated damages clauses, ensuring your handover happens on or ahead of time.",
    iconName: "Clock",
  },
  {
    title: "Eco-Conscious Materials",
    badge: "Sustainability",
    description:
      "Energy-saving double-glazed facades, rainwater harvesting sumps, and solar-paneled rooftop common lighting systems.",
    iconName: "Award",
  },
  {
    title: "7-Tier Comprehensive Quality Audit",
    badge: "Safety",
    description:
      "Multi-stage inspections covering soil mechanics, structural rebar tie-downs, MEP waterproofing, and fire safety systems.",
    iconName: "Shield",
  },
  {
    title: "Dedicated Relationship Management",
    badge: "Customer First",
    description:
      "Direct access to a single point-of-contact manager offering bi-weekly construction video updates and transparent billing.",
    iconName: "HeartHandshake",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Tariqul Islam & Mrs. Rehana Islam",
    role: "Apartment Owners",
    project: "Nahar's Bay View Heights, Khulshi",
    location: "Chattogram",
    comment:
      "Investing with Nahar's Builders was the best decision we ever made. They promised on-time handover and delivered two months ahead of schedule! The structural finishing, natural ventilation, and honest handover process truly lived up to their brand motto: 'Building Trust, Engineering Excellence.'",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Farhana Rahman",
    role: "Managing Director, Apex Global Logistics",
    project: "Nahar's Skyline Commercial Hub",
    location: "Chattogram",
    comment:
      "As a corporate tenant looking for modern glass facade offices in Agrabad, Nahar's Builders provided crystal-clear architectural layouts, verified fire safety certifications, and seamless customization for our tech infrastructure.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Engr. Mahmudul Hassan",
    role: "Civil Structural Engineer & Homeowner",
    project: "Nahar's Heritage Residence",
    location: "Nasirabad, Chattogram",
    comment:
      "Being a civil engineer myself, I inspected their rebar placements, concrete cylinder test reports, and foundation pile depth. Nahar's Builders does not cut corners anywhere. Their structural integrity is on par with the highest international standards.",
    rating: 5,
  },
];

export const CONSULTATION_CTA = {
  tagline: "BUILDING TRUST, ENGINEERING EXCELLENCE",
  heading: "Ready to Find Your Landmark Property or Begin Construction?",
  description:
    "Whether you are seeking an architectural family residence, a strategic corporate address, or a joint-venture land development partnership, Nahar's Builders is ready to guide you.",
  hotline: "+880 1819-334455",
  secondaryPhone: "+880 1711-223344",
  email: "info@naharbuilders.com",
};
