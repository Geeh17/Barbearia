import aboutImg from "../assets/images/foto-abaout.webp";
import { Reveal } from "./Reveal";

const STATS = [
  { value: "28", label: "Anos de barbearia" },
  { value: "3", label: "Barbeiros na casa" },
  { value: "12 mil+", label: "Cortes entregues" },
];

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="container-lg grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative rounded-sm overflow-hidden aspect-[4/5] max-w-md">
            <img
              src={aboutImg}
              alt="Interior da Barbearia Corte Turbo JF"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow mb-4">Sobre a casa</p>
          <h2 className="section-heading mb-6">
            Uma barbearia de bairro que virou ponto de encontro.
          </h2>
          <p className="text-smoke dark:text-ivory2/80 leading-relaxed mb-4">
            A Barbearia Corte Turbo JF nasceu em 1998 numa esquina do centro de
            Juiz de Fora, com uma cadeira, uma navalha e a vontade de fazer cada
            cliente sair de cabeça erguida. Hoje somos três barbeiros, uma
            cadeira de cada um, mas a mesma atenção aos detalhes de sempre.
          </p>
          <p className="text-smoke dark:text-ivory2/80 leading-relaxed mb-8">
            Aqui você não é só mais um horário na agenda: é conversa boa, café
            coado e um corte que combina com o seu jeito — não com a última
            tendência do feed.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-ink/10 dark:border-ivory/10 pt-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl sm:text-4xl text-brass">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-[0.1em] text-smoke dark:text-ivory2/70 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
