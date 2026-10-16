import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  MapPin,
  QrCode,
  RotateCcw,
  Receipt,
  History,
  Headphones,
  Leaf,
  ShieldCheck,
  Building,
  CheckCircle2,
  ArrowRight,
  Compass,
  Camera,
  Bell,
  Wifi,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us · Charge Ghar Rental",
  description:
    "Learn about Charge Ghar Rental, a portable power bank sharing service operating in Nepal. Discover our mission, sustainability goals, station network, and partnerships across Nepal.",
};

export default function AboutPage() {
  const features = [
    {
      icon: MapPin,
      title: "Station Locator",
      desc: "View participating stations near you on the live interactive map, including their exact location details and real-time power bank availability.",
    },
    {
      icon: QrCode,
      title: "Instant QR Rental",
      desc: "Rent a power bank within seconds simply by scanning the station QR code through the Charge Ghar Rental app.",
    },
    {
      icon: RotateCcw,
      title: "Return at Any Station",
      desc: "Network flexibility — return the power bank to any participating Charge Ghar station across the network, not just where you rented it.",
    },
    {
      icon: Receipt,
      title: "Transparent Pricing",
      desc: "Clear rental rates and applicable security deposits are shown in the app before you confirm a rental. No hidden fees or recurring subscriptions.",
    },
    {
      icon: History,
      title: "Rental & Payment History",
      desc: "Access your complete history of past rentals, digital payment records, wallet deductions, and receipts anytime inside your account.",
    },
    {
      icon: Headphones,
      title: "24/7 Rental Support",
      desc: "Immediate help for active rentals and queries via in-app reporting, email, or telephone hotline across Nepal.",
    },
  ];

  const permissions = [
    {
      icon: Compass,
      name: "Location Permission",
      purpose: "Used to show nearby charging stations and assist with pickup and return verification. Only accessed while using the app or during an active rental.",
    },
    {
      icon: Camera,
      name: "Camera Permission",
      purpose: "Used solely to scan QR codes on Charge Ghar stations. No photos, videos, or personal media are ever captured, saved, or uploaded.",
    },
    {
      icon: Bell,
      name: "Notifications",
      purpose: "Used to send critical rental status updates, return reminders, overtime warnings, and payment receipts so you never incur unnecessary fees.",
    },
    {
      icon: Wifi,
      name: "Internet Access",
      purpose: "Used to communicate securely with our encrypted servers to release power banks, verify slot returns, and process digital wallet transactions.",
    },
  ];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00e599] text-xs font-semibold">
          <Zap className="w-3.5 h-3.5" />
          <span>Nepal&apos;s Shared Power Bank Network</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Powering Nepal, <span className="text-gradient-primary">Everywhere You Go</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          <strong>Charge Ghar Rental</strong> is the official mobile application of a power bank sharing service operating in Nepal. The app lets you find nearby charging stations, rent a portable power bank, and return it at any participating station in the network.
        </p>
      </div>

      {/* How it Works Cards */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">How Charge Ghar Works</h2>
          <p className="text-gray-400 text-sm mt-1">Four simple steps to rent and return on the go</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Locate Station",
              desc: "Open the Charge Ghar app and view nearby participating stations with real-time available slots.",
            },
            {
              step: "02",
              title: "Scan Station QR",
              desc: "Scan the QR code on the kiosk. A fully charged power bank automatically pops out.",
            },
            {
              step: "03",
              title: "Charge On-the-Go",
              desc: "Take the power bank with you. Built-in Type-C, Lightning, and Micro-USB cables fit every device.",
            },
            {
              step: "04",
              title: "Return Anywhere",
              desc: "Push it into any open slot at any Charge Ghar station. LED turns green, and rental finishes.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden"
            >
              <span className="text-4xl font-extrabold text-white/5 absolute top-3 right-4 select-none">
                {item.step}
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#00e599] font-bold text-xs flex items-center justify-center mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="glass-card rounded-2xl p-8 border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#00e599]" />
            <span>Our Mission</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            To provide convenient, reliable, and affordable access to mobile charging for everyone in Nepal, while encouraging the shared use of electronic devices instead of unnecessary individual hardware ownership.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent">
          <h2 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-400" />
            <span>Our Vision</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            A digitally empowered Nepal where high-speed mobile charging is effortlessly accessible in everyday places — from Kathmandu to communities across every province in Nepal.
          </p>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="glass-card rounded-2xl p-8 sm:p-10 border border-emerald-500/30 mb-20 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Leaf className="w-4 h-4" />
              <span>Environmental Sustainability</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Reducing Electronic Waste Through Shared Resources
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Shared power banks serve hundreds of individual users throughout their lifecycle instead of sitting idle in a drawer. By promoting an on-demand shared economy, Charge Ghar directly reduces the production, consumption, and premature disposal of lithium-ion batteries in Nepal.
            </p>
          </div>
          <div className="w-32 h-32 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <Leaf className="w-16 h-16 text-[#00e599]" />
          </div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Designed For Everyday Convenience</h2>
          <p className="text-gray-400 text-sm mt-1">Built to provide seamless, secure charging whenever you are on the move</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00e599] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Community & Partnerships */}
      <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Partner Ecosystem</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Hosting Stations at Public Locations in Nepal
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              We collaborate with local businesses and venues — including cafés, restaurants, shopping malls, transit hubs, hospitals, and entertainment centres — to host automated kiosks in accessible public locations.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Cafés & Bakeries", "Shopping Malls", "Transit Stations", "Hospitals & Clinics", "Colleges & Hubs"].map(
                (venue) => (
                  <span
                    key={venue}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                  >
                    {venue}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center space-y-3">
            <h3 className="font-bold text-white text-base">Want to Host a Station?</h3>
            <p className="text-xs text-gray-400">
              Boost foot traffic and delight your guests with automated charging amenities.
            </p>
            <Link
              href="/contact?subject=Partnership%20Inquiry"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00e599] text-black font-bold text-xs hover:bg-[#00c784] transition-all"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* App Permissions Transparency */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">App Permissions Explained</h2>
          <p className="text-gray-400 text-sm mt-1">
            We believe in total privacy. Here is why our app asks for specific permissions:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {permissions.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.name} className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[#00e599] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">{p.name}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{p.purpose}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Corporate Registration & Contact Card */}
      <div className="glass-card rounded-2xl p-8 border border-white/10 bg-[#0a0f1d] text-center space-y-4">
        <h2 className="text-xl font-bold text-white">Company Information</h2>
        <p className="text-sm text-gray-300 max-w-xl mx-auto">
          <strong>Charge Ghar Pvt. Ltd.</strong> is a legally registered technology company in Nepal.
        </p>
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-gray-400 pt-2">
          <span>Company Reg. No.: <strong className="text-white">36949/81/82</strong></span>
          <span>PAN: <strong className="text-white">622388100</strong></span>
          <span>Head Office: <strong className="text-white">Tokha, Kathmandu, Nepal</strong></span>
          <span>Helpline: <strong className="text-white">+977-9857860060</strong></span>
        </div>
      </div>
    </div>
  );
}
