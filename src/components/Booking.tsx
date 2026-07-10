import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { isEmailJsConfigured, sendTemplate, EMAILJS_CONFIG } from "../lib/emailjs";

const SERVICES = ["Cabelo", "Barba", "Corte + barba", "Hidratação", "Pezinho", "Sobrancelha"];

const TIMES = [
  "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "18:00",
  "19:00", "20:00",
];

type Status = "idle" | "sending" | "success" | "error";

export function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      await sendTemplate(EMAILJS_CONFIG.bookingTemplateId, {
        nome: String(data.get("nome") ?? ""),
        email: String(data.get("email") ?? ""),
        telefone: String(data.get("telefone") ?? ""),
        servico: String(data.get("servico") ?? ""),
        data_agendamento: String(data.get("data_agendamento") ?? ""),
        horario: String(data.get("horario") ?? ""),
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente.");
    }
  }

  return (
    <section id="agendar" className="py-24 sm:py-32">
      <div className="container-lg grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <Reveal>
          <p className="eyebrow mb-4">Agende seu horário</p>
          <h2 className="section-heading mb-6">Marque um horário sem sair de casa</h2>
          <p className="text-smoke dark:text-ivory2/80 leading-relaxed mb-8 max-w-md">
            Preencha os dados ao lado e confirmamos por e-mail ou WhatsApp.
            Chegue com 5 minutos de antecedência para não perder a vez.
          </p>
          {!isEmailJsConfigured && (
            <p className="text-xs text-wine bg-wine/10 border border-wine/30 rounded-sm p-4 max-w-md">
              O envio automático ainda não está configurado neste ambiente.
              Veja o README para conectar sua conta do EmailJS em poucos
              minutos.
            </p>
          )}
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5" noValidate>
            <Field label="Nome e sobrenome" htmlFor="nome" className="sm:col-span-2">
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Como podemos te chamar?"
                className="input-field"
              />
            </Field>

            <Field label="E-mail" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="voce@email.com"
                className="input-field"
              />
            </Field>

            <Field label="Telefone / WhatsApp" htmlFor="telefone">
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                pattern="[0-9()\-\s+]{8,}"
                placeholder="(32) 9 9999-8888"
                className="input-field"
              />
            </Field>

            <Field label="Serviço" htmlFor="servico">
              <select id="servico" name="servico" required defaultValue="" className="input-field">
                <option value="" disabled>
                  Escolha um serviço
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Data" htmlFor="data_agendamento">
              <input
                id="data_agendamento"
                name="data_agendamento"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="input-field"
              />
            </Field>

            <Field label="Horário" htmlFor="horario" className="sm:col-span-2">
              <select id="horario" name="horario" required defaultValue="" className="input-field">
                <option value="" disabled>
                  Escolha um horário
                </option>
                {TIMES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary sm:col-span-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Enviando..." : "Confirmar agendamento"}
            </button>

            <div role="status" aria-live="polite" className="sm:col-span-2">
              {status === "success" && (
                <p className="text-sm text-brass">
                  Horário enviado! Em breve confirmamos por e-mail.
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

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="block text-xs uppercase tracking-[0.1em] font-semibold text-smoke dark:text-ivory2/70 mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
