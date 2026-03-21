import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export default function AudioPlayer({ src, title, composer, ensemble }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying((p) => !p);
  }

  function seek(e) {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = x / rect.width;
    audio.currentTime = pct * audio.duration;
  }

  function fmt(s) {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${sec}`;
  }

  return (
    <div className="bg-surface-light dark:bg-surface rounded-xl border border-border-light dark:border-border p-5 hover:border-accent/30 transition-all duration-300">
      <audio ref={audioRef} src={src} preload="metadata" />
      <div className="flex items-center gap-4">
        {/* Play button */}
        <button
          onClick={toggle}
          className="shrink-0 w-11 h-11 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent/90 transition-colors"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="2" y="1" width="4" height="12" rx="1" />
              <rect x="8" y="1" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M3 1.5l10 5.5-10 5.5V1.5z" />
            </svg>
          )}
        </button>

        {/* Info + progress */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-text-light dark:text-text truncate">{title}</p>
          {(composer || ensemble) && (
            <p className="text-xs text-muted truncate">
              {[composer, ensemble].filter(Boolean).join(" · ")}
            </p>
          )}

          {/* Progress bar */}
          <div
            className="mt-2 h-1.5 bg-background-light dark:bg-background rounded-full cursor-pointer"
            onClick={seek}
          >
            <motion.div
              className="h-full bg-accent rounded-full origin-left"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between mt-1 text-xs font-mono text-muted">
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
