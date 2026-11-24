export interface NavSubItem {
  name: string;
  href: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href: string;
  dropdown?: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT US",
    href: "/about",
    dropdown: [
      {
        name: "Company Overview",
        href: "/about#overview",
        description: "Our history, engineering legacy, and corporate credibility.",
      },
      {
        name: "Nahar's Management",
        href: "/about#management",
        description: "Visionary leadership steering structural innovation.",
      },
      {
        name: "Vision & Quality",
        href: "/about#vision",
        description: "Our uncompromising benchmarks for construction quality.",
      },
    ],
  },
  {
    name: "SERVICES",
    href: "/services",
    dropdown: [
      {
        name: "Residential Construction",
        href: "/services#residential",
        description: "Luxury apartments, penthouses, and gated residences.",
      },
      {
        name: "Commercial Developments",
        href: "/services#commercial",
        description: "Corporate glass towers and dynamic retail hubs.",
      },
      {
        name: "Architectural Design & Consultancy",
        href: "/services#architectural",
        description: "Structural engineering, MEP design, and master planning.",
      },
      {
        name: "Interior & Turnkey Solutions",
        href: "/services#interior",
        description: "End-to-end bespoke fit-outs and project execution.",
      },
    ],
  },
  {
    name: "PROJECTS",
    href: "/projects",
    dropdown: [
      {
        name: "Ongoing Projects",
        href: "/projects?status=Ongoing",
        description: "Landmarks currently under high-standard construction.",
      },
      {
        name: "Completed Projects",
        href: "/projects?status=Completed",
        description: "Handed-over residences with thriving homeowner communities.",
      },
      {
        name: "Upcoming Landmarks",
        href: "/projects?status=Upcoming",
        description: "Future iconic projects open for pre-launch registration.",
      },
    ],
  },
  {
    name: "GALLERY",
    href: "/gallery",
  },
  {
    name: "CONTACT",
    href: "/contact",
  },
];

export const COMPANY_CONTACT = {
  name: "Nahar's Builders",
  tagline: "BUILDING TRUST, ENGINEERING EXCELLENCE",
  phonePrimary: "+880 1819-334455",
  phoneSecondary: "+880 1711-223344",
  emailGeneral: "info@naharbuilders.com",
  emailSales: "sales@naharbuilders.com",
  offices: [
    {
      title: "Chattogram Corporate Headquarters",
      address: "Nahar's Tower, Level 8, CDA Avenue, GEC Circle, Chattogram, Bangladesh",
      phone: "+880 1819-334455",
      isPrimary: true,
    },
    {
      title: "Dhaka Regional Office",
      address: "Suite 402, Nahar's Heritage, Road 11, Block-D, Banani, Dhaka-1213, Bangladesh",
      phone: "+880 1711-223344",
      isPrimary: false,
    },
  ],
  workingHours: "Saturday – Thursday: 9:00 AM – 7:30 PM",
  socialLinks: [
    { platform: "Facebook", href: "https://facebook.com/naharbuilders" },
    { platform: "LinkedIn", href: "https://linkedin.com/company/naharbuilders" },
    { platform: "Instagram", href: "https://instagram.com/naharbuilders" },
    { platform: "YouTube", href: "https://youtube.com/@naharbuilders" },
  ],
};
