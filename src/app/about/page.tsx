import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about BGRemover - a free online tool for removing image backgrounds, perfect for ecommerce sellers.',
};

export default function AboutPage() {
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
          </nav>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">About BGRemover</h1>
          
          <div className="prose prose-gray">
            <p className="text-lg text-gray-600 mb-6">
              BGRemover is a free online tool that helps you remove backgrounds from images instantly. 
              Built specifically for ecommerce sellers who need clean, professional product photos.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Why We Built This</h2>
            <p className="text-gray-600 mb-4">
              When selling products online, clean product photos are essential. Amazon, Shopify, and other 
              marketplaces require white or transparent backgrounds. Professional photo editing software 
              is expensive and time-consuming.
            </p>
            <p className="text-gray-600 mb-4">
              We built BGRemover to make professional-quality background removal accessible to everyone—without 
              requiring sign-ups, subscriptions, or expensive tools.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How It Works</h2>
            <p className="text-gray-600 mb-4">
              We use state-of-the-art AI to automatically detect and remove backgrounds from your images. 
              Upload any JPG, PNG, or WebP image and get a transparent PNG result in seconds.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Free for everyone</strong> — No hidden fees or paywalls</li>
              <li><strong>Privacy first</strong> — We don't store your images</li>
              <li><strong>Simple and fast</strong> — No complicated tools or learning curve</li>
              <li><strong>Ecommerce focused</strong> — Built for sellers, not designers</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Contact</h2>
            <p className="text-gray-600">
              Have questions or feedback? We'd love to hear from you. Email us at{' '}
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
