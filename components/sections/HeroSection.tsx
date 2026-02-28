import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteImages } from "@/lib/site-images";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={siteImages.hero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brandBlue/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-brandBlue/90 via-brandBlue/70 to-brandGreen/60" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 container-padding lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brandOrange">West Pokot, Kenya</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Empowering women, protecting children, and fostering a sustainable environment in West Pokot County, Kenya.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Perur Rays of Hope is a community-based organization dedicated to empowering women, protecting children, promoting education, and
            conserving the environment in West Pokot County.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/donate" variant="secondary">
              Donate
            </Button>
            <Button href="/get-involved" variant="ghost" className="bg-white/10 text-white ring-white/30 hover:bg-white hover:text-brandBlue">
              Get Involved
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
