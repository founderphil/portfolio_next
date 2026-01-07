import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://phillipolarte.com';
const siteTitle = 'Phil Olarte · Product Design · AI, XR & Emerging Technology';
const siteDescription = 'Portfolio site of Phillip Olarte. Product design across AI, XR, and data systems.';
const shareImage = '/images/olarte_headshot.jpeg';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Phil Olarte',
    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: 'Phil Olarte portfolio preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [shareImage],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-950 text-neutral-200 antialiased">
        <main className="mx-auto max-w-7xl px-6">{children}</main>
      </body>
    </html>
  );
}
