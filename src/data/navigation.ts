export interface SubNavItem {
  name: string;
  href: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href: string;
  dropdown?: SubNavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Company Overview", href: "/about" },
      { name: "Mission & Philosophy", href: "/about#mission" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "All Services", href: "/services" },
      { name: "Machinery & Equipment", href: "/equipment" },
    ],
  },
  {
    name: "Projects",
    href: "/projects",
    dropdown: [
      { name: "All Projects Portfolio", href: "/projects" },
      { name: "Nahar Specialized Hospital", href: "/hospital" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export const OFFICIAL_CONTACT = {
  companyName: "Nahar Builders",
  websiteUrl: "https://www.naharbuilders.com/",
  phone: "+880 1811 44 77 52",
  phoneRaw: "+8801811447752",
  phonePrimary: "+880 1811 44 77 52",
  phoneSecondary: "+880 1977 46 48 53",
  email: "info@naharbuilders.com",
  emailGeneral: "info@naharbuilders.com",
  emailAlternate: "engrjony@gmail.com",
  address: "Head Office: Nahar Square (1st Floor), Holding No. 6/6, Arakan Road, Bahaddarhat, Chattogram, Bangladesh",
  shortAddress: "Nahar Square (1st Floor), Bahaddarhat, Chattogram",
  googleMapsUrl: "https://maps.google.com/?q=Nahar+Square+Bahaddarhat+Chattogram",
  workingHours: "Saturday – Thursday: 9:00 AM – 7:00 PM",
};
