import './globals.css';

export const metadata = {
  title: 'Phil Olarte · Product Design · AI & XR',
  description: 'Story-led product design across AI, XR, and data systems.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-neutral-950 text-neutral-200 antialiased">
        <main className="mx-auto max-w-6xl px-6">{children}</main>
      </body>
    </html>
  );
}
