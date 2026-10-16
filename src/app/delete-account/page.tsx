"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  Smartphone,
  Globe,
  Trash2,
  FileCheck2,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Info,
  ArrowRight,
  Send,
  Loader2,
  HelpCircle,
  Mail,
  Building2,
  Check,
} from "lucide-react";

export default function DeleteAccountPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    reason: "",
    confirmedNoActiveRental: false,
    confirmedDataRetention: false,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    ticketId?: string;
    message?: string;
    instructions?: string;
    error?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/delete-account", {
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
          message: data.message,
          instructions: data.instructions,
        });
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          reason: "",
          confirmedNoActiveRental: false,
          confirmedDataRetention: false,
        });
      }
    } catch {
      setResult({
        success: false,
        error: "Network error. Please try again or email privacy@chargeghar.app directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Google Play Compliance Top Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold mb-6">
        <ShieldAlert className="w-4 h-4" />
        <span>Official Google Play Data Safety &amp; Account Deletion Portal</span>
      </div>

      {/* Main Title & Overview */}
      <div className="space-y-4 mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Request Account &amp; Personal Data Deletion
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
          At <strong className="text-white">Charge Ghar Rental</strong> (operated by <strong className="text-white">Charge Ghar Pvt. Ltd.</strong>), we respect your right to privacy and total control over your personal data. In full compliance with Google Play Store User Data policies and the Privacy Act, 2075 (2018) of Nepal, this page provides complete instructions and an automated web form to request the permanent deletion of your account and associated records.
        </p>

        {/* Developer Identification Box */}
        <div className="bg-[#0f172a]/70 rounded-xl p-4 border border-white/10 text-xs text-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div>
            <span className="text-gray-400 block">App Name:</span>
            <span className="text-white font-medium">Charge Ghar Rental</span>
          </div>
          <div>
            <span className="text-gray-400 block">Developer / Company:</span>
            <span className="text-white font-medium">Charge Ghar Pvt. Ltd.</span>
          </div>
          <div>
            <span className="text-gray-400 block">Registration &amp; PAN:</span>
            <span className="text-white font-medium">Reg: 36949/81/82 · PAN: 622388100</span>
          </div>
          <div>
            <span className="text-gray-400 block">Jurisdiction:</span>
            <span className="text-white font-medium">Tokha, Kathmandu, Nepal</span>
          </div>
        </div>
      </div>

      {/* Important Notice Callout */}
      <div className="mb-10 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 sm:p-6 text-amber-200 text-sm">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h2 className="text-base font-bold text-amber-300">Important Prerequisites Before Submitting</h2>
            <ul className="list-disc list-inside space-y-1 text-amber-200/90 text-xs sm:text-sm">
              <li>
                <strong>No Active Rentals:</strong> You must return any currently rented power bank to any Charge Ghar station slot and verify that the LED turns green before requesting account deletion.
              </li>
              <li>
                <strong>Settle Wallet Balance &amp; Charges:</strong> Any unpaid overdue charges, penalties, or pending wallet balance must be cleared prior to final account closure.
              </li>
              <li>
                <strong>Action is Permanent:</strong> Deleting your account will immediately revoke access to your rental history, promotional rewards, and saved settings.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Two Methods Section: In-App vs Web Portal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Method 1: In-App */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00e599] mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00e599]">Method 1</span>
            <h2 className="text-xl font-bold text-white mt-1 mb-3">Delete Directly Inside the App</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              If you have the Charge Ghar Rental app installed on your smartphone, you can trigger instant account deletion inside the application:
            </p>
            <ol className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-white">
                  1
                </span>
                <span>Open the <strong>Charge Ghar Rental</strong> app</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-white">
                  2
                </span>
                <span>Navigate to <strong>Settings</strong> (gear icon)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-white">
                  3
                </span>
                <span>Select <strong>Account</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-white">
                  4
                </span>
                <span>Tap <strong className="text-red-400">Delete Account</strong></span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-white">
                  5
                </span>
                <span>Review summary and confirm with your verification code</span>
              </li>
            </ol>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5 text-xs text-gray-400">
            Direct in-app verification method with OTP confirmation.
          </div>
        </div>

        {/* Method 2: Web Form */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">Method 2 (Google Play Web Requirement)</span>
            <h2 className="text-xl font-bold text-white mt-1 mb-3">Submit Web Deletion Request</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              If you have uninstalled the app or prefer to request deletion via the web, you can submit the official form below. Our data privacy team verifies your details and begins deletion from active systems.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Response time: Acknowledged within 72 business hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00e599] shrink-0" />
                <span>Purged from active databases within 30 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Alternative email: <strong>privacy@chargeghar.app</strong></span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/5">
            <a
              href="#form"
              className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300"
            >
              <span>Jump to Web Request Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Comprehensive Data Breakdown: What is Deleted vs Retained */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <FileCheck2 className="w-6 h-6 text-[#00e599]" />
          <span>Data Handling Transparency: Deletion vs. Retention</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What is Deleted */}
          <div className="glass-card rounded-2xl p-6 border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent">
            <div className="flex items-center gap-2.5 text-emerald-400 mb-4">
              <Trash2 className="w-5 h-5" />
              <h3 className="font-bold text-base text-white">Data Permanently Deleted (Within 30 Days)</h3>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Personal Profile Details:</strong> Your full name, registered mobile phone number, and email address.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Authentication &amp; Sessions:</strong> Login tokens, device identifiers, session cookies, and push notification tokens.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Location Coordinates:</strong> Precise GPS coordinates captured during station pickup and return operations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>User Preferences:</strong> In-app settings, map filters, notification preferences, and saved stations.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Support Communications:</strong> In-app support tickets and chat transcripts (anonymized upon closure).
                </span>
              </li>
            </ul>
          </div>

          {/* What is Retained and Why */}
          <div className="glass-card rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2.5 text-amber-400 mb-4">
              <Info className="w-5 h-5" />
              <h3 className="font-bold text-base text-white">Data Retained &amp; Legal Statutory Justification</h3>
            </div>
            <p className="text-xs text-gray-400 mb-3">
              In accordance with Section 7 &amp; 9 of our Privacy Policy and applicable Nepalese law, certain limited records cannot be immediately erased:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2"></span>
                <span>
                  <strong>Financial &amp; Invoicing Records:</strong> Transaction logs, wallet deductions, receipts, and payment references are retained for <strong>up to 7 years</strong> to comply with mandatory tax, VAT, and audit regulations under the laws of Nepal (Income Tax Act 2058 / Value Added Tax Act 2052).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2"></span>
                <span>
                  <strong>Fraud &amp; Theft Prevention:</strong> Records regarding overdue non-returned hardware or disputed penalties are retained as strictly required to resolve active legal claims or protect station infrastructure.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2"></span>
                <span>
                  <strong>Statutory Protection:</strong> Charge Ghar never stores raw credit/debit card numbers or eSewa/Khalti banking PINs. All payments are handled by certified external payment institutions in Nepal.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Official Interactive Web Deletion Form */}
      <div id="form" className="scroll-mt-24 glass-card rounded-2xl p-6 sm:p-10 border border-red-500/30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 mb-2">
              <Trash2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Account Deletion Request Form</h2>
            <p className="text-sm text-gray-400">
              Fill out this form to submit your formal account and data deletion request directly to the Charge Ghar privacy team.
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
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Request Successfully Registered</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                    {result.message}
                  </p>
                  <div className="bg-black/30 p-3 rounded-lg border border-emerald-500/20 text-xs font-mono text-emerald-300">
                    Tracking Reference Ticket: <strong>{result.ticketId}</strong>
                  </div>
                  <p className="text-xs text-emerald-300/80">{result.instructions}</p>
                </div>
              ) : (
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{result.error}</span>
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                Full Name (As registered in Charge Ghar) <span className="text-red-400">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Aashish Sharma"
                className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Registered Mobile Phone <span className="text-red-400">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+977 98XXXXXXXX"
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                />
                <span className="text-[11px] text-gray-400 mt-1 block">Used for one-time verification</span>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Email Address for Confirmation <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                />
                <span className="text-[11px] text-gray-400 mt-1 block">To receive your ticket status</span>
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                Reason for Leaving (Optional)
              </label>
              <select
                id="reason"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-white/10 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              >
                <option value="">Select a reason (optional)</option>
                <option value="no_longer_needed">No longer require power bank sharing</option>
                <option value="relocated">Relocated outside station coverage area</option>
                <option value="privacy_preference">General privacy preference</option>
                <option value="created_duplicate">Accidental or duplicate account</option>
                <option value="technical_issue">Technical or device compatibility issue</option>
                <option value="other">Other reason</option>
              </select>
            </div>

            {/* Required Confirmations */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  checked={formData.confirmedNoActiveRental}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmedNoActiveRental: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-[#090d16] text-red-500 focus:ring-red-500 focus:ring-offset-0"
                />
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                  I confirm that I have returned all rented power banks and have no active ongoing rentals or unsettled wallet disputes.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  checked={formData.confirmedDataRetention}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmedDataRetention: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-[#090d16] text-red-500 focus:ring-red-500 focus:ring-offset-0"
                />
                <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors">
                  I understand that my profile and credentials will be deleted within 30 days, while statutory tax and transaction records are held for up to 7 years in accordance with Nepalese law.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/20 hover:shadow-red-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing Request...</span>
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4" />
                  <span>Submit Account Deletion Request</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Direct Contact & Fallback */}
      <div className="mt-12 glass-card rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
          <span>
            Need help or have questions regarding your data? Contact our Data Protection Officer directly at{" "}
            <a href="mailto:privacy@chargeghar.app" className="text-white font-semibold underline">
              privacy@chargeghar.app
            </a>
          </span>
        </div>
        <Link
          href="/privacy"
          className="text-[#00e599] hover:underline flex items-center gap-1 shrink-0 font-medium"
        >
          <span>Read Full Privacy Policy</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
