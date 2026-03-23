import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const areas = [
  {
    icon: "fluent:chip-24-filled",
    color: "#0ea5e9",
    title: "Mixed-Signal IC Architecture",
    desc: "Designed ADCs, PLLs, DACs, and digitally-aided analog IP shipping in high-volume products. From system spec to tape-out at top semiconductor companies.",
  },
  {
    icon: "mdi:brain",
    color: "#a78bfa",
    title: "Algorithm & AI Development",
    desc: "Digital calibration, signal processing, and ML systems bridging silicon and software. Building intelligent solutions that live at the hardware/software boundary.",
  },
  {
    icon: "mdi:rocket-launch",
    color: "#38BDF8",
    title: "Company Building & Leadership",
    desc: "Co-founded and led semiconductor and ed-tech ventures as CEO and SVP. Zero to product — team building, technical strategy, and roadmap ownership.",
  },
  {
    icon: "mdi:school",
    color: "#34d399",
    title: "Research & Education",
    desc: "PhD in ECE, peer-reviewed publications, conference speaker, and university instructor. Committed to open knowledge and advancing the state of the art.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExpertiseSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text mb-4">
          What I Bring
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {areas.map((a) => (
          <motion.div
            key={a.title}
            variants={card}
            whileHover={{ y: -5, boxShadow: `0 12px 40px ${a.color}22` }}
            className="bg-surface-light dark:bg-surface rounded-2xl border border-border-light dark:border-border p-6 flex flex-col gap-4 hover:border-accent/30 transition-all duration-300 cursor-default"
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${a.color}18` }}
            >
              <Icon icon={a.icon} style={{ color: a.color, fontSize: "1.4rem" }} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-light dark:text-text mb-2 leading-snug">
                {a.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
