import { useState } from "react";
import Brand from "./Brand";
import { nomorwa } from "../config";
import { trackClick } from "../lib/track";
import { useTheme } from "../lib/theme";
import ThemeToggle from "./ThemeToggle";

const nav = [
  ["Beranda", "#home"],
  ["Layanan", "#layanan"],
  ["Tentang", "#tentang"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, setMode } = useTheme();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className="sticky top-0 z-40 border-b border-blue-50 bg-white/90 shadow-sm backdrop-blur-xl"
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Brand />

        {/* Mobile: toggle tema + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle mode={mode} setMode={setMode} size="sm" />

          <button
            type="button"
            className="rounded-xl p-2 text-2xl text-[#024C99] transition-transform duration-300 hover:bg-blue-50"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              aria-hidden="true"
              className={`block transition-transform duration-300 ${
                menuOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Menu Desktop */}
        <div className="hidden items-center gap-2 md:flex">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-blue-50 hover:text-[#024C99]"
            >
              {label}
            </a>
          ))}

          <ThemeToggle mode={mode} setMode={setMode} />

          <a
            onClick={() => trackClick("navbar")}
            href={`https://wa.me/${nomorwa}?text=${encodeURIComponent(
              "Halo SmartDeck, saya ingin konsultasi gratis."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC] px-5 py-3 text-center text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5"
          >
            Konsultasi gratis ↗
          </a>
        </div>

        <div
          id="mobile-menu"
          aria-hidden={!menuOpen}
          className={`absolute left-0 right-0 top-full grid overflow-hidden bg-white shadow-lg transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
            menuOpen
              ? "grid-rows-[1fr] border-b border-blue-100 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="space-y-1 px-5 py-3">
              {nav.map(([label, href], index) => (
                <a
                  key={href}
                  href={href}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: menuOpen ? `${index * 40}ms` : "0ms",
                  }}
                  className={`block rounded-lg px-4 py-3 text-sm font-bold text-slate-600 transition-all duration-300 hover:bg-blue-50 hover:text-[#024C99] ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                >
                  {label}
                </a>
              ))}

              <a
                href={`https://wa.me/${nomorwa}?text=${encodeURIComponent(
                  "Halo SmartDeck, saya ingin konsultasi gratis."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => {
                  trackClick("navbar-mobile");
                  closeMenu();
                }}
                style={{
                  transitionDelay: menuOpen ? `${nav.length * 40}ms` : "0ms",
                }}
                className={`mt-2 block rounded-full bg-gradient-to-r from-[#024C99] to-[#009DFC] px-5 py-3 text-center text-sm font-extrabold text-white shadow-lg shadow-blue-200 transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-2 opacity-0"
                }`}
              >
                Konsultasi gratis ↗
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}