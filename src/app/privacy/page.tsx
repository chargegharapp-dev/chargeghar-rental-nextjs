import type { Metadata } from "next";
import Link from "next/link";
import { Lock, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, ShieldAlert, EyeOff } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy · Charge Ghar Rental",
  description:
    "Official Privacy Policy of Charge Ghar Rental. Explaining data collection, GPS usage, non-sale of personal data, statutory retention under the Privacy Act 2075 of Nepal, and account deletion rights.",
};

export default function PrivacyPage() {
  const sections = [
    {
      id: "intro",
      num: "1",
      title: "Introduction",
      content: (
        <p>
          Charge Ghar Pvt. Ltd. (&ldquo;Charge Ghar&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the Charge Ghar Rental app (the &ldquo;App&rdquo;), website (chargeghar.app), and stations (the &ldquo;Service&rdquo;). This Privacy Policy explains what personal data we collect, why, how we protect it, how long we keep it, and what rights you have. We are committed to data security and user privacy, and we handle personal data in accordance with applicable law in Nepal, including the <strong>Privacy Act, 2075 (2018)</strong>. By using the Service, you acknowledge this Policy.
        </p>
      ),
    },
    {
      id: "collect",
      num: "2",
      title: "Information We Collect",
      content: (
        <div className="space-y-3">
          <p>
            <strong>2.1 Information you provide:</strong> When you create an account, we collect your name and mobile phone number. If you contact support, we collect the content of your communication.
          </p>
          <p>
            <strong>2.2 Location data:</strong> Precise GPS location is accessed only with your express permission and only while the App is actively in use or during an active ongoing rental, specifically to show nearby stations and record pickup and return points.
          </p>
          <p>
            <strong>2.3 Rental and transaction data:</strong> Station and power bank serial identifiers, rental durations, charges, security deposits, wallet balance history, and payment status. We receive payment confirmation tokens from authorized payment gateways, but <em>we do not collect, view, or store payment card numbers, bank PINs, or wallet credentials</em>.
          </p>
          <p>
            <strong>2.4 Device and technical data:</strong> Device model, operating system, app version, security push tokens, and diagnostic crash logs.
          </p>
          <p>
            <strong>2.5 Camera:</strong> Used strictly to scan station QR codes in real time. <em>No photos or video are ever captured, stored, or transmitted.</em>
          </p>
          <p>
            <strong>2.6 Anonymous preview:</strong> You can open the app and view nearby stations on the map without logging in or providing your personal details.
          </p>
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs text-gray-300">
            <strong className="text-white block mb-1">What We NEVER Collect:</strong>
            We do not collect government ID documents, contact books, SMS logs, private photos, microphone audio, or third-party advertising identifiers.
          </div>
        </div>
      ),
    },
    {
      id: "use",
      num: "3",
      title: "How We Use Your Information",
      content: (
        <div className="space-y-2">
          <p>We use your data exclusively for operational service needs:</p>
          <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-1">
            <li>To create, verify, and authenticate your user account.</li>
            <li>To show nearby kiosks, unlock hardware, track returns, and calculate wallet deductions.</li>
            <li>To send critical in-app alerts regarding rental status, reminders, and payment receipts.</li>
            <li>To deliver responsive customer support and investigate technical faults.</li>
            <li>To detect and prevent hardware theft, fraud, and Terms violations.</li>
            <li>To comply with regulatory and accounting obligations under the laws of Nepal.</li>
          </ul>
          <p className="pt-2 text-xs text-emerald-400 font-medium">
            We do not use your data for commercial advertising, marketing profiling, or automated legal decision-making.
          </p>
        </div>
      ),
    },
    {
      id: "permissions",
      num: "4",
      title: "Permissions",
      content: (
        <div className="space-y-2">
          <p>
            <strong>Location:</strong> Used for showing nearby stations and active rental route pickup/return verification. (Optional: you can search manually).
          </p>
          <p>
            <strong>Notifications:</strong> Rental alerts, return reminders, and invoices. (Optional: can be disabled in OS settings).
          </p>
          <p>
            <strong>Camera:</strong> QR code scanning only. (Optional: required to scan kiosk code).
          </p>
          <p className="text-xs text-gray-400 pt-1">
            Permissions can be granted or revoked at any time in your device&apos;s OS settings.
          </p>
        </div>
      ),
    },
    {
      id: "sharing",
      num: "5",
      title: "No Sale or Sharing of Personal Data",
      content: (
        <div className="space-y-3">
          <p>
            We do <strong>not</strong> sell, rent, monetize, or trade your personal data with any third party for marketing purposes. We do not integrate third-party ad networks or tracking trackers.
          </p>
          <p>Data is shared only in the following strictly limited operational scenarios:</p>
          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-1">
            <li>
              <strong>Licensed Payment Gateways:</strong> Digital wallet providers in Nepal (eSewa, Khalti, etc.) receive only transaction IDs and amounts necessary to complete wallet top-ups.
            </li>
            <li>
              <strong>Station Hosts:</strong> Venue partners (cafés, shops) receive aggregate statistics only; they never see your name, phone number, or personal details.
            </li>
            <li>
              <strong>Legal Authorities:</strong> Where compelled by valid legal process or court order under the laws of Nepal, or to investigate hardware theft or criminal damage.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "security",
      num: "6",
      title: "Security",
      content: (
        <p>
          We employ industry-standard encryption protocols (TLS/HTTPS in transit and AES encryption at rest), strict role-based access restrictions, and regular vulnerability audits to protect your data against unauthorized access, loss, or alteration.
        </p>
      ),
    },
    {
      id: "retention",
      num: "7",
      title: "Data Retention",
      content: (
        <div className="space-y-3">
          <p>
            <strong>Active Account Data:</strong> Maintained for as long as your account remains open. Upon account deletion, personal identifiers are purged within 30 days.
          </p>
          <p>
            <strong>Tax &amp; Accounting Compliance (7 Years):</strong> Rental transactions, invoices, wallet statements, and deposit logs are retained for <strong>up to 7 years</strong> in mandatory compliance with Nepal&apos;s financial, taxation, and auditing statutes.
          </p>
          <p>
            <strong>Location Coordinates:</strong> Retained only as necessary to resolve active rental disputes and subsequently anonymized or removed.
          </p>
        </div>
      ),
    },
    {
      id: "rights",
      num: "8",
      title: "Your Rights and Account Deletion",
      content: (
        <div className="space-y-3">
          <p>
            Under the Privacy Act, 2075 of Nepal and Google Play Store policies, you have the right to access, rectify, restrict, obtain a copy of, or permanently delete your personal information.
          </p>
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs sm:text-sm text-red-200 space-y-2">
            <strong className="text-white block font-bold">How to Request Account &amp; Data Deletion:</strong>
            <p>
              1. <strong>In the App:</strong> Go to <strong>Settings → Account → Delete Account</strong>.
            </p>
            <p>
              2. <strong>Dedicated Web Portal:</strong> Submit the request form at{" "}
              <Link href="/delete-account" className="text-white font-bold underline">
                chargeghar.app/delete-account
              </Link>
              .
            </p>
            <p>
              3. <strong>Email:</strong> Send a formal request to <strong>privacy@chargeghar.app</strong> from your registered email stating your phone number.
            </p>
          </div>
          <p className="text-xs text-gray-400">
            Any active rentals must be returned and unpaid balances settled before deletion. Active database records are purged within 30 days.
          </p>
        </div>
      ),
    },
    {
      id: "children",
      num: "9",
      title: "Children&apos;s Privacy",
      content: (
        <p>
          The Service is strictly intended for individuals aged 18 and older. We do not knowingly collect personal data from minors. If you believe a minor has registered an account, notify <strong>privacy@chargeghar.app</strong> and we will promptly erase the profile.
        </p>
      ),
    },
    {
      id: "international",
      num: "10",
      title: "International Processing",
      content: (
        <p>
          We store data on secure cloud infrastructure adhering to international data protection standards. If data is processed outside Nepal, we ensure it remains safeguarded by strict contractual safeguards consistent with this Policy.
        </p>
      ),
    },
    {
      id: "changes",
      num: "11",
      title: "Changes to This Policy",
      content: (
        <p>
          We may update this Policy periodically. Material updates will be announced via in-app notices and on chargeghar.app. Continued use after the effective date constitutes acceptance.
        </p>
      ),
    },
    {
      id: "rental-data",
      num: "12",
      title: "Rental Policy and Rental Data",
      content: (
        <p>
          The{" "}
          <Link href="/rental-policy" className="text-[#00e599] underline">
            Charge Ghar Rental Policy
          </Link>{" "}
          forms an integral part of this Policy. It governs rental release timers, deposits, overdue penalties, and returning procedures.
        </p>
      ),
    },
    {
      id: "contact",
      num: "13",
      title: "Contact Information",
      content: (
        <div className="bg-[#0b101c] p-4 rounded-xl border border-white/5 space-y-2 text-xs sm:text-sm text-gray-300">
          <p>
            <strong>Charge Ghar Pvt. Ltd.</strong> (Reg. No. 36949/81/82 · PAN 622388100)
          </p>
          <p>Tokha, Kathmandu, Nepal</p>
          <p>
            Privacy Officer: <strong>privacy@chargeghar.app</strong> · General Support: <strong>support@chargeghar.app</strong>
          </p>
          <p>
            Phone: <strong>+977-9857860060</strong> · Website: <strong>chargeghar.app</strong>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title & Metadata */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00e599] text-xs font-semibold">
          <Lock className="w-3.5 h-3.5" />
          <span>Privacy Act, 2075 (Nepal) Compliant · Effective Oct 16, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Charge Ghar Rental Privacy Policy
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Charge Ghar Pvt. Ltd. · Registration No. 36949/81/82 · PAN 622388100 · Tokha, Kathmandu, Nepal · contact@chargeghar.app
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {[
          { title: "No Ad Tracking", desc: "Zero third-party advertising SDKs" },
          { title: "No Data Selling", desc: "Never sold, rented or commercialized" },
          { title: "Full Encryption", desc: "HTTPS / TLS & AES-256 at rest" },
          { title: "Right to Delete", desc: "In-app & web account deletion" },
        ].map((b) => (
          <div key={b.title} className="glass-card rounded-xl p-4 border border-white/5 text-center">
            <span className="text-[#00e599] font-bold text-xs sm:text-sm block mb-1">{b.title}</span>
            <span className="text-[11px] text-gray-400 block">{b.desc}</span>
          </div>
        ))}
      </div>

      {/* Quick Navigation Links */}
      <div className="glass-card rounded-2xl p-5 border border-white/10 mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Policy Index:</h2>
        <div className="flex flex-wrap gap-2 text-xs">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#00e599]/10 hover:text-[#00e599] border border-white/5 text-gray-300 transition-colors"
            >
              {s.num}. {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-8">
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-24 glass-card rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#00e599] font-mono">{s.num}.</span>
              <span>{s.title}</span>
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300 leading-relaxed">{s.content}</div>
          </section>
        ))}
      </div>

      {/* Account Deletion Footer Notice */}
      <div className="mt-12 p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-red-400 shrink-0" />
          <p className="text-xs sm:text-sm text-red-200">
            Ready to delete your account or personal data? Access our official self-service web deletion portal.
          </p>
        </div>
        <Link
          href="/delete-account"
          className="px-4 py-2 rounded-xl bg-red-500 text-white font-bold text-xs hover:bg-red-600 transition-colors shrink-0"
        >
          Account Deletion Portal
        </Link>
      </div>
    </div>
  );
}
