import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaGitlab, FaEnvelope, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { greeting, socialMediaLinks } from "../../data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socials = [
  { icon: FaGithub,   href: socialMediaLinks.github,           label: "GitHub"   },
  { icon: FaLinkedin, href: socialMediaLinks.linkedin,         label: "LinkedIn" },
  { icon: FaGitlab,   href: socialMediaLinks.gitlab,           label: "GitLab"   },
  { icon: FaEnvelope, href: `mailto:${socialMediaLinks.gmail}`, label: "Email"   },
  { icon: FaTwitter,  href: socialMediaLinks.twitter,          label: "Twitter"  },
];

function PhotoOrb() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      className="relative flex items-center justify-center"
      style={{ width: 280, height: 280 }}
    >
      {/* Glow pulse behind photo */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full"
        style={{
          inset: 0,
          background: "radial-gradient(circle, #5b21b6 0%, #0ea5e9 50%, transparent 80%)",
          filter: "blur(24px)",
        }}
      />

      {/* Photo circle */}
      <div
        className="relative overflow-hidden rounded-full"
        style={{
          width: 260,
          height: 260,
          border: "2px solid rgba(255,255,255,0.15)",
          boxShadow: "0 0 40px rgba(91,33,182,0.4), 0 0 80px rgba(14,165,233,0.2)",
        }}
      >
        <img
          src="/images/me.jpeg"
          alt="Joe Crop"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center top" }}
        />
        {/* Subtle inner shine overlay */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(6,6,15,0.7) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* ── Left: text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <motion.div variants={item} className="flex items-center gap-2 justify-center lg:justify-start flex-wrap">
              {/* PhD — cyan dot */}
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
                style={{
                  background: "rgba(56,189,248,0.08)",
                  border: "1px solid rgba(56,189,248,0.25)",
                  color: "#38bdf8",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: "#38bdf8", boxShadow: "0 0 6px #38bdf8" }}
                />
                PhD
              </span>
              {/* CEO — emerald dot */}
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
                style={{
                  background: "rgba(52,211,153,0.08)",
                  border: "1px solid rgba(52,211,153,0.25)",
                  color: "#34d399",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: "#34d399", boxShadow: "0 0 6px #34d399" }}
                />
                CEO
              </span>
              {/* Co-Founder — violet dot */}
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
                style={{
                  background: "rgba(167,139,250,0.08)",
                  border: "1px solid rgba(167,139,250,0.25)",
                  color: "#a78bfa",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full inline-block"
                  style={{ background: "#a78bfa", boxShadow: "0 0 6px #a78bfa" }}
                />
                Co-Founder
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              {greeting.title2}
            </motion.h1>

            <motion.div
              variants={item}
              className="text-xl sm:text-2xl font-medium text-white/50 min-h-[2rem] flex items-center gap-2 justify-center lg:justify-start"
            >
              {"I'm a "}
              <span
                style={{
                  background: "linear-gradient(135deg,#a78bfa,#38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "CEO",
                      "Microchip Designer",
                      "Full Stack Developer",
                      "Dev-Ops Engineer",
                      "Educator",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 30,
                  }}
                />
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="max-w-xl text-base sm:text-lg text-white/50 leading-relaxed mx-auto lg:mx-0"
            >
              {greeting.subTitle}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-1"
            >
              <motion.a
                href={greeting.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-aurora-primary"
                whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(99,102,241,0.45)" }}
                whileTap={{ scale: 0.97, y: 1 }}
                transition={{ duration: 0.15 }}
              >
                View LinkedIn
              </motion.a>
              <motion.div
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.97, y: 1 }}
                transition={{ duration: 0.15 }}
              >
                <Link to="/contact" className="btn-aurora-secondary">
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={item}
              className="flex justify-center lg:justify-start gap-5 pt-1"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="p-2 text-muted hover:text-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: photo orb ── */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <PhotoOrb />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-muted/60"
        >
          <HiArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
