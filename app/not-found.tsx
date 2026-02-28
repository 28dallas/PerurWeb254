import Link from "next/link";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="rounded-xl2 bg-softGray p-8 text-center">
        <h1 className="text-3xl font-bold text-brandBlue">Page not found</h1>
        <p className="mt-3 text-slate-600">The page you requested does not exist.</p>
        <Link href="/" className="mt-5 inline-block text-sm font-semibold text-brandGreen">
          Return home
        </Link>
      </div>
    </Section>
  );
}
