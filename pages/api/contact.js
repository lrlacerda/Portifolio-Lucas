import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { nome, email, assunto, mensagem } = req.body ?? {};

  if (!nome || !email || !assunto || !mensagem) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
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
