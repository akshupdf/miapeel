import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-500">Last updated: December 6, 2024</p>
          </div>

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Miapeel.com ("we," "our," or "us"). We are committed to protecting your privacy
              and ensuring the security of your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our website or use
              our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
                <p className="text-gray-600 mb-3">We may collect the following information that you voluntarily provide:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Information Automatically Collected</h3>
                <p className="text-gray-600 mb-3">When you visit our website, we automatically collect:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent on pages)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Location information</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 mb-3">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process your transactions</li>
              <li>To communicate with you about our services</li>
              <li>To improve our website and user experience</li>
              <li>To detect and prevent fraud</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing and Disclosure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-3">We may share your information with:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Service providers and business partners</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties in the event of a business transfer</li>
              <li>With your consent or at your direction</li>
            </ul>
            <p className="text-gray-600 mt-4">We do not sell your personal information to third parties.</p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Manage cookie preferences</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not intended for children under 13 years of age. We do not knowingly 
              collect or maintain information from children under 13.
            </p>
          </section>

          {/* International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
            <p className="text-gray-600">
              Your information may be transferred and processed in countries other than your own. 
              We ensure appropriate safeguards are in place for such transfers.
            </p>
          </section>

          {/* Updates to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the updated policy on our website.
            </p>
          </section>

          {/* Cookie Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookie Policy</h2>
            <p className="text-gray-600 mb-3">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Maintain your preferences</li>
              <li>Analyze website traffic</li>
              <li>Personalize content and advertisements</li>
              <li>Improve our services</li>
            </ul>
            <p className="text-gray-600 mt-4">
              You can control cookies through your browser settings.
            </p>
          </section>

          {/* Contact Us */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="text-gray-600 space-y-2">
              <p>Email:  info@miapeel.com</p>
              {/* <p>Address: [Physical Address]</p> */}
              <p>Phone:    07498276752</p>
            </div>
          </section>

          {/* California Privacy Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. California Privacy Rights</h2>
            <p className="text-gray-600 mb-3">
              California residents have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>The right to know what personal information is collected</li>
              <li>The right to delete personal information</li>
              <li>The right to opt-out of the sale of personal information</li>
              <li>The right to non-discrimination for exercising these rights</li>
            </ul>
          </section>

          {/* Legal Basis for Processing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Legal Basis for Processing (GDPR)</h2>
            <p className="text-gray-600 mb-3">
              For users in the European Economic Area (EEA), we process personal data based on:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Your consent</li>
              <li>Contract performance</li>
              <li>Legal obligations</li>
              <li>Legitimate interests</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Data Retention</h2>
            <p className="text-gray-600 mb-3">We retain your personal information for as long as necessary to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide our services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;