import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { classesData } from "../data/classes";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ClassCard({ cls }) {
  return (
    <motion.div
      variants={item}
      className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-6 hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-mono bg-accent/10 text-accent border border-accent/20 px-2.5 py-1 rounded">
          {cls.course}
        </span>
        <span className="text-xs text-muted">{cls.semester}</span>
      </div>

      <h3 className="font-bold text-lg text-text-light dark:text-text mb-2">
        {cls.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-4">{cls.description}</p>

      {cls.highlights?.length > 0 && (
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Highlights</h4>
          <ul className="space-y-1">
            {cls.highlights.map((h, i) => (
              <li key={i} className="text-sm text-muted flex gap-2">
                <span className="text-accent mt-0.5">›</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {cls.technologies?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {cls.technologies.map((t) => (
            <span
              key={t}
              className="text-xs font-mono bg-background-light dark:bg-background border border-border-light dark:border-border text-muted px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        {cls.files?.map((f) => (
          <a
            key={f.label}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-accent border border-border-light dark:border-border px-3 py-1.5 rounded-lg hover:border-accent/40 transition-colors"
          >
            {f.label} →
          </a>
        ))}
        {cls.githubLink && (
          <a
            href={cls.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:underline px-3 py-1.5"
          >
            GitHub →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ClassesPage() {
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
              Class Projects
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted max-w-xl mx-auto">
              Graduate coursework projects from Oregon State University ECE program.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {classesData.map((cls) => (
              <ClassCard key={cls.id} cls={cls} />
            ))}
          </motion.div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
