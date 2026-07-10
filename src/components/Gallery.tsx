import fotos1 from "../assets/images/fotos1.webp";
import fotos2 from "../assets/images/fotos2.webp";
import fotos3 from "../assets/images/fotos3.webp";
import { Reveal } from "./Reveal";

const PHOTOS = [
  { img: fotos1, caption: "Corte moderno" },
  { img: fotos2, caption: "Degradê navalhado" },
  { img: fotos3, caption: "Barba desenhada" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 sm:py-32">
      <div className="container-lg">
        <Reveal className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Galeria</p>
          <h2 className="section-heading">Cabelo e barba, do jeito que sai daqui</h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.caption} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-sm aspect-[3/4]">
                <img
                  src={p.img}
                  alt={p.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                  <span className="text-ivory font-display text-lg">{p.caption}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
