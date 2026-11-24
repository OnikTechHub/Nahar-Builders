import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Nahar's Builders | Building Trust, Engineering Excellence",
  description:
    "Nahar's Builders is a distinguished real estate development and civil engineering firm delivering landmark residential communities, corporate commercial hubs, and timeless architectural spaces.",
  keywords: [
    "Nahar's Builders",
    "Nahar Builders",
    "Real Estate Bangladesh",
    "Luxury Apartments Chattogram",
    "Commercial Real Estate Dhaka",
    "Civil Engineering Construction",
    "Turnkey Construction Solutions",
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
