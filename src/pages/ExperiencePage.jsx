import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { experience } from "../data/portfolio";

const sectionIcons = {
  "IC Design Experience": "🔬",
  "Web Design / Dev-Ops / IT": "💻",
  "Teaching": "🎓",
};

function TimelineEntry({ entry, index }) {
  const logo = entry.logo_path
    ? `/images/${entry.logo_path}`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="relative pl-16 pb-10 group"
    >
      {/* Timeline dot + line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-border-light dark:bg-border group-last:hidden" />
      <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background-light dark:ring-background z-10" />

      {/* Card */}
      <div className="bg-surface-light dark:bg-surface rounded-2xl border border-border-light dark:border-border p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
        {/* Header row */}
        <div className="flex flex-wrap items-start gap-4 mb-4">
          {/* Logo */}
          {logo && (
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-background-light dark:bg-background border border-border-light dark:border-border flex items-center justify-center overflow-hidden p-1.5">
              <img
                src={logo}
                alt={entry.company}
                className="w-full h-full object-contain"
                onError={(e) => { e.target.parentElement.style.display = "none"; }}
              />
            </div>
          )}

          {/* Title + company + meta */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-text-light dark:text-text leading-tight">
              {entry.title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              {entry.company_url ? (
                <a
                  href={entry.company_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-medium hover:underline text-sm"
                >
                  {entry.company}
                </a>
              ) : (
                <span className="text-accent font-medium text-sm">{entry.company}</span>
              )}
              {entry.location && (
                <>
                  <span className="text-border-light dark:text-border">·</span>
                  <span className="text-xs text-muted">{entry.location}</span>
                </>
              )}
            </div>
          </div>

          {/* Duration badge */}
          {entry.duration && (
            <span className="flex-shrink-0 text-xs font-mono text-muted bg-background-light dark:bg-background px-3 py-1.5 rounded-lg border border-border-light dark:border-border whitespace-nowrap">
              {entry.duration}
            </span>
          )}
        </div>

        {/* Description */}
        {entry.description && (
          <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
            {entry.description.trim()}
          </p>
        )}
        {entry.descBullets && (
          <ul className="mt-3 space-y-1.5 list-none">
            {entry.descBullets.map((b, i) => (
              <li key={i} className="text-sm text-muted leading-relaxed flex gap-2">
                <span className="text-accent mt-0.5">▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

function ExperienceSection({ section, sectionIndex }) {
  const icon = sectionIcons[section.title] || "📌";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
      className="mb-20"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-bold text-text-light dark:text-text">
          {section.title}
        </h2>
        <div className="flex-1 h-px bg-border-light dark:bg-border ml-2" />
        <span className="text-xs text-muted font-mono bg-surface-light dark:bg-surface border border-border-light dark:border-border px-2 py-1 rounded">
          {section.experiences.length} roles
        </span>
      </div>

      {/* Timeline entries */}
      <div className="relative ml-2">
        {section.experiences.map((entry, idx) => (
          <TimelineEntry
            key={`${entry.title}-${entry.company}-${idx}`}
            entry={entry}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text mb-4">
              Experience
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted">
              IC Design, Web Development, and Teaching — all in one career.
            </p>
          </motion.div>

          {experience.sections.map((section, i) => (
            <ExperienceSection key={section.title} section={section} sectionIndex={i} />
          ))}
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
