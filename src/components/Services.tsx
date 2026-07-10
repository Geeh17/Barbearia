import servicos1 from "../assets/images/servicos1.webp";
import servicos2 from "../assets/images/servicos2.webp";
import servicos3 from "../assets/images/servicos3.webp";
import servicos4 from "../assets/images/servicos4.webp";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    img: servicos1,
    title: "Cabelo",
    desc: "Do degradê fechado ao clássico social, cortado na tesoura ou na máquina, sempre finalizado com pente e navalha.",
  },
  {
    img: servicos2,
    title: "Barba",
    desc: "Toalha quente, navalha e produtos próprios para deixar a barba alinhada e a pele sem irritação.",
  },
  {
    img: servicos3,
    title: "Hidratação",
    desc: "Tratamento capilar que devolve o brilho e facilita o penteado no dia a dia.",
  },
  {
    img: servicos4,
    title: "Pezinho",
    desc: "Acabamento rápido no contorno para manter o corte em dia entre uma visita e outra.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="container-lg">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">O que fazemos</p>
          <h2 className="section-heading">Conheça as especialidades da casa</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group">
                <div className="aspect-square overflow-hidden rounded-sm mb-5">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-smoke dark:text-ivory2/75 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
