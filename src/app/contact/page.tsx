"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Headphones,
  ShieldAlert,
  Building,
  HelpCircle,
} from "lucide-react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "Rental Issue";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: initialSubject,
    message: "",
  });

  useEffect(() => {
    const s = searchParams.get("subject");
    if (s) {
      setFormData((prev) => ({ ...prev, subject: s }));
    }
  }, [searchParams]);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    ticketId?: string;
    message?: string;
    sla?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setResult({ success: false, error: data.error || "Submission failed" });
      } else {
        setResult({
          success: true,
          ticketId: data.ticketId,
          sla: data.sla,
          message: data.message,
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "Rental Issue",
          message: "",
        });
      }
    } catch {
      setResult({
        success: false,
        error: "Network error submitting inquiry. Please email support@chargeghar.app directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title & Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00e599] text-xs font-semibold">
          <Headphones className="w-3.5 h-3.5" />
          <span>24/7 Active Rental Emergency Support</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get in Touch with <span className="text-gradient-primary">Charge Ghar</span>
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Have a question about a rental station, payment, or corporate partnership? We are here to support you around the clock across Kathmandu and Nepal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info & Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Support Directory */}
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#00e599]" />
              <span>Contact Channels</span>
            </h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-gray-400 block text-[11px] uppercase font-bold tracking-wider">
                  General &amp; Rental Support
                </span>
                <a
                  href="mailto:support@chargeghar.app"
                  className="text-white hover:text-[#00e599] font-medium transition-colors block"
                >
                  support@chargeghar.app
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-gray-400 block text-[11px] uppercase font-bold tracking-wider">
                  Privacy &amp; Data Requests (Google Play)
                </span>
                <a
                  href="mailto:privacy@chargeghar.app"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors block"
                >
                  privacy@chargeghar.app
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-gray-400 block text-[11px] uppercase font-bold tracking-wider">
                  Legal &amp; Regulatory Compliance
                </span>
                <a
                  href="mailto:legal@chargeghar.app"
                  className="text-white hover:text-[#00e599] font-medium transition-colors block"
                >
                  legal@chargeghar.app
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-gray-400 block text-[11px] uppercase font-bold tracking-wider">
                  Hotline &amp; Telephone
                </span>
                <a
                  href="tel:+9779857860060"
                  className="text-white hover:text-[#00e599] font-semibold transition-colors block"
                >
                  +977-9857860060
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <span className="text-gray-400 block text-[11px] uppercase font-bold tracking-wider">
                  Head Office
                </span>
                <p className="text-white">Charge Ghar Pvt. Ltd., Tokha, Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* SLA Promises */}
          <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#00e599]" />
              <span>Standard Response Times</span>
            </h3>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="font-semibold text-white">Active Rental Emergency</span>
                <span className="text-[#00e599] font-bold">Within 2 Hours (24/7)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5">
                <span className="text-gray-300">General Inquiries</span>
                <span className="text-gray-200">Within 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Account Deletion Quick Box */}
          <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs space-y-2">
            <div className="flex items-center gap-2 text-red-400 font-bold">
              <ShieldAlert className="w-4 h-4" />
              <span>Need to Delete Your Account?</span>
            </div>
            <p className="text-red-200/90 leading-relaxed">
              If you are looking to permanently erase your profile and records as required under Google Play rules, you can use our self-service portal directly:
            </p>
            <Link
              href="/delete-account"
              className="inline-flex items-center gap-1 font-bold text-red-400 hover:underline pt-1"
            >
              <span>Open Account Deletion Portal →</span>
            </Link>
          </div>
        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/10">
            <div className="space-y-2 mb-8">
              <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
              <p className="text-xs sm:text-sm text-gray-400">
                Complete the fields below and our support coordinators will follow up promptly.
              </p>
            </div>

            {result && (
              <div
                className={`p-5 rounded-xl mb-6 text-sm ${
                  result.success
                    ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-200"
                    : "bg-red-500/10 border border-red-500/30 text-red-200"
                }`}
              >
                {result.success ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-300 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Support Ticket Created: {result.ticketId}</span>
                    </div>
                    <p className="text-xs text-emerald-200/90">{result.message}</p>
                    <span className="text-[11px] block text-emerald-400/90 font-mono">
                      Expected Response: {result.sla}
                    </span>
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{result.error}</span>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contactFullName"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                >
                  Full Name <span className="text-[#00e599]">*</span>
                </label>
                <input
                  id="contactFullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Aashish Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00e599] focus:ring-1 focus:ring-[#00e599] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contactEmail"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Email Address <span className="text-[#00e599]">*</span>
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00e599] focus:ring-1 focus:ring-[#00e599] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactPhone"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    id="contactPhone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+977 98XXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00e599] focus:ring-1 focus:ring-[#00e599] transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contactSubject"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                >
                  Subject / Topic <span className="text-[#00e599]">*</span>
                </label>
                <select
                  id="contactSubject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00e599] focus:ring-1 focus:ring-[#00e599] transition-all"
                >
                  <option value="Rental Issue">Rental Issue (Station release, lock, return)</option>
                  <option value="Billing & Payments">Billing &amp; Payments (Wallet top-up, security deposit)</option>
                  <option value="Account & Login">Account &amp; Login (OTP, profile update)</option>
                  <option value="Technical Problem">Technical Problem (App crash, map error)</option>
                  <option value="Privacy / Data Request">Privacy / Data Request (Data export, inquiries)</option>
                  <option value="Account Deletion Request">Account Deletion Request</option>
                  <option value="Partnership Inquiry">Partnership Inquiry (Host a charging kiosk)</option>
                  <option value="General Feedback">General Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contactMessage"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5"
                >
                  Detailed Message <span className="text-[#00e599]">*</span>
                </label>
                <textarea
                  id="contactMessage"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your rental station location, time, or question in detail..."
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00e599] focus:ring-1 focus:ring-[#00e599] transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-[#00e599] to-teal-400 hover:from-[#00c784] hover:to-teal-500 text-black shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Support Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-400">Loading Contact Portal...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
