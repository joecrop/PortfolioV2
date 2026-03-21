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
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socials = [
  { icon: FaGithub, href: socialMediaLinks.github, label: "GitHub" },
  { icon: FaLinkedin, href: socialMediaLinks.linkedin, label: "LinkedIn" },
  { icon: FaGitlab, href: socialMediaLinks.gitlab, label: "GitLab" },
  { icon: FaEnvelope, href: `mailto:${socialMediaLinks.gmail}`, label: "Email" },
  { icon: FaTwitter, href: socialMediaLinks.twitter, label: "Twitter" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial vignette so text is readable over the aurora orbs */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(6,6,15,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {/* Greeting */}
          <motion.p variants={item} className="text-lg font-mono text-accent">
            {greeting.title}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-white"
          >
            {greeting.title2}
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={item}
            className="text-xl sm:text-2xl font-medium text-white/50 min-h-[2rem]"
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
                    "Microchip Designer",
                    "Full Stack Developer",
                    "Dev-Ops Engineer",
                    "Educator",
                    "Circuit Hacker",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="max-w-2xl mx-auto text-base sm:text-lg text-white/50 leading-relaxed"
          >
            {greeting.subTitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <motion.a
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aurora-primary"
              whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(99,102,241,0.45)" }}
              whileTap={{ scale: 0.97, y: 1 }}
              transition={{ duration: 0.15 }}
            >
              View Resume
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

          {/* Social links */}
          <motion.div
            variants={item}
            className="flex justify-center gap-5 pt-2"
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
