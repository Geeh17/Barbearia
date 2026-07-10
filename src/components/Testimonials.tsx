import { Reveal } from "./Reveal";

const QUOTE = {
  text: "Atendimento muito bom, sempre prestativos, ágeis e atenciosos. Preço justo e vários programas de vantagens!",
  author: "Robson Jordan",
  role: "Cliente desde 2019",
};

const SECONDARY = [
  {
    text: "Levei meu filho pela primeira vez e o cuidado foi o mesmo de um cliente antigo. Voltamos sempre.",
    author: "Marcela Nogueira",
  },
  {
    text: "O degradê saiu exatamente como pedi, e olha que eu sou exigente. Virei cliente fiel.",
    author: "Diego Torres",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ink text-ivory py-24 sm:py-28">
      <div className="container-lg">
        <Reveal className="max-w-3xl">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" className="text-brass mb-6">
            <path
              fill="currentColor"
              d="M9.5 6C6.46 6 4 8.46 4 11.5S6.46 17 9.5 17c.34 0 .67-.03 1-.09-.6 1.6-2.02 2.8-3.79 3.06a1 1 0 0 0 .29 1.98C10.6 21.4 13 17.9 13 13.5V11.5C13 8.46 11.54 6 9.5 6Zm10 0C16.46 6 14 8.46 14 11.5S16.46 17 19.5 17c.34 0 .67-.03 1-.09-.6 1.6-2.02 2.8-3.79 3.06a1 1 0 0 0 .29 1.98C20.6 21.4 23 17.9 23 13.5V11.5C23 8.46 21.54 6 19.5 6Z"
            />
          </svg>
          <p className="font-display text-2xl sm:text-3xl leading-snug">
            “{QUOTE.text}”
          </p>
          <p className="mt-6 text-brassLight font-semibold uppercase tracking-[0.08em] text-sm">
            {QUOTE.author} <span className="text-ivory2/60 font-normal normal-case">— {QUOTE.role}</span>
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mt-16 pt-16 border-t border-ivory/10">
          {SECONDARY.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <p className="text-ivory2/90 leading-relaxed">“{t.text}”</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-ivory2/60">
                {t.author}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
