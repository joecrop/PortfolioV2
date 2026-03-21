import { Suspense, lazy } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { blogPosts } from "../data/blog-posts";

// Lazy-load MDX blog content
const mdxModules = {
  comparator: lazy(() => import("../blog/comparator.mdx")),
  "flash-adc": lazy(() => import("../blog/flash-adc.mdx")),
};

function TableOfContents({ headings }) {
  if (!headings?.length) return null;
  return (
    <nav className="hidden xl:block sticky top-24 self-start min-w-[180px] max-w-[220px]">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
        On This Page
      </p>
      <ul className="space-y-1.5">
        {headings.map((h) => (
          <li
            key={h.id}
            style={{ paddingLeft: `${(h.level - 2) * 12}px` }}
          >
            <a
              href={`#${h.id}`}
              className="text-xs text-muted hover:text-text-light dark:hover:text-text transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const meta = blogPosts.find((p) => p.slug === slug);

  if (!meta) return <Navigate to="/blog" replace />;

  const MDXContent = mdxModules[slug];

  if (!MDXContent) {
    return (
      <>
        <Header />
        <PageWrapper>
          <div className="max-w-3xl mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold text-text-light dark:text-text mb-4">
              Post Coming Soon
            </h1>
            <p className="text-muted mb-6">{meta.description}</p>
            <Link to="/blog" className="text-accent hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </PageWrapper>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-text-light dark:hover:text-text mb-10 transition-colors"
          >
            ← Blog
          </Link>

          <div className="flex gap-12">
            {/* Main content */}
            <article className="flex-1 min-w-0">
              {/* Header */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3 text-xs text-muted">
                  <time>
                    {new Date(meta.date + "T12:00:00").toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {meta.readingTime && (
                    <>
                      <span>·</span>
                      <span>{meta.readingTime} read</span>
                    </>
                  )}
                  {meta.views > 0 && (
                    <>
                      <span>·</span>
                      <span>{meta.views.toLocaleString()} views</span>
                    </>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text leading-snug mb-4">
                  {meta.title}
                </h1>
                {meta.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono bg-background-light dark:bg-background border border-border-light dark:border-border text-muted px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.header>

              {/* MDX Content */}
              <Suspense
                fallback={
                  <div className="animate-pulse space-y-4">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="h-4 bg-surface-light dark:bg-surface rounded"
                        style={{ width: `${70 + Math.random() * 30}%` }}
                      />
                    ))}
                  </div>
                }
              >
                <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-text-light dark:prose-headings:text-text prose-a:text-accent prose-img:rounded-xl prose-code:text-accent prose-pre:bg-surface-light dark:prose-pre:bg-surface">
                  <MDXContent />
                </div>
              </Suspense>
            </article>

            {/* Sidebar placeholder — TOC can be added with rehype-slug + custom hook */}
            <aside className="hidden xl:block w-48 shrink-0" />
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
