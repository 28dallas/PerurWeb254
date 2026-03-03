"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type Props = { images: string[] };

export default function InteractiveGallery({ images }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {images.map((src) => (
          <button
            key={src}
            onClick={() => setOpen(src)}
            className="relative aspect-square w-full overflow-hidden rounded-md bg-softGray focus:outline-none transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 will-change-transform"
          >
            <Image
              src={src}
              alt="Program gallery image"
              fill
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 overflow-auto"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-w-[70vw] max-h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={open}
              alt="Expanded image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain block mx-auto"
            />
            <button
              onClick={() => setOpen(null)}
              className="absolute top-2 right-2 rounded bg-white/90 px-3 py-1 text-sm font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
