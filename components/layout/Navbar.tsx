"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3, HiX, HiOutlineUserCircle } from "react-icons/hi";
import { Button } from "@/components/ui/Button";
import { siteImages } from "@/lib/site-images";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between container-padding py-4" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" aria-label="Perur Rays of Hope home">
          <Image src={siteImages.logo} alt="Perur Rays of Hope logo" width={44} height={44} className="rounded-full object-cover" />
          <span className="text-base font-bold text-brandBlue sm:text-lg">Perur Rays of Hope</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-brandBlue">
              {item.label}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-4 border-l border-slate-200 pl-6">
            <Link href="/portal" className="text-slate-500 transition-colors hover:text-brandBlue" aria-label="Supporter Portal Login">
              <HiOutlineUserCircle size={24} />
            </Link>
            <Button href="/donate" variant="secondary" className="px-5 py-2 text-sm shadow-none">
              Donate
            </Button>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-brandBlue hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      <div id="mobile-menu" className={cn("border-t border-slate-200 bg-white lg:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto flex max-w-7xl flex-col gap-1 container-padding py-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
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
          <Button href="/donate" variant="secondary" className="mt-2 w-full justify-center">
            Donate
          </Button>
        </div>
      </div>
    </header>
  );
}
