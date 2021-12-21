/* Change this file to get your personal Portfolio */

//TODO: update home page images
//TODO: add teaching philosophy

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Joe Crop",
  logo_name: "Joe Crop",
  nickname: "Joe",
  full_name: "Joe Crop",
  subTitle:
    "I'm a Microchip Designer, Full Stack Web Developer + Dev-Ops Engineer, Ed-Tech Enthusiast, and Teacher.",
  resumeLink: "/resume.pdf",
  mail: "mailto:joe.crop@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/joecrop",
  linkedin: "https://www.linkedin.com/in/joecrop/",
  gmail: "joe.crop@gmail.com",
  gitlab: "https://gitlab.com/joecrop",
  facebook: "https://www.facebook.com/joecrop/",
  twitter: "https://twitter.com/joecrop",
};

const skills = {
  data: [
    {
      title: "Digital-Mixed-Signal Circuit Design",
      fileName: "FullStackImg",
      skills: [
        "⚡ Architect and design cutting-edge mixed signal circuits like ADCs, PLLs, DACs, and other digitally-aided analog circuits",
        "⚡ Design, develop, and maintain digital IP such as interfaces (i2c, spi, etc.), memory controllers, and uC peripherals",
        "⚡ Lead software development teams that create EDA software to improve IC design and verification cycle time",
        "⚡ Lead chip-top design and verification of IP test chips",
      ],
      softwareSkills: [
        {
          skillName: "Verilog/SystemVerilog",
          fontAwesomeClassname: "vscode-icons:file-type-systemverilog",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Bash/CSH",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "Perl",
          fontAwesomeClassname: "logos:perl",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "Skill",
          fontAwesomeClassname: "bpmn:script",
          style: {
            color: "#4EAA25",
          },
        },
        {
          skillName: "Spice/Spectre/hSpice",
          fontAwesomeClassname: "openmoji:circuit",
          style: {
            color: "#0EFFB2",
          },
        },
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "simple-icons:latex",
          style: {
            color: "#008080",
          },
        },
        {
          skillName: "Microsoft Assembly (MASM)",
          fontAwesomeClassname: "simple-icons:microsoft",
          style: {
            color: "#5E5E5E",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos:c-sharp",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java/Scala",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Perforce",
          fontAwesomeClassname: "simple-icons:perforce",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Arduino/Microchip ASM/AVR Assembly",
          fontAwesomeClassname: "simple-icons:arduino",
          style: {
            color: "#00979D",
          },
        },
        {
          skillName: "TI MSP430 Assembly/C",
          fontAwesomeClassname: "fa-calculator",
          style: {
            color: "#AAAAAA",
          },
        },
        {
          skillName: "LabWindows CVI (LabView)",
          fontAwesomeClassname: "simple-icons:labview",
          style: {
            color: "#FFDB00",
          },
        },
        {
          skillName: "MATLAB",
          fontAwesomeClassname: "cib:mathworks",
          style: {
            color: "#AA0000",
          },
        },
        {
          skillName: "Cadence / Spectre / Calibre",
          fontAwesomeClassname: "fa-cubes",
          style: {
            color: "#0EFFB2",
          },
        },
        {
          skillName: "Xilinx FPGA Toolset ",
          fontAwesomeClassname: "simple-icons:xilinx",
          style: {
            color: "#E01F27",
          },
        },
        {
          skillName: "Sun Grid Engine / PBS / LFS",
          fontAwesomeClassname: "clarity:cluster-solid",
          style: {
            color: "#34AAD2",
          },
        },
        {
          skillName:
            "Synopsis Front-End Toolchain (Design Vision, Primetime, Formality)",
          fontAwesomeClassname: "fluent:toolbox-28-filled",
          style: {
            color: "#3355DD",
          },
        },
        {
          skillName: "Cadence Front-End Toolchain (LEC, CDC)",
          fontAwesomeClassname: "fa-solid:tools",
          style: {
            color: "#AA2255",
          },
        },
        {
          skillName: "Low Power Flows (CPF/UPF)",
          fontAwesomeClassname: "emojione:battery",
          style: {
            color: "#A5915F",
          },
        },
        {
          skillName:
            "Altium PCB Design Software / Mentor Graphics PADS / Eagle / KiCad",
          fontAwesomeClassname: "simple-icons:altiumdesigner",
          style: {
            color: "#A5915F",
          },
        },
        {
          skillName:
            "Focused Ion Bean (FIB) / Scanning Electron Microscope (SEM)",
          fontAwesomeClassname: "fontisto:atom",
          style: {
            color: "#AACAC1",
          },
        },
        {
          skillName: "Rad Worker 2 Certification",
          fontAwesomeClassname: "bx:bxs-radiation",
          style: {
            color: "#AC9E38",
          },
        },
      ],
    },
    {
      title: "Full-Stack Web Development + Dev-Ops",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Develop front end user interfaces for web applications",
        "⚡ Building responsive websites using VUE/ReactJS",
        "⚡ Create basic mobile applications using Flutter",
        "⚡ Creat application backends in Node+Express",
        "⚡ Integration of third party services such as Firebase / Digital Ocean",
        "⚡ Hosting and managing websites in bare metal and Kubernetes",
        "⚡ Managing several continuous integration pipelines that deploy to Kubernetes and Netlify",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "VUE",
          fontAwesomeClassname: "logos:vue",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Digital Ocean",
          fontAwesomeClassname: "logos:digital-ocean",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitLab",
          fontAwesomeClassname: "logos:gitlab",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Doctor of Philosophy - Electrical and Computer Engineering",
      subtitle: "Oregon State University",
      logo_path: "osu.png",
      alt_name: "PHD-OSU",
      duration: "2009 - 2014",
      descriptions: [
        "⚡ VLSI circuit design (stream processors, high-speed IO)",
        "⚡ Mixed-signal circuits and systems (ADCs, biomedical sensors)",
        "⚡ Near/sub-threshold digital circuit design",
        "⚡ Asynchronous circuit design",
        "⚡ Studied the effects of radiation on integrated circuits",
      ],
      website_link: "https://eecs.oregonstate.edu/",
    },
    {
      title: "Bachelors of Science - Electrical and Computer Engineering",
      subtitle: "Oregon State University",
      logo_path: "osu.png",
      alt_name: "BS-OSU",
      duration: "2004 - 2009",
      descriptions: [
        "⚡ Learned everything from EE fundamentals to transmission line theory",
        "⚡ Minor in Computer Science",
        "⚡ Senior Project: advanced bicycle computer with rechargeable battery system",
        "⚡ Published first research paper: '150mV sub-threshold Asynchronous multiplier for low-power sensor applications' (VLSI-DAT)",
      ],
      website_link: "https://eecs.oregonstate.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Best Presenter Award",
      subtitle: "Maxim Design Conference, 2018",
      logo_path: "maxim.png",
      certificate_link: "",
      alt_name: "best presenter award",
      // color_code: "#2AAFED",
      color_code: "#660033",
    },
    {
      title: "Session Chair",
      subtitle: "CJK Conference, Shanghai China, June 2011",
      logo_path: "fudan.png",
      certificate_link: "",
      alt_name: "CJK Session Chair",
      // color_code: "#2AAFED",
      color_code: "#0033aa",
    },
    {
      title: "Best Question Award",
      subtitle: "CJK Conference, Shanghai China, June 2011",
      logo_path: "fudan.png",
      certificate_link: "",
      alt_name: "CJK Best Question",
      color_code: "#0033aa",
    },
    {
      title: "Fully Funded Research (2009-2014)",
      subtitle: "By CDADIC, NSF, SRC, DOD, Army, DARPA, Intel",
      logo_path: "cdadic.png",
      certificate_link: "",
      alt_name: "Research Funding",
      // color_code: "#F6B808",
      color_code: "#aaaaaa",
    },
    {
      title: "Scholarship",
      subtitle: "McDougal Engineering Scholarship 2008-2009",
      logo_path: "iit.png",
      certificate_link: "",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "CCNA",
      subtitle: "Cisco Certified Network Associate (2004)",
      logo_path: "ccna.png",
      certificate_link: "",
      alt_name: "CCNA",
      color_code: "#005164",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "IC Design, Web Design, and Teaching",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "IC Design Experience",
      experiences: [
        {
          title: "Principal Member of Technical Staff",
          company: "Analog Devices (ADI)",
          company_url: "https://analogdevices.com",
          logo_path: "adi.png",
          duration: "Oct. 2021- Present",
          location: "Beaverton, OR",
          description: `ADI bought/merged Maxim Integrated.`,
          color: "#ECC767",
        },
        {
          title: "Principal Member of Technical Staff",
          company: "Maxim Integrated",
          company_url: "https://maximintegrated.com",
          logo_path: "maxim.png",
          duration: "Sept. 2014 - Oct. 2021",
          location: "Boston, San Jose, Beaverton",
          description: `Designing digital circuit with a mixed-signal team for IP blocks such as Pipelined ADCs and PLLs.
          Leading diverse team of verification/software developers in CAD software.`,
          color: "#ECC767",
        },
        {
          title: "I/O Design Intern",
          company: "Intel",
          company_url: "https://intel.com",
          logo_path: "intel.png",
          duration: "Summer 2012",
          location: "San Jose, CA",
          description: `Worked with I/O circuit design team at Intel in Santa Clara, CA.
          Verified I/O circuit operation for next generation server processors.
          Designed novel circuits and architectures for next next next generation server processors.`,
          color: "#ECC767",
        },
        {
          title: "Research Intern",
          company: "Fudan University",
          company_url: "https://fudan.edu.cn",
          logo_path: "fudan.png",
          duration: "Summer 2011",
          location: "Shanghai, China",
          description: `Spent the summer as a research intern at Fudan University in Shanghai, China.
          Research focused on low-power and low-energy encryption engine optimization for integrated RFID systems.`,
          color: "#ECC767",
        },
        {
          title: "Research Assistant",
          company: "Oregon State University",
          company_url: "https://eecs.oregonstate.edu",
          logo_path: "osu.png",
          duration: "2010-2014",
          location: "Corvallis, OR",
          description: `Researched ultra low-power digital circuits and architectures in the VLSI group at OSU (SRC and NFS funded).`,
          color: "#ECC767",
        },
      ],
    },
    {
      title: "Web Design / Dev-Ops / IT",
      experiences: [
        {
          title: "CEO",
          company: "GatherAct LLC",
          company_url: "https://gatheract.com",
          logo_path: "ga-logo.png",
          duration: "Aug. 2010 - Present",
          location: "Home Office",
          description: `Co-Founded GatherAct, an ed-tech company that does consulting and API services tailored to ed-tech.
          GatherAct founded LTI As A Service (LTIAAS) that makes it easy for ed-tech tool to integrate with schools.`,
          color: "#ECC767",
        },
        {
          title: "Web Design Consultant",
          company: "Personal",
          company_url: "https://joecrop.com",
          logo_path: "consulting.png",
          duration: "2005 - Present",
          location: "Home Office",
          description: `Design and maintain several websites for customers.`,
          color: "#ECC767",
        },
        {
          title: "Alyrica Networks Technician",
          company: "Summer 2008",
          company_url: "https://alyrica.com",
          logo_path: "alyrica.png",
          duration: "Summer 2008",
          location: "Philomath, OR",
          description: `Helped a small local startup Internet Service Provider as a support technician. Duties ranged from fixing customer computers, managing websites, securing servers, to network troubleshooting and everything in between.
          Also worked on a live customer tracking/mapping system.`,
          color: "#ECC767",
        },
        {
          title: "Engineering IT Support",
          company: "Oregon State University",
          company_url: "https://engr.oregonstate.edu.com",
          logo_path: "osu.png",
          duration: "2005 - 2009",
          location: "Corvallis, OR",
          description: `Worked independently with little supervisor support for the College of Engineering at OSU as an IT support representative solving problems involving High Performance Computing Clusters and general computer support.
          Worked with the OSU HPC cluster developing an extensive usage, load, and job monitoring application.`,
          color: "#ECC767",
        },
        {
          title: "Student Computing Lab Manager",
          company: "Oregon State University",
          company_url: "https://.com",
          logo_path: "osu.png",
          duration: "2004 - 2005",
          location: "Corvallis, OR",
          description: `Worked for Oregon State University's Student Computing Facilities as a computer lab manager.
          Troubleshot problems as they arose and helped teach users how to use the computers and software.`,
          color: "#ECC767",
        },
        {
          title: "Assistant Network Technician",
          company: "Intel",
          company_url: "https://intel.com",
          logo_path: "intel.png",
          duration: "2003 - 2004",
          location: "Hillsboro, OR",
          description: `Worked at Intel as the Assistant Network Technician for the Desktop Platforms Group - Electronic Communications (DPG-EC).
          Duties included mostly layer 2 configuration of switches and a private subnet lab isolation project.`,
          color: "#ECC767",
        },
      ],
    },
    {
      title: "Teaching",
      experiences: [
        {
          title: "Instructor",
          company: "Oregon State University",
          company_url: "https://eecs.oregonstate.edu",
          logo_path: "osu.png",
          duration: "Spring 2013",
          location: "Corvallis, OR",
          description: `Taught ECE 473/573 to a mixed class of senior undergrads and graduate students.
          The class focused on digital design with Verilog, advanced synthesis techniques, and scripting.`,
          color: "#ECC767",
        },
        {
          title: "Summer Class Instructor",
          company: "Oregon State University",
          company_url: "https://eecs.oregonstate.edu",
          logo_path: "osu.png",
          duration: "Summer 2010",
          location: "Corvallis, OR",
          description: `Taught class of computer science students over summer term.
          Material included an overview of architecture concepts including pipe-lining, advanced assembly programming, and digital/CMOS logic.`,
          color: "#ECC767",
        },
        {
          title: "Teaching Assistant",
          company: "Oregon State University",
          company_url: "https://eecs.oregonstate.edu",
          logo_path: "osu.png",
          duration: "2009 - 2014",
          location: "Corvallis, OR",
          description: `Taught Computer Architecture classes to undergraduate students. ECE/CS 375 where students learn AVR Assembly language while learning basic architecture concepts in a lab setting.
          ECE/CS 472 where students were lead through the design of a 5-stage pipelined MIPS processor in Verilog with advanced architecture concepts.
          ECE 473/573 Microprocessor System Design, where students are lead through the engineering, design, and programming of an Atmel controlled clock radio.`,
          color: "#ECC767",
        },
        {
          title: "Precollege Outreach Programs Instructor",
          company: "Oregon State University",
          company_url: "https://oregonstate.edu",
          logo_path: "osu.png",
          duration: "2006 - 2013",
          location: "Corvallis, OR",
          description: `Taught web design and other technology-oriented classes to both middle school and high school students through Oregon State University.
          Classes are taught almost year-round through both weekend programs and summer camps.`,
          color: "#ECC767",
        },
      ],
    },
  ],
};

