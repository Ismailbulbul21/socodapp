import { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-7">
      <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className="space-y-3 text-sm leading-6 text-slate-700 sm:text-base">{children}</div>
    </section>
  );
}
