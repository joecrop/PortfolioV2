import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PageWrapper from "../../components/layout/PageWrapper";

const IMAGES = [
  "/pictures/session_chair.jpg",
  "/pictures/lansce-beam.jpg",
  "/pictures/Intel-group-lunch.jpg",
  "/pictures/attendees.jpg",
  "/pictures/award.jpg",
];

export default function TVFramePage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCurrentIdx((i) => (i + 1) % IMAGES.length);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function prev() {
    setCurrentIdx((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }
  function next() {
    setCurrentIdx((i) => (i + 1) % IMAGES.length);
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
            className="mb-10"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text mb-2">
              Photos
            </h1>
            <div className="w-12 h-1 bg-accent rounded-full mb-4" />
            <p className="text-sm text-muted max-w-lg">
              Photos from various professional events, conferences, and research activities.
            </p>
          </motion.div>

          {/* TV Frame */}
          <div className="relative bg-surface-light dark:bg-surface rounded-2xl border-4 border-muted/30 shadow-2xl overflow-hidden aspect-video">
            <motion.img
              key={currentIdx}
              src={IMAGES[currentIdx]}
              alt={`Frame ${currentIdx + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = ""; }}
            />
            {/* Scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
              }}
            />
            {/* Controls overlay */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70"
              >
                ›
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIdx ? "bg-accent" : "bg-muted/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIsRunning((r) => !r)}
              className="text-xs text-muted hover:text-text-light dark:hover:text-text border border-border-light dark:border-border px-3 py-1.5 rounded-lg transition-colors"
            >
              {isRunning ? "Pause" : "Play"}
            </button>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
