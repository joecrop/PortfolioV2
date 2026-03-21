/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#06060f",
          light: "#f9f9f9",
        },
        surface: {
          DEFAULT: "#0e0e1a",
          light: "#ffffff",
        },
        border: {
          DEFAULT: "#222222",
          light: "#e5e7eb",
        },
        accent: {
          DEFAULT: "#38BDF8",
          hover: "#0ea5e9",
          muted: "rgba(56,189,248,0.15)",
        },
        muted: {
          DEFAULT: "#6b7280",
          light: "#9ca3af",
        },
        text: {
          DEFAULT: "#f9fafb",
          light: "#111827",
          muted: "#9ca3af",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Agustina", "cursive"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
        bounce: "bounce 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        "orb-float": "orbFloat 9s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        orbFloat: {
          "0%, 100%": { marginTop: "0px" },
          "50%": { marginTop: "-40px" },
        },
        pulseDot: {
          "0%, 100%": { boxShadow: "0 0 8px #4ade80" },
          "50%": { boxShadow: "0 0 16px #4ade80, 0 0 24px #4ade80" },
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text.muted"),
            "--tw-prose-headings": theme("colors.text.DEFAULT"),
            "--tw-prose-links": theme("colors.accent.DEFAULT"),
            "--tw-prose-bold": theme("colors.text.DEFAULT"),
            "--tw-prose-code": theme("colors.accent.DEFAULT"),
            "--tw-prose-pre-bg": theme("colors.surface.DEFAULT"),
            "--tw-prose-quotes": theme("colors.muted.DEFAULT"),
            "--tw-prose-quote-borders": theme("colors.accent.DEFAULT"),
            maxWidth: "none",
          },
        },
        invert: {
          css: {
            "--tw-prose-body": theme("colors.text.muted"),
            "--tw-prose-headings": theme("colors.text.DEFAULT"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
