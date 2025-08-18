import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 text-center text-xs text-neutral-500">
      © {new Date().getFullYear()} Phil Olarte · Built with Next.js · Designed for social play<br />
       <a href="https://paodaoinc.com" className="underline">paodaoinc.com</a>  ·  <a href="https://storyversenyc.com" className="underline">storyversenyc.com</a>
    </footer>
  );
}