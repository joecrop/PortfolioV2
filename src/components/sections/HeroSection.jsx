import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
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
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles background */}
      <div className="absolute inset-0 z-0">
        <Particles
          init={particlesInit}
          options={{
            fullScreen: false,
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                repulse: { distance: 80, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#E3405F" },
              links: {
                color: "#E3405F",
                distance: 130,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.6,
                random: true,
              },
              number: { density: { enable: true }, value: 40 },
              opacity: { value: 0.25 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
          }}
          className="w-full h-full"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/50 via-transparent to-background/80 dark:from-background/50 dark:to-background pointer-events-none" />

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
            className="text-5xl sm:text-7xl font-bold tracking-tight text-text-light dark:text-text"
          >
            {greeting.title2}
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={item}
            className="text-xl sm:text-2xl font-medium text-muted min-h-[2rem]"
          >
            {"I'm a "}
            <span className="text-accent">
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
            className="max-w-2xl mx-auto text-base sm:text-lg text-muted leading-relaxed"
          >
            {greeting.subTitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <a
              href={greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors shadow-lg shadow-accent/20"
            >
              View Resume
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 border border-border dark:border-border hover:border-accent text-text-light dark:text-text hover:text-accent font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </Link>
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
