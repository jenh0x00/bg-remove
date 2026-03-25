import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Make Perfect White Backgrounds for Amazon Product Images',
  description: 'Amazon requires pure white backgrounds. Here is exactly how to achieve them without expensive equipment or Photoshop — step by step.',
  keywords: ['amazon product photo white background', 'amazon image requirements', 'amazon product photography', 'white background for amazon', 'amazon seo product images'],
  openGraph: {
    title: 'How to Make Perfect White Backgrounds for Amazon',
    description: 'Step-by-step guide to Amazon-compliant product photos.',
    type: 'article',
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
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
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/blog" className="hover:text-gray-700">Blog</Link>
            <span className="mx-2">/</span>
            <span>White Background Amazon Product Images</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Make Perfect White Backgrounds for Amazon Product Images
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <span>March 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>

          <p className="text-lg text-gray-600 mb-8">
            Amazon requires pure white backgrounds. Not off-white, not light gray — <strong>RGB 255, 255, 255</strong>. Here is exactly how to get there.
          </p>

          <hr className="border-gray-100 my-12" />

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Amazon's Image Requirements (The Non-Negotiables)</h2>

          <p className="text-gray-600 mb-4">
            Before you touch Photoshop or any editing tool, know what Amazon actually requires:
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>Background:</strong> Pure white (RGB 255, 255, 255)</li>
            <li><strong>Longest side:</strong> At least 1000 pixels</li>
            <li><strong>Color space:</strong> RGB (not CMYK)</li>
            <li><strong>Format:</strong> JPG or PNG</li>
            <li><strong>File name:</strong> Descriptive, including product identifier</li>
            <li><strong>No watermarks, logos, or text</strong> on the main image</li>
            <li><strong>Product must fill 85%</strong> or more of the image frame</li>
          </ul>

          <p className="text-gray-600 mb-6">
            If your background isn't pure white, Amazon will reject your main image. It's that strict.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Method 1: Shooting with a White Background</h2>

          <p className="text-gray-600 mb-4">
            The cleanest path to Amazon compliance is getting it right in camera.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What You Need</h3>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>White sweep</strong> — A curved white backdrop (purchasable for $20-50, or use a white sheet/poster board)</li>
            <li><strong>Two lights minimum</strong> — One on each side, pointing at the backdrop (not directly at the product)</li>
            <li><strong>Camera or smartphone</strong> — 10MP or higher is fine</li>
            <li><strong>Tripod</strong> — Keeps everything consistent</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Setup</h3>

          <p className="text-gray-600 mb-4">
            The goal is even, shadow-free white lighting:
          </p>

          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li>Place your white sweep on a table, curved from flat surface up the back</li>
            <li>Position two lights at 45-degree angles, illuminating the backdrop (not the product directly)</li>
            <li>Place your product in the center of the sweep</li>
            <li>Shoot with plenty of clearance around the product</li>
          </ol>

          <p className="text-gray-600 mb-6">
            With proper lighting, your camera captures a near-white background that meets Amazon standards without any editing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Method 2: AI Background Removal</h2>

          <p className="text-gray-600 mb-4">
            Don't have a lightbox setup? AI tools can transform any photo into an Amazon-compliant image.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Using BGRemover</h3>

          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>Photograph your product</strong> — Even on a cluttered desk or colored background</li>
            <li><strong>Upload to BGRemover</strong></li>
            <li><strong>Download</strong> — BGRemover outputs transparent PNGs by default</li>
            <li><strong>Add white background</strong> — Open in any image editor, add a white layer behind the product</li>
          </ol>

          <p className="text-gray-600 mb-6">
            This works especially well if your original photo has decent contrast between the product and the background.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Method 3: Manual Editing (For Complex Images)</h2>

          <p className="text-gray-600 mb-4">
            For tricky products (dark items, reflective surfaces, transparent packaging), manual editing may be necessary.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">In Photoshop (Or Free Alternatives)</h3>

          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li>Open your image</li>
            <li>Select the product using the <strong>Quick Selection Tool</strong> or <strong>Magic Wand</strong></li>
            <li>Go to <strong>Select → Inverse</strong> to select the background</li>
            <li>Hit <strong>Delete</strong> to remove it</li>
            <li>Add a new layer filled with pure white (R:255, G:255, B:255) behind the product</li>
            <li>Save as JPG or PNG</li>
          </ol>

          <p className="text-gray-600 mb-6">
            For free alternatives, use <strong>Photopea.com</strong> (browser-based, similar interface) or <strong>GIMP</strong> (free desktop app).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Check If Your Background Is White Enough</h2>

          <p className="text-gray-600 mb-4">
            Amazon's definition of white is precise. Here's how to verify:
          </p>

          <ol className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li>Open your image in Photoshop or a free editor like Photopea</li>
            <li>Use the <strong>Eyedropper Tool</strong></li>
            <li>Sample a spot in the background (not near the product edge)</li>
            <li>Check the RGB values: each channel should be <strong>255</strong></li>
          </ol>

          <p className="text-gray-600 mb-4">
            If you see values like 254, 254, 254 — that's close enough. But anything noticeably lower (like 240, 235, 230) will likely get rejected.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
            <li><strong>Grey backgrounds</strong> — The most common rejection reason. Even light grey isn't white enough.</li>
            <li><strong>Shadow gradients</strong> — Shadows that fade from the product are okay; background gradients aren't.</li>
            <li><strong>Cropping too tight</strong> — Remember Amazon wants the product to fill 85% of the frame, not edge-to-edge.</li>
            <li><strong>Wrong color space</strong> — CMYK images will be rejected. Always use RGB.</li>
            <li><strong>JPEG artifacts</strong> — Multiple saves at low quality create artifacts Amazon may flag.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Quick Reference: Amazon Image Checklist</h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
            <li>✅ Background is pure white (RGB 255, 255, 255)</li>
            <li>✅ Longest side is at least 1000 pixels</li>
            <li>✅ RGB color space (not CMYK)</li>
            <li>✅ JPG or PNG format</li>
            <li>✅ Product fills 85%+ of frame</li>
            <li>✅ No watermarks, text, or logos on main image</li>
            <li>✅ Descriptive filename (e.g., product-name-main.jpg)</li>
          </ul>

          <div className="bg-blue-50 rounded-xl p-6 mt-10">
            <h3 className="font-semibold text-gray-900 mb-2">Need a White Background Now?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Upload any product photo and get an Amazon-ready white background in seconds — free, no signup required.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Remove Background Free →
            </Link>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2026 BGRemover. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
