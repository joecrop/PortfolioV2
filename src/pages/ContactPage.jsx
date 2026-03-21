import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGitlab, FaTwitter, FaEnvelope } from "react-icons/fa";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { greeting, socialMediaLinks } from "../data/portfolio";

const socials = [
  { icon: FaGithub, label: "GitHub", href: socialMediaLinks.github, color: "hover:text-[#6e40c9]" },
  { icon: FaLinkedin, label: "LinkedIn", href: socialMediaLinks.linkedin, color: "hover:text-[#0a66c2]" },
  { icon: FaGitlab, label: "GitLab", href: socialMediaLinks.gitlab, color: "hover:text-[#fc6d26]" },
  { icon: FaTwitter, label: "Twitter", href: `https://twitter.com/${socialMediaLinks.twitter?.replace("https://twitter.com/", "")}`, color: "hover:text-[#1da1f2]" },
  { icon: FaEnvelope, label: "Email", href: `mailto:${socialMediaLinks.gmail}`, color: "hover:text-accent" },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = socialMediaLinks.gmail;

  function copyEmail() {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text mb-4">
              Get in Touch
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted max-w-lg mx-auto">
              Whether you have a question, a project idea, or just want to say hello — my inbox is always open.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: email + socials */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-6">
                <h2 className="font-semibold text-text-light dark:text-text mb-4">Email</h2>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-muted">{email}</span>
                  <button
                    onClick={copyEmail}
                    className="text-xs bg-background-light dark:bg-background border border-border-light dark:border-border px-3 py-1.5 rounded-lg hover:border-accent/40 transition-colors text-muted hover:text-text-light dark:hover:text-text"
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <a
                  href={greeting.mail}
                  className="inline-flex mt-4 items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Send an Email
                </a>
              </div>

              <div className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-6">
                <h2 className="font-semibold text-text-light dark:text-text mb-4">Connect</h2>
                <div className="flex flex-wrap gap-4">
                  {socials.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-muted text-sm transition-colors ${color}`}
                    >
                      <Icon className="w-5 h-5" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: resume CTA */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-6">
                <h2 className="font-semibold text-text-light dark:text-text mb-2">Resume</h2>
                <p className="text-sm text-muted mb-4">
                  Download my full resume for detailed work history and skills.
                </p>
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border-light dark:border-border px-5 py-2.5 rounded-lg text-sm font-medium text-text-light dark:text-text hover:border-accent/40 transition-colors"
                >
                  Download PDF →
                </a>
              </div>

              <div className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-6">
                <h2 className="font-semibold text-text-light dark:text-text mb-2">Based in</h2>
                <p className="text-sm text-muted">Beaverton, Oregon, USA</p>
                <p className="text-sm text-muted mt-1">
                  Analog Devices / ADI • GatherAct LLC
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
