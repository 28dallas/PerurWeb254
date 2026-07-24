import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteImages } from "@/lib/site-images";
import { getSiteSettings } from "@/lib/sanity/fetchers";

const explore = [{ href: "/about", label: "Our story" }, { href: "/blog", label: "Stories from the field" }, { href: "/gallery", label: "Gallery" }, { href: "/careers", label: "Careers" }];
const action = [{ href: "/get-involved", label: "Get involved" }, { href: "/donate", label: "Give today" }, { href: "/resources", label: "Resources" }, { href: "/policies", label: "Policies" }];

export async function Footer() {
  const settings = await getSiteSettings();
  const email = settings?.email || "info@perurraysofhope.org";
  const phone = settings?.phone || "+254 724 578225";
  const address = settings?.address || "Kapenguria, West Pokot County, Kenya";
  const socials = [
    { label: "Facebook", href: "https://www.facebook.com/share/18huRdaCSr/", icon: <FaFacebookF /> },
    { label: "Instagram", href: "https://www.instagram.com/perurrayofhope?igsh=MWRwc200ZXdrYnB1cQ==", icon: <FaInstagram /> },
    { label: "LinkedIn", href: settings?.socialLinks?.linkedin, icon: <FaLinkedinIn /> },
    { label: "X", href: "https://x.com/PerurRayofHope", icon: <FaXTwitter /> }
  ].filter((item) => Boolean(item.href));

  return <footer className="bg-[#052a46] text-white">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_.75fr_.75fr_1fr] lg:px-8 lg:py-20">
      <div><Image src={siteImages.logo} alt="Perur Rays of Hope logo" width={180} height={60} className="h-auto w-32 object-contain sm:w-40" /><p className="mt-7 max-w-sm text-sm leading-relaxed text-white/70">Safeguarding children, empowering women and youth, and conserving the environment for resilient livelihoods.</p><Link href="/donate" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-white">Support the work <ArrowUpRight className="h-4 w-4" /></Link></div>
      <div><h2 className="text-xs font-bold uppercase tracking-[.18em] text-amber-300">Explore</h2><ul className="mt-5 space-y-3">{explore.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/75 hover:text-white">{link.label}</Link></li>)}</ul></div>
      <div><h2 className="text-xs font-bold uppercase tracking-[.18em] text-amber-300">Take action</h2><ul className="mt-5 space-y-3">{action.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/75 hover:text-white">{link.label}</Link></li>)}</ul></div>
      <div><h2 className="text-xs font-bold uppercase tracking-[.18em] text-amber-300">Find us</h2><div className="mt-5 space-y-4 text-sm leading-relaxed text-white/75"><p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />{address}</p><a href={`mailto:${email}`} className="flex gap-3 hover:text-white"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />{email}</a><a href={`tel:${phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-white"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />{phone}</a></div><div className="mt-7 flex gap-2">{socials.map((item) => <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-sm hover:border-amber-300 hover:bg-amber-300 hover:text-brandBlue">{item.icon}</a>)}</div></div>
    </div>
    <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-4 py-5 text-xs text-white/50 sm:px-6 lg:px-8"><span>© {new Date().getFullYear()} Perur Rays of Hope.</span><span>West Pokot, Kenya</span></div></div>
  </footer>;
}
