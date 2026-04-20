import { Link } from "react-router-dom";
import { EFFECTIVE_DATE, SUPPORT_EMAIL } from "../content/constants";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 text-sm text-slate-600 sm:grid-cols-2 sm:px-6">
        <div>
          <p className="font-semibold text-slate-900">Socod Legal & Policies</p>
          <p className="mt-2">Support: {SUPPORT_EMAIL}</p>
          <p>Effective date reference: {EFFECTIVE_DATE}</p>
        </div>
        <div className="flex flex-wrap items-start gap-x-4 gap-y-2 sm:justify-end">
          <Link to="/">Home</Link>
          <Link to="/policy">Policy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/data-deletion">Data Deletion</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
