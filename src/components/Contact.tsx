import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import {
  isEmailJsConfigured,
  sendTemplate,
  EMAILJS_CONFIG,
} from "../lib/emailjs";

type Status = "idle" | "sending" | "success" | "error";

const INFO = [
  {
    label: "Endereço",
    value: "Rua dos Barbeiros, 456 — Centro, Juiz de Fora - MG",
  },
  { label: "WhatsApp", value: "(32) 9 9999-8888" },
  { label: "E-mail", value: "contato@barbeariacorteturdojf.com.br" },
  { label: "Horário", value: "Seg a Sáb — 10h às 21h" },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      await sendTemplate(EMAILJS_CONFIG.contactTemplateId, {
        nome: String(data.get("nome") ?? ""),
        email: String(data.get("email") ?? ""),
        mensagem: String(data.get("mensagem") ?? ""),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar. Tente novamente.",
      );
    }
  }

  return (
    <section
      id="contato"
      className="py-24 sm:py-32 bg-ivory2 dark:bg-graphite/20"
    >
      <div className="container-lg grid lg:grid-cols-2 gap-16">
        <Reveal>
          <p className="eyebrow mb-4">Fale com a gente</p>
          <h2 className="section-heading mb-8">Dúvida, sugestão ou elogio?</h2>

          <ul className="space-y-5 mb-10">
            {INFO.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span className="w-24 shrink-0 text-xs uppercase tracking-[0.1em] text-brass font-semibold pt-0.5">
                  {item.label}
                </span>
                <span className="text-sm">{item.value}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-sm overflow-hidden aspect-video">
            <iframe
              title="Localização da Barbearia Corte Turbo JF"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.9!2d-43.3489!3d-21.7642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzUxLjEiUyA0M8KwMjAnNTYuMCJX!5e0!3m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
            <div>
              <label
                htmlFor="c-nome"
                className="block text-xs uppercase tracking-[0.1em] font-semibold text-smoke dark:text-ivory2/70 mb-2"
              >
                Nome
              </label>
              <input
                id="c-nome"
                name="nome"
                type="text"
                required
                placeholder="Seu nome"
                className="input-field"
              />
            </div>
            <div>
              <label
                htmlFor="c-email"
                className="block text-xs uppercase tracking-[0.1em] font-semibold text-smoke dark:text-ivory2/70 mb-2"
              >
                E-mail
              </label>
              <input
                id="c-email"
                name="email"
                type="email"
                required
                placeholder="voce@email.com"
                className="input-field"
              />
            </div>
            <div>
              <label
                htmlFor="c-mensagem"
                className="block text-xs uppercase tracking-[0.1em] font-semibold text-smoke dark:text-ivory2/70 mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="c-mensagem"
                name="mensagem"
                required
                rows={5}
                placeholder="Como podemos ajudar?"
                className="input-field resize-none"
              />
            </div>

            {!isEmailJsConfigured && (
              <p className="text-xs text-wine bg-wine/10 border border-wine/30 rounded-sm p-4">
                O envio automático ainda não está configurado neste ambiente.
                Veja o README para conectar sua conta do EmailJS em poucos
                minutos.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
            </button>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="text-sm text-brass">
                  Mensagem enviada, obrigado pelo contato!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-wine">{errorMsg}</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
