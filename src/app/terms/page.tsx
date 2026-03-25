import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for BGRemover - a free online image background removal tool.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900">BGRemover</span>
          </div>
          <nav className="flex items-center gap-6">
            <a href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </a>
            <a href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </a>
            <a href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
          </nav>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="prose prose-gray">
            <p className="text-gray-600 mb-4">
              <strong>Last updated:</strong> March 2026
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using BGRemover ("the Service"), you accept and agree to be bound by the 
              terms and provisions of this agreement. If you do not agree to abide by these terms, 
              please do not use this Service.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Description of Service</h2>
            <p className="text-gray-600 mb-4">
              BGRemover provides an online tool for removing backgrounds from images using artificial 
              intelligence. The Service is provided "as is" and we reserve the right to modify, 
              suspend, or discontinue the Service at any time.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. 
              You are responsible for ensuring that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>You have the right to use and process any images you upload</li>
              <li>You will not use the Service for illegal or unauthorized purposes</li>
              <li>You will not upload images containing protected content without permission</li>
              <li>You will not attempt to gain unauthorized access to the Service</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              <strong>Your images:</strong> You retain all rights to the images you upload and process 
              through the Service. We do not claim any ownership over your images.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Service content:</strong> The Service itself, including but not limited to its 
              design, logo, and software, is owned by BGRemover and protected by intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Privacy</h2>
            <p className="text-gray-600 mb-4">
              Your privacy is important to us. Images uploaded to the Service are processed and returned 
              immediately. We do not store your images on our servers after processing is complete. 
              For more information, please see our Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, 
              SECURE, OR ERROR-FREE.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the fullest extent permitted by law, BGRemover shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages resulting from your use of the Service.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting to the Service. Your continued use of the Service after any changes constitutes 
              acceptance of the new Terms.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9. Contact</h2>
            <p className="text-gray-600">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:hello@bgremover.com" className="text-blue-500 hover:underline">
                hello@bgremover.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2026 BGRemover. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
