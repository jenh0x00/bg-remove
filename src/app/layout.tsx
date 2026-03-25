import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BGRemover - Free Online Image Background Remover',
    template: '%s | BGRemover',
  },
  description:
    'Remove image backgrounds instantly and for free. Perfect for ecommerce product photos on Amazon, Shopify, and your own store. No signup required.',
  keywords: [
    'background remover',
    'remove background from image',
    'image background remover',
    'transparent background',
    'product photo background',
    'ecommerce background remover',
    'free background remover',
    'online background remover',
  ],
  authors: [{ name: 'BGRemover' }],
  openGraph: {
    title: 'BGRemover - Free Online Image Background Remover',
    description:
      'Remove image backgrounds instantly and for free. Perfect for ecommerce product photos.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BGRemover - Free Online Image Background Remover',
    description:
      'Remove image backgrounds instantly and for free. Perfect for ecommerce product photos.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
