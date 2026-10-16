import Link from "next/link";
import { Zap, ShieldCheck, Mail, Phone, MapPin, ExternalLink, ShieldAlert, FileText, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06080d] text-gray-400">
      {/* Top Banner - Google Play Policy Statement */}
      <div className="border-b border-white/5 bg-[#0a0f1d]/60 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-gray-300">
            <ShieldCheck className="w-4 h-4 text-[#00e599] shrink-0" />
            <span>
              <strong className="text-white">Google Play Data Safety & User Rights Compliance:</strong> Dedicated web portal for account and personal data deletion requests under Play Store guidelines.
            </span>
          </div>
          <Link
            href="/delete-account"
            className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold underline underline-offset-4"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Request Account & Data Deletion</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5">
                <div className="w-full h-full bg-[#080b11] rounded-[10px] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#00e599]" />
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-white">Charge Ghar Rental</span>
                <p className="text-xs text-[#00e599]">Power Bank Sharing Network</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Charge Ghar is a portable power bank sharing service operating in Nepal. Rent on the go, charge your device, and return to any participating station across Nepal.
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1 bg-white/5 p-3.5 rounded-xl border border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Company:</span>
                <span className="text-white font-medium">Charge Ghar Pvt. Ltd.</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Company Reg. No.:</span>
                <span className="text-white font-medium">36949/81/82</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">PAN:</span>
                <span className="text-white font-medium">622388100</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Location:</span>
                <span className="text-white font-medium">Tokha, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#00e599] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00e599] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rental-policy" className="hover:text-[#00e599] transition-colors">
                  Rental Policy & Fees
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00e599] transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#00e599] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Legal & Compliance</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-[#00e599] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-gray-400" />
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#00e599] transition-colors flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-gray-400" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/rental-policy" className="hover:text-[#00e599] transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-gray-400" />
                  <span>Rental Agreement</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="text-red-400 hover:text-red-300 transition-colors font-medium flex items-center gap-1.5"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Delete Account (Play Store)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Official Contacts</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00e599] shrink-0 mt-0.5" />
                <span>Tokha, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00e599] shrink-0" />
                <a href="tel:+9779857860060" className="hover:text-white transition-colors">
                  +977-9857860060
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00e599] shrink-0" />
                <a href="mailto:support@chargeghar.app" className="hover:text-white transition-colors">
                  support@chargeghar.app
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:privacy@chargeghar.app" className="hover:text-white transition-colors">
                  privacy@chargeghar.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Charge Ghar Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy Act, 2075 (Nepal)
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Governing Law of Nepal
            </Link>
            <Link href="/delete-account" className="text-red-400 hover:text-red-300">
              Account Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
