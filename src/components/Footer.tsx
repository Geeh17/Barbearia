import logo from "../assets/images/logo.webp";

const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ivory2 py-10">
      <div className="container-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Barbearia Corte Turbo JF"
            className="h-8 w-8 object-contain"
          />
          <span className="font-display text-base">
            Barbearia Corte Turbo JF
          </span>
        </a>

        <nav className="flex gap-6">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.1em] hover:text-brass transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-ivory2/60">
          © {new Date().getFullYear()} Barbearia Corte Turbo JF. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
