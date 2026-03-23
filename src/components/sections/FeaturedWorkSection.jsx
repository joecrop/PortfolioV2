import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const featured = [
  {
    logo: "/images/overlord_labs_logo.jpeg",
    name: "Overlord Labs",
    type: "Co-Founded · 2025",
    tagline:
      "AI-driven digital IP and algorithm development for next-generation silicon. Building at the intersection of machine learning and hardware design.",
    tags: ["AI/ML", "Algorithms", "IC Design", "Leadership"],
    href: "https://overlord-labs.com",
    external: true,
    accent: "#fb923c",
  },
  {
    logo: "/images/ltiaas_logo.jpeg",
    name: "LTIAAS",
    type: "Co-Founded · 2021",
    tagline:
      "SaaS API platform making it trivial for ed-tech tools to integrate with Learning Management Systems via the LTI standard.",
    tags: ["Ed-Tech", "SaaS", "API", "Node.js"],
    href: "https://ltiaas.com",
    external: true,
    accent: "#38BDF8",
  },
  {
    logo: "/images/adi.png",
    name: "Production Silicon",
    type: "Maxim Integrated / ADI · 2014 – 2025",
    tagline:
      "Multiple tape-outs of high-precision ADCs, PLLs, and mixed-signal IP deployed in automotive, industrial, and medical products worldwide.",
    tags: ["ADC", "PLL", "Mixed-Signal", "CMOS"],
    href: "/chips",
    external: false,
    accent: "#a78bfa",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function FeaturedCard({ f }) {
  return (
    <motion.div
      variants={card}
      whileHover={{ y: -6, boxShadow: `0 16px 48px ${f.accent}22` }}
      className="bg-surface-light dark:bg-surface rounded-2xl border border-border-light dark:border-border p-6 flex flex-col gap-4 h-full hover:border-accent/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border border-border-light dark:border-border/60">
          <img
            src={f.logo}
            alt={f.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-semibold text-text-light dark:text-text">
            {f.name}
          </div>
          <div className="text-xs text-muted">{f.type}</div>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-xs text-muted leading-relaxed flex-1">{f.tagline}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {f.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-full border"
            style={{
              color: f.accent,
              borderColor: `${f.accent}45`,
              background: `${f.accent}10`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div
        className="group/arrow flex items-center gap-1.5 text-xs font-medium mt-auto"
        style={{ color: f.accent }}
      >
        {f.external ? "Visit site" : "See the work"}
        <HiArrowRight className="group-hover/arrow:translate-x-1 transition-transform duration-150" />
      </div>
    </motion.div>
  );
}

export default function FeaturedWorkSection() {
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
          Featured Work
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-3 gap-6"
      >
        {featured.map((f) =>
          f.external ? (
            <a
              key={f.name}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <FeaturedCard f={f} />
            </a>
          ) : (
            <Link key={f.name} to={f.href} className="block">
              <FeaturedCard f={f} />
            </Link>
          )
        )}
      </motion.div>
    </section>
  );
}
