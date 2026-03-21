import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { skills } from "../../data/portfolio";

const fadeSlide = (dir = "left") => ({
  hidden: { opacity: 0, x: dir === "left" ? -30 : 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
});

const containerAnim = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function SkillsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text mb-4">
          What I Do
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.data.map((skill, idx) => (
          <motion.div
            key={skill.title}
            variants={fadeSlide(idx % 2 === 0 ? "left" : "right")}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-surface-light dark:bg-surface rounded-2xl border border-border-light dark:border-border p-8 hover:border-accent/30 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-text-light dark:text-text mb-4">
              {skill.title}
            </h3>

            <motion.ul
              variants={containerAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2 mb-8"
            >
              {skill.skills.map((bullet) => (
                <motion.li
                  key={bullet}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                  }}
                  className="text-sm text-muted leading-relaxed"
                >
                  {bullet}
                </motion.li>
              ))}
            </motion.ul>

            {/* Skill icons */}
            <div className="flex flex-wrap gap-3">
              {skill.softwareSkills.map((sw) => (
                <motion.div
                  key={sw.skillName}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="group relative flex items-center justify-center p-2 rounded-lg bg-background-light/50 dark:bg-background/50 hover:bg-accent/10 transition-colors cursor-default"
                  title={sw.skillName}
                >
                  <Icon
                    icon={sw.fontAwesomeClassname}
                    style={{ color: sw.style?.color || "#E3405F", fontSize: "1.5rem" }}
                  />
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-surface dark:bg-surface px-2 py-1 rounded text-xs text-text/80 dark:text-text/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-border/50 dark:border-border/50 z-10">
                    {sw.skillName}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
