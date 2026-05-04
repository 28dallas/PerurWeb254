import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { siteImages } from "@/lib/site-images";
import { getSiteSettings } from "@/lib/sanity/fetchers";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/policies", label: "Policies" }
];

// Social media links with fallback URLs
export async function Footer() {
  const siteSettings = await getSiteSettings();
  // Use the correct social media URLs directly
  const facebookUrl = "https://www.facebook.com/share/18huRdaCSr/";
  const instagramUrl = "https://www.instagram.com/perurrayofhope?igsh=MWRwc200ZXdrYnB1cQ==";
  const xUrl = "https://x.com/PerurRayofHope";
  const contactEmail = siteSettings?.email || "info@perurraysofhope.org";
  const contactPhone = siteSettings?.phone || "+254 724578225";
  const contactAddress = siteSettings?.address || "West Pokot County, Kenya";

  const socialLinks = [
    { label: "Facebook", href: facebookUrl, icon: <FaFacebookF /> },
    { label: "Instagram", href: instagramUrl, icon: <FaInstagram /> },
    { label: "LinkedIn", href: siteSettings?.socialLinks?.linkedin, icon: <FaLinkedinIn /> },
    { label: "X", href: xUrl, icon: <FaXTwitter /> }
  ].filter((item) => Boolean(item.href));

  return (
    <footer className="bg-brandBlue text-white">
      <div className="mx-auto grid max-w-7xl gap-10 container-padding py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src={siteImages.logo} alt="Perur Rays of Hope logo" width={40} height={40} className="rounded-full object-cover" />
            <h3 className="text-xl font-bold">Perur Rays of Hope</h3>
          </div>
          <p className="mt-3 text-sm text-slate-200">
            Safeguarding children, empowering youths and women, and conserving the environment for resilient livelihoods.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white hover:text-brandOrange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Contact</h4>
          <p className="mt-3 text-sm">{contactAddress}</p>
          <p className="text-sm">{contactEmail}</p>
          <p className="text-sm">{contactPhone}</p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm text-slate-200 hover:text-brandOrange"
          >
            @perurrayofhope
          </a>
          {socialLinks.length > 0 && (
            <div className="mt-4 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  aria-label={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/10 p-2 hover:bg-brandGreen"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-200">
        © {new Date().getFullYear()} Perur Rays of Hope. All rights reserved.
      </div>
    </footer>
  );
}
