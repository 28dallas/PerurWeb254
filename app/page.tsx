import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Heart, Leaf, ShieldCheck, Sprout, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Newsletter } from "@/components/sections/Newsletter";
import { getBlogPosts, getHomepageData, getTestimonials } from "@/lib/sanity/fetchers";
import { urlFor } from "@/lib/sanity/client";

const image = {
  hero: "/images/rays/photo_2026-05-19_13-57-34.jpg",
  community: "/images/rays/photo_2026-05-19_13-57-36.jpg",
  graduates: "/images/rays/photo_2026-05-19_13-57-30.jpg",
  skills: "/images/rays/photo_2026-05-19_13-57-27.jpg",
  women: "/images/rays/photo_2026-05-19_13-57-42 (2).jpg",
  youth: "/images/rays/photo_2026-05-19_13-57-59.jpg",
  children: "/images/rays/photo_2026-05-19_13-57-49.jpg",
  environment: "/images/new/photo_30_2026-03-03_11-10-37.jpg"
};

const areas = [
  { title: "Safe childhoods", description: "Safeguarding children through trusted community protection systems.", icon: ShieldCheck, image: image.children },
  { title: "Women with agency", description: "Supporting women to build income, confidence and leadership.", icon: Heart, image: image.women },
  { title: "Youth with opportunity", description: "Growing practical skills and pathways to dignified work.", icon: UsersRound, image: image.youth },
  { title: "Land that sustains", description: "Restoring ecosystems for resilient families and futures.", icon: Leaf, image: image.environment }
];

