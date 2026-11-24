export interface RealProject {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Healthcare" | "Commercial" | "Hospitality" | "Infrastructure";
  status: "Completed" | "Ongoing" | "Landmark";
  location: string;
  stories: string;
  image: string;
  featured: boolean;
  tagline: string;
  description: string;
  verifiedDetails: string[];
}

export const VERIFIED_PROJECTS: RealProject[] = [
  {
    id: "proj-hospital",
    slug: "nahar-specialized-hospital",
    title: "Nahar Specialized Hospital",
    category: "Healthcare",
    status: "Landmark",
    location: "Chattogram, Bangladesh",
    stories: "19 Stories • Double Basement",
    image: "/nahar/projects/nahar-hospital.png",
    featured: true,
    tagline: "19-Storied Landmark Healthcare Facility equipped with double basement parking & clinical units",
    description:
      "A flagship 19-storied healthcare landmark engineered with a heavy-duty reinforced double-basement foundation, specialized clinical gas and MEP infrastructure, and dedicated emergency vertical circulation.",
    verifiedDetails: [
      "19 Stories with reinforced concrete double-basement foundation",
      "Specialized clinical engineering, medical gas, and cleanroom air handling",
      "Seismic resistance and structural safety compliant with BNBC standards",
      "Dedicated high-capacity hospital elevators and emergency evacuation staircases",
    ],
  },
  {
    id: "proj-nakeeb",
    slug: "nakeeb-heights",
    title: "Nakeeb Heights",
    category: "Residential",
    status: "Completed",
    location: "Chandgaon R/A, Chattogram",
    stories: "14 Stories • Double Basement",
    image: "/nahar/projects/nakeeb-heights.png",
    featured: true,
    tagline: "14-Storied Luxury Residential Building with Double Basement",
    description:
      "A prestigious 14-storied luxury residential tower situated in Chandgaon Residential Area, built with modern architectural aesthetics, optimized natural ventilation, double basement, and strict structural safety standards.",
    verifiedDetails: [
      "14 Stories of contemporary residential apartments with double basement",
      "Prime residential location in Chandgaon R/A, Chattogram",
      "BUET-compliant earthquake-resistant RCC frame construction",
      "Modern lifestyle amenities, standby generator power, and 24/7 security",
    ],
  },
  {
    id: "proj-hotel",
    slug: "hotel-tower-inn",
    title: "Hotel Tower Inn",
    category: "Hospitality",
    status: "Completed",
    location: "Jubilee Road, Chattogram",
    stories: "10 Stories • 110 Rooms",
    image: "/nahar/projects/hotel-tower-inn.png",
    featured: true,
    tagline: "10-Storied 3-Star Hotel Building comprising approximately 110 rooms",
    description:
      "A prominent 10-storied 3-star hospitality and commercial landmark situated on Jubilee Road, Chattogram, housing 110 well-appointed guest rooms, banquet halls, and corporate meeting spaces.",
    verifiedDetails: [
      "10 Stories accommodating 110 premium hotel rooms and suites",
      "Strategic central location on Jubilee Road commercial artery",
      "Banquet facilities, multi-cuisine dining, and corporate meeting halls",
      "Complete NFPA fire-safety compliance and centralized electro-mechanical systems",
    ],
  },
  {
    id: "proj-akil",
    slug: "akil-tower",
    title: "Akil Tower",
    category: "Residential",
    status: "Completed",
    location: "Mozaffor Nagar, Chattogram",
    stories: "10 Stories",
    image: "/nahar/projects/akil-tower.png",
    featured: false,
    tagline: "10-Storied Residential Apartment Building crafted with modern engineering",
    description:
      "A 10-storied contemporary residential apartment tower in Mozaffor Nagar, built with precision RCC framing, spacious layouts, and certified construction materials.",
    verifiedDetails: [
      "10 Stories of residential family condominiums",
      "Modern exterior facade with optimized natural light and airflow",
      "Earthquake-resistant structural frame verified under BNBC guidelines",
      "Dedicated elevator and reliable utility infrastructure",
    ],
  },
  {
    id: "proj-alhaj-sa",
    slug: "alhaj-sa-tower",
    title: "Alhaj SA Tower",
    category: "Residential",
    status: "Completed",
    location: "Hillview R/A, Chattogram",
    stories: "9 Stories",
    image: "/nahar/projects/alhaj-sa-tower.png",
    featured: false,
    tagline: "9-Storied Residential Apartment Building crafted with high structural standards",
    description:
      "A 9-storied high-standard residential development in Hillview Residential Area, offering serene living spaces with robust structural design and quality finishing.",
    verifiedDetails: [
      "9 Stories of residential apartments in tranquil Hillview R/A",
      "Continuous on-site supervision and material cylinder compression testing",
      "Intercom system, automated water reservoir, and 24/7 security",
      "Prime residential neighborhood with convenient arterial road connectivity",
    ],
  },
  {
    id: "proj-supreme",
    slug: "supreme-subhan",
    title: "Supreme Subhan",
    category: "Residential",
    status: "Completed",
    location: "Asadgonj, Chattogram",
    stories: "10 Stories",
    image: "/nahar/projects/supreme-subhan.png",
    featured: false,
    tagline: "10-Storied Residential Apartment Building with spacious floor plans",
    description:
      "A prominent 10-storied residential building located at Asadgonj, engineered for family living with large floorplates, seismic safety, and durable architectural finishing.",
    verifiedDetails: [
      "10 Stories designed with family-centric layout efficiency",
      "Engineered foundation and reinforced concrete beam-column joints",
      "Centrally positioned in Asadgonj with quick market and school access",
      "Full compliance with local building authority clearances",
    ],
  },
  {
    id: "proj-frank",
    slug: "frank-mariada",
    title: "Frank Mariada",
    category: "Residential",
    status: "Completed",
    location: "War Cemetery Road, Chattogram",
    stories: "12 Stories",
    image: "/nahar/projects/frank-mariada.png",
    featured: false,
    tagline: "12-Storied Residential Apartment Building with modern exterior architecture",
    description:
      "A 12-storied luxury residential landmark in the historic War Cemetery Road area, combining elegant exterior facade design with superior civil engineering standards.",
    verifiedDetails: [
      "12 Stories of modern luxury residential residences",
      "Distinguished architectural facade with weather-resistant exterior finish",
      "Deep pile foundation and high-yield Grade 72/60 rebar framework",
      "High-speed elevator and multi-tier emergency security",
    ],
  },
  {
    id: "proj-mismark",
    slug: "mismark-nur",
    title: "Mismark Nur",
    category: "Residential",
    status: "Completed",
    location: "Hillview, Chattogram",
    stories: "8 Stories",
    image: "/nahar/projects/mismark-nur.png",
    featured: false,
    tagline: "8-Storied Residential Apartment Building located in a prime neighborhood",
    description:
      "An 8-storied residential tower in Hillview, providing functional family apartments designed for long-term structural durability and urban comfort.",
    verifiedDetails: [
      "8 Stories of comfortable family apartment residences",
      "Designed with natural cross-ventilation and daylight orientation",
      "Structural engineering compliant with BNBC seismic specifications",
      "Full municipal water and electricity backup systems",
    ],
  },
  {
    id: "proj-patiya",
    slug: "patiya-nahar-park-resort",
    title: "Patiya Nahar Park & Resort",
    category: "Hospitality",
    status: "Completed",
    location: "Patiya, Chattogram",
    stories: "Resort Complex",
    image: "/nahar/projects/patiya-resort.png",
    featured: false,
    tagline: "Recreational resort development featuring swimming pool, Platinum hall, and landscaping",
    description:
      "A comprehensive recreational and leisure resort development in Patiya, featuring modern hospitality infrastructure, scenic landscaping, swimming pool, and corporate event halls.",
    verifiedDetails: [
      "Expansive resort layout with customized recreational zoning",
      "Modern swimming pool with advanced filtration and safety systems",
      "Platinum banquet and convention hall for social and corporate events",
      "Architectural landscaping integrated with natural environment",
    ],
  },
  {
    id: "proj-mrt",
    slug: "dhaka-metro-rail-airport-terminal",
    title: "Dhaka Metro Rail & Airport 3rd Terminal",
    category: "Infrastructure",
    status: "Completed",
    location: "Dhaka, Bangladesh",
    stories: "Mega Infrastructure",
    image: "/nahar/projects/dhaka-metro-rail.png",
    featured: false,
    tagline: "Key sub-contractor partner to Bangladesh's flagship MRT & Airport Terminal projects",
    description:
      "Nahar Builders contributed heavy civil machinery, logistical fleet, and skilled technical workforce as a vital sub-contractor partner on national mega-infrastructure landmarks.",
    verifiedDetails: [
      "Sub-contracting engineering partner on national mega-projects",
      "Heavy excavation, logistics, and material supply chain deployment",
      "Stringent international safety standards and timeline compliance",
      "Demonstration of large-scale public infrastructure execution capacity",
    ],
  },
  {
    id: "proj-lohagara-trade",
    slug: "lohagara-trade-centre",
    title: "Lohagara Trade Centre",
    category: "Commercial",
    status: "Ongoing",
    location: "Lohagara, Chattogram",
    stories: "7 Stories Commercial",
    image: "/nahar/projects/lohagara-trade-centre.png",
    featured: false,
    tagline: "7-Storied Commercial Market with retail shops, wide entrances, and fire safety systems",
    description:
      "A modern 7-storied commercial shopping center and trade market under construction in Lohagara, featuring wide customer concourses, retail storefronts, and dedicated parking.",
    verifiedDetails: [
      "7 Stories of organized commercial and retail shopping avenues",
      "Double-width entrance corridors and modern customer elevators",
      "Integrated NFPA compliant fire suppression and emergency exits",
      "Strategic highway connectivity in Lohagara business center",
    ],
  },
  {
    id: "proj-school-market",
    slug: "nahar-school-market",
    title: "Nahar School Market",
    category: "Commercial",
    status: "Ongoing",
    location: "Lohagara, Chattogram",
    stories: "Commercial Market",
    image: "/nahar/projects/nahar-school-market.png",
    featured: false,
    tagline: "Modern commercial development featuring wide shop frontages, dedicated parking, lift, and fire safety",
    description:
      "An ongoing commercial development in Lohagara designed to provide premier retail premises with spacious shop frontages, customer elevator, and structured parking.",
    verifiedDetails: [
      "Modern commercial market layout optimized for high customer footfall",
      "Wide storefronts, dedicated customer parking, and high-capacity lift",
      "Full safety compliance including automated fire protection",
      "High commercial viability in a rapidly expanding commercial hub",
    ],
  },
];
