import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#080b11",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "Charge Ghar Rental · Portable Power Bank Sharing Network in Nepal",
    template: "%s | Charge Ghar Rental",
  },
  description:
    "Charge Ghar Rental is an automated portable power bank sharing service in Nepal. Find stations in Kathmandu and beyond, scan QR to rent, charge on the go, and return at any station.",
  keywords: [
    "Charge Ghar",
    "Charge Ghar Rental",
    "Power bank sharing Nepal",
    "Rent portable charger Kathmandu",
    "Mobile charging station Nepal",
    "Charge Ghar Pvt Ltd",
    "Account Deletion Charge Ghar",
    "Charge Ghar Privacy Policy",
    "Charge Ghar Terms",
  ],
  authors: [{ name: "Charge Ghar Pvt. Ltd." }],
  creator: "Charge Ghar Pvt. Ltd.",
  publisher: "Charge Ghar Pvt. Ltd.",
  metadataBase: new URL("https://chargeghar.app"),
  openGraph: {
    title: "Charge Ghar Rental · Portable Power Bank Sharing Network in Nepal",
    description:
      "Never run out of battery in Nepal. Rent portable power banks with built-in cables across Kathmandu and return at any participating station.",
    url: "https://chargeghar.app",
    siteName: "Charge Ghar Rental",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#080b11] text-[#f3f4f6] min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
