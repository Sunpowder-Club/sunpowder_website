export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
            Sunpowder
          </a>
          <div className="hidden md:flex space-x-8 text-slate-300">
            <a href="/#games" className="hover:text-white transition-colors">Games</a>
            <a href="/#about" className="hover:text-white transition-colors">About</a>
            <a href="/#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 text-slate-300">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-slate-400 mb-8">Last Updated: January, 2025</p>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-lg mb-8">Thank you for playing our games!</p>
          
          <p className="mb-8">
            This Privacy Policy applies to all of Sunpowder's games, websites, stores, and related services (collectively referred to as the "Service"). We may occasionally update this Privacy Policy by posting a revised version on our website. If we make any significant changes, we will notify you in accordance with applicable laws, which may include placing a notice within the Service before the update becomes effective. Your continued use of the Service after the effective date signifies your agreement to the updated Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">1. Information We Collect</h2>
          <p className="mb-6">We collect information to provide and enhance our Service. The types of information we may collect include:</p>
          
          <h3 className="text-xl font-semibold text-yellow-400 mt-8 mb-4">a) Device and Usage Information</h3>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Details about the device or platform you use to access our games (e.g., device type, operating system, unique device identifiers, IP address).</li>
            <li>Gameplay activity, session duration, in-game interactions, and other usage data.</li>
          </ul>

          <h3 className="text-xl font-semibold text-yellow-400 mt-8 mb-4">b) Analytics Data</h3>
          <p className="mb-6">We use analytics tools (e.g., Google Analytics, Google Analytics for Firebase, or similar services) to collect data on Service usage, crash reports, and other user interactions.</p>

          <h3 className="text-xl font-semibold text-yellow-400 mt-8 mb-4">c) Contact Information</h3>
          <p className="mb-6">If you contact us via email or through any in-game feedback/contact forms, we may collect your name, email address, and any additional information you choose to provide.</p>
          
          <p className="mb-8"><strong>Note:</strong> Our games do not collect or process any sensitive medical information. They are designed purely for entertainment.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ol className="list-decimal list-inside mb-8 space-y-2">
            <li>Provide, maintain, and improve the functionality of our Service.</li>
            <li>Monitor and analyze usage trends to enhance the user experience.</li>
            <li>Respond to user inquiries and provide customer support.</li>
            <li>Send updates and notifications about the Service, if applicable.</li>
            <li>Comply with legal obligations.</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">3. Legal Basis for Processing Personal Data (For Users in the EU/UK)</h2>
          <p className="mb-4">For individuals in the European Union or the United Kingdom, we process your data based on the following legal grounds:</p>
          <ol className="list-decimal list-inside mb-8 space-y-2">
            <li><strong>Consent:</strong> When you provide explicit consent (e.g., for optional analytics or marketing communications).</li>
            <li><strong>Legitimate Interests:</strong> For operational purposes such as maintaining and improving the Service.</li>
            <li><strong>Legal Obligation:</strong> When required to comply with applicable laws.</li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">4. Sharing and Disclosure of Information</h2>
          <p className="mb-6">We only share your information under the following limited circumstances:</p>
          
          <h3 className="text-xl font-semibold text-yellow-400 mt-8 mb-4">a) Service Providers</h3>
          <p className="mb-6">We may share information with third-party service providers who assist in tasks such as hosting, analytics, and customer support. These providers are obligated to handle your data securely and only for the purposes we specify.</p>

          <h3 className="text-xl font-semibold text-yellow-400 mt-8 mb-4">b) Legal Compliance</h3>
          <p className="mb-6">We may disclose your information if required to do so by law or in response to valid legal requests by public authorities.</p>

          <h3 className="text-xl font-semibold text-yellow-400 mt-8 mb-4">c) Business Transfers</h3>
          <p className="mb-8">If Sunpowder undergoes a merger, acquisition, or asset sale, your information may be transferred as part of that transaction. You will be notified of any such change.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">5. International Data Transfers</h2>
          <p className="mb-8">Your information may be processed and stored outside your country of residence, including in Singapore and the United States. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable laws, such as the EU/UK General Data Protection Regulation (GDPR).</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">6. Data Retention</h2>
          <p className="mb-8">We retain your information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. When information is no longer needed, we securely delete or anonymize it.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">7. Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
          <ol className="list-decimal list-inside mb-6 space-y-2">
            <li><strong>Access:</strong> Request access to the data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Erasure:</strong> Request deletion of your data (subject to legal and contractual obligations).</li>
            <li><strong>Restriction:</strong> Request the restriction of data processing.</li>
            <li><strong>Objection:</strong> Object to data processing based on legitimate interests.</li>
            <li><strong>Portability:</strong> Request the transfer of your data to another service.</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for processing where applicable.</li>
          </ol>
          <p className="mb-8">To exercise these rights, please contact us at <a href="mailto:info@sunpowder.club" className="text-yellow-400 hover:text-yellow-300">info@sunpowder.club</a>. We will respond in accordance with applicable laws.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">8. Children's Privacy</h2>
          <p className="mb-8">Our Service is not intended for children under 13 years old (or the minimum age in your jurisdiction). We do not knowingly collect personal data from children. If you believe we have collected data from a child under this age, please contact us at <a href="mailto:info@sunpowder.club" className="text-yellow-400 hover:text-yellow-300">info@sunpowder.club</a>, and we will take steps to delete it.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">9. Security Measures</h2>
          <p className="mb-8">We implement reasonable technical and organizational measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">10. Third-Party Links</h2>
          <p className="mb-8">Our Service may include links to third-party websites or services. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">11. Changes to This Privacy Policy</h2>
          <p className="mb-8">We may update this Privacy Policy from time to time. Any changes will be posted on this page, with the updated date at the top. We encourage you to review the Privacy Policy periodically.</p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6">12. Contact Us</h2>
          <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy, you can reach us at:</p>
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 mb-12">
            <p className="font-semibold text-white mb-2">SUNPOWDER PTE. LTD.</p>
            <p className="mb-2">7 Temasek Boulevard, #12-07, Suntec Tower One</p>
            <p className="mb-2">Singapore 038987</p>
            <p className="mb-2">Email: <a href="mailto:info@sunpowder.club" className="text-yellow-400 hover:text-yellow-300">info@sunpowder.club</a></p>
          </div>

          <p className="text-lg text-center text-yellow-400 mb-8">Thank you for playing our games and trusting Sunpowder!</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">Sunpowder</div>
          <div className="flex justify-center space-x-6 text-slate-400">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="mt-8 text-sm text-slate-500">
            © 2025 SUNPOWDER PTE. LTD. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 