import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Guides for Ecommerce Product Photography & Background Removal',
  description: 'Guides and tutorials on removing image backgrounds for ecommerce, design, and photography. Learn how to create professional product photos for Amazon, Shopify, and your own store.',
};

const blogPosts = [
  {
    slug: 'how-to-remove-background-from-product-photo',
    title: 'How to Remove Background from Product Photo: The Complete Guide',
    excerpt: 'Learn exactly how to remove background from product photos for Amazon, Shopify, and your own ecommerce store. Step-by-step guide with no expensive software needed.',
    date: 'March 2026',
    readTime: '8 min read',
  },
  {
    slug: 'best-free-background-remover-tools',
    title: '10 Best Free Online Background Remover Tools for Ecommerce in 2026',
    excerpt: 'We tested the most popular free background removal tools and ranked them for ecommerce sellers. Here is what actually works.',
    date: 'March 2026',
    readTime: '10 min read',
  },
  {
    slug: 'white-background-amazon-product-images',
    title: 'How to Make Perfect White Backgrounds for Amazon Product Images',
    excerpt: 'Amazon requires pure white backgrounds. Here is exactly how to achieve them without expensive equipment or Photoshop — step by step.',
    date: 'March 2026',
    readTime: '7 min read',
  },
  {
    slug: 'shopify-product-photo-background',
    title: 'Shopify Product Photo Background: How to Get Perfect White Backgrounds',
    excerpt: 'Shopify product photos need clean backgrounds to convert. Here is how to get professional product images without a photographer.',
    date: 'March 2026',
    readTime: '6 min read',
  },
  {
    slug: 'bulk-background-remover-ecommerce',
    title: 'Bulk Background Remover for Ecommerce: Process 100+ Product Photos Fast',
    excerpt: 'How to remove backgrounds from hundreds of product photos quickly. The best bulk background removal tools and workflows for large ecommerce catalogs.',
    date: 'March 2026',
    readTime: '8 min read',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-semibold text-gray-900">BGRemover</span>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600 mb-12">
            Guides and tutorials on removing image backgrounds for ecommerce, design, and photography.
          </p>

          <div className="space-y-10">
            {blogPosts.map((post) => (
              <article key={post.slug} className="border-b border-gray-100 pb-10 last:border-0">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-blue-500 hover:text-blue-600 font-medium"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to remove backgrounds?</h2>
          <p className="text-gray-600 mb-6">Try BGRemover — free, instant, no signup required.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
          >
            Get Started Free →
          </Link>
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
