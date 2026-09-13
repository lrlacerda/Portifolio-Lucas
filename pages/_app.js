import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// head
import Head from 'next/head';

// analytics
import { Analytics } from '@vercel/analytics/react';

// router
import { useRouter } from 'next/router'

// framer motion
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Lucas Lacerda | Desenvolvedor Full Stack & AI-Native Engineer</title>
        <meta
          name="description"
          content="Portfólio de Lucas Lacerda, Desenvolvedor Full Stack Pleno (React, Node.js, TypeScript, C#/.NET) e Instrutor Técnico SENAI, especializado em IA Aplicada: agentes, RAG e MCP."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <meta property="og:title" content="Lucas Lacerda | Desenvolvedor Full Stack & AI-Native Engineer" />
        <meta
          property="og:description"
          content="Portfólio de Lucas Lacerda, Desenvolvedor Full Stack Pleno e Instrutor Técnico SENAI, especializado em IA Aplicada: agentes, RAG e MCP."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition/>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
      <Analytics />
    </>
  )
}

export default MyApp;
