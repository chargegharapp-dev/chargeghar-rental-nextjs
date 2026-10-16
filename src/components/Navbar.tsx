"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Zap, Menu, X, ShieldAlert, ArrowUpRight, BatteryCharging } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Rental Policy", href: "/rental-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#080b11] rounded-[10px] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#00e599] transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#00e599] transition-colors">
                  Charge Ghar
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-[#00e599] border border-emerald-500/30">
                  Rental
                </span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">Power Bank Sharing · Nepal</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-[#00e599] bg-emerald-500/10 border border-emerald-500/20"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs: Delete Account & Download App */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/delete-account"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold tracking-wide border transition-all duration-200 ${
                pathname === "/delete-account"
                  ? "bg-red-500/15 text-red-400 border-red-500/40"
                  : "bg-red-500/5 text-red-400/90 border-red-500/20 hover:bg-red-500/15 hover:border-red-500/40"
              }`}
              title="Official Google Play Account & Data Deletion Portal"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
              <span>Delete Account</span>
            </Link>

            <Link
              href="/#download"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#00e599] to-teal-400 text-black hover:opacity-95 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200"
            >
              <BatteryCharging className="w-4 h-4 text-black" />
              <span>Get The App</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/delete-account"
              className="p-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 text-xs flex items-center gap-1"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="sm:hidden border-t border-white/10 bg-[#0b0f19] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? "text-[#00e599] bg-emerald-500/10 border border-emerald-500/20"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-white/10 space-y-2">
            <Link
              href="/delete-account"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20"
            >
              <span className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                Delete Account & Data
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#download"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-bold bg-gradient-to-r from-[#00e599] to-teal-400 text-black text-center"
            >
              <BatteryCharging className="w-4 h-4" />
              Download Charge Ghar App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
