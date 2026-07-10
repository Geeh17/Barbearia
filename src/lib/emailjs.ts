import emailjs from "@emailjs/browser";

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  bookingTemplateId: import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID as string | undefined,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
};

export const isEmailJsConfigured = Boolean(
  EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.publicKey
);

export async function sendTemplate(
  templateId: string | undefined,
  params: Record<string, string>
) {
  if (!EMAILJS_CONFIG.serviceId || !templateId || !EMAILJS_CONFIG.publicKey) {
    throw new Error("EmailJS não configurado. Veja o README para as instruções.");
  }
  return emailjs.send(EMAILJS_CONFIG.serviceId, templateId, params, {
    publicKey: EMAILJS_CONFIG.publicKey,
  });
}
