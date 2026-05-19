import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  href?: string;
}

const styles: Record<Variant, string> = {
  primary: "bg-brandBlue text-white hover:bg-brandGreen focus-visible:outline-brandBlue",
  secondary: "bg-brandOrange text-slate-900 hover:bg-amber-400 focus-visible:outline-brandOrange",
  ghost: "bg-white text-brandBlue ring-1 ring-brandBlue/20 hover:bg-brandBlue hover:text-white"
};

export function Button({ children, className, variant = "primary", href, ...props }: ButtonProps) {
  const baseClass = cn(
    "inline-flex items-center justify-center rounded-xl2 px-5 py-3 text-sm font-semibold shadow-soft",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    "transition-all duration-300",
    styles[variant],
    className
  );

  if (href) {
    const isExternalLink = /^(mailto:|tel:|https?:)/.test(href);

    if (isExternalLink) {
      return (
        <a href={href} className={baseClass}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
