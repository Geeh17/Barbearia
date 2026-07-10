import heroImg from "../assets/images/bg-header.webp";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Barbeiro finalizando um corte degradê na Barbearia Corte Turbo JF"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />

        <div className="relative z-10 h-full container-lg flex flex-col justify-end pb-20 sm:pb-24">
          <p className="eyebrow text-brassLight mb-4">
            Tradição desde 1998 · Centro de Juiz de Fora
          </p>
          <h1 className="font-display text-ivory text-5xl sm:text-6xl lg:text-7xl leading-[1.02] max-w-3xl">
            Onde o clássico encontra a navalha afiada.
          </h1>
          <p className="text-ivory2 text-base sm:text-lg mt-6 max-w-xl">
            Cortes de precisão, barba bem cuidada e um atendimento que respeita
            seu tempo. Marque seu horário em menos de um minuto.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#agendar" className="btn-primary">
              Agendar horário
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ivory/30 text-ivory font-semibold uppercase tracking-[0.12em] text-sm px-8 py-4 hover:border-brass hover:text-brassLight transition-colors"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </div>
      <div className="razor-divider" aria-hidden="true" />
    </section>
  );
}
