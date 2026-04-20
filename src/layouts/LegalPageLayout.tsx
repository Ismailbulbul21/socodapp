import { ReactNode } from "react";
import Seo from "../components/Seo";

type LegalPageLayoutProps = {
  title: string;
  description: string;
  heading: string;
  subheading?: string;
  children: ReactNode;
};

export default function LegalPageLayout({
  title,
  description,
  heading,
  subheading,
  children
}: LegalPageLayoutProps) {
  return (
    <>
      <Seo title={title} description={description} />
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
        <header className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h1>
          {subheading ? <p className="mt-3 max-w-3xl text-slate-600">{subheading}</p> : null}
        </header>
        <div className="space-y-4">{children}</div>
      </main>
    </>
  );
}
