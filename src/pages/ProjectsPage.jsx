import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { projects } from "../data/portfolio";
import { blogPosts } from "../data/blog-posts";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function ProjectCard({ project }) {
  const techs = project.languages?.map((l) => l.name) || project.technologies || [];
  const imgSrc = project.image
    ? project.image.startsWith("/") || project.image.startsWith("http")
      ? project.image
      : `/images/${project.image}`
    : null;
  return (
    <motion.div
      variants={item}
      className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {imgSrc && (
        <div className="relative h-40 overflow-hidden bg-background-light dark:bg-background">
          <img
            src={imgSrc}
            alt={project.name || project.projectName}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-semibold text-text-light dark:text-text mb-2 leading-snug">
          {project.name || project.projectName}
        </h3>
        <p className="text-sm text-muted leading-relaxed flex-1">
          {project.description || project.projectDesc}
        </p>
        {techs.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono bg-background-light dark:bg-background text-muted border border-border-light dark:border-border px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {(project.url || project.projectUrl || project.githubUrl) && (
          <div className="flex gap-3 mt-4">
            {(() => {
              const href = project.url || project.projectUrl;
              if (!href) return null;
              const isGitHub = href.includes("github.com");
              const isInternal = href.startsWith("/");
              const label = isGitHub ? "GitHub →" : "Check it out →";
              const cls = isGitHub
                ? "text-xs text-muted hover:text-text-light dark:hover:text-text flex items-center gap-1"
                : "text-xs text-accent hover:underline flex items-center gap-1";
              if (isInternal) {
                return <Link to={href} className={cls}>{label}</Link>;
              }
              return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {label}
                </a>
              );
            })()}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-text-light dark:hover:text-text flex items-center gap-1"
              >
                GitHub →
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const allProjects = projects?.data || [];

  // Convert blog posts to project-shaped objects
  const blogAsProjects = blogPosts.map((post) => ({
    id: `blog-${post.slug}`,
    name: post.title,
    description: post.description,
    url: `/projects/${post.slug}`,
    languages: post.tags.map((t) => ({ name: t })),
  }));

  const allItems = [...allProjects, ...blogAsProjects];

  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text mb-4">
              Projects
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {allItems.map((project) => (
              <ProjectCard key={project.id ?? project.name} project={project} />
            ))}
          </motion.div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
