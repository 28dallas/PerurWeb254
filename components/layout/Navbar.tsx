"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3, HiX, HiOutlineUserCircle } from "react-icons/hi";
import { Button } from "@/components/ui/Button";
import { siteImages } from "@/lib/site-images";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Stories" },
  { href: "/gallery", label: "Gallery" },
  { href: "/careers", label: "Careers" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-brandBlue/10 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between container-padding py-3" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-4" aria-label="Perur Rays of Hope home">
          <Image
            src={siteImages.logo}
            alt="Perur Rays of Hope logo"
            width={180}
            height={60}
            className="h-auto w-32 shrink-0 object-contain sm:w-40"
            priority
          />

        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className={cn("text-sm font-semibold transition-colors hover:text-brandGreen", isActive(item.href) ? "text-brandOrange" : "text-slate-600")}>
              {item.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-4 border-l border-slate-200 pl-6">
            <Link href="/portal" className="text-slate-500 transition-colors hover:text-brandBlue" aria-label="Supporter Portal Login">
              <HiOutlineUserCircle size={24} />
            </Link>
            <Button href="/donate" variant="secondary" className="rounded-full px-5 py-2 text-sm shadow-none">
              Give today
            </Button>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full p-2 text-brandBlue hover:bg-slate-100 xl:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      <div id="mobile-menu" className={cn("border-t border-slate-200 bg-white xl:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto flex max-w-7xl flex-col gap-1 container-padding py-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-slate-100", isActive(item.href) ? "bg-brandOrange/10 text-brandOrange" : "text-slate-700")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(false)}
          >
            <HiOutlineUserCircle size={20} className="text-brandBlue" />
            Portal Login
          </Link>
          <Button href="/donate" variant="secondary" className="mt-2 w-full justify-center rounded-full">
            Give today
          </Button>
        </div>
      </div>
    </header>
  );
}
