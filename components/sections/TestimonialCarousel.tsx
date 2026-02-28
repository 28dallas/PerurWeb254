"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "@/lib/types";

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const items = useMemo(() => testimonials.slice(0, 5), [testimonials]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => setActive((prev) => (prev + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div className="rounded-xl2 bg-white p-8 shadow-soft">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={items[active]._id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="text-lg text-slate-700"
        >
          “{items[active].quote}”
        </motion.blockquote>
      </AnimatePresence>
      <p className="mt-4 text-sm font-semibold text-brandBlue">{items[active].name}</p>
      <p className="text-sm text-slate-500">{items[active].role}</p>
      <div className="mt-4 flex gap-2">
        {items.map((item, index) => (
          <button
            key={item._id}
            onClick={() => setActive(index)}
            className={`h-2.5 w-2.5 rounded-full ${index === active ? "bg-brandBlue" : "bg-slate-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
