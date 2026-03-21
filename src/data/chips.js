export const chipsData = [
  {
    id: 1,
    name: "MAX2175 Hybrid-Radio Receiver",
    company: "Maxim Integrated (now Analog Devices)",
    year: "2015+",
    type: "Radio SoC",
    description:
      "Full HD radio/AM/FM System-on-Chip receiver integrating an RF front end, digital demodulator, and audio processing pipeline.",
    specs: [
      { label: "Type", value: "Hybrid Radio SoC" },
      { label: "Standards", value: "AM/FM/HD Radio" },
      { label: "Company", value: "Maxim Integrated" },
    ],
    image: null,
    publishedLink: null,
  },
  {
    id: 2,
    name: "Near-Threshold Radiation-Induced Soft-Error Test Chip",
    company: "Oregon State University VLSI Research Group",
    year: "2014",
    type: "Research Test Chip",
    description:
      "Test chip designed to characterize radiation-induced soft errors in near-threshold digital circuits. Tested at LANSCE (Los Alamos Neutron Science Center) accelerator facility using neutron/proton beams.",
    specs: [
      { label: "Publication", value: "CICC 2014" },
      { label: "Test Facility", value: "LANSCE, Los Alamos" },
      { label: "Focus", value: "Near-threshold reliability" },
    ],
    image: "/pictures/3d_graph.png",
    publishedLink: null,
  },
  {
    id: 3,
    name: "SYNCTIUM: 530mV 10-Lane SIMD Processor",
    company: "Oregon State University VLSI Research Group",
    year: "2012",
    type: "Research Processor",
    description:
      "Ultra-low-voltage 10-lane SIMD processor operating at 530mV supply. Published at ISSCC 2012 — one of the world's premier semiconductor conferences. Demonstrates resilient near-threshold computing strategies.",
    specs: [
      { label: "Supply Voltage", value: "530 mV" },
      { label: "Architecture", value: "10-lane SIMD" },
      { label: "Publication", value: "ISSCC 2012" },
    ],
    image: null,
    publishedLink: null,
  },
  {
    id: 4,
    name: "Bio-Sensor SoC (EEG Wireless Sensor)",
    company: "Oregon State University VLSI Research Group",
    year: "2011",
    type: "Medical SoC",
    description:
      "Integrated EEG biosensor SoC with on-chip analog signal acquisition, digital processing, and wireless data transmission. Layout visible in chip photography showing compact sensor array.",
    specs: [
      { label: "Application", value: "EEG Acquisition" },
      { label: "Interface", value: "Wireless" },
      { label: "Funding", value: "NSF / SRC / CDADIC" },
    ],
    image: "/pictures/cped_sensor_layout.jpg",
    publishedLink: null,
  },
  {
    id: 5,
    name: "Sub-Threshold Asynchronous Multiplier (150mV)",
    company: "Oregon State University VLSI Research Group",
    year: "2010",
    type: "Ultra-Low-Power Circuit",
    description:
      "Asynchronous multiplier operating at an extreme 150mV supply voltage — one of the lowest-voltage digital circuits demonstrated. Uses asynchronous (clockless) design to eliminate synchronization overhead at sub-threshold voltages.",
    specs: [
      { label: "Supply Voltage", value: "150 mV" },
      { label: "Style", value: "Asynchronous / Clockless" },
      { label: "Publication", value: "VLSI-DAT 2010" },
    ],
    image: "/pictures/async_layout.jpg",
    publishedLink: "/publications/async.pdf",
  },
  {
    id: 6,
    name: "Advanced Near-Threshold Current Sensing",
    company: "Oregon State University VLSI Research Group",
    year: "2011",
    type: "Analog/Mixed-Signal Circuit",
    description:
      "Novel current sensing circuit architecture optimized for near-threshold supply voltages where conventional current mirrors fail. Enables robust current measurement in ultra-low-power systems.",
    specs: [
      { label: "Domain", value: "Analog / Mixed-Signal" },
      { label: "Target", value: "Near-threshold operation" },
      { label: "Venue", value: "IGCC 2011" },
    ],
    image: "/pictures/sensor_layout.jpg",
    publishedLink: null,
  },
];
