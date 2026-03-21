import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

export default function PageWrapper({ children, className = "" }) {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
      className={`relative z-10 pt-16 min-h-screen ${className}`}
    >
      {children}
    </motion.main>
  );
}
