import React from "react";

export default function CredStrip() {
  return (
    <section className="py-8 border-y border-neutral-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center text-sm text-neutral-400">
        <div className="space-y-1">
          <p className="font-medium text-neutral-200">FAIRYLAND</p>
          <p>Live + AI storyworld</p>
        </div>
        <div className="space-y-1">
          <p className="font-medium text-neutral-200">MAIA</p>
          <p>Real‑time AI character</p>
        </div>
        <div className="space-y-1">
          <p className="font-medium text-neutral-200">ChalkNotes</p>
          <p>XR authoring + trails</p>
        </div>
        <div className="space-y-1">
          <p className="font-medium text-neutral-200">Emily Was Here</p>
          <p>Poetic audio walk</p>
        </div>
      </div>
    </section>
  );
}