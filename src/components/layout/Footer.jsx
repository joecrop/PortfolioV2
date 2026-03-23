import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGitlab } from "react-icons/fa";
import { socialMediaLinks } from "../../data/portfolio";

const socialIcons = [
  { key: "github", icon: FaGithub, href: socialMediaLinks.github },
  { key: "linkedin", icon: FaLinkedin, href: socialMediaLinks.linkedin },
  { key: "gitlab", icon: FaGitlab, href: socialMediaLinks.gitlab },
  { key: "twitter", icon: FaTwitter, href: `https://twitter.com/${socialMediaLinks.twitter?.split("/").pop() || "joecrop"}` },
  { key: "email", icon: FaEnvelope, href: `mailto:${socialMediaLinks.gmail}` },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/30 dark:border-border/30 bg-background-light dark:bg-background mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="font-sans font-bold text-3xl tracking-tight bg-gradient-to-r from-[#38BDF8] to-[#a78bfa] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Joe Crop
          </Link>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {socialIcons.map(({ key, icon: Icon, href }) => (
              <a
                key={key}
                href={href}
                target={key !== "email" ? "_blank" : undefined}
                rel={key !== "email" ? "noopener noreferrer" : undefined}
                aria-label={key}
                className="text-muted hover:text-accent transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/experience" className="hover:text-accent transition-colors">Work</Link>
            <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link to="/teaching" className="hover:text-accent transition-colors">Teaching</Link>
            <Link to="/resume" className="hover:text-accent transition-colors">Resume</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </nav>

          <p className="text-sm text-muted">
            Made by Joe Crop · &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
