import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import { picturesData } from "../data/pictures";

function Lightbox({ photo, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-light"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl font-thin px-3 py-6"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl font-thin px-3 py-6"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        ›
      </button>
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full max-h-[75vh] object-contain rounded-lg"
          onError={(e) => { e.target.src = "/pictures/placeholder.png"; }}
        />
        {photo.caption && (
          <p className="text-center text-sm text-white/70 mt-3">{photo.caption}</p>
        )}
      </motion.div>
    </motion.div>
  );
}

function Album({ album }) {
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const allPhotos = album.photos;

  function openPhoto(photo) {
    setLightboxPhoto(photo);
  }
  function close() {
    setLightboxPhoto(null);
  }
  function prev() {
    const idx = allPhotos.indexOf(lightboxPhoto);
    setLightboxPhoto(allPhotos[(idx - 1 + allPhotos.length) % allPhotos.length]);
  }
  function next() {
    const idx = allPhotos.indexOf(lightboxPhoto);
    setLightboxPhoto(allPhotos[(idx + 1) % allPhotos.length]);
  }

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <h2 className="text-2xl font-bold text-text-light dark:text-text flex items-center gap-3">
          <span className="w-8 h-0.5 bg-accent inline-block" />
          {album.title}
        </h2>
        {album.description && (
          <p className="text-sm text-muted mt-2 ml-11">{album.description}</p>
        )}
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {allPhotos.map((photo, idx) => (
          <motion.button
            key={idx}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.04 }}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-square overflow-hidden rounded-lg bg-surface-light dark:bg-surface border border-border-light dark:border-border group"
            onClick={() => openPhoto(photo)}
          >
            <img
              src={photo.thumb || photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
              onError={(e) => {
                e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-muted text-xs p-2">${photo.caption || "Image"}</div>`;
              }}
            />
            {photo.caption && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                <p className="text-white text-xs leading-tight line-clamp-2">{photo.caption}</p>
              </div>
            )}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxPhoto && (
          <Lightbox
            photo={lightboxPhoto}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PicturesPage() {
  const { albums } = picturesData;

  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-light dark:text-text mb-4">
              Pictures
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
            <p className="mt-4 text-muted">Conferences, research, and memories.</p>
          </motion.div>

          {albums.map((album) => (
            <Album key={album.id} album={album} />
          ))}
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
