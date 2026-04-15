import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — USBT",
  description: "Privacy Policy for USBT Protocol",
};

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm">Last updated: April 15, 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              USBT Protocol (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the USBT token ecosystem and related
              services. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website or interact with our protocol.
            </p>
            <p className="mt-4">
              By accessing or using our services, you agree to the collection and use of information
              in accordance with this policy. If you do not agree with the terms of this Privacy Policy,
              please do not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p>We may collect the following categories of information:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-white/60">
              <li><span className="text-white/80 font-medium">Blockchain Data:</span> Public wallet addresses and on-chain transaction data associated with your use of the USBT protocol. This data is publicly available on the blockchain.</li>
              <li><span className="text-white/80 font-medium">Usage Data:</span> Information about how you interact with our website, including IP address, browser type, pages visited, time spent on pages, and referring URLs.</li>
              <li><span className="text-white/80 font-medium">Communication Data:</span> Information you voluntarily provide when contacting us via email or social media channels.</li>
              <li><span className="text-white/80 font-medium">Technical Data:</span> Device identifiers, cookies, and similar tracking technologies to improve your experience on our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-white/60">
              <li>Provide, operate, and maintain our website and protocol services</li>
              <li>Monitor and analyze usage patterns and trends to improve user experience</li>
              <li>Detect and prevent fraudulent transactions and technical issues</li>
              <li>Comply with applicable legal and regulatory requirements</li>
              <li>Communicate updates, security notices, and support responses</li>
              <li>Conduct research and analysis for protocol development</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Blockchain Transparency</h2>
            <p>
              All transactions conducted through the USBT protocol are recorded on a public blockchain.
              This means that transaction data — including wallet addresses, amounts, and timestamps —
              is permanently and publicly visible to anyone. We do not control the blockchain and cannot
              delete or modify this information.
            </p>
            <p className="mt-4">
              You should be aware that interacting with any blockchain protocol inherently involves
              making certain information publicly available. We encourage you to use wallet addresses
              that you are comfortable associating with your activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect usage data and improve our
              website. Cookies are small data files placed on your device. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is being sent. However,
              some features of our website may not function properly without cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, hosting, and other operational purposes.
              These third parties have their own privacy policies governing their use of your data.
              We are not responsible for the privacy practices of these third parties.
            </p>
            <p className="mt-4">
              We do not sell, trade, or otherwise transfer your personally identifiable information
              to third parties without your consent, except as required by law or as necessary to
              provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Data Security</h2>
            <p>
              We implement commercially reasonable technical and organizational security measures to
              protect your information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-white/60">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (where technically feasible and not conflicting with legal obligations)</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Data portability where applicable</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:legal@usbt.io" className="text-[#00ffd1] hover:underline">legal@usbt.io</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed at individuals under the age of 18. We do not knowingly
              collect personal information from children. If we become aware that a child has provided
              us with personal information, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. We will notify users
              of material changes by updating the &quot;Last updated&quot; date at the top of this page.
              Your continued use of our services after any changes constitutes your acceptance of
              the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
            <Link href="/terms-of-service" className="hover:text-white/50 transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
