import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { chipsData } from "../data/chips";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function ChipCard({ chip }) {
  return (
    <motion.div
      variants={item}
      className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {chip.image && (
        <div className="h-44 overflow-hidden bg-background-light dark:bg-background border-b border-border-light dark:border-border">
          <img
            src={chip.image}
            alt={chip.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="text-xs font-mono bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded">
            {chip.type}
          </span>
          <span className="text-xs font-mono text-muted">{chip.year}</span>
        </div>
        <h3 className="font-bold text-text-light dark:text-text leading-snug mb-2">
          {chip.name}
        </h3>
        <p className="text-xs text-accent mb-3">{chip.company}</p>
        <p className="text-sm text-muted leading-relaxed flex-1">{chip.description}</p>

        {chip.specs?.length > 0 && (
          <div className="mt-4 space-y-1.5">
            {chip.specs.map((spec) => (
              <div key={spec.label} className="flex gap-2 text-xs">
                <span className="text-muted w-24 shrink-0">{spec.label}</span>
                <span className="text-text-light dark:text-text font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {chip.publishedLink && (
          <a
            href={chip.publishedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-xs text-accent hover:underline"
          >
            View Publication →
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ChipsPage() {
  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text mb-4">
              IC Chips
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted max-w-xl mx-auto">
              Integrated circuits I've designed, taped out, or published during my career at Maxim / ADI and as a Ph.D. researcher at Oregon State University.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {chipsData.map((chip) => (
              <ChipCard key={chip.id} chip={chip} />
            ))}
          </motion.div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
