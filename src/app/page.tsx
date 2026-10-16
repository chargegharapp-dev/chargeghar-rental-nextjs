"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  MapPin,
  QrCode,
  RotateCcw,
  BatteryCharging,
  ShieldCheck,
  Smartphone,
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  Cable,
  Flame,
  Award,
  Layers,
  Leaf,
} from "lucide-react";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stations = [
    { name: "Thamel Tourism Hub", city: "Kathmandu", available: 7, returnSlots: 5, status: "High Availability" },
    { name: "Durbar Marg Plaza", city: "Kathmandu", available: 5, returnSlots: 7, status: "Open 24/7" },
    { name: "New Road Digital Mall", city: "Kathmandu", available: 8, returnSlots: 4, status: "Active Kiosk" },
    { name: "Tokha Central Station", city: "Tokha / Ktm", available: 6, returnSlots: 6, status: "Headquarters Kiosk" },
    { name: "Patan Heritage Area", city: "Lalitpur", available: 4, returnSlots: 8, status: "Available" },
    { name: "Tribhuvan Airport (TIA)", city: "Kathmandu", available: 9, returnSlots: 3, status: "Transit Hub" },
  ];

  const faqs = [
    {
      q: "How do I rent a power bank from Charge Ghar?",
      a: "Simply download the Charge Ghar Rental app from the Google Play Store or App Store. Open the app to view nearby kiosks, top up your wallet, and scan the QR code displayed on the station. An illuminated power bank will unlock automatically.",
    },
    {
      q: "Can I return the power bank to a different station?",
      a: "Yes! That is the core benefit of Charge Ghar Rental. You can rent a power bank at one location (e.g., Thamel) and return it into any available slot at any other participating station across Kathmandu or Nepal.",
    },
    {
      q: "What types of charging cables are built into each power bank?",
      a: "Every Charge Ghar power bank comes with three certified built-in high-speed charging cables: Type-C, Lightning (for Apple iPhones), and Micro-USB. You do not need to bring your own cable.",
    },
    {
      q: "How does the refundable security deposit work?",
      a: "A temporary security deposit is held from your wallet when a power bank is released. As soon as you return the hardware into any station slot and the LED illuminates green, the security deposit is automatically refunded to your in-app wallet within 24 hours.",
    },
    {
      q: "How do I request deletion of my account and personal data?",
      a: "In full compliance with Google Play Store User Data & Account Deletion policies, you can delete your account directly inside the app under Settings → Account → Delete Account, or through our dedicated web portal at chargeghar.app/delete-account, or by emailing privacy@chargeghar.app. Active system records are deleted within 30 days.",
    },
    {
      q: "What if a station slot is full when I try to return?",
      a: "Our app shows real-time empty return slots for every kiosk on the map. If a specific station happens to be full, simply check the map for the nearest station with available return slots, or contact our 24/7 active rental helpline at +977-9857860060.",
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00e599] text-xs sm:text-sm font-semibold glow-primary">
            <Zap className="w-4 h-4" />
            <span>Automated Power Bank Sharing Network in Nepal</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Never Run Out of Power. <br className="hidden sm:inline" />
            <span className="text-gradient-primary">Rent Anywhere, Return Anywhere.</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Stay fully charged on the go in Kathmandu and across Nepal. Grab a portable power bank from any automated kiosk, charge your device, and drop it off at any participating station.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#download"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-[#00e599] to-teal-400 hover:from-[#00c784] hover:to-teal-500 text-black shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all transform hover:-translate-y-0.5"
            >
              <BatteryCharging className="w-5 h-5 text-black" />
              <span>Get Charge Ghar App</span>
            </a>

            <Link
              href="/rental-policy"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm sm:text-base glass-card text-white hover:bg-white/10 border border-white/10 transition-all"
            >
              <span>View Rental Policy &amp; Rates</span>
              <ArrowRight className="w-4 h-4 text-[#00e599]" />
            </Link>
          </div>

          {/* Trust Highlights */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e599]" />
              <span>Built-in Triple Cables</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e599]" />
              <span>No Subscription Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00e599]" />
              <span>24/7 Rental Assistance</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Google Play Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (4 Interactive Steps) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00e599]">Seamless Rental Flow</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">How Charge Ghar Rental Works</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Designed for busy commuters, travellers, students, and professionals throughout Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              icon: MapPin,
              title: "Find a Station",
              desc: "Open the Charge Ghar app and view automated kiosks near your location with live battery levels.",
            },
            {
              step: "2",
              icon: QrCode,
              title: "Scan the QR Code",
              desc: "Scan the QR code on the kiosk. A fully charged portable power bank pops out of the slot.",
            },
            {
              step: "3",
              icon: Cable,
              title: "Plug in & Go",
              desc: "Fast charge your phone with built-in USB-C, Lightning, or Micro-USB cables while walking or dining.",
            },
            {
              step: "4",
              icon: RotateCcw,
              title: "Return to Any Slot",
              desc: "Slide the power bank into any open slot at any station in Nepal. LED turns green and rental ends.",
            },
          ].map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.step}
                className="glass-card glass-card-hover rounded-2xl p-7 border border-white/10 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#00e599] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00e599] block mb-1">STEP 0{card.step}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Triple Cable Hardware Spotlight */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-transparent relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                <Cable className="w-3.5 h-3.5" />
                <span>Zero Cable Hassles</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                All Cables Built-In. Compatible With Every Phone.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Forget about tangling cables or carrying heavy adapters. Each Charge Ghar power bank includes three integrated, reinforced charging cables ready to power any phone or tablet:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-[#00e599] font-bold text-sm block">Type-C Fast Charge</span>
                  <span className="text-xs text-gray-400">Android, modern iPhones &amp; tablets</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-cyan-400 font-bold text-sm block">Apple Lightning</span>
                  <span className="text-xs text-gray-400">iPhone 14 and earlier series</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <span className="text-amber-400 font-bold text-sm block">Micro-USB</span>
                  <span className="text-xs text-gray-400">Earbuds, classic devices &amp; e-readers</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl glass-card border border-emerald-500/30 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-[#00e599]/10 text-[#00e599] flex items-center justify-center mx-auto">
                  <BatteryCharging className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">High Capacity 5000mAh</h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Engineered with intelligent overcharge protection, surge suppression, and lightweight ergonomic grip.
                </p>
                <div className="pt-2 text-xs font-mono text-[#00e599] bg-white/5 p-2 rounded-lg">
                  Overcharge &amp; Surge Protected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Station Locator Preview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#00e599] mb-1">
              Live Station Network
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Participating Charging Stations in Nepal</h2>
            <p className="text-gray-400 text-sm mt-1">
              Find kiosks stationed at cafés, shopping hubs, and transit centers in Kathmandu Valley.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#00e599] hover:underline"
          >
            <span>Learn About Our Host Network</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stations.map((st) => (
            <div
              key={st.name}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-[#00e599] border border-emerald-500/20">
                    {st.status}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {st.city}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{st.name}</h3>
              </div>
              <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-2 text-xs">
                <div className="bg-white/5 p-2 rounded-lg">
                  <span className="text-gray-400 block text-[11px]">Power Banks:</span>
                  <span className="text-white font-bold">{st.available} Available</span>
                </div>
                <div className="bg-white/5 p-2 rounded-lg">
                  <span className="text-gray-400 block text-[11px]">Return Slots:</span>
                  <span className="text-white font-bold">{st.returnSlots} Empty</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-emerald-500/20 bg-gradient-to-b from-[#08131d] to-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-4 h-4" />
                <span>Eco-Friendly Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Sharing Power. Reducing E-Waste Across Nepal.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Billions of electronic accessories end up in landfills. By sharing high-grade power banks among thousands of citizens, Charge Ghar extends battery life cycles, cuts individual lithium consumption, and fosters a greener, cleaner Nepal.
              </p>
            </div>
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="text-center p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <Leaf className="w-10 h-10 text-[#00e599] mx-auto mb-2" />
                <p className="text-xs text-gray-300 font-medium">Shared Power Bank Model to Limit E-Waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Play Store Data Compliance & Account Deletion Callout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-red-500/30 bg-gradient-to-br from-red-500/10 via-transparent to-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-semibold">
                <ShieldAlert className="w-4 h-4" />
                <span>Google Play Store Data Safety &amp; User Privacy Compliance</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Complete Control Over Your Personal Data
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                As required by Google Play Store guidelines and the Privacy Act, 2075 of Nepal, Charge Ghar provides transparent account and personal data deletion. You can request deletion directly in the app or submit your request through our dedicated web portal.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  In-App &amp; Web Deletion Forms
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Purged within 30 days
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Privacy Act 2075 Compliant
                </span>
              </div>
            </div>
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <Link
                href="/delete-account"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-600/25 transition-all"
              >
                Account Deletion Portal →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24">
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00e599]">Common Questions</div>
          <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm">Everything you need to know about renting with Charge Ghar</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-white text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00e599] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Download The App CTA Banner */}
      <section id="download" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-emerald-500/30 bg-gradient-to-tr from-emerald-950/40 via-[#0a121c] to-[#080d15] text-center space-y-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-[#00e599] flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Stay Powered Up?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Download the official Charge Ghar Rental app on your smartphone, find your nearest station in seconds, and rent on the go.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-left flex items-center gap-3 w-full sm:w-auto">
              <Smartphone className="w-7 h-7 text-[#00e599]" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Available on</span>
                <span className="text-sm font-bold text-white block">Google Play Store</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-left flex items-center gap-3 w-full sm:w-auto">
              <Smartphone className="w-7 h-7 text-cyan-400" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Available on</span>
                <span className="text-sm font-bold text-white block">Apple App Store</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 pt-2">
            No long term contracts. Pay only for what you use in Nepalese Rupees (NPR).
          </p>
        </div>
      </section>
    </div>
  );
}
