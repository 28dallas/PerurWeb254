import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("section-space", className)}>
      <div className="mx-auto w-full max-w-7xl container-padding">
        {(title || subtitle) && (
          <header className="mb-8 max-w-3xl">
            {title && <h2 className="text-3xl font-bold tracking-tight text-brandBlue sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-3 text-base text-slate-600 sm:text-lg">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
