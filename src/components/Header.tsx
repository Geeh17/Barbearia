import { useEffect, useState } from "react";
import logo from "../assets/images/logo.webp";
import { ThemeToggle } from "./ThemeToggle";
import type { Theme } from "../hooks/useTheme";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#precos", label: "Preços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ivory/95 dark:bg-ink/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-lg flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Barbearia Corte Turbo JF"
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-lg sm:text-xl font-semibold tracking-wide">
            Barbearia Corte Turbo JF
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-[0.08em] hover:text-brass transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a href="#agendar" className="btn-primary !px-6 !py-3 text-xs">
            Agendar horário
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="relative h-10 w-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-ivory dark:bg-ink border-t border-ink/10 dark:border-ivory/10">
          <ul className="container-lg flex flex-col py-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.08em] hover:text-brass"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#agendar"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full !py-3 text-xs"
              >
                Agendar horário
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
