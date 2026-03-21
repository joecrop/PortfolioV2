import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";

export default function NotFound() {
  return (
    <>
      <Header />
      <PageWrapper>
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-8xl font-bold text-accent/20 select-none">404</p>
            <h1 className="text-2xl font-bold text-text-light dark:text-text mt-4 mb-2">
              Page Not Found
            </h1>
            <p className="text-muted text-sm mb-8">
              The page you're looking for doesn't exist or was moved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-colors"
            >
              ← Back Home
            </Link>
          </motion.div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
