import { motion } from "framer-motion";

const milestones = [
  {
    year: "2009",
    title: "PhD — Oregon State University",
    desc: "Began doctoral research in mixed-signal IC design, fully funded by CDADIC, NSF, SRC, DARPA, and Intel.",
    color: "#a78bfa",
  },
  {
    year: "2012",
    title: "I/O Design Intern — Intel",
    desc: "First industry silicon experience designing I/O circuits at Intel, alongside ongoing PhD research.",
    color: "#38BDF8",
  },
  {
    year: "2014",
    title: "Principal Engineer — Maxim Integrated",
    desc: "Joined Maxim as Principal Member of Technical Staff. Led mixed-signal ADC, PLL, and DAC design for 7+ years across multiple production tape-outs.",
    color: "#0ea5e9",
  },
  {
    year: "2021",
    title: "Co-Founded LTIAAS · ADI Acquisition",
    desc: "Launched LTI As A Service, an API platform simplifying LTI integrations for ed-tech. Maxim acquired by Analog Devices, continuing as Principal Engineer at ADI.",
    color: "#34d399",
  },
  {
    year: "2022",
    title: "Senior Principal — Integense Micro · Xceltronics",
    desc: "Leading advanced mixed-signal IC design and algorithm development for next-generation silicon. Concurrent advisory role at Xceltronics.",
    color: "#f472b6",
  },
  {
    year: "2025",
    title: "Co-Founded Overlord Labs",
    desc: "Co-Founder & SVP Digital & Algorithms. Building AI-driven digital IP and algorithm solutions at the frontier of intelligent silicon.",
    color: "#fb923c",
  },
];

export default function TimelineSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text mb-4">
          Career Journey
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="relative">
        {/* Animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute hidden sm:block top-2 bottom-2 w-px origin-top"
          style={{
            left: "7rem",
            background: "linear-gradient(to bottom, transparent, rgba(56,189,248,0.25) 10%, rgba(56,189,248,0.25) 90%, transparent)",
          }}
        />

        <div className="flex flex-col gap-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              className="flex gap-4 sm:gap-0 group"
            >
              {/* Year label */}
              <div className="hidden sm:flex w-24 flex-shrink-0 justify-end pr-5 pt-3.5">
                <span
                  className="text-xs font-mono font-bold tracking-wide"
                  style={{ color: m.color }}
                >
                  {m.year}
                </span>
              </div>

              {/* Dot on the line */}
              <div className="hidden sm:flex flex-shrink-0 flex-col items-center" style={{ width: "1px" }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: i * 0.07 + 0.2 }}
                  className="w-3 h-3 rounded-full mt-2.5 flex-shrink-0"
                  style={{
                    background: m.color,
                    boxShadow: `0 0 0 3px #0e0e1a, 0 0 0 5px ${m.color}50`,
                    position: "relative",
                    left: "-5px",
                  }}
                />
              </div>

              {/* Card */}
              <div className="sm:pl-8 flex-1">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-4 hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span
                      className="sm:hidden text-xs font-mono font-bold"
                      style={{ color: m.color }}
                    >
                      {m.year}
                    </span>
                    <h3 className="text-sm font-semibold text-text-light dark:text-text leading-snug">
                      {m.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{m.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
