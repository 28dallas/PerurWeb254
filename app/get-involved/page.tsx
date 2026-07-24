import { PageHero } from "@/components/layout/PageHero";
import { ValidatedForm } from "@/components/forms/ValidatedForm";
import { HandHeart, BriefcaseBusiness, GraduationCap } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero eyebrow="Take part" title="Bring your skills. Share the possibility." description="There is a place for everyone who believes resilient communities can shape their own futures." imageSrc="/images/new/photo_80_2026-03-03_11-10-37.jpg" />
      <section className="bg-[#f4f1e9] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-brandGreen">Get involved</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-brandBlue sm:text-5xl">Your energy can help turn local ambition into shared progress.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[["Volunteer", "Give your time, skills and encouragement to work that matters.", HandHeart], ["Partner", "Build practical, lasting solutions with communities in West Pokot.", BriefcaseBusiness], ["Intern", "Learn alongside our team and help shape meaningful local impact.", GraduationCap]].map(([title, text, Icon]) => { const CardIcon = Icon as typeof HandHeart; return <article key={title as string} className="bg-white p-8"><CardIcon className="h-7 w-7 text-brandGreen" /><h3 className="mt-12 font-serif text-3xl text-brandBlue">{title as string}</h3><p className="mt-4 leading-relaxed text-slate-600">{text as string}</p></article>; })}
          </div>
        </div>
      </section>
      <section className="bg-brandBlue py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-amber-300">Start a conversation</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl text-white sm:text-5xl">Tell us how you would like to contribute.</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          <ValidatedForm title="Volunteer with PRoH" formType="volunteer" />
          <ValidatedForm title="Partner with PRoH" formType="partnership" />
          <ValidatedForm title="Intern with PRoH" formType="internship" />
        </div>
        </div>
      </section>
    </>
  );
}
