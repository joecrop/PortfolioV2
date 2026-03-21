import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { linksData } from "../data/links";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function LinkCard({ link }) {
  return (
    <motion.a
      variants={item}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 p-4 bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 group"
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-text-light dark:text-text group-hover:text-accent transition-colors">
          {link.title}
        </p>
        {link.description && (
          <p className="text-xs text-muted mt-0.5 leading-relaxed">{link.description}</p>
        )}
      </div>
      <span className="text-muted group-hover:text-accent transition-colors shrink-0 mt-0.5">
        →
      </span>
    </motion.a>
  );
}

export default function LinksPage() {
  const categories = linksData?.categories || [];

  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text mb-4">
              Links
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted">
              Curated resources for EDA, research, and development.
            </p>
          </motion.div>

          <div className="space-y-12">
            {categories.map((cat) => (
              <section key={cat.title}>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-text-light dark:text-text mb-5 flex items-center gap-3"
                >
                  <span className="w-6 h-0.5 bg-accent inline-block" />
                  {cat.title}
                </motion.h2>
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 gap-3"
                >
                  {(cat.links || []).map((link) => (
                    <LinkCard key={link.url} link={link} />
                  ))}
                </motion.div>
              </section>
            ))}
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
