import React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StoryverseNYC",
  description:
    "Transmedia storytelling studio spanning film, immersive theater, XR, and AI.",
  openGraph: {
    title: "StoryverseNYC",
    description:
      "Transmedia storytelling studio spanning film, immersive theater, XR, and AI.",
    url: "https://storyversenyc.com",
    siteName: "StoryverseNYC",
    type: "website",
    images: [
      {
        url: "images/social_logo.png",
        width: 1200,
        height: 630,
        alt: "StoryverseNYC social image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StoryverseNYC",
    description:
      "Transmedia storytelling studio spanning film, immersive theater, XR, and AI.",
    images: ["images/social_logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
