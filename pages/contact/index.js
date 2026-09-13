// components
import Circles from "/components/Circles";
import Head from "next/head";

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
      await axios.post('/api/contact', values);
      alert('E-mail enviado com sucesso!');
      resetForm();
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      alert('Erro ao enviar e-mail. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <Head>
        <title>Contato | Lucas Lacerda</title>
      </Head>
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
              {({ handleChange, handleSubmit, errors, touched, handleBlur, isSubmitting }) => (
                <motion.form
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  onSubmit={handleSubmit}
                  className="flex-1 flex flex-col gap-6 w-full mx-auto"
                >
                  <div className="flex flex-col md:flex-row gap-x-6 gap-y-2 w-full">
                    <div className="flex-1 flex flex-col gap-y-1">
                      <input
                        type="text"
                        name="nome"
                        placeholder="Nome"
                        className="input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.nome && errors.nome && (
                        <span className="text-red-400 text-sm text-left">{errors.nome}</span>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col gap-y-1">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.email && errors.email && (
                        <span className="text-red-400 text-sm text-left">{errors.email}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <input
                      type="text"
                      name="assunto"
                      placeholder="Assunto"
                      className="input"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.assunto && errors.assunto && (
                      <span className="text-red-400 text-sm text-left">{errors.assunto}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <textarea
                      name="mensagem"
                      placeholder="Mensagem"
                      className="textarea"
                      cols="30"
                      rows="10"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    {touched.mensagem && errors.mensagem && (
                      <span className="text-red-400 text-sm text-left">{errors.mensagem}</span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50"
                  >
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                      {isSubmitting ? "Enviando..." : "Enviar"}
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
