import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Decorative large quote */}
        <div
          className="absolute -top-6 -left-2 text-9xl font-serif leading-none select-none pointer-events-none"
          style={{ color: "rgba(56,189,248,0.08)", lineHeight: 1 }}
          aria-hidden="true"
        >
          "
        </div>

        <div className="bg-surface-light dark:bg-surface rounded-2xl border border-border-light dark:border-border p-8 sm:p-10 relative overflow-hidden">
          {/* Subtle corner glow */}
          <div
            className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(56,189,248,0.07), transparent 65%)",
            }}
          />

          <h2
            className="text-xs font-mono uppercase tracking-widest mb-6"
            style={{ color: "#38BDF8" }}
          >
            Approach
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-text-light/90 dark:text-text/90 mb-5">
            The most interesting problems live at the intersections — between analog and digital,
            between hardware and software, between research and product. My career has been
            defined by moving fluidly across those boundaries rather than staying within a single
            lane.
          </p>

          <p className="text-sm sm:text-base leading-relaxed text-muted">
            Whether I'm architecting a mixed-signal chip, building a software platform, or leading
            an engineering team, the throughline is the same: understand the system deeply,
            simplify ruthlessly, and ship things that actually work in the real world.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div
              className="w-8 h-px rounded-full"
              style={{ background: "rgba(56,189,248,0.4)" }}
            />
            <span className="text-xs font-mono text-muted">Joe Crop — PhD</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
