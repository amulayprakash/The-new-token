import Link from "next/link";

export const metadata = {
  title: "Terms of Service — USBT",
  description: "Terms of Service for USBT Protocol",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Top glow */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ffd1]/20 to-transparent z-50" />

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#00ffd1] transition-colors duration-300 mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00ffd1] to-[#0077b6] flex items-center justify-center">
              <span className="text-black font-bold text-sm" style={{ fontFamily: "var(--font-space)" }}>T</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight" style={{ fontFamily: "var(--font-space)" }}>USBT</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Terms of Service
          </h1>
          <p className="text-white/40 text-sm">Last updated: April 15, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the USBT Protocol website, token, or any related services
              (collectively, &quot;Services&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). If you do not agree to these Terms, you must not access or use our Services.
            </p>
            <p className="mt-4">
              These Terms apply to all users, visitors, and others who access or use the Services.
              We reserve the right to update or change these Terms at any time without prior notice.
              Your continued use of the Services after changes are posted constitutes your acceptance
              of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Services</h2>
            <p>
              USBT Protocol provides a digital token ecosystem designed for institutional settlement,
              digital value transfer, and enterprise-grade financial operations on blockchain networks.
              Our Services include, but are not limited to:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-white/60">
              <li>Informational website and documentation about the USBT token</li>
              <li>Access to protocol interfaces and smart contract interactions</li>
              <li>Community resources and educational content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Eligibility</h2>
            <p>
              You must be at least 18 years of age to use our Services. By using the Services,
              you represent and warrant that you meet this age requirement and have the legal
              capacity to enter into these Terms.
            </p>
            <p className="mt-4">
              You are solely responsible for ensuring that your use of the Services complies with
              all applicable laws and regulations in your jurisdiction. The Services are not available
              to persons or entities in jurisdictions where their use would be prohibited by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Risk Disclosure</h2>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] mb-4">
              <p className="text-white/90 font-medium text-sm uppercase tracking-wider mb-2">Important Notice</p>
              <p className="text-white/70">
                Digital tokens and blockchain-based assets carry significant risk. The value of USBT
                and any associated assets may fluctuate substantially. You may lose some or all of
                your invested capital. Only interact with digital assets if you fully understand
                the risks involved and can afford to bear potential losses.
              </p>
            </div>
            <p>
              By using the Services, you acknowledge and accept that:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-white/60">
              <li>Digital tokens are highly volatile and speculative assets</li>
              <li>Smart contracts may contain bugs or vulnerabilities despite audits</li>
              <li>Blockchain transactions are irreversible once confirmed</li>
              <li>Regulatory environments for digital assets are evolving and may affect the protocol</li>
              <li>Past performance does not guarantee future results</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Not Financial Advice</h2>
            <p>
              Nothing on this website or within the Services constitutes financial, investment, legal,
              or tax advice. All content is provided for informational purposes only. You should
              consult with qualified professionals before making any financial decisions related to
              digital assets.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Prohibited Activities</h2>
            <p>You agree not to engage in any of the following activities:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-white/60">
              <li>Using the Services for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempting to interfere with, disrupt, or circumvent the security of the protocol</li>
              <li>Engaging in market manipulation, wash trading, or fraudulent activities</li>
              <li>Using the Services to launder money or finance illegal activities</li>
              <li>Reverse engineering, decompiling, or attempting to extract source code from our platform</li>
              <li>Misrepresenting your identity or affiliation with any entity</li>
              <li>Uploading or transmitting malicious code, viruses, or harmful content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, icons, images, and
              software, is the property of USBT Protocol or its content suppliers and is protected
              by applicable intellectual property laws. You may not reproduce, distribute, modify,
              or create derivative works without our express written consent.
            </p>
            <p className="mt-4">
              Open-source components of the protocol are governed by their respective licenses,
              which are made available in our public repositories.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Disclaimers and Limitation of Liability</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT
              LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
              AND NON-INFRINGEMENT.
            </p>
            <p className="mt-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, USBT PROTOCOL SHALL NOT BE LIABLE
              FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING
              FROM YOUR USE OF, OR INABILITY TO USE, THE SERVICES.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless USBT Protocol and its officers,
              directors, employees, and agents from any claims, liabilities, damages, losses, and
              expenses arising from your use of the Services, your violation of these Terms, or
              your violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws,
              without regard to conflict of law principles. Any disputes arising under these Terms
              shall be subject to the exclusive jurisdiction of competent courts, and you consent
              to personal jurisdiction in such courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Services at any time,
              for any reason, without notice. Upon termination, all provisions of these Terms that
              by their nature should survive termination shall survive, including ownership
              provisions, warranty disclaimers, and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-white/80 font-medium">USBT Protocol</p>
              <p className="mt-1">Email: <a href="mailto:legal@usbt.io" className="text-[#00ffd1] hover:underline">legal@usbt.io</a></p>
              <p className="mt-1">Twitter: <a href="https://x.com/USBTNetwork" target="_blank" rel="noopener noreferrer" className="text-[#00ffd1] hover:underline">@USBTNetwork</a></p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <p>© 2026 USBT Protocol. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
