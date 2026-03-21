import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skills } from "../../data/portfolio";

// Deterministic pseudo-random size tier so the cloud looks organic but is stable
function sizeTier(name, idx) {
  let h = idx * 17 + name.length * 7;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffff;
  return h % 3; // 0 = small, 1 = medium, 2 = large
}

const SIZES = [
  { text: "text-xs",  pad: "px-2 py-0.5",   icon: "0.75rem", gap: "gap-1"   },
  { text: "text-xs",  pad: "px-2.5 py-1",   icon: "0.85rem", gap: "gap-1"   },
  { text: "text-sm",  pad: "px-3 py-1",     icon: "0.95rem", gap: "gap-1.5" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cloudVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.025 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.75 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

export default function SkillsSection() {
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
          What I Do
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.data.map((skill, cardIdx) => (
          <motion.div
            key={skill.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-surface-light dark:bg-surface rounded-2xl border border-border-light dark:border-border p-5 hover:border-accent/30 transition-colors duration-300"
          >
            <h3 className="text-base font-semibold text-text-light dark:text-text mb-3">
              {skill.title}
            </h3>

            <motion.div
              variants={cloudVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-1.5"
            >
              {skill.softwareSkills.map((sw, si) => {
                const tier = sizeTier(sw.skillName, si);
                const sz = SIZES[tier];
                return (
                  <motion.div
                    key={sw.skillName}
                    variants={tagVariants}
                    whileHover={{
                      scale: 1.2,
                      y: -4,
                      boxShadow: "0 0 14px rgba(56,189,248,0.35)",
                      transition: { type: "spring", stiffness: 350, damping: 14 },
                    }}
                    className={`inline-flex items-center ${sz.gap} ${sz.pad} rounded-full cursor-default select-none
                      bg-background-light/60 dark:bg-background/60
                      border border-border-light/60 dark:border-border/50
                      hover:border-accent/60 hover:bg-accent/8
                      transition-colors duration-150`}
                  >
                    <Icon
                      icon={sw.fontAwesomeClassname}
                      style={{ color: sw.style?.color || "#38BDF8", fontSize: sz.icon, flexShrink: 0 }}
                    />
                    <span className={`${sz.text} font-medium text-text-light/80 dark:text-text/80 leading-tight`}>
                      {sw.skillName}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
