import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guides and tutorials on removing image backgrounds for ecommerce, design, and photography.',
};

export default function BlogPage() {
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
            <a href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
          </nav>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600 mb-12">
            Guides and tutorials on removing image backgrounds for ecommerce, design, and photography.
          </p>

          {/* Blog posts coming soon placeholder */}
          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-8">
              <p className="text-sm text-gray-500 mb-2">Coming soon</p>
              <h2 className="text-xl font-semibold text-gray-900">
                How to Remove Background from Product Photos: A Complete Guide
              </h2>
              <p className="mt-2 text-gray-600">
                Learn the best practices for removing backgrounds from product photos for Amazon, Shopify, and your own ecommerce store.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-8">
              <p className="text-sm text-gray-500 mb-2">Coming soon</p>
              <h2 className="text-xl font-semibold text-gray-900">
                10 Free Online Background Remover Tools for Ecommerce in 2026
              </h2>
              <p className="mt-2 text-gray-600">
                We tested the most popular free background removal tools and ranked them for ecommerce sellers.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-8">
              <p className="text-sm text-gray-500 mb-2">Coming soon</p>
              <h2 className="text-xl font-semibold text-gray-900">
                How to Make Perfect White Backgrounds for Amazon Product Images
              </h2>
              <p className="mt-2 text-gray-600">
                Amazon requires white backgrounds. Here's how to achieve them without expensive software.
              </p>
            </div>
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
