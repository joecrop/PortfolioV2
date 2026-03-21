export const teachingData = {
  courses: [
    {
      code: "ECE 474/574",
      title: "VLSI System Design",
      level: "Senior / Graduate",
      when: "MWF 1:00–1:50 pm, KEC 1001",
      instructor: "Joe Crop",
      office: "Kelley Engineering Center 2119",
      email: "cropj@engr.orst.edu",
      officeHours: "Tuesday 2:30–4:30 pm or by appointment",
      ta: { name: "Erin Sullivan", email: "sullivae@engr.orst.edu", officeHours: "Thursday 10:00 am–12:00 pm or by appointment" },
      textbook: "Verilog HDL — A Guide to Digital Design and Synthesis (2nd Ed.) by Samir Palnitkar, Prentice Hall, ISBN 0-13-259970-8",
      description:
        "This class focuses on the proper use of the Verilog Language (2001 + SystemVerilog extensions) for describing digital designs, as well as development of a standard cell ASIC design environment.",
      objectives: [
        "Describe a hierarchical digital design using the synthesizable subset of Verilog",
        "Use HDL simulation tools to trace down design errors (bugs)",
        "Write a reasonable set of synthesis constraints",
        "Create digital designs that conform to generally accepted standards of robust digital design",
      ],
      schedule: [
        { week: 1, topic: "Intro to Verilog" },
        { week: 2, topic: "Intro to Bash and UNIX Environment" },
        { week: 3, topic: "Verilog Combinational Logic Syntax" },
        { week: 4, topic: "Verilog Sequential Logic Syntax" },
        { week: 5, topic: "State Machines and Timing" },
        { week: 6, topic: "Design Problem" },
        { week: 7, topic: "Synthesis Environment, Test Bench Design" },
        { week: 8, topic: "Advanced Topics: Synthesis, Code Optimization" },
        { week: 9, topic: "Advanced Topics: Place and Route, ASIC Design Flow" },
        { week: 10, topic: "Graduate Student Presentations" },
      ],
      grading: [
        { component: "Weekly Quizzes", ece474: "40%", ece574: "36%" },
        { component: "Homework", ece474: "60%", ece574: "54%" },
        { component: "Presentation", ece474: "—", ece574: "10%" },
      ],
      policies: {
        late: "One assignment may be submitted up to 2 weeks late for full credit. After 2 weeks: 30% penalty. All subsequent late assignments receive a 30% penalty.",
        collaboration: "Working in groups on homework/projects is allowed. Sharing design approaches, block diagrams, and coding ideas is strongly encouraged. Sharing state machine diagrams or actual code is not permitted.",
        ethics: "All help and advice must be fully documented in a 'References' section at the end of each submission.",
        mailingList: "ece474-sp13@engr.orst.edu",
      },
    },
    {
      code: "ECE 271",
      title: "Introduction to Verilog (Digital Logic)",
      level: "Undergraduate",
      instructor: "Joe Crop",
      officeHours: "By Appointment Only",
      description:
        "Introduction to digital logic design using the Verilog hardware description language. Covers combinational and sequential logic, state machines, parameterized modules, and testbench-driven verification.",
      weeklyTopics: [
        {
          day: "Monday",
          topic: "Combinational Logic Verilog",
          resources: ["Lecture slides"],
        },
        {
          day: "Wednesday",
          topic: "Sequential Logic Verilog",
          resources: ["Sequential.v (with annotations)", "Pulse_Generator.v"],
        },
        {
          day: "Friday",
          topic: "Mealy vs. Moore Machines",
          resources: ["mealy_machine.v", "moore_machine.v"],
        },
        {
          day: "Monday (Week 5)",
          topic: "Parameterized Modules and Testbenches",
          resources: ["Parameterized Modules (annotated)", "Review notes"],
        },
      ],
    },
    {
      code: "CS 271 / ECE 375",
      title: "Computer Architecture Lab",
      level: "Undergraduate",
      description:
        "AVR Assembly programming and basic computer architecture. Lab sections covering assembly language, I/O interfacing, and low-level embedded systems programming.",
    },
    {
      code: "Web Design 1 & 2",
      title: "Web Design",
      level: "Precollege / K-12",
      description:
        "HTML, CSS, and introduction to web development for middle and high school students as part of OSU precollege outreach programs.",
    },
    {
      code: "Visual Programming",
      title: "Visual Programming using Scratch",
      level: "K-12",
      description:
        "Introduction to programming concepts using MIT Scratch visual programming environment for K-12 students in OSU outreach programs.",
    },
  ],
  teachingJournal: {
    semester: "Spring 2013",
    course: "ECE 474/574 — VLSI System Design",
    totalEntries: 39,
    dateRange: "March 4 – June 10, 2013",
    description:
      "Daily classroom notes and reflections from teaching ECE 474/574 in Spring 2013. These entries capture real-time teaching observations, student questions, pacing adjustments, and pedagogical reflections across a full academic term.",
    sampleEntries: [
      {
        date: "2013-03-04",
        title: "First Day — Intro to Verilog",
        notes:
          "Introduced course structure and Verilog basics. Students were attentive; covered wire vs reg distinction and basic module syntax. Several students had prior VHDL experience which helps.",
      },
      {
        date: "2013-03-11",
        title: "Combinational Logic and Always Blocks",
        notes:
          "Covered always @(*) for combinational logic. Key confusion point: students mixing blocking vs non-blocking assignments in combinational blocks. Need to address this more carefully next class.",
      },
      {
        date: "2013-04-01",
        title: "State Machines — Mealy vs Moore",
        notes:
          "The Mealy/Moore distinction clicked well when I used the traffic light example. Had students code both versions live — significant learning in the compare/contrast exercise.",
      },
      {
        date: "2013-04-22",
        title: "Synthesis Environment Setup",
        notes:
          "Walked through Synopsys Design Vision setup. Majority of class time was hands-on — students discovering their own timing violations is more effective than lecturing about it.",
      },
      {
        date: "2013-05-13",
        title: "Design Problem — UBR Implementation Review",
        notes:
          "Reviewed Universal Baud-rate Reference designs midpoint. Strong variance in approaches — some teams using parametric FSMs, others using counters. Helped clarify constraints.",
      },
      {
        date: "2013-06-10",
        title: "Final Class — Graduate Presentations",
        notes:
          "Graduate students presented on advanced topics. Quality was high this term. Final reflections: more hands-on synthesis time earlier in semester would improve outcomes.",
      },
    ],
  },
  philosophy: {
    summary:
      "My teaching philosophy centers on active learning, real-world application, and creating an environment where intellectual curiosity is celebrated. Engineering is best learned by doing — I design courses around hands-on projects that mirror professional practice.",
    pdfLink: "/resume/TeachingPhilosophy.pdf",
  },
  outreach: [
    {
      years: "2006–2013",
      program: "OSU Precollege Outreach",
      role: "Instructor",
      description:
        "Taught web design and technology classes to middle and high school students through OSU weekend programs and summer camps.",
    },
  ],
};
