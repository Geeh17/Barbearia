import { Reveal } from "./Reveal";

const CLASSIC = [
  { name: "Corte degradê", price: "R$ 45" },
  { name: "Corte social (tesoura)", price: "R$ 40" },
  { name: "Corte + barba", price: "R$ 70" },
  { name: "Barba completa", price: "R$ 35" },
  { name: "Pezinho", price: "R$ 15" },
  { name: "Sobrancelha", price: "R$ 15" },
  { name: "Combo cabelo + barba + sobrancelha", price: "R$ 85" },
];

const MAINTENANCE = [
  { name: "Hidratação capilar", price: "R$ 40" },
  { name: "Platinado / coloração", price: "R$ 120" },
  { name: "Relaxamento", price: "R$ 60" },
  { name: "Selagem", price: "R$ 90" },
  { name: "Limpeza de pele", price: "R$ 50" },
  { name: "Massagem capilar", price: "R$ 25" },
  { name: "Corte infantil (até 10 anos)", price: "R$ 35" },
];

function PriceList({ title, items, delay }: { title: string; items: typeof CLASSIC; delay: number }) {
  return (
    <Reveal delay={delay} className="bg-ivory dark:bg-ink/60 border border-ink/10 dark:border-ivory/10 rounded-sm p-8 sm:p-10">
      <p className="eyebrow mb-2">Lista de cortes</p>
      <h3 className="font-display text-2xl mb-6">{title}</h3>
      <ul className="divide-y divide-ink/10 dark:divide-ivory/10">
        {items.map((item) => (
          <li key={item.name} className="flex items-baseline justify-between gap-4 py-3.5">
            <span className="text-sm sm:text-base">{item.name}</span>
            <span className="flex-1 border-b border-dotted border-ink/20 dark:border-ivory/20 translate-y-[-4px]" />
            <span className="font-display text-brass text-lg whitespace-nowrap">{item.price}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Pricing() {
  return (
    <section id="precos" className="py-24 sm:py-32 bg-ivory2 dark:bg-graphite/20">
      <div className="container-lg">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Tabela de preços</p>
          <h2 className="section-heading">Valores claros, sem surpresa na hora de pagar</h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <PriceList title="Cortes clássicos" items={CLASSIC} delay={0} />
          <PriceList title="Manutenção" items={MAINTENANCE} delay={100} />
        </div>
      </div>
    </section>
  );
}
