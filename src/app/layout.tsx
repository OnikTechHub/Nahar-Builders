import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nahar Builders | Civil Construction & Real Estate Development | Chattogram",
  description:
    "Official website of Nahar Builders — A premier civil construction and real estate development company in Chattogram, Bangladesh. Specializing in residential towers, commercial structures, and healthcare infrastructure.",
  keywords: [
    "Nahar Builders",
    "Nahar Builders Chattogram",
    "Civil Construction Chattogram",
    "Real Estate Development Bangladesh",
    "Nahar Specialized Hospital",
    "Nakeeb Heights",
    "Hotel Tower Inn",
    "Nahar Square",
  ],
  icons: {
    icon: "/nahar-builders-logo.jpg",
    shortcut: "/nahar-builders-logo.jpg",
    apple: "/nahar-builders-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-red-600 selection:text-white">
        <Navbar />
        <main className="flex-1 bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