export default async function HomePage() {
  const [posts, testimonials, homepage] = await Promise.all([getBlogPosts(), getTestimonials(), getHomepageData()]);
  const stats = homepage.impactStats?.length ? homepage.impactStats : [
    { label: "Children supported", value: "1,500+" },
    { label: "Youth skilled", value: "620+" },
    { label: "Women in savings groups", value: "480+" },
    { label: "Trees planted", value: "35,000+" }
  ];
  const featureImage = homepage.ctaImage?.asset?._ref
    ? urlFor(homepage.ctaImage).width(1600).height(900).url()
    : homepage.ctaImage?.asset?.url || image.skills;
  const story = testimonials[0];

  return (
    <>
      <section className="relative isolate min-h-[720px] overflow-hidden bg-brandBlue text-white sm:min-h-[760px]">
        <Image src={image.hero} alt="Young women celebrating their graduation" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052a46]/95 via-[#073658]/75 to-[#073658]/15" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#052a46]/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:min-h-[760px] sm:px-6 sm:pb-20 lg:px-8">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-300"><span className="h-px w-10 bg-amber-300" />West Pokot, Kenya</p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[.98] tracking-tight sm:text-6xl lg:text-7xl">
            Possibility begins when a community is seen.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Perur Rays of Hope works alongside women, young people and families to turn potential into resilient livelihoods.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/get-involved" variant="secondary" className="rounded-full px-7 py-3.5">Join the movement <ArrowRight className="ml-2 h-4 w-4" /></Button>
            <Button href="/about" variant="ghost" className="rounded-full bg-white/10 px-7 py-3.5 text-white ring-white/40 hover:bg-white hover:text-brandBlue">Discover our work</Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1e9] py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brandGreen">Our purpose</p>
          <p className="font-serif text-3xl leading-tight text-brandBlue sm:text-4xl">
            We create the conditions for children to thrive, young people to work with dignity, women to lead, and the environment to sustain every generation.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brandGreen">What we make possible</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-brandBlue sm:text-5xl">Progress that starts close to home.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">We listen first, then work with communities to build solutions that are practical, lasting and led locally.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => {
              const Icon = area.icon;
              return <article key={area.title} className="group relative min-h-[350px] overflow-hidden bg-brandBlue p-7 text-white">
                <Image src={area.image} alt="" fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062e4a]/95 via-[#062e4a]/35 to-transparent" />
                <div className="relative flex h-full flex-col justify-end">
                  <Icon className="mb-auto h-6 w-6 text-amber-300" />
                  <h3 className="mt-16 font-serif text-3xl leading-none">{area.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/85">{area.description}</p>
                </div>
              </article>;
            })}
          </div>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brandBlue hover:text-brandGreen">Explore our approach <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="overflow-hidden bg-brandBlue py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">By the numbers</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">A shared commitment to a stronger West Pokot.</h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">Every number represents a person, a family or a piece of land moving closer to a secure future.</p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-amber-300 hover:text-white">See our impact <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 border-l border-t border-white/20">
            {stats.slice(0, 4).map((stat) => <div key={stat.label} className="border-b border-r border-white/20 px-5 py-8 sm:px-8 sm:py-10">
              <p className="font-serif text-4xl text-amber-300 sm:text-5xl">{stat.value}</p>
              <p className="mt-3 max-w-[10rem] text-sm leading-snug text-white/75">{stat.label}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1e9] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative min-h-[450px] overflow-hidden rounded-[2rem]">
            <Image src={image.community} alt="Community members gathered outdoors in West Pokot" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-5 py-3 text-sm font-bold text-brandBlue">Community-led. Future-focused.</div>
          </div>
          <div className="flex flex-col justify-center lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brandGreen">A community voice</p>
            {story ? <blockquote className="mt-6 font-serif text-3xl leading-tight text-brandBlue sm:text-4xl">“{story.quote}”</blockquote> : <blockquote className="mt-6 font-serif text-3xl leading-tight text-brandBlue sm:text-4xl">“When people are equipped and connected, they become the authors of their own change.”</blockquote>}
            {story && <p className="mt-6 text-sm font-bold text-slate-600">{story.name} <span className="font-normal">· {story.role}</span></p>}
            <Link href="/gallery" className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-brandBlue hover:text-brandGreen">Meet the people behind the progress <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-brandGreen">From the field</p><h2 className="mt-4 font-serif text-4xl text-brandBlue sm:text-5xl">Stories in motion.</h2></div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-brandBlue hover:text-brandGreen">Read all stories <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid gap-7 lg:grid-cols-3">
            {posts.slice(0, 3).map((post, index) => {
              const src = post.featuredImage?.asset?._ref ? urlFor(post.featuredImage).width(900).height(650).url() : post.featuredImage?.asset?.url || [image.graduates, image.skills, image.community][index];
              return <Link href={`/blog/${post.slug.current}`} key={post._id} className="group block">
                <div className="relative aspect-[1.18] overflow-hidden rounded-[1.5rem]"><Image src={src} alt={post.featuredImage?.alt || "Perur Rays of Hope field activity"} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width:1024px) 33vw, 100vw" /></div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-brandGreen">{post.category || "Community news"}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-brandBlue group-hover:text-brandGreen">{post.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brandBlue">Read story <ArrowDownRight className="h-4 w-4" /></span>
              </Link>;
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-brandGreen py-20 text-white sm:py-28">
        <Image src={featureImage} alt="" fill className="-z-10 object-cover opacity-20" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-brandGreen/80" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:px-8">
          <div><Sprout className="h-9 w-9 text-amber-300" /><h2 className="mt-6 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Your support can unlock a future full of possibility.</h2></div>
          <div><p className="text-lg leading-relaxed text-white/85">Stand with communities building safety, skills and sustainable livelihoods from the ground up.</p><div className="mt-7 flex flex-wrap gap-3"><Button href="/donate" variant="secondary" className="rounded-full px-7">Give today <Heart className="ml-2 h-4 w-4" /></Button><Button href="/get-involved" variant="ghost" className="rounded-full bg-transparent text-white ring-white/50 hover:bg-white hover:text-brandGreen">Partner with us</Button></div></div>
        </div>
      </section>

      <section className="bg-[#f4f1e9] py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Newsletter /></div></section>
    </>
  );
}
