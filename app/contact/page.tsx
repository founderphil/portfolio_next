export default function ContactPage() {
  return (
    <div className="py-16 space-y-8">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="text-neutral-400 max-w-2xl">Plain email, calendar link (optional), social.</p>
      <div className="mt-8">
        <a href="mailto:phil@olartedesign.com" className="underline">Email Phil</a>
      </div>
    </div>
  );
}
