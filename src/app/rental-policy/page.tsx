import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Clock,
  Coins,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  Zap,
  CheckCircle2,
  Headphones,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rental Policy & Fee Schedule · Charge Ghar Rental",
  description:
    "Official Rental Policy for Charge Ghar Rental power bank sharing in Nepal. Review rental steps, pricing, wallet security deposits, overdue penalties, and return procedures.",
};

export default function RentalPolicyPage() {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header Badge & Title */}
      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#00e599] text-xs font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>Official Agreement · Oct 16, 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Charge Ghar Rental Policy
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          <strong>Charge Ghar Pvt. Ltd.</strong> · Registration No. 36949/81/82 · PAN 622388100 · Tokha, Kathmandu, Nepal · contact@chargeghar.app · +977-9857860060
        </p>
        <p className="text-xs text-gray-400 border-l-2 border-[#00e599] pl-3 py-1">
          This Rental Policy sets out how power bank rentals work through the Charge Ghar Rental mobile application (the &ldquo;App&rdquo;) and related service. It forms part of, and must be read together with, the Charge Ghar Terms and Conditions and Privacy Policy. If this Rental Policy conflicts with the Terms and Conditions regarding a rental, this Rental Policy prevails for that rental.
        </p>
      </div>

      {/* Visual Quick Steps */}
      <div className="mb-14">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#00e599]" />
          <span>The 5-Step Rental Cycle</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "Step 1", title: "Find Station", desc: "Open App map and locate nearest available kiosk." },
            { step: "Step 2", title: "Scan QR", desc: "Scan station QR code with adequate wallet balance." },
            { step: "Step 3", title: "Eject Power Bank", desc: "Slot unlocks automatically; rental timer begins." },
            { step: "Step 4", title: "Charge Anywhere", desc: "Use built-in USB-C, Lightning, or Micro-USB cables." },
            { step: "Step 5", title: "Return to Any Slot", desc: "Push into any open slot until LED turns green." },
          ].map((s) => (
            <div key={s.step} className="glass-card rounded-xl p-4 border border-white/10 text-center">
              <span className="text-[11px] font-bold uppercase text-[#00e599]">{s.step}</span>
              <h3 className="font-bold text-white text-sm my-1">{s.title}</h3>
              <p className="text-[12px] text-gray-400 leading-normal">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Policy Sections */}
      <div className="space-y-10">
        {/* Section 1 */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#00e599]">1.</span> Rental Process
          </h2>
          <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
            <p>
              <strong>Step 1: Find a station.</strong> Open the App and use the live map to locate the nearest available station with charged power banks.
            </p>
            <p>
              <strong>Step 2: Scan the QR code.</strong> Tap &ldquo;Rent&rdquo; and scan the QR code located on the front of the station kiosk. Ensure your wallet balance is sufficient before renting.
            </p>
            <p>
              <strong>Step 3: Collect your power bank.</strong> The illuminated slot clicks open and releases the power bank. The rental timer begins immediately upon release from the station.
            </p>
            <p>
              <strong>Step 4: Charge your device.</strong> Connect your smartphone or device using the built-in cables (USB-C, Lightning for iOS, and Micro-USB). The power bank is fully portable and may be carried with you anywhere during your rental.
            </p>
            <p>
              <strong>Step 5: Return to any station.</strong> Insert the power bank firmly into any open slot at any Charge Ghar station in Nepal. The slot LED will illuminate green upon successful mechanical and electronic locking. Verify the &ldquo;Rental Ended&rdquo; confirmation notification inside your app.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#00e599]">2.</span> Fees and Charges
          </h2>
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              <strong>2.1 Display of Rates:</strong> The actual fee amounts are displayed transparently in the App before you confirm a rental. By confirming, you accept the displayed fees. All fees are in Nepalese Rupees (NPR) and may be subject to applicable taxes.
            </p>
            <p>
              <strong>2.2 Wallet Deductions:</strong> Charges are automatically deducted from your Charge Ghar in-app wallet balance. Wallet top-ups are handled via licensed third-party digital payment service providers in Nepal (e.g. eSewa, Khalti, ConnectIPS). Charge Ghar does not collect, see, or store your payment card numbers, wallet passwords, or PINs.
            </p>
            <div className="bg-[#0c121e] rounded-xl p-4 border border-white/5 space-y-2.5 text-xs sm:text-sm">
              <h3 className="font-bold text-white mb-2">Applicable Fee Structure (Displayed in App):</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white/5">
                  <span className="text-[#00e599] font-bold block">Base Fee (First Hour)</span>
                  <span className="text-gray-400">Charged from the moment the power bank is released from the slot.</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <span className="text-[#00e599] font-bold block">Hourly Rate</span>
                  <span className="text-gray-400">Billed incrementally for each hour used after the initial base hour.</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <span className="text-[#00e599] font-bold block">Daily Cap (24 Hours)</span>
                  <span className="text-gray-400">The maximum ceiling charge for any single 24-hour rental duration.</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <span className="text-[#00e599] font-bold block">Refundable Security Deposit</span>
                  <span className="text-gray-400">Held during rental; refunded to wallet within 24h of return.</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <span className="text-amber-400 font-bold block">Overdue Fee</span>
                  <span className="text-gray-400">Applied when exceeding the specified maximum rental duration.</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <span className="text-red-400 font-bold block">Lost Hardware Penalty</span>
                  <span className="text-gray-400">NPR 3,000 charged if hardware is not returned within specified days.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#00e599]">3.</span> Overdue and Non-Return
          </h2>
          <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
            <p>
              <strong>3.1 Overdue Trigger:</strong> A power bank is deemed Overdue once it has not been returned within the maximum rental hours displayed in the App.
            </p>
            <p>
              <strong>3.2 Push Reminders:</strong> Push notifications are sent before Overdue status triggers. Enabling notifications is strongly recommended to receive timely alerts.
            </p>
            <p>
              <strong>3.3 Cumulative Fees:</strong> Overdue fees accumulate on top of regular hourly rental rates.
            </p>
            <p>
              <strong>3.4 Lost Status:</strong> A power bank not returned within the number of days specified in the App is marked as <strong>Lost</strong>, and the Lost Penalty of <strong>NPR 3,000</strong> is charged immediately.
            </p>
            <p>
              <strong>3.5 Security Deposit Forfeiture:</strong> The Security Deposit is forfeited upon non-return and applied toward the Lost Penalty; any remaining unpaid balance is charged to your wallet or recovered through lawful proceedings.
            </p>
            <p>
              <strong>3.6 Suspension:</strong> Your account is suspended until the Lost Penalty is settled in full.
            </p>
            <p>
              <strong>3.7 Discretionary Partial Refund:</strong> If you return a power bank after it has been marked Lost, Charge Ghar may, at its sole discretion, refund a portion of the penalty.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#00e599]">4.</span> Returning the Power Bank
          </h2>
          <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
            <p>
              <strong>4.1 Network Flexibility:</strong> You may return the power bank to any available slot at any Charge Ghar station across Nepal, regardless of where you originally rented it.
            </p>
            <p>
              <strong>4.2 Proper Insertion:</strong> Insert the power bank firmly into an open slot until it clicks securely into place.
            </p>
            <p>
              <strong>4.3 Return Confirmation:</strong> The slot LED turns solid green to confirm a successful lock, and the App dispatches a &ldquo;Rental Ended&rdquo; notification containing your final bill summary.
            </p>
            <p>
              <strong>4.4 Full Station or Error:</strong> If all slots at a station are full, or if a slot error occurs, try an adjacent slot or open the in-app map to find the nearest nearby station.
            </p>
            <p>
              <strong>4.5 Unattended Risk:</strong> Do not leave the power bank unattended or resting on top of a kiosk without completing the digital return in the App. Rental fees continue to accrue until an electronic return is registered.
            </p>
            <p>
              <strong>4.6 Deposit Refund:</strong> Your refundable Security Deposit is credited back to your in-app wallet within 24 hours of a verified return.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#00e599]">5.</span> Power Bank Care and Safe Handling
          </h2>
          <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
            <p>
              <strong>5.1 Environmental Protection:</strong> Avoid dropping the power bank, submerging or exposing it to water, or placing it near open flames or extreme heat sources.
            </p>
            <p>
              <strong>5.2 Damaged Units:</strong> Do not use a visibly swollen, dented, or damaged power bank. Report it immediately through the App&apos;s Help &amp; Support section.
            </p>
            <p>
              <strong>5.3 No Tampering:</strong> Do not open, pierce, disassemble, or attempt to modify the power bank or its charging cables.
            </p>
            <p>
              <strong>5.4 Intentional Damage:</strong> Intentional damage, vandalism, or cable mutilation results in a charge equal to the full hardware replacement cost (up to NPR 3,000) as set forth in the Terms and Conditions.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#00e599]">6.</span> Cancellation &amp; Fault Reversal
          </h2>
          <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
            <p>
              <strong>6.1 Released Rentals:</strong> A rental cannot be cancelled once the power bank has been ejected and released from the station. To conclude the rental, return the hardware to any Charge Ghar slot.
            </p>
            <p>
              <strong>6.2 Rapid Error Reversal Window:</strong> If a rental occurred accidentally due to a verified technical kiosk glitch, or if the unit released was damaged, you must contact support within <strong>5 minutes</strong> of release through the App or at <strong>support@chargeghar.app</strong> with a screenshot. Verified technical errors are reversed immediately.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#00e599]">7.</span> Support &amp; Emergency Assistance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-[#00e599] font-bold block">In-App Support</span>
              <p className="text-gray-300">Settings → Help &amp; Support → Report an Issue</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-cyan-400 font-bold block">Email Hotline</span>
              <p className="text-gray-300">support@chargeghar.app</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-amber-400 font-bold block">Emergency Phone</span>
              <p className="text-gray-300">+977-9857860060 (24/7 for active rentals)</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Response SLA: Within 2 hours for active rental emergencies; within 24 hours for standard inquiries.
          </p>
        </section>

        {/* Section 8 */}
        <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-[#00e599]">8.</span> Related Policies
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Your rental is also governed by the{" "}
            <Link href="/terms" className="text-[#00e599] underline underline-offset-4">
              Charge Ghar Terms and Conditions
            </Link>{" "}
            (including liability limits, disputes, account suspension) and the{" "}
            <Link href="/privacy" className="text-[#00e599] underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            (including how location coordinates and rental transactions are safely handled).
          </p>
        </section>
      </div>

      {/* Account Deletion Footer Notice */}
      <div className="mt-12 p-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-red-400 shrink-0" />
          <p className="text-xs sm:text-sm text-red-200">
            Have questions about closing your account or deleting your rental data?
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
