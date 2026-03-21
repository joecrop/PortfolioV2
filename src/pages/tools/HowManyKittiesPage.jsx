import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import PageWrapper from "../../components/layout/PageWrapper";

// Conversion table: [label, kittiesPerUnit] (1 kitty ≈ 5 kg / 0.4572 m body)
const categories = {
  Length: [
    { label: "meter", k: 1 / 0.4572 },
    { label: "foot", k: 1 / 1.5 },
    { label: "kilometer", k: 2170 },
    { label: "mile", k: 2170 * 1.60934 },
    { label: "Eiffel Tower", k: 708 },
    { label: "Burj Khalifa", k: 1814.67 },
    { label: "Rhinoceros (length)", k: 12.5 / 1.5 },
    { label: "T-Rex", k: 26.67 },
  ],
  Mass: [
    { label: "kilogram", k: 1 / 5 },
    { label: "gram", k: 1 / 5000 },
    { label: "pound", k: 1 / 11 },
    { label: "metric ton", k: 200 },
    { label: "T-Rex (mass)", k: 1360 },
    { label: "Black Rhino (male)", k: 1400 / 5 },
  ],
  Energy: [
    { label: "Calorie (kcal)", k: 1 / 6850 },
    { label: "joule", k: 1 / 28660400 },
    { label: "cup of tea (100°C)", k: 0.013 },
  ],
  Speed: [
    { label: "m/s", k: 1 / 13.4 },
    { label: "mph", k: 1 / 30 },
    { label: "African swallow (unladen)", k: 11 / 13.4 },
    { label: "bullet train", k: 150 / 30 },
    { label: "Boeing Dreamliner", k: 587 / 30 },
  ],
  Time: [
    { label: "second", k: 1 / 5 },
    { label: "minute", k: 60 / 5 },
    { label: "hour", k: 3600 / 5 },
    { label: "day", k: 86400 / 5 },
    { label: "week", k: 604800 / 5 },
  ],
  Data: [
    { label: "byte", k: 1 / 100 },
    { label: "kilobyte", k: 1024 / 100 },
    { label: "megabyte", k: 1048576 / 100 },
    { label: "gigabyte", k: 1073741824 / 100 },
  ],
};

function fmtNum(n) {
  if (!isFinite(n) || isNaN(n)) return "—";
  if (n === 0) return "0";
  if (Math.abs(n) >= 1e9) return n.toExponential(3);
  if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(2) + "M";
  if (Math.abs(n) >= 1000) return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (Math.abs(n) >= 1) return n.toFixed(3).replace(/\.?0+$/, "");
  return n.toExponential(3);
}

export default function HowManyKittiesPage() {
  const [catName, setCatName] = useState("Length");
  const [fromUnit, setFromUnit] = useState(0);
  const [value, setValue] = useState("1");

  const units = categories[catName] || [];
  const fromK = units[fromUnit]?.k ?? 1;
  const numVal = parseFloat(value) || 0;
  const kitties = numVal * fromK;

  return (
    <>
      <Header />
      <PageWrapper>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-text-light dark:text-text mb-2">
              How Many Kitties?
            </h1>
            <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
            <p className="text-muted text-sm">
              The only unit converter that matters — everything in kitties. 🐱
            </p>
          </motion.div>

          <div className="bg-surface-light dark:bg-surface rounded-2xl border border-border-light dark:border-border p-6 space-y-6">
            {/* Category */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 block">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {Object.keys(categories).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { setCatName(cat); setFromUnit(0); }}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                      catName === cat
                        ? "bg-accent text-white border-accent"
                        : "border-border-light dark:border-border text-muted hover:border-accent/40"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 block">
                  Amount
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full bg-background-light dark:bg-background border border-border-light dark:border-border rounded-lg px-4 py-2.5 text-sm text-text-light dark:text-text focus:outline-none focus:border-accent/60"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted mb-2 block">
                  Unit
                </label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(Number(e.target.value))}
                  className="w-full bg-background-light dark:bg-background border border-border-light dark:border-border rounded-lg px-4 py-2.5 text-sm text-text-light dark:text-text focus:outline-none focus:border-accent/60"
                >
                  {units.map((u, i) => (
                    <option key={u.label} value={i}>{u.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result */}
            <div className="bg-background-light dark:bg-background rounded-xl border border-border-light dark:border-border p-5 text-center">
              <p className="text-xs text-muted mb-1">That's approximately</p>
              <p className="text-4xl font-bold text-accent font-mono">
                {fmtNum(kitties)}
              </p>
              <p className="text-xl mt-1 text-text-light dark:text-text font-semibold">
                kitties 🐱
              </p>
            </div>

            {/* Conversion table */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                All Units
              </h3>
              <div className="space-y-1.5">
                {units.map((u, i) => {
                  const converted = kitties / u.k;
                  return (
                    <div
                      key={u.label}
                      className={`flex justify-between items-center text-sm py-1.5 px-3 rounded-lg ${
                        i === fromUnit
                          ? "bg-accent/10 border border-accent/20"
                          : "hover:bg-surface-light dark:hover:bg-surface"
                      }`}
                    >
                      <span className="text-muted">{u.label}</span>
                      <span className="font-mono text-text-light dark:text-text">
                        {fmtNum(converted)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
}
