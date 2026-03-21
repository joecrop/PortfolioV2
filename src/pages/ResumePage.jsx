import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { resumeData } from "../data/resume";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

function EmploymentCard({ job, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="relative pl-8 pb-6"
    >
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-background-light dark:ring-background" />
      <div className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-5 hover:border-accent/30 transition-all">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-text-light dark:text-text">{job.title}</h3>
            <p className="text-sm text-accent">{job.company}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-muted bg-background-light dark:bg-background border border-border-light dark:border-border px-2 py-0.5 rounded">
              {job.period}
            </span>
            <span className="text-xs bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded">
              {job.type}
            </span>
          </div>
        </div>
        {job.bullets?.length > 0 && (
          <ul className="mt-2 space-y-1">
            {job.bullets.map((b, i) => (
              <li key={i} className="text-sm text-muted flex gap-2">
                <span className="text-accent shrink-0">›</span>
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default function ResumePage() {
  const { objective, education, achievements, employment, skills } = resumeData;

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
              Resume
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <div className="mt-4 flex justify-center gap-3">
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
              >
                Download PDF →
              </a>
            </div>
          </motion.div>

          {/* Objective */}
          <section className="mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-text-light dark:text-text mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-accent inline-block" />
              Objective
            </motion.h2>
            <ul className="space-y-2">
              {objective.map((o, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm text-muted flex gap-2"
                >
                  <span className="text-accent shrink-0">›</span>
                  {o}
                </motion.li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section className="mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-text-light dark:text-text mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-accent inline-block" />
              Education
            </motion.h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {education.map((e) => (
                <motion.div
                  key={e.degree}
                  variants={item}
                  className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-5"
                >
                  <h3 className="font-semibold text-text-light dark:text-text">{e.degree}</h3>
                  <p className="text-sm text-accent mt-0.5">{e.institution}</p>
                  <div className="flex flex-wrap gap-x-4 mt-1 text-xs text-muted">
                    <span>Class of {e.year}</span>
                    {e.emphasis && <span>{e.emphasis}</span>}
                    {e.minor && <span>Minor: {e.minor}</span>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Employment Timeline */}
          <section className="mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-text-light dark:text-text mb-8 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-accent inline-block" />
              Employment
            </motion.h2>
            <div className="relative">
              <div className="absolute left-1.5 top-2 bottom-0 w-px bg-border-light dark:bg-border" />
              {employment.map((job, idx) => (
                <EmploymentCard key={job.id} job={job} index={idx} />
              ))}
            </div>
          </section>

          {/* Skills */}
          {skills && (
            <section className="mb-14">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-text-light dark:text-text mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-0.5 bg-accent inline-block" />
                Skills
              </motion.h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    title: "Languages & HDLs",
                    items: Array.isArray(skills.languages)
                      ? skills.languages.flatMap((g) =>
                          typeof g === "string" ? [g] : (g.items || [])
                        )
                      : [],
                  },
                  { title: "EDA & Tools", items: skills.tools },
                  { title: "IT & DevOps", items: skills.it },
                ].map(({ title, items }) => (
                  items && (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-5"
                    >
                      <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">
                        {title}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((s) => (
                          <span
                            key={s}
                            className="text-xs font-mono bg-background-light dark:bg-background border border-border-light dark:border-border text-muted px-2 py-0.5 rounded"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </section>
          )}

          {/* Achievements */}
          {achievements?.length > 0 && (
            <section>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-text-light dark:text-text mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-0.5 bg-accent inline-block" />
                Achievements
              </motion.h2>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {achievements.map((a) => (
                  <motion.div
                    key={a.title}
                    variants={item}
                    className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-4"
                  >
                    <h4 className="font-semibold text-sm text-text-light dark:text-text">{a.title}</h4>
                    <p className="text-xs text-muted mt-0.5">{a.venue} · {a.year}</p>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
