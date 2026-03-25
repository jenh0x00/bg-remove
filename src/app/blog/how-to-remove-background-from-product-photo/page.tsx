import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Remove Background from Product Photo: The Complete Guide',
  description: 'Learn exactly how to remove background from product photos for Amazon, Shopify, and your own ecommerce store. Step-by-step guide with no expensive software needed.',
  keywords: ['remove background from product photo', 'product photo background removal', 'ecommerce product photos', 'Amazon product images', 'Shopify product photos'],
  openGraph: {
    title: 'How to Remove Background from Product Photo',
    description: 'The complete guide for ecommerce sellers. No Photoshop required.',
    type: 'article',
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900">BGRemover</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link>
          </nav>
        </div>
      </header>

      <article className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span>How to Remove Background from Product Photo</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Remove Background from Product Photo: The Complete Guide for Ecommerce Sellers
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <span>March 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            If you're selling products online, you already know: <strong>great product photos sell</strong>. And the single most important factor in a professional-looking product image is a clean, white (or transparent) background.
          </p>

          <p className="text-gray-600 mb-6">
            This guide walks you through exactly how to remove background from product photos — whether you're shooting on a smartphone or working with a DSLR. No Photoshop required.
          </p>

          <hr className="border-gray-100 my-12" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Background Matters for Ecommerce</h2>

          <p className="text-gray-600 mb-4">
            Before we dive into the how, let's quickly cover the why.
          </p>

          <p className="text-gray-600 mb-4">
            Marketplaces like <strong>Amazon</strong>, <strong>eBay</strong>, and <strong>Shopify</strong> have strict image standards:
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>Amazon</strong> requires pure white backgrounds (RGB 255, 255, 255) for all main product images</li>
            <li><strong>Shopify</strong> stores with clean product photos convert better because they look more professional</li>
            <li><strong>Google Shopping</strong> and comparison engines favor images with clean backgrounds</li>
          </ul>

          <p className="text-gray-600 mb-6">
            Beyond compliance, product photos with removed backgrounds: look more professional, are easier to use in marketing materials, make your product the clear focus, and reduce visual clutter in search results.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Method 1: Use an Online Background Remover (Fastest)</h2>

          <p className="text-gray-600 mb-4">
            For most ecommerce sellers, the fastest path is using an online tool like <strong>BGRemover</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 1: Photograph Your Product</h3>

          <p className="text-gray-600 mb-4">
            Before removing the background, start with the best possible original photo:
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>Use natural light</strong> or a simple lightbox</li>
            <li><strong>Leave clearance</strong> around the product (give the AI room to work)</li>
            <li><strong>Avoid shadows</strong> where possible — or embrace them consistently</li>
            <li><strong>Shoot on a contrasting background</strong> — not white on white</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 2: Upload to BGRemover</h3>

          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li>Go to <strong>BGRemover</strong></li>
            <li>Drag and drop your product photo (or click to browse)</li>
            <li>Wait 2-3 seconds for AI processing</li>
            <li>Download the result with transparent or white background</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Step 3: Do a Quick Quality Check</h3>

          <p className="text-gray-600 mb-4">Before publishing, verify:</p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li>Edges are clean — no halos or artifacts</li>
            <li>Fine details (hair, fur, transparent elements) are preserved</li>
            <li>Color fidelity is maintained</li>
            <li>Shadow is either removed or kept consistent if you prefer it</li>
          </ul>

          <p className="text-gray-600 mb-6">
            If something looks off, try retaking the photo rather than fighting with the editing. Good source material = better results.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Amazon-Specific Requirements</h2>

          <p className="text-gray-600 mb-4">
            Amazon has very specific image requirements. For the <strong>main product image</strong>:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-gray-600 border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-medium">Requirement</th>
                  <th className="text-left py-2 font-medium">Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Background</td>
                  <td className="py-2">Pure white (RGB 255, 255, 255)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Image size</td>
                  <td className="py-2">At least 1000px on longest side</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Format</td>
                  <td className="py-2">RGB, JPG or PNG</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">No borders</td>
                  <td className="py-2">Clean edge-to-edge product</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">No watermarks</td>
                  <td className="py-2">Nothing overlaid on the main image</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Batch Processing for Large Catalogs</h2>

          <p className="text-gray-600 mb-4">
            If you have dozens or hundreds of products, batch processing matters:
          </p>

          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>Organize your workflow</strong> — batch photograph similar items together</li>
            <li><strong>Use consistent lighting</strong> — reduces variation the AI needs to handle</li>
            <li><strong>Consider the remove.bg API</strong> if you're building an integration</li>
            <li><strong>Review samples</strong> — always check 2-3 images from each batch before full processing</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quick Checklist Before You Publish</h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
            <li>Main image has pure white background (for Amazon)</li>
            <li>Edges are clean with no halos or artifacts</li>
            <li>Image is at least 1000px on the longest side</li>
            <li>File is RGB format (not CMYK)</li>
            <li>Filename is descriptive (e.g., <code>blue-running-shoes-side-view.jpg</code>)</li>
            <li>Color accuracy matches the actual product</li>
          </ul>

          <div className="bg-blue-50 rounded-xl p-6 mt-10">
            <h3 className="font-semibold text-gray-900 mb-2">Ready to remove backgrounds?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Use BGRemover — free, instant, no signup required.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Try BGRemover Free →
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2026 BGRemover. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
