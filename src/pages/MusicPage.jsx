import { motion } from "framer-motion";
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

export default function MusicPage() {
  const { recordings, currentEnsembles = [], pastEnsembles = [] } = musicData;

  const audioRecordings = recordings.filter(
    (r) => r.type === "audio" && r.audioFile
  );
  const videoRecordings = recordings.filter(
    (r) => r.type === "video" || r.videoUrl
  );

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
              I've played trumpet since 5th grade. Here are recordings from performances with various ensembles at Oregon State University and beyond.
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
                className="space-y-6"
              >
                {videoRecordings.map((rec) => (
                  <motion.div
                    key={rec.id}
                    variants={item}
                    className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border overflow-hidden"
                  >
                    {rec.videoUrl && (
                      <div className="aspect-video">
                        <iframe
                          src={rec.videoUrl.replace("watch?v=", "embed/")}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={rec.title}
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <p className="font-semibold text-sm text-text-light dark:text-text">{rec.title}</p>
                      <p className="text-xs text-muted mt-0.5">{rec.composer} · {rec.ensemble}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </section>
          )}

          {/* Ensembles */}
          <div className="grid sm:grid-cols-2 gap-6">
            {currentEnsembles.length > 0 && (
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-lg font-bold text-text-light dark:text-text mb-4 flex items-center gap-2"
                >
                  <span className="w-5 h-0.5 bg-accent inline-block" />
                  Current Ensembles
                </motion.h2>
                <ul className="space-y-2">
                  {currentEnsembles.map((e) => (
                    <li key={e.name} className="text-sm text-muted flex gap-2">
                      <span className="text-accent">›</span>
                      <span>
                        <span className="text-text-light dark:text-text font-medium">{e.name}</span>
                        {e.role && ` — ${e.role}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {pastEnsembles.length > 0 && (
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-lg font-bold text-text-light dark:text-text mb-4 flex items-center gap-2"
                >
                  <span className="w-5 h-0.5 bg-accent inline-block" />
                  Past Ensembles
                </motion.h2>
                <ul className="space-y-2">
                  {pastEnsembles.map((e) => (
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
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
