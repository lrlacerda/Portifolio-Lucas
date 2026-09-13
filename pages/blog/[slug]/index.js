// components
import Circles from "../../../components/Circles";
import Head from "next/head";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

// icons
import { BsArrowLeft } from "react-icons/bs";

// data
import { blogPosts } from "../../../data/blogPosts";

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return { props: { post } };
}

const BlogPost = ({ post }) => {
  return (
    <div className="h-full bg-primary/30 py-32 text-left">
      <Head>
        <title>{post.title} | Lucas Lacerda</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Circles />
      <div className="container mx-auto max-w-[700px]">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-x-2 text-white/60 hover:text-accent transition-all duration-300 mb-8"
          >
            <BsArrowLeft /> Voltar para Artigos
          </Link>
        </motion.div>

        <div className="max-h-[65vh] xl:max-h-[70vh] overflow-y-auto hide-scrollbar pr-2">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2">
              {new Date(post.date).toLocaleDateString("pt-BR")} · {post.readTime} min de leitura
            </div>
            <h1 className="h2 mb-8">{post.title}</h1>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-y-4 text-white/70 text-lg"
          >
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
