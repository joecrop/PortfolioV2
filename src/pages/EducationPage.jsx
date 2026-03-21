import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { degrees, certifications } from "../data/portfolio";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function DegreeCard({ degree }) {
  return (
    <motion.div
      variants={item}
      className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-6 hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-14 h-14 rounded-lg bg-background-light dark:bg-background border border-border-light dark:border-border flex items-center justify-center overflow-hidden">
          <img
            src={`/images/${degree.logo_path}`}
            alt={degree.alt_name}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              e.target.parentElement.innerHTML = `<span class="text-2xl">🎓</span>`;
            }}
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-text-light dark:text-text leading-snug">
            {degree.title}
          </h3>
          <p className="text-accent text-sm mt-0.5">{degree.subtitle}</p>
          <p className="text-xs font-mono text-muted mt-1">{degree.duration}</p>
          {degree.descriptions && (
            <ul className="mt-3 space-y-1">
              {degree.descriptions.map((d, i) => (
                <li key={i} className="text-sm text-muted">
                  {d}
                </li>
              ))}
            </ul>
          )}
          {degree.website_link && (
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs text-accent hover:underline"
            >
              Visit Website →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function CertCard({ cert }) {
  return (
    <motion.div
      variants={item}
      className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-5 hover:border-accent/30 transition-all duration-300 flex items-start gap-4"
    >
      <div
        className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: cert.color_code + "22" }}
      >
        <img
          src={`/images/${cert.logo_path}`}
          alt={cert.alt_name}
          className="w-8 h-8 object-contain"
          onError={(e) => {
            e.target.parentElement.innerHTML = `<span class="text-xl">🏆</span>`;
          }}
        />
      </div>
      <div>
        <h4 className="font-semibold text-sm text-text-light dark:text-text">
          {cert.title}
        </h4>
        <p className="text-xs text-muted mt-0.5">{cert.subtitle}</p>
        {cert.certificate_link && (
          <a
            href={cert.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:underline mt-1 inline-block"
          >
            View Certificate →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function EducationPage() {
  const degreesData = degrees?.degrees || [];
  const certsData = certifications?.certifications || [];

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
              Education
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted">
              Oregon State University ECE, CCNA, and more.
            </p>
          </motion.div>

          {/* Degrees */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-text-light dark:text-text mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-0.5 bg-accent inline-block" />
            Degrees
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 mb-16"
          >
            {degreesData.map((d) => (
              <DegreeCard key={d.title} degree={d} />
            ))}
          </motion.div>

          {/* Achievements / Certifications */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-text-light dark:text-text mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-0.5 bg-accent inline-block" />
            Achievements &amp; Certifications
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {certsData.map((c) => (
              <CertCard key={c.title} cert={c} />
            ))}
          </motion.div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
