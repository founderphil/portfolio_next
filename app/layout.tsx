import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Phil Olarte · Product Design · AI, XR & Emerging Technology',
  description: 'Story-led product design across AI, XR, and data systems.'
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
