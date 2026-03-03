import { AnimatedInView } from "@/components/ui/AnimatedInView";
import { ImpactChart } from "@/components/ui/ImpactChart";

const stats = [
  { label: "Children supported", value: "1,500+" },
  { label: "Youth skilled (18+)", value: "620+" },
  { label: "Women in savings groups", value: "480+" },
  { label: "Trees planted", value: "35,000+" }
];

export function ImpactStats() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <AnimatedInView key={stat.label} delay={idx * 0.05}>
            <div className="rounded-xl2 bg-white p-6 shadow-soft">
              <p className="text-3xl font-bold text-brandBlue">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </div>
          </AnimatedInView>
        ))}
      </div>

      <AnimatedInView delay={0.2}>
        <ImpactChart />
      </AnimatedInView>
    </div>
  );
}
