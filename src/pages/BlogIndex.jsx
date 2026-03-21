import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { blogPosts } from "../data/blog-posts";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function PostCard({ post }) {
  return (
    <motion.div variants={item}>
      <Link
        to={`/blog/${post.slug}`}
        className="block bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group"
      >
        <div className="flex items-center gap-3 mb-3">
          <time className="text-xs font-mono text-muted">
            {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.readingTime && (
            <>
              <span className="text-muted text-xs">·</span>
              <span className="text-xs text-muted">{post.readingTime} read</span>
            </>
          )}
          {post.views > 0 && (
            <>
              <span className="text-muted text-xs">·</span>
              <span className="text-xs text-muted">{post.views.toLocaleString()} views</span>
            </>
          )}
        </div>

        <h2 className="text-lg font-bold text-text-light dark:text-text group-hover:text-accent transition-colors leading-snug mb-2">
          {post.title}
        </h2>

        <p className="text-sm text-muted leading-relaxed mb-4">
          {post.description}
        </p>

        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono bg-background-light dark:bg-background border border-border-light dark:border-border text-muted px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}

export default function BlogIndex() {
  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text mb-4">
              Blog
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted">
              Technical articles on EE, circuits, and development.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {blogPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </motion.div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
