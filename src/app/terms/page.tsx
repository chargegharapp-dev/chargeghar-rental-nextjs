import type { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText, CheckCircle2, AlertCircle, ArrowRight, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions · Charge Ghar Rental",
  description:
    "Official Terms and Conditions for Charge Ghar Rental mobile application and power bank sharing network in Nepal. Effective Oct 16, 2026.",
};

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      num: "1",
      title: "Acceptance of Terms",
      content: (
        <>
          <p>
            <strong>1.1 Binding Agreement:</strong> These Terms and Conditions (&ldquo;Terms&rdquo;) form a legally binding agreement between you (&ldquo;User&rdquo;) and <strong>Charge Ghar Pvt. Ltd.</strong> (&ldquo;Charge Ghar&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a company duly incorporated and registered under the laws of Nepal, governing your access to and use of the Charge Ghar Rental mobile application (the &ldquo;App&rdquo;), the website (chargeghar.app), automated power bank rental kiosks, and related hardware services (collectively, the &ldquo;Service&rdquo;).
          </p>
          <p>
            <strong>1.2 User Acknowledgment:</strong> By downloading, installing, accessing, or using the Service, or by renting any power bank, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must immediately refrain from using the Service and uninstall the App.
          </p>
        </>
      ),
    },
    {
      id: "eligibility",
      num: "2",
      title: "Eligibility",
      content: (
        <>
          <p>
            <strong>2.1 Age Requirement:</strong> You must be at least 18 years of age, or the age of legal majority under the laws of Nepal, and fully capable of entering into a valid, enforceable contract.
          </p>
          <p>
            <strong>2.2 Lawful Purpose:</strong> You represent and warrant that you will use the Service strictly for lawful personal purposes and in full accordance with these Terms and all applicable Nepalese statutes.
          </p>
        </>
      ),
    },
    {
      id: "accounts",
      num: "3",
      title: "Accounts and Access",
      content: (
        <>
          <p>
            <strong>3.1 Anonymous Preview:</strong> You may open the App and view nearby charging stations, available slots, and service maps without creating an account or logging in.
          </p>
          <p>
            <strong>3.2 Account Registration:</strong> To unlock and rent a power bank, you must register an account by providing your accurate legal name and mobile phone number, which will be verified via a one-time authentication passcode (OTP).
          </p>
          <p>
            <strong>3.3 Account Security:</strong> You are solely responsible for maintaining the confidentiality of your mobile device, login session, and all activities conducted through your account. You agree to notify us immediately at <strong>support@chargeghar.app</strong> upon suspecting any unauthorized access.
          </p>
          <p>
            <strong>3.4 Single Active Account:</strong> Each user is permitted one active personal account. Registering fraudulent, automated, or multiple accounts is strictly prohibited.
          </p>
          <p>
            <strong>3.5 Suspension:</strong> We reserve the right to suspend or terminate any account where we detect reasonable evidence of fraud, equipment tampering, Terms violation, or non-payment.
          </p>
        </>
      ),
    },
    {
      id: "rental-rules",
      num: "4",
      title: "Rental Rules",
      content: (
        <>
          <p>
            <strong>4.1 Official Station Rental:</strong> Power banks may only be rented through the official Charge Ghar Rental App by scanning the station QR code, or via another authorized method made expressly available by us.
          </p>
          <p>
            <strong>4.2 One Device Limit:</strong> Each user may rent only one (1) power bank at any given time.
          </p>
          <p>
            <strong>4.3 Rental Window:</strong> The rental commences immediately upon physical ejection/release of the power bank from the kiosk slot and concludes only when securely returned into any operational Charge Ghar station slot and confirmed digitally in the App.
          </p>
          <p>
            <strong>4.4 Authorized Charging Only:</strong> Power banks must be used exclusively to recharge your personal handheld electronic devices. You must not disassemble, puncture, submerge, alter, reverse engineer, or attempt to recharge non-standard apparatus with the equipment.
          </p>
          <p>
            <strong>4.5 Custody and Non-Transfer:</strong> You retain complete personal custody and responsibility for the rented power bank throughout the rental duration and must not sublease, transfer, or abandon the hardware.
          </p>
          <p>
            <strong>4.6 Safety Precautions:</strong> You must immediately discontinue use of any power bank that exhibits abnormal swelling, smoke, intense heat, or physical damage, and contact our support immediately.
          </p>
          <p>
            <strong>4.7 Incorporation of Rental Policy:</strong> The{" "}
            <Link href="/rental-policy" className="text-[#00e599] underline">
              Charge Ghar Rental Policy
            </Link>{" "}
            forms an integral part of these Terms. In case of any conflict between these Terms and the Rental Policy regarding a rental transaction, the Rental Policy shall prevail.
          </p>
        </>
      ),
    },
    {
      id: "pricing",
      num: "5",
      title: "Pricing, Payments, and Billing",
      content: (
        <>
          <p>
            <strong>5.1 In-App Price Transparency:</strong> Rental hourly rates, base fees, 24-hour daily caps, and applicable Nepalese taxes are clearly displayed in the App prior to confirming any rental. All fees are denominated in Nepalese Rupees (NPR).
          </p>
          <p>
            <strong>5.2 Wallet &amp; Security Deposit:</strong> Rentals are debited from your in-app prepaid wallet. Users must maintain an adequate balance. A temporary refundable security deposit is held upon rental release and automatically returned to your wallet balance within 24 hours following a confirmed slot return.
          </p>
          <p>
            <strong>5.3 Third-Party Payment Processing:</strong> Wallet top-ups are processed by licensed payment system operators in Nepal (eSewa, Khalti, etc.). Charge Ghar does not collect, receive, or store raw credit/debit card numbers or electronic wallet PINs.
          </p>
          <p>
            <strong>5.4 Continuous Accrual:</strong> Fees continue to accrue continuously until the power bank is locked into a station slot and the digital &ldquo;Rental Ended&rdquo; notice is registered.
          </p>
          <p>
            <strong>5.5 Unpaid Dues:</strong> We reserve the right to pursue lawful recovery of any negative balances or unpaid penalties resulting from non-returned hardware.
          </p>
        </>
      ),
    },
    {
      id: "refunds",
      num: "6",
      title: "Cancellations and Refunds",
      content: (
        <>
          <p>
            <strong>6.1 Irrevocable Release:</strong> A rental cannot be cancelled once the power bank is physically ejected from the station.
          </p>
          <p>
            <strong>6.2 5-Minute Error Reporting Window:</strong> If a rental occurs accidentally due to an electronic station error, or if an ejected power bank is defective, you must notify support within <strong>5 minutes</strong> via the App or <strong>support@chargeghar.app</strong> accompanied by a screenshot or photo. Verified technical glitches will be promptly reversed.
          </p>
          <p>
            <strong>6.3 General Non-Refundability:</strong> Fees incurred for successfully rented, operational power banks are non-refundable once the service has been rendered.
          </p>
          <p>
            <strong>6.4 Billing Disputes:</strong> Billing disputes must be lodged in writing within seven (7) calendar days of the charge date.
          </p>
        </>
      ),
    },
    {
      id: "overdue",
      num: "7",
      title: "Overdue, Lost, and Damaged Power Banks",
      content: (
        <>
          <p>
            <strong>7.1 Overdue Rates:</strong> If a power bank is kept beyond the standard rental threshold displayed in the App, overdue fees apply as shown.
          </p>
          <p>
            <strong>7.2 Lost Hardware Penalty (NPR 3,000):</strong> Any power bank not returned within the maximum holding period indicated in the App is officially marked as <strong>Lost</strong>. A hardware replacement penalty of <strong>NPR 3,000</strong> (inclusive of statutory taxes) is immediately charged, the security deposit is forfeited, and the account is suspended until settled.
          </p>
          <p>
            <strong>7.3 Damaged Units:</strong> Returning hardware that has been broken, vandalized, or water-damaged due to gross negligence renders the user liable for replacement or repair costs up to NPR 3,000.
          </p>
          <p>
            <strong>7.4 Risk of Loss &amp; Theft:</strong> You bear the complete risk of loss, damage, or theft from ejection until return confirmation. Stolen hardware must be reported to the police and to Charge Ghar within 24 hours.
          </p>
        </>
      ),
    },
    {
      id: "permissions",
      num: "8",
      title: "App Permissions",
      content: (
        <>
          <p>
            <strong>8.1 Location:</strong> Used to display nearby kiosks on the interactive map and record pickup/return points. You may deny this permission and locate kiosks manually.
          </p>
          <p>
            <strong>8.2 Notifications:</strong> Used to deliver rental time reminders, receipt summaries, and overdue warnings.
          </p>
          <p>
            <strong>8.3 Camera:</strong> Used exclusively to scan kiosk QR codes in real time. No images, video clips, or photos are ever saved or transmitted.
          </p>
        </>
      ),
    },
    {
      id: "account-deletion",
      num: "9",
      title: "Account Deletion and Data Retention",
      content: (
        <>
          <p>
            <strong>9.1 User Deletion Rights:</strong> You may delete your account at any time either inside the App (<strong>Settings → Account → Delete Account</strong>) or via our dedicated web portal at{" "}
            <Link href="/delete-account" className="text-red-400 font-bold underline">
              chargeghar.app/delete-account
            </Link>
            , or by emailing <strong>privacy@chargeghar.app</strong>.
          </p>
          <p>
            <strong>9.2 Deletion Timeline:</strong> Upon request and verification that all hardware has been returned and balances settled, personal identifiers are purged from active systems within 30 days.
          </p>
          <p>
            <strong>9.3 Statutory Retention:</strong> Financial transaction, tax, and VAT records are retained for <strong>up to 7 years</strong> in mandatory compliance with the taxation and accounting laws of Nepal.
          </p>
        </>
      ),
    },
    {
      id: "prohibited",
      num: "10",
      title: "Prohibited Conduct",
      content: (
        <p>
          Users must not: (a) impersonate others or provide falsified phone numbers; (b) reverse engineer, probe, hack, or disrupt stations or servers; (c) use equipment for unlawful activities under the laws of Nepal; (d) damage, steal, conceal, or modify stations or power banks; (e) deploy automated bots; or (f) resell, sublease, or commercialize power banks.
        </p>
      ),
    },
    {
      id: "ip",
      num: "11",
      title: "Intellectual Property",
      content: (
        <p>
          All trademarks, logos, patents, kiosk industrial designs, software code, and mobile interfaces are the exclusive intellectual property of Charge Ghar Pvt. Ltd. We grant you a revocable, non-exclusive, non-transferable personal license to utilize the App solely for accessing the Service.
        </p>
      ),
    },
    {
      id: "disclaimers",
      num: "12",
      title: "Disclaimers",
      content: (
        <>
          <p>
            <strong>12.1 &ldquo;As Is&rdquo; Basis:</strong> The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the fullest extent permitted by Nepalese law, we disclaim all implied warranties, including continuous uptime, error-free kiosk connectivity, and device charging speeds.
          </p>
          <p>
            <strong>12.2 Personal Devices:</strong> Charge Ghar is not liable for incidental hardware or data malfunction on your personal phone, except where directly caused by proven gross negligence of our equipment.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      num: "13",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            <strong>13.1 Consequential Damages:</strong> To the maximum extent permitted by law, Charge Ghar shall not be liable for indirect, incidental, punitive, or consequential damages.
          </p>
          <p>
            <strong>13.2 Aggregate Cap:</strong> Our total aggregate liability to you regarding any specific rental transaction shall never exceed the total rental amount paid by you for that individual transaction.
          </p>
        </>
      ),
    },
    {
      id: "indemnity",
      num: "14",
      title: "Indemnification",
      content: (
        <p>
          You agree to indemnify, defend, and hold harmless Charge Ghar Pvt. Ltd., its directors, officers, and employees from any claims, damages, liabilities, and legal expenses arising from your violation of these Terms, equipment abuse, or violation of applicable laws.
        </p>
      ),
    },
    {
      id: "suspension",
      num: "15",
      title: "Suspension and Termination",
      content: (
        <p>
          We may suspend or terminate your account access with or without prior notice for non-return of hardware, fraudulent activities, Terms breaches, or safety risks. Provisions which by their nature should survive termination shall survive.
        </p>
      ),
    },
    {
      id: "governing-law",
      num: "16",
      title: "Governing Law and Dispute Resolution",
      content: (
        <>
          <p>
            <strong>16.1 Law of Nepal:</strong> These Terms and any dispute arising out of them shall be governed by and construed in accordance with the substantive laws of Nepal.
          </p>
          <p>
            <strong>16.2 Direct Negotiation:</strong> Parties shall first endeavor in good faith to resolve disputes amicably through formal written notice and direct negotiation within 30 days.
          </p>
          <p>
            <strong>16.3 Exclusive Jurisdiction:</strong> Unresolved disputes shall be subject to the exclusive jurisdiction of the competent courts of Kathmandu, Nepal, or arbitration in Kathmandu under the Arbitration Act, 2055 (1999) of Nepal.
          </p>
        </>
      ),
    },
    {
      id: "force-majeure",
      num: "17",
      title: "Force Majeure",
      content: (
        <p>
          Charge Ghar shall not be liable for failure or delay in performance resulting from causes beyond its reasonable control, including natural catastrophes, grid blackouts, telecommunications outages, strikes, or civil disturbances.
        </p>
      ),
    },
    {
      id: "amendments",
      num: "18",
      title: "Amendments",
      content: (
        <p>
          We may revise these Terms periodically. Notice of material changes will be announced in the App or on chargeghar.app. Continued use after changes take effect constitutes binding acceptance of the updated terms.
        </p>
      ),
    },
    {
      id: "general",
      num: "19",
      title: "General",
      content: (
        <p>
          These Terms and the Privacy Policy constitute the entire agreement between you and Charge Ghar. If any clause is held invalid, the remainder remains in full effect.
        </p>
      ),
    },
    {
      id: "contact",
      num: "20",
      title: "Contact and Legal Notices",
      content: (
        <div className="bg-[#0b101c] p-4 rounded-xl border border-white/5 space-y-2 text-xs sm:text-sm text-gray-300">
          <p>
            <strong>Company:</strong> Charge Ghar Pvt. Ltd.
          </p>
          <p>
            <strong>Company Registration No.:</strong> 36949/81/82 · <strong>PAN:</strong> 622388100
          </p>
          <p>
            <strong>Head Office:</strong> Tokha, Kathmandu, Nepal
          </p>
          <p>
            <strong>Customer Support:</strong> support@chargeghar.app · <strong>Privacy:</strong> privacy@chargeghar.app · <strong>Legal:</strong> legal@chargeghar.app
          </p>
          <p>
            <strong>Helpline:</strong> +977-9857860060 · <strong>Website:</strong> chargeghar.app
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title & Metadata */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <Shield className="w-3.5 h-3.5" />
          <span>Legal Agreement · Effective Oct 16, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Charge Ghar Rental Terms and Conditions
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Charge Ghar Pvt. Ltd. · Registration No. 36949/81/82 · PAN 622388100 · Tokha, Kathmandu, Nepal
        </p>
      </div>

      {/* Quick Navigation Links */}
      <div className="glass-card rounded-2xl p-5 border border-white/10 mb-12">
        <h2 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Quick Navigation Index:</h2>
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

      {/* Section List */}
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
            Section 9 provides full instructions on closing your account and data deletion pursuant to Google Play policies.
          </p>
        </div>
        <Link
          href="/delete-account"
          className="px-4 py-2 rounded-xl bg-red-500 text-white font-bold text-xs hover:bg-red-600 transition-colors shrink-0"
        >
          Go to Deletion Portal
        </Link>
      </div>
    </div>
  );
}
