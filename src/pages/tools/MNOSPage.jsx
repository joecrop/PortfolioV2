import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PageWrapper from "../../components/layout/PageWrapper";

export default function MNOSPage() {
  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text mb-2">
              MNOS Sim
            </h1>
            <div className="w-12 h-1 bg-accent rounded-full mb-4" />
            <p className="text-sm text-muted max-w-xl">
              A JavaScript-based circuit-node simulator. Enter a SPICE-like netlist description to visualize node voltages interactively.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-xl border border-border-light dark:border-border overflow-hidden bg-white"
          >
            <iframe
              src="/MNOS/index.html"
              className="w-full"
              style={{ height: "700px", border: "none" }}
              title="MNOS Simulator"
            />
          </motion.div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
