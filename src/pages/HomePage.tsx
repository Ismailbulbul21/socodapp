import { Link } from "react-router-dom";
import Seo from "../components/Seo";

const cards = [
  {
    title: "Policy",
    description: "Understand what information Socod collects and how we use it responsibly.",
    to: "/policy",
    cta: "Read Policy"
  },
  {
    title: "Terms of Service",
    description: "Review user responsibilities, fairness rules, and competition terms.",
    to: "/terms",
    cta: "Read Terms"
  },
  {
    title: "Data Deletion",
    description: "Learn how to delete your account and what data is removed or retained.",
    to: "/data-deletion",
    cta: "View Deletion Process"
  },
  {
    title: "Contact",
    description: "Reach our support team for privacy, terms, rewards, and technical questions.",
    to: "/contact",
    cta: "Contact Support"
  }
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Socod Legal & Policies"
        description="Official legal and policy center for Socod: Privacy Policy, Terms of Service, Data Deletion, and Contact."
      />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <section className="rounded-3xl bg-gradient-to-br from-brand-900 to-brand-700 p-6 text-white shadow-soft sm:p-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Legal & Policies for Socod</h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-cyan-100 sm:text-base">
            This website is the official legal and policy hub for Socod. Here you can read our Policy, Terms of Service, Data Deletion process, and support Contact details in one place.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">About Socod</h2>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            Socod is a mobile app for Android and iOS focused on walking activity and weekly competition.
            Users can track steps using motion and pedometer sensors, set daily/weekly/monthly goals,
            start and stop walking sessions, and monitor progress over time.
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
            Socod also supports group participation and social engagement through group chat with text,
            images, and voice messages. Leaderboards update weekly to reflect competition rankings, and
            step data is validated with anti-cheat checks so results stay fair for all participants.
          </p>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.to}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
            >
              <div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
              </div>
              <Link
                to={card.to}
                className="mt-5 inline-flex w-fit rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white no-underline transition hover:bg-brand-700"
              >
                {card.cta}
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
