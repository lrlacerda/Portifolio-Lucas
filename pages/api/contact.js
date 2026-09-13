import { Resend } from "resend";
import { checkRateLimit } from "../../lib/rateLimit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = { nome: 100, email: 200, assunto: 150, mensagem: 5000 };

function isValidField(value, maxLength) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Método não permitido" });
  }

  const rateLimit = checkRateLimit(req);
  if (!rateLimit.allowed) {
    res.setHeader("Retry-After", String(rateLimit.retryAfterSeconds));
    return res.status(429).json({ error: "Muitas requisições. Tente novamente mais tarde." });
  }

  const { nome, email, assunto, mensagem, website } = req.body ?? {};

  // honeypot: campo invisível no formulário, só bots preenchem
  if (website) {
    return res.status(200).json({ message: "E-mail enviado com sucesso" });
  }

  if (
    !isValidField(nome, MAX_LENGTHS.nome) ||
    !isValidField(email, MAX_LENGTHS.email) ||
    !isValidField(assunto, MAX_LENGTHS.assunto) ||
    !isValidField(mensagem, MAX_LENGTHS.mensagem)
  ) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: "Email inválido" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY não configurada");
    return res.status(500).json({ error: "Serviço de e-mail não configurado" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Portfólio] ${assunto}`,
      text: `Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`,
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return res.status(502).json({ error: "Erro ao enviar o e-mail" });
    }

    return res.status(200).json({ message: "E-mail enviado com sucesso" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res.status(500).json({ error: "Erro ao enviar o e-mail" });
  }
}
