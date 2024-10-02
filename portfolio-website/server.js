const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config(); // Carrega variáveis do .env

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/enviar-email', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  // Configurações do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Usar a variável de ambiente
      pass: process.env.EMAIL_PASS, // Usar a variável de ambiente
    },
  });

  // Configurações do e-mail
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Você pode também deixar isso em uma variável de ambiente
    subject: assunto,
    text: `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`,
  };

  // Enviar e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar o e-mail:', error);
      res.status(500).send('Erro ao enviar o e-mail');
    } else {
      console.log('E-mail enviado:', info.response);
      res.status(200).send('E-mail enviado com sucesso');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
