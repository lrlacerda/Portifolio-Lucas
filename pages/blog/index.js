// components
import Circles from "../../components/Circles";
import Head from "next/head";
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// icons
import { BsArrowRight } from "react-icons/bs";

// data
import { blogPosts } from "../../data/blogPosts";

const Blog = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Head>
        <title>Artigos | Lucas Lacerda</title>
      </Head>
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-12 text-center"
        >
          Artigos <span className="text-accent">.</span>
        </motion.h2>

        <div className="flex flex-col gap-y-6 max-w-[700px] mx-auto w-full">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-y-2 bg-[#2B2154] rounded-lg px-6 py-8 text-left transition-all duration-300 hover:bg-[#382a6e]"
              >
                <div className="text-xs uppercase tracking-widest text-white/50">
                  {new Date(post.date).toLocaleDateString("pt-BR")} · {post.readTime} min de leitura
                </div>
                <div className="text-xl font-medium">{post.title}</div>
                <div className="text-white/60">{post.excerpt}</div>
                <div className="flex items-center gap-x-2 text-accent mt-2">
                  Ler artigo
                  <BsArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
