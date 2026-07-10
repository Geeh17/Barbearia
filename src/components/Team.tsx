import barbeiro1 from "../assets/images/barbeiro1.webp";
import barbeiro2 from "../assets/images/barbeiro2.webp";
import barbeiro3 from "../assets/images/barbeiro3.webp";
import { Reveal } from "./Reveal";

const TEAM = [
  {
    img: barbeiro1,
    name: "Marcelo Castro",
    role: "Fundador · Cortes clássicos",
  },
  { img: barbeiro2, name: "Lucas Andrade", role: "Especialista em degradê" },
  { img: barbeiro3, name: "Rafael Souza", role: "Barba e navalha" },
];

export function Team() {
  return (
    <section
      id="equipe"
      className="py-24 sm:py-32 bg-ivory2 dark:bg-graphite/20"
    >
      <div className="container-lg">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Quem somos</p>
          <h2 className="section-heading">A equipe por trás de cada corte</h2>
          <p className="text-smoke dark:text-ivory2/80 mt-6 leading-relaxed">
            Três barbeiros, três especialidades, um único padrão de capricho.
            Escolha o seu de confiança ou deixe com a gente.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl">{member.name}</h3>
              <p className="text-sm text-brass uppercase tracking-[0.08em] mt-1">
                {member.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
