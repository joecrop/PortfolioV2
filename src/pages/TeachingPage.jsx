import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { teachingData } from "../data/teaching";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function CourseCard({ course }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      variants={item}
      className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border overflow-hidden"
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        onClick={() => setExpanded((e) => !e)}
      >
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-xs font-mono bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded">
              {course.code}
            </span>
            <span className="text-xs text-muted">{course.level}</span>
          </div>
          <h3 className="font-semibold text-text-light dark:text-text">{course.title}</h3>
        </div>
        <span
          className="text-muted text-xl transition-transform duration-200"
          style={{ transform: expanded ? "rotate(180deg)" : "none" }}
        >
          ⌄
        </span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-border-light dark:border-border pt-4 space-y-4">
              {course.description && (
                <p className="text-sm text-muted">{course.description}</p>
              )}
              {course.when && (
                <p className="text-xs font-mono text-muted">
                  <span className="text-text-light dark:text-text">When:</span> {course.when}
                </p>
              )}
              {course.ta && (
                <p className="text-xs text-muted">
                  <span className="text-text-light dark:text-text font-medium">TA:</span>{" "}
                  {course.ta.name} — Office Hours: {course.ta.officeHours}
                </p>
              )}
              {course.textbook && (
                <p className="text-xs text-muted">
                  <span className="text-text-light dark:text-text font-medium">Textbook:</span>{" "}
                  {course.textbook}
                </p>
              )}
              {course.objectives?.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Learning Objectives
                  </h4>
                  <ul className="space-y-1">
                    {course.objectives.map((o, i) => (
                      <li key={i} className="text-sm text-muted flex gap-2">
                        <span className="text-accent">›</span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {course.schedule?.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Schedule
                  </h4>
                  <div className="space-y-1">
                    {course.schedule.map((s) => (
                      <div key={s.week} className="flex gap-3 text-sm">
                        <span className="text-muted font-mono w-14 shrink-0">Wk {s.week}</span>
                        <span className="text-text-light dark:text-text">{s.topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {course.grading?.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Grading
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="text-xs w-full">
                      <thead>
                        <tr className="text-muted border-b border-border-light dark:border-border">
                          <th className="text-left py-1 pr-4">Component</th>
                          <th className="text-right pr-4">ECE 474</th>
                          <th className="text-right">ECE 574</th>
                        </tr>
                      </thead>
                      <tbody>
                        {course.grading.map((g) => (
                          <tr key={g.component} className="text-muted border-b border-border-light/50 dark:border-border/50">
                            <td className="py-1.5 pr-4 text-text-light dark:text-text">{g.component}</td>
                            <td className="text-right pr-4">{g.ece474}</td>
                            <td className="text-right">{g.ece574}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {course.weeklyTopics?.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Weekly Topics
                  </h4>
                  {course.weeklyTopics.map((t, i) => (
                    <div key={i} className="flex gap-3 text-sm py-1">
                      <span className="text-accent shrink-0 w-32 font-medium">{t.day}</span>
                      <span className="text-muted">{t.topic}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function JournalEntry({ entry }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border-light dark:border-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-muted">
            {new Date(entry.date + "T12:00:00").toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="text-sm font-medium text-text-light dark:text-text">{entry.title}</span>
        </div>
        <span className="text-muted text-base ml-4">
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-muted leading-relaxed pl-24">
              {entry.notes}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TeachingPage() {
  const { courses, teachingJournal, philosophy, outreach } = teachingData;

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
              Teaching
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted max-w-lg mx-auto">
              ECE instructor at Oregon State University — VLSI Design, Digital Logic, Computer Architecture, and K-12 outreach.
            </p>
          </motion.div>

          {/* Teaching Philosophy */}
          {philosophy && (
            <section className="mb-14">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-6"
              >
                <h2 className="text-xl font-bold text-text-light dark:text-text mb-3 flex items-center gap-3">
                  <span className="w-6 h-0.5 bg-accent inline-block" />
                  Teaching Philosophy
                </h2>
                <p className="text-sm text-muted leading-relaxed">{philosophy.summary}</p>
                {philosophy.pdfLink && (
                  <a
                    href={philosophy.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs text-accent hover:underline"
                  >
                    Read Full Philosophy (PDF) →
                  </a>
                )}
              </motion.div>
            </section>
          )}

          {/* Courses */}
          <section className="mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-text-light dark:text-text mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-accent inline-block" />
              Courses
            </motion.h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {courses.map((course) => (
                <CourseCard key={course.code} course={course} />
              ))}
            </motion.div>
          </section>

          {/* Teaching Journal */}
          {teachingJournal && (
            <section className="mb-14">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-text-light dark:text-text mb-2 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-accent inline-block" />
                  Teaching Journal
                </h2>
                <p className="text-sm text-muted mb-1">
                  {teachingJournal.course} — {teachingJournal.semester}
                </p>
                <p className="text-xs text-muted mb-6">
                  {teachingJournal.totalEntries} entries · {teachingJournal.dateRange}
                </p>
              </motion.div>

              <div className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border px-5 divide-y divide-border-light dark:divide-border">
                {teachingJournal.sampleEntries.map((entry) => (
                  <JournalEntry key={entry.date} entry={entry} />
                ))}
              </div>
            </section>
          )}

          {/* Outreach */}
          {outreach?.length > 0 && (
            <section>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-text-light dark:text-text mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-0.5 bg-accent inline-block" />
                Outreach
              </motion.h2>
              <div className="space-y-4">
                {outreach.map((o) => (
                  <motion.div
                    key={o.program}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-5"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-text-light dark:text-text">{o.program}</h3>
                      <span className="text-xs font-mono text-muted">{o.years}</span>
                    </div>
                    <p className="text-xs text-accent mb-1">{o.role}</p>
                    <p className="text-sm text-muted">{o.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
