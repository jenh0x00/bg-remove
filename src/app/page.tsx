import HomeClient from '@/components/HomeClient';
import AuthButton from '@/components/auth-button';

// Force dynamic rendering - this page uses API routes
export const dynamic = 'force-dynamic';

export default function Home() {
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
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-6">
              <a href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </a>
              <a href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
            </nav>
            <AuthButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Remove Image Background
            <span className="text-blue-500"> Free & Instant</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Upload any image and get a transparent or white background in seconds. 
            Perfect for ecommerce product photos, designed for sellers.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <HomeClient />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">100% Free</h3>
              <p className="mt-2 text-sm text-gray-600">No signup required. Process images without creating an account.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Instant Results</h3>
              <p className="mt-2 text-sm text-gray-600">Get your background removed in just 2-3 seconds. No waiting.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">High Quality</h3>
              <p className="mt-2 text-sm text-gray-600">Preserves edges and details for professional-looking product images.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">1</div>
              <h3 className="mt-4 font-medium text-gray-900">Upload Image</h3>
              <p className="mt-2 text-sm text-gray-600">Drag and drop or click to select any JPG, PNG, or WebP image.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">2</div>
              <h3 className="mt-4 font-medium text-gray-900">AI Removes Background</h3>
              <p className="mt-2 text-sm text-gray-600">Our AI automatically detects and removes the background.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">3</div>
              <h3 className="mt-4 font-medium text-gray-900">Download Result</h3>
              <p className="mt-2 text-sm text-gray-600">Get your transparent PNG image instantly and download for free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Perfect For</h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">Used by ecommerce sellers, designers, and photographers worldwide.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Ecommerce Sellers</h3>
              <p className="text-sm text-gray-600">Create clean white background product photos for Amazon, Shopify, eBay, and your own store.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Graphic Designers</h3>
              <p className="text-sm text-gray-600">Quickly extract subjects from photos for use in composites, presentations, and marketing materials.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Photographers</h3>
              <p className="text-sm text-gray-600">Save time on tedious background removal and focus on creative editing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900">Is it really free?</h3>
              <p className="mt-1 text-sm text-gray-600">Yes, you can remove backgrounds from images for free. Each image is processed using our API credits.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">What image formats are supported?</h3>
              <p className="mt-1 text-sm text-gray-600">We support JPG, PNG, and WebP images up to 12MB in size.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">What happens to my images?</h3>
              <p className="mt-1 text-sm text-gray-600">Your images are processed and returned immediately. We don't store your images on our servers.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Can I use it for commercial purposes?</h3>
              <p className="mt-1 text-sm text-gray-600">Yes, images you process are yours to use for any commercial or personal project.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">How long does it take?</h3>
              <p className="mt-1 text-sm text-gray-600">Most images are processed in 2-3 seconds. Larger images may take a bit longer.</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Do I need to create an account?</h3>
              <p className="mt-1 text-sm text-gray-600">No signup required. Just upload your image and get results instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">BGRemover</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="/blog" className="hover:text-gray-700 transition-colors">Blog</a>
              <a href="/about" className="hover:text-gray-700 transition-colors">About</a>
              <a href="/terms" className="hover:text-gray-700 transition-colors">Terms</a>
            </div>
            <p className="text-sm text-gray-400">© 2026 BGRemover. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
