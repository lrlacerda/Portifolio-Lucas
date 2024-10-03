// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios"; // Importar Axios

const Contact = () => {
  const initialValues = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  };

  const validationSchema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    assunto: yup.string().required('Assunto é obrigatório'),
    mensagem: yup.string().required('Mensagem é obrigatória'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('/enviar-email', values); // Envia os dados do formulário para o servidor
      alert('E-mail enviado com sucesso!'); // Alerta de sucesso
      resetForm(); // Reseta o formulário após o envio
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      alert('Erro ao enviar e-mail. Tente novamente mais tarde.'); // Alerta de erro
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Vamos <span className="text-accent">conversar.</span>
            </motion.h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleSubmit }) => (
                <motion.form
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  onSubmit={handleSubmit}
                  className="flex-1 flex flex-col gap-6 w-full mx-auto"
                >
                  <div className="flex gap-x-6 w-full">
                    <input
                      type="text"
                      name="nome"
                      placeholder="Nome"
                      className="input"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="input"
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    type="text"
                    name="assunto"
                    placeholder="Assunto"
                    className="input"
                    onChange={handleChange}
                  />
                  <textarea
                    name="mensagem"
                    placeholder="Mensagem"
                    className="textarea"
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                  ></textarea>
                  <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                      Enviar
                    </span>
                    <BsArrowRight className="-tranlate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
                  </button>
                </motion.form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
