export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Commercial";
  status: "Ongoing" | "Completed" | "Upcoming";
  location: string;
  area: string;
  units: string;
  completionYear: string;
  image: string;
  featured: boolean;
  tagline: string;
  description: string;
  highlights: string[];
  architect: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "nahars-heritage-residence",
    title: "Nahar's Heritage Residence",
    category: "Residential",
    status: "Ongoing",
    location: "Nasirabad Housing Society, Chattogram",
    area: "2,450 – 3,250 sq.ft",
    units: "28 Luxury Suites (B+G+14)",
    completionYear: "Q4 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tagline: "Timeless contemporary architectural living in Chattogram's elite enclave",
    description: "Nahar's Heritage Residence embodies refined urban sanctuary living. Designed with generous panoramic balconies, double-height grand entrance lobby, rooftop swimming lounge, and Japanese elevator systems.",
    highlights: [
      "Double-height marbled lobby with 24/7 security concierge",
      "Earthquake resistant RCC frame as per BNBC 2020 codes",
      "Infinity edge rooftop swimming pool and landscaped sky lounge",
      "100% standby generator backup for full apartment loads"
    ],
    architect: "Studio Vistara Architects"
  },
  {
    id: "proj-2",
    slug: "nahars-skyline-commercial-hub",
    title: "Nahar's Skyline Commercial Hub",
    category: "Commercial",
    status: "Ongoing",
    location: "Agrabad Commercial Area, Chattogram",
    area: "65,000 sq.ft Commercial Space",
    units: "15 Floors + 3 Basement Parking",
    completionYear: "Q2 2027",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tagline: "Next-generation corporate glass tower engineered for business giants",
    description: "An architectural icon in Chattogram's commercial heartland. Featuring double-glazed heat-reflective low-E curtain wall facade, high-speed destination dispatch elevators, and state-of-the-art building management systems.",
    highlights: [
      "LEED Gold certified energy-saving acoustic glass curtain facade",
      "3-tier automated basement parking accommodating 140+ vehicles",
      "Multi-zone VRF HVAC system with independent tenant metering",
      "Integrated BMS security with biometric turnstiles"
    ],
    architect: "Form & Function Design Studio"
  },
  {
    id: "proj-3",
    slug: "nahars-bay-view-heights",
    title: "Nahar's Bay View Heights",
    category: "Residential",
    status: "Completed",
    location: "South Khulshi Residential Area, Chattogram",
    area: "2,850 sq.ft Luxury Condominiums",
    units: "30 Units (100% Handed Over)",
    completionYear: "2024",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tagline: "Scenic hill-facing residential sanctuary delivered strictly on schedule",
    description: "Delivered 3 months ahead of contracted schedule, Nahar's Bay View Heights stands as a testimonial to Nahar's Builders punctual delivery ethos. Residents enjoy panoramic bay views, serene surroundings, and imported finishes.",
    highlights: [
      "100% On-time delivery with zero compromise on structural quality",
      "Imported Spanish porcelain tiles and Grohe sanitary fixtures",
      "Community gym, indoor play arena, and private barbecue deck",
      "Registered homeowners association active and self-sustaining"
    ],
    architect: "Architectura Nova"
  },
  {
    id: "proj-4",
    slug: "nahars-imperial-avenue",
    title: "Nahar's Imperial Avenue",
    category: "Commercial",
    status: "Completed",
    location: "Road 11, Banani, Dhaka",
    area: "42,000 sq.ft Mixed Retail & Corporate",
    units: "10 Stories + 2 Basement Levels",
    completionYear: "2023",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tagline: "Prestigious high-street flagship corporate retail destination",
    description: "A luxury lifestyle and corporate hub in Banani, hosting premier international fashion retailers and executive headquarters. Features grand 20-ft atrium, column-free office plates, and high pedestrian accessibility.",
    highlights: [
      "Column-free flexible floor layout facilitating custom modular fitouts",
      "Automated NFPA-compliant fire suppression & pressurized staircases",
      "Fiber-optic pre-cabled telecom infrastructure",
      "High retail footfall street presence with valet parking"
    ],
    architect: "Studio Axis Dhaka"
  },
  {
    id: "proj-5",
    slug: "nahars-palisades-lakefront",
    title: "Nahar's Palisades Lakefront",
    category: "Residential",
    status: "Upcoming",
    location: "Foy's Lake Foothills, Chattogram",
    area: "3,100 – 4,800 sq.ft Penthouses",
    units: "18 Exclusive Duplexes & Penthouses",
    completionYear: "Pre-Launch (2027)",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tagline: "Ultra-luxury waterfront sanctuary blending nature and futuristic architecture",
    description: "Upcoming master-planned lakefront residences offering private elevator foyers, cantilevered infinity plunge pools on select duplex terraces, and biophilic garden envelopes with serene foothill vistas.",
    highlights: [
      "Private elevator access opening directly into individual apartment foyers",
      "Private plunge pool and landscaped vertical gardens on upper duplexes",
      "Solar-assisted smart home automation for lighting and climate",
      "Dedicated concierge, private boat dock access, and wellness spa"
    ],
    architect: "Urban Nexus International"
  },
  {
    id: "proj-6",
    slug: "nahars-zenith-tower",
    title: "Nahar's Zenith Corporate Tower",
    category: "Commercial",
    status: "Upcoming",
    location: "Tejgaon Commercial Belt, Dhaka",
    area: "88,000 sq.ft Grade-A Offices",
    units: "22 Stories Architectural Icon",
    completionYear: "Design Approved (2028)",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    tagline: "Futuristic 22-story sustainable headquarters landmark",
    description: "Conceived as an environmental benchmark in Dhaka's modern industrial-commercial revitalization corridor. Featuring triple-height arrival court, rooftop helipad provision, and carbon-neutral energy capture.",
    highlights: [
      "Targeting LEED Platinum green building accreditation",
      "High-speed intelligent gearless elevators with regenerative drives",
      "Conference auditorium, executive rooftop restaurant, and club",
      "Direct rapid expressway connection and multi-tier security"
    ],
    architect: "Atelier Zenith Architects"
  }
];
