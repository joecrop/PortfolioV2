import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiPlay } from "react-icons/hi";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import AudioPlayer from "../components/ui/AudioPlayer";
import { musicData } from "../data/music";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Normalize any YouTube URL form (watch?v=, youtu.be/, /embed/) into an embed URL.
function toEmbedUrl(url) {
  if (!url) return null;
  if (url.includes("/embed/")) return url;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

function VideoCard({ rec }) {
  const [expanded, setExpanded] = useState(false);
  const embedUrl = toEmbedUrl(rec.videoUrl);

  return (
    <div className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border overflow-hidden">
      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="w-full flex items-center gap-4 p-4 text-left hover:bg-accent-muted/40 transition-colors"
      >
        <span className="shrink-0 w-9 h-9 rounded-full bg-accent-muted text-accent flex items-center justify-center">
          <HiPlay className="w-4 h-4 translate-x-px" />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-semibold text-sm text-text-light dark:text-text truncate">
            {rec.title}
          </span>
          <span className="block text-xs text-muted mt-0.5 truncate">
            {rec.composer} · {rec.ensemble}
          </span>
        </span>
        <HiChevronDown
          className={`shrink-0 w-5 h-5 text-muted transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="aspect-video border-t border-border-light dark:border-border">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={rec.title}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function MusicPage() {
  const { recordings, currentEnsembles = [], pastEnsembles = [] } = musicData;

  const audioRecordings = recordings.filter(
    (r) => r.type === "audio" && r.audioFile
  );
  // Only show videos that actually have a source to embed.
  const videoRecordings = recordings.filter((r) => r.videoUrl);
  const ensembles = [...currentEnsembles, ...pastEnsembles];

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
              Music
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted max-w-lg mx-auto">
              I've played the trumpet for over 30 years. Here are recordings from performances with various ensembles at Oregon State University and beyond.
            </p>
          </motion.div>

          {/* Audio recordings */}
          <section className="mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-text-light dark:text-text mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-0.5 bg-accent inline-block" />
              Recordings
            </motion.h2>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {audioRecordings.map((rec) => (
                <motion.div key={rec.id} variants={item}>
                  <AudioPlayer
                    src={rec.audioFile}
                    title={rec.title}
                    composer={rec.composer}
                    ensemble={rec.ensemble}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Video recordings */}
          {videoRecordings.length > 0 && (
            <section className="mb-14">
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-text-light dark:text-text mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-0.5 bg-accent inline-block" />
                Video
              </motion.h2>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {videoRecordings.map((rec) => (
                  <motion.div key={rec.id} variants={item}>
                    <VideoCard rec={rec} />
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Ensembles */}
          {ensembles.length > 0 && (
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg font-bold text-text-light dark:text-text mb-4 flex items-center gap-2"
              >
                <span className="w-5 h-0.5 bg-accent inline-block" />
                Ensembles &amp; Groups
              </motion.h2>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {ensembles.map((e) => (
                  <li key={e.name} className="text-sm text-muted flex gap-2">
                    <span className="text-accent">›</span>
                    <span>
                      <span className="text-text-light dark:text-text font-medium">{e.name}</span>
                      {e.role && ` — ${e.role}`}
                      {e.years && (
                        <span className="text-xs font-mono ml-1">({e.years})</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
