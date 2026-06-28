import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-start justify-center px-4 py-16 sm:px-6">
      <Seo title="Page Not Found | Socod Legal" description="The requested Socod legal page was not found." />
      <p className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">Error 404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-xl text-slate-600">
        The page you requested does not exist or has moved. Use the links below to return to the legal hub.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to="/"
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white no-underline transition hover:bg-brand-700"
        >
          Go to Home
        </Link>
        <Link
          to="/privacy"
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 no-underline transition hover:bg-slate-100"
        >
          Privacy Policy
        </Link>
      </div>
    </main>
  );
}
