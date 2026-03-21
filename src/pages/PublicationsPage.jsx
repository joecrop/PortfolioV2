import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { publications } from "../data/portfolio";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function PubEntry({ pub }) {
  const href = pub.company_url?.startsWith("http") ? pub.company_url : null;
  const localFile =
    pub.company_url && !pub.company_url.startsWith("http")
      ? pub.company_url
      : null;

  return (
    <motion.div
      variants={item}
      className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-5 hover:border-accent/30 transition-all duration-300 flex gap-4"
    >
      <div className="shrink-0 w-10 h-10 rounded-lg bg-background-light dark:bg-background border border-border-light dark:border-border flex items-center justify-center overflow-hidden">
        <img
          src={`/images/${pub.logo_path}`}
          alt=""
          className="w-7 h-7 object-contain"
          onError={(e) => {
            e.target.parentElement.innerHTML = `<span class="text-lg">📄</span>`;
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-sm text-text-light dark:text-text leading-snug">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </h3>
        <p className="text-xs text-accent mt-1">{pub.company}</p>
        <p className="text-xs text-muted mt-0.5">{pub.description}</p>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs font-mono text-muted">{pub.duration}</span>
          {pub.location && (
            <span className="text-xs text-muted">· {pub.location}</span>
          )}
          {localFile && (
            <a
              href={localFile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline ml-auto"
            >
              Download →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function PublicationsPage() {
  const sections = publications?.sections || [];
  const tabTitles = sections.map((s) => s.title);
  const [activeTab, setActiveTab] = useState(tabTitles[0] || "");
  const activeSection = sections.find((s) => s.title === activeTab);

  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text mb-4">
              Publications
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted">
              IEEE journals, conference papers, presentations, and posters.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 border-b border-border-light dark:border-border">
            {tabTitles.map((title) => (
              <button
                key={title}
                onClick={() => setActiveTab(title)}
                className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  activeTab === title
                    ? "border-accent text-accent"
                    : "border-transparent text-muted hover:text-text-light dark:hover:text-text"
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeSection && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="space-y-3"
                >
                  {(activeSection.publications || []).map((pub) => (
                    <PubEntry key={pub.title} pub={pub} />
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
