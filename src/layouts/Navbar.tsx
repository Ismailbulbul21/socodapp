import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/privacy", label: "Policy" },
  { to: "/terms", label: "Terms" },
  { to: "/data-deletion", label: "Data Deletion" },
  { to: "/contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <NavLink to="/" className="text-lg font-bold text-slate-900 no-underline">
          Socod Legal
        </NavLink>
        <ul className="flex flex-wrap items-center justify-end gap-2 text-sm sm:gap-3">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-1.5 no-underline transition ${
                    isActive
                      ? "bg-brand-100 text-brand-900"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
