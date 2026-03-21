export const classesData = [
  {
    id: 1,
    course: "ECE 521",
    title: "joeSpice — SPICE / Verilog Co-Simulator",
    semester: "Graduate Coursework, Oregon State University",
    description:
      "A from-scratch SPICE-like circuit simulator written in C that can co-simulate analog SPICE netlists alongside Verilog digital models. Supports resistors, capacitors, inductors, voltage/current sources, transistors (MOSFET, BJT), and Verilog behavioral models via a custom interface.",
    highlights: [
      "Full SPICE netlist parser and modified nodal analysis (MNA) engine",
      "Sparse matrix solver for large circuit systems",
      "Verilog co-simulation interface for mixed-signal designs",
      "Transient, DC, and AC analysis modes",
      "Written entirely in C with a custom parser",
    ],
    technologies: ["C", "SPICE", "Verilog", "Linear Algebra", "Numerics"],
    files: [
      { label: "Final Report (PDF)", url: "/publications/finalreport.pdf" },
    ],
    githubLink: "https://github.com/joecrop/joespice",
  },
  {
    id: 2,
    course: "ECE 570",
    title: "Low-Power Digital Architecture Analysis",
    semester: "Graduate, Oregon State University",
    description:
      "Team research project investigating low-power architectures for digital systems. Explores dynamic voltage and frequency scaling (DVFS), clock gating, power gating, and near-threshold computing strategies. Includes benchmarks and comparative analysis across 23 referenced academic papers.",
    highlights: [
      "Survey of DVFS and near-threshold computing techniques",
      "Power/performance benchmarking across multiple architectures",
      "Analysis of clock gating and power domain strategies",
      "Team project with milestone presentations",
      "23 academic references spanning IEEE, ISSCC, VLSI journals",
    ],
    technologies: ["Architecture Analysis", "Power Modeling", "Verilog", "SPICE"],
    files: [
      { label: "Mid Report (PDF)", url: "/publications/midreport.pdf" },
      { label: "Final Report (PDF)", url: "/publications/finalreport.pdf" },
    ],
    githubLink: null,
  },
  {
    id: 3,
    course: "ECE 577",
    title: "Ogg Theora vs. H.264 Video Codec Analysis",
    semester: "Graduate, Oregon State University",
    description:
      "Comprehensive analysis comparing the open-source Ogg Theora video codec against H.264 (AVC). Covers compression efficiency, algorithmic complexity, patent encumbrance, hardware acceleration support, and real-world quality benchmarks using PSNR and SSIM metrics.",
    highlights: [
      "Side-by-side quality comparison (PSNR / SSIM benchmarks)",
      "Patent and licensing analysis for open-source deployment",
      "Encoder/decoder algorithmic complexity comparison",
      "Hardware acceleration support matrix",
      "Practical recommendations for web video deployment",
    ],
    technologies: ["Video Coding", "Signal Processing", "Python", "FFmpeg"],
    files: [
      { label: "Mid Report (PDF)", url: "/publications/577midreport.pdf" },
      { label: "Final Report (PDF)", url: "/publications/577finalreport.pdf" },
    ],
    githubLink: null,
  },
];