// Experience Page
const publications = {
  title: "Publications",
  subtitle: "My technical publications and articles",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Publications",
      publications: [
        {
          title:
            "I Wrote a Real-Time Collaborative Web App using the GatherAct API",
          company: "Medium",
          company_url:
            "https://joe-crop.medium.com/i-wrote-a-real-time-collaborative-app-using-the-gatheract-api-c3df1b8dd372",
          logo_path: "medium.png",
          duration: "Nov. 2020",
          location: "",
          description: `Joseph Crop`,
          color: "#0071C5",
        },
        {
          title:
            "Why Zoom Is Not Good Enough For Online Learning And What To Do About It",
          company: "Medium",
          company_url:
            "https://joe-crop.medium.com/the-future-of-online-learning-through-collaboration-cc91ddf0a10b",
          logo_path: "medium.png",
          duration: "Nov. 2020",
          location: "",
          description: `Joseph Crop`,
          color: "#0071C5",
        },
        {
          title:
            "Architecture of a Reusable BIST Engine for Detection and Autocorrection of Memory Failures and for IO Debug, Validation, Link Training, and Power Optimization on 14-nm SoC",
          company: "IEEE Design & Test",
          company_url: "https://ieeexplore.ieee.org/document/7123607",
          logo_path: "ieee.png",
          duration: "Feb. 2016",
          location: "",
          description: `Bruce Querbach; Rahul Khanna; Sudeep Puligundla; David Blankenbeckler; Joseph Crop; Patrick Yin Chiang`,
          color: "#0071C5",
        },
        {
          title:
            "Characterization of radiation-induced SRAM and logic soft errors from 0.33V to 1.0V in 65nm CMOS",
          company:
            "Proceedings of the IEEE 2014 Custom Integrated Circuits Conference",
          company_url: "https://ieeexplore.ieee.org/document/6946138",
          logo_path: "ieee.png",
          duration: "Sept. 2014",
          location: "",
          description: `Robert Pawlowski; Joseph Crop; Minki Cho; James Tschanz; Vivek De; Thomas Fairbanks; Heather Quinn; Shekhar Borkar; Patrick Yin Chiang`,
          color: "#0071C5",
        },
        {
          title:
            "Replication-Free Single-Event Transient (SET) Detection for Eliminating Silent Data Corruption in CMOS Logic",
          company: "Silicon Errors in Logic - System Effects (SELSE-9)",
          company_url:
            "https://selse.org/previous-workshops/2013-archive/2013-program/",
          logo_path: "selse.png",
          duration: "March 2013",
          location: "",
          description: `Evgeni Krimer;, Joseph Crop; Mattan Erez; Patrick Chiang`,
          color: "#0071C5",
        },
        {
          title:
            "A 12-bit 7 µW/channel 1 kHz/channel incremental ADC for biosensor interface circuits",
          company:
            "2012 IEEE International Symposium on Circuits and Systems (ISCAS)",
          company_url: "https://ieeexplore.ieee.org/document/6271940",
          logo_path: "ieee.png",
          duration: "May 2012",
          location: "",
          description: `Chia-Hung Chen; Joseph Crop; Jeongseok Chae; Patrick Chiang; Gabor C. Temes`,
          color: "#0071C5",
        },
        {
          title:
            "Regaining throughput using completion detection for error-resilient, near-threshold logic",
          company: "DAC Design Automation Conference 2012",
          company_url: "https://ieeexplore.ieee.org/document/6241622",
          logo_path: "ieee.png",
          duration: "July 2012",
          location: "",
          description: `Joseph Crop; Robert Pawlowski; Patrick Chiang`,
          color: "#0071C5",
        },
        {
          title:
            "A 530mV 10-lane SIMD processor with variation resiliency in 45nm SOI",
          company: "2012 IEEE International Solid-State Circuits Conference",
          company_url: "https://ieeexplore.ieee.org/document/6177105",
          logo_path: "ieee.png",
          duration: "Feb. 2012",
          location: "",
          description: `Robert Pawlowski; Evgeni Krimer; Joseph Crop; Jacob Postman; Nariman Moezzi-Madani; Mattan Erez; Patrick Chiang`,
          color: "#0071C5",
        },
        {
          title:
            "Design of a UHF RFID tag baseband with the hummingbird cryptographic engine",
          company: "2011 9th IEEE International Conference on ASIC",
          company_url: "https://ieeexplore.ieee.org/document/6157326",
          logo_path: "ieee.png",
          duration: "Oct. 2011",
          location: "",
          description: `Mengqin Xiao;Xiang Shen;Junyu Wang;Joseph Crop`,
          color: "#0071C5",
        },
        {
          title:
            "Error Detection and Recovery Techniques for Variation-Aware CMOS Computing: A Comprehensive Review",
          company: "Journal of Low Power Electronics and Applications",
          company_url: "https://www.mdpi.com/2079-9268/1/3/334",
          logo_path: "lpea.png",
          duration: "Oct. 2011",
          location: "",
          description: `Joseph Crop; Evgeni Krimer; Nariman Moezzi-Madani; Robert Pawlowski; Thomas Ruggeri; Patrick Chiang; andMattan Erez`,
          color: "#0071C5",
        },
        {
          title:
            "Design automation methodology for improving the variability of synthesized digital circuits operating in the sub/near-threshold regime",
          company:
            "2011 International Green Computing Conference and Workshops",
          company_url: "https://ieeexplore.ieee.org/document/6008604",
          logo_path: "ieee.png",
          duration: "July 2011",
          location: "",
          description: `Joseph Crop; Robert Pawlowski; Nariman Moezzi-Madani; Jarrod Jackson; Patrick Chaing`,
          color: "#0071C5",
        },
        {
          title:
            "An energy-efficient 64-QAM MIMO detector for emerging wireless standards",
          company: "2011 Design, Automation & Test in Europe",
          company_url: "https://ieeexplore.ieee.org/document/5763050",
          logo_path: "ieee.png",
          duration: "March 2011",
          location: "",
          description: `Nariman Moezzi-Madani; Thorlindur Thorolfsson; Joseph Crop; Patrick Chiang; William Rhett Davis`,
          color: "#0071C5",
        },
        {
          title:
            "150mV sub-threshold Asynchronous multiplier for low-power sensor applications",
          company:
            "Proceedings of 2010 International Symposium on VLSI Design, Automation and Test",
          company_url: "https://ieeexplore.ieee.org/document/5496737",
          logo_path: "ieee.png",
          duration: "April 2010",
          location: "",
          description: `Joseph Crop; Scott Fairbanks; Robert Pawlowski; Patrick Chiang`,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Presentations",
      publications: [
        {
          title: "A Verification-driven model for IP delivery",
          company:
            "Maxim Integrated - 1st Virtual Functional Verification Summit",
          company_url: "",
          logo_path: "maxim.png",
          duration: "May 2021",
          location: "Virtual",
          description: `Joseph Crop et. al.`,
          color: "#0071C5",
        },
        {
          title: "The Future of OTP in P90 at Maxim",
          company: "Maxim Integrated - Internal Design Conference",
          company_url: "",
          logo_path: "maxim.png",
          duration: "May 2019",
          location: "San Jose, CA",
          description: `Joseph Crop et. al.`,
          color: "#0071C5",
        },
        {
          title: "Radiation Induced Soft-Errors @ NTV",
          company: "DARPA Circuits for Resilient Systems Meeting",
          company_url: "https://intel.com",
          logo_path: "intel.png",
          duration: "June 2013",
          location: "Intel Corporation, Hillsboro, OR",
          description: `Jospeh Crop, Robert Pawlowski`,
          color: "#0071C5",
        },
        {
          title:
            "Regaining Throughput Using Completion Detection for Error-Resilient, Near-Threshold Logic,",
          company: "Design Automation Conference (DAC)",
          company_url: "/old/_uploads/Publications/RegainingThroughputDAC.pptx",
          logo_path: "acm.png",
          duration: "June 2012",
          location: "San Francisco, CA",
          description: `Joseph Crop`,
          color: "#0071C5",
        },
        {
          title: "Writing English Publications",
          company: "Fudan University",
          company_url:
            "/old/_uploads/Publications/FudanEnglishPresentation2011.pdf",
          logo_path: "fudan.png",
          duration: "Aug. 2011",
          location: "Shanghai China",
          description: `Joseph Crop`,
          color: "#0071C5",
        },
        {
          title:
            "Design Automation Methodology for Improving the Variability of Synthesized Digital Circuits Operating in the Sub/Near-Threshold Regime",
          company: "International Green Computing Conference (IGCC'11)",
          company_url: "/old/_uploads/Publications/IGCC2011_Presentation.pdf",
          logo_path: "igsc.png",
          duration: "July 2011",
          location: "Orlando, Florida",
          description: `Joseph Crop`,
          color: "#0071C5",
        },
        {
          title: "Fully Automated Digital Synthesis and Place and Route",
          company: "Visiting Student Seminar, Fudan University",
          company_url: "",
          logo_path: "fudan.png",
          duration: "June 2011",
          location: "Shanghai China",
          description: `Joseph Crop`,
          color: "#0071C5",
        },
        {
          title:
            "Low-Power, Variability-Aware CMOS: Techniques for Improving Power and Robustness under Low-VDD Operation",
          company: "School of Microelectronics, Fudan University",
          company_url: "/old/_uploads/Publications/FudanPresentation2011.pdf",
          logo_path: "fudan.png",
          duration: "June 2011",
          location: "Shanghai China",
          description: `Joseph Crop`,
          color: "#0071C5",
        },
        {
          title:
            "Optimizing Application Throughput by Exploiting Path Activation Probabilities",
          company: "NVIDIA",
          company_url: "",
          logo_path: "nvidia.png",
          duration: "June 2011",
          location: "Beaverton, OR",
          description: `Joseph Crop; Jacob Postman`,
          color: "#0071C5",
        },
        {
          title:
            "Sub/Near-Threshold Variation Tolerance and Greater-than-2x Delay Detection",
          company: "Intel Circuits Research Lab",
          company_url: "",
          logo_path: "intel.png",
          duration: "September 2010",
          location: "Hillsboro, OR",
          description: `Joseph Crop`,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Posters",
      publications: [
        {
          title:
            "Replication-Free Single-Event Transient (SET) Detection for Eliminating Silent Data Corruption in CMOS Logic",
          company: "Silicon Errors in Logic - System Effects (SELSE-9)",
          company_url: "",
          logo_path: "selse.png",
          duration: "March 2013",
          location: "Stanford University",
          description: `Evgeni Krimer; Joseph Crop; Matan Erez; Patrick Chiang`,
          color: "#0071C5",
        },
        {
          title:
            "Regaining Throughput Using Completion Detection for Error-Resilient, Near-Threshold Logic",
          company: "Design Automation Conference (DAC)",
          company_url:
            "/old/_uploads/Publications/RegainingThroughputDAC_Poster.pdf",
          logo_path: "acm.png",
          duration: "June 2012",
          location: "San Francisco, CA",
          description: `Joseph Crop`,
          color: "#0071C5",
        },
        {
          title:
            "Methods to Improve Reliability in Sub/Near-Threshold Circuits",
          company: "CDADIC Winter Meeting",
          company_url: "/old/_uploads/Publications/CDADIC_WINTER_2011.pdf",
          logo_path: "cdadic.png",
          duration: "July 2010",
          location: "Seattle, WA",
          description: `Patrick Chiang; Jacob Postman; Joseph Crop`,
          color: "#0071C5",
        },
        {
          title:
            "Methods to Improve Reliability in Sub/Near-Threshold Circuits",
          company: "CDADIC Summer Meeting",
          company_url: "/old/_uploads/Publications/CDADIC2010.pdf",
          logo_path: "cdadic.png",
          duration: "July 2010.",
          location: "Portland, OR",
          description: `Patrick Chiang; Jacob Postman; Joseph Crop`,
          color: "#0071C5",
        },
        {
          title: "Power Saving Techniques in Digital Systems",
          company: "CDADIC Summer Meeting",
          company_url: "/old/_uploads/Publications/CDADIC2009.pdf",
          logo_path: "cdadic.png",
          duration: "July 2009",
          location: "",
          description: ``,
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "I've been busy and wear many hats. Check out what I am up to",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description: "Find me on social media",
  },
  blogSection: {
    title: "My Blog",
    subtitle:
      "Every once in a while I jot down my thoughts and share some of the cool stuff I am working on.",
    link: "/blog",
    avatar_image_path: "",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "LTI As A Service (LTIAAS)",
      url: "https://ltiaas.com",
      image: "ltiaas.gif",
      description:
        "LTIAAS is an API service that enables easy use of the LTI API",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "Kubernetes",
          iconifyClass: "logos:kubernetes",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "1",
      name: "GatherAct",
      url: "https://gatheract.com",
      image: "GatherActBrowse_loop.gif",
      description:
        "GatherAct is an online communication platform (like Zoom) that was born out of the COVID-19 pandemic.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "VUE",
          iconifyClass: "logos:vue",
        },
        {
          name: "SupaBase",
          iconifyClass: "simple-icons:supabase",
        },
      ],
    },
    {
      id: "2",
      name: "Word Party",
      url: "https://lab.gatheract.com/?app=1614925747872492417",
      image: "word_party.png",
      description:
        "Word Party is a real-time collaborative word game that you can play with as many friends as you'd like.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "3",
      name: "VSCode-SystemVerilog",
      url: "https://github.com/eirikpre/VSCode-SystemVerilog",
      image: "goToDef_demo.gif",
      description:
        "Contributor/maintainer of SystemVerilog syntax plugin for VSCode.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "SystemVerilog",
          iconifyClass: "vscode-icons:file-type-systemverilog",
        },
      ],
    },
    {
      id: "4",
      name: "How Many Kitties?",
      image: "howmanykitties.png",
      url: "/howmanykitties",
      description: "A calculator from anything to Kitties.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos:php",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "5",
      name: "DrawCanvas.com",
      image: "drawcanvas.png",
      url: "",
      description:
        "A collaborative drawing website. [Retired due to Adobe Flash expiration]",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos:php",
        },
        {
          name: "Flash",
          iconifyClass: "vaadin:adobe-flash",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
      ],
    },
    {
      id: "6",
      name: "joeSpice",
      image: "joespice.png",
      url: "https://github.com/joecrop/joespice",
      description: "A Verilog/Spice co-simulator written in c++.",
      languages: [
        {
          name: "C++",
          iconifyClass: "logos:c-plusplus",
        },
        {
          name: "Verilog",
          iconifyClass: "vscode-icons:file-type-verilog",
        },
      ],
    },
    {
      id: "7",
      name: "Google Docs Circuit Templates",
      url:
        "https://docs.google.com/embeddedtemplate?id=1M00TjVs5Kp4BvP4EY3FMdINx2WzSoTNyclcNM8e7DUc",
      description:
        "A collection of popular circuit elements for anyone trying to draw circuit schematics in Google Drawings.",
      languages: [
        {
          name: "Google Docs/Drawings",
          iconifyClass: "logos:google-drive",
        },
      ],
    },
    {
      id: "8",
      name: "Cell Culling Toolkit",
      url: "https://github.com/joecrop/cell_culling_toolkit",
      description:
        "Code for my publication titled: 'Design automation methodology for improving the variability of synthesized digital circuits operating in the sub/near-threshold regime'.",
      languages: [
        {
          name: "Perl",
          iconifyClass: "logos:perl",
        },
        {
          name: "Matlab",
          iconifyClass: "vscode-icons:file-type-matlab",
        },
      ],
    },
    {
      id: "8",
      name: "Android Network Simulator",
      url: "/MNOS",
      description:
        "A Visual simulation of a conceptual android networking feature enhancement.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "10",
      name: "Star Trek Communicator Badge",
      image: "communicator.jpeg",
      url: "https://hackaday.io/project/19700-star-trek-communicator-badge",
      description:
        "In the true spirit of Star Trek, this communicator badge is completely autonomous, while fitting in the form factor of an original badge.",
      languages: [
        {
          name: "c++",
          iconifyClass: "logos:c-plusplus",
        },
        {
          name: "Circuit Design",
          iconifyClass: "wpf:integrated-circuit",
        },
        {
          name: "PCB Design",
          iconifyClass: "flat-color-icons:circuit",
        },
        {
          name: "3D Modeling/Printing",
          iconifyClass: "file-icons:3d-model",
        },
      ],
    },
    {
      id: "11",
      name: "Smart Desktop Medicine Organizer",
      image: "sdmo.png",
      url: "https://hackaday.io/project/7019-smart-desktop-medicine-organizer",
      description:
        "A coffee machine sized box that automatically organizes your medications and connects your medicine use directly to your doctor/pharmacy.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos:javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "RaspberryPi",
          iconifyClass: "logos:raspberry-pi",
        },
      ],
    },
    {
      id: "12",
      name: "Analog Comparator From Digital Gates",
      url: "/blog",
      description:
        "An Analog Comparator Built Entirely out of 7410 Digital NAND3 Chips",
      languages: [
        {
          name: "Circuit Design",
          iconifyClass: "wpf:integrated-circuit",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  publications,
  projectsHeader,
  contactPageData,
  projects,
};
