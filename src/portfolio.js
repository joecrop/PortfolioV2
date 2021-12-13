/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
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
  subTitle: "A Microchip Designer, Full Stack Developer, Ed-Tech Enthusiast.",
  resumeLink: "resume.pdf",
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
      title: "Full-Stack Web Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Develop front end user interfaces for web applications",
        "⚡ Building responsive websites using VUE/ReactJS",
        "⚡ Create basic mobile applications using Flutter",
        "⚡ Creat application backends in Node+Express",
        "⚡ Integration of third party services such as Firebase / Digital Ocean",
        "⚡ Hosting and managing websites in bare metal and Kubernetes",
        "⚡ Experience with Continuous Integration",
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
      title: "Session Chair",
      subtitle: "CJK Conference, Shanghai China, June 2011",
      logo_path: "mongo.png",
      certificate_link: "",
      alt_name: "CJK Session Chair",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Best Question Award",
      subtitle: "CJK Conference, Shanghai China, June 2011",
      logo_path: "mongo.png",
      certificate_link: "",
      alt_name: "CJK Best Question",
      color_code: "#E2405F",
    },
    {
      title: "Fully Funded Research (2009-2014)",
      subtitle: "By CDADIC, NSF, SRC, DOD, Army, DARPA, Intel",
      logo_path: "mongo.png",
      certificate_link: "",
      alt_name: "Research Funding",
      // color_code: "#F6B808",
      color_code: "#47A048",
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
      logo_path: "mlh-logo.svg",
      certificate_link: "",
      alt_name: "CCNA",
      color_code: "#fe0037",
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
          description: `ADI bought/merged Maxim Integration.`,
          color: "#0071C5",
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
          color: "#0071C5",
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
          color: "#0071C5",
        },
        {
          title: "Research Intern",
          company: "Fudan University",
          company_url: "https://fudan.edu",
          logo_path: "fudan.png",
          duration: "Summer 2011",
          location: "Shanghai, China",
          description: `Spent the summer as a research intern at Fudan University in Shanghai, China.
          Research focused on low-power and low-energy encryption engine optimization for integrated RFID systems.`,
          color: "#0071C5",
        },
        {
          title: "Research Assistant",
          company: "Oregon State University",
          company_url: "https://eecs.oregonstate.edu",
          logo_path: "osu.png",
          duration: "2010-2014",
          location: "Corvallis, OR",
          description: `Researched ultra low-power digital circuits and architectures in the VLSI group at OSU (SRC and NFS funded).`,
          color: "#0071C5",
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
          color: "#0071C5",
        },
        {
          title: "Web Design Consultant",
          company: "Personal",
          company_url: "https://joecrop.com",
          logo_path: "consulting.png",
          duration: "2005 - Present",
          location: "Home Office",
          description: `Design and maintain several websites for customers.`,
          color: "#0071C5",
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
          color: "#0071C5",
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
          color: "#0071C5",
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
          color: "#0071C5",
        },
        {
          title: "Network Technician",
          company: "Intel",
          company_url: "https://intel.com",
          logo_path: "intel.png",
          duration: "2003 - 2004",
          location: "Hillsboro, OR",
          description: `Worked at Intel as the Assistant Network Technician for the Desktop Platforms Group - Electronic Communications (DPG-EC).
          Duties included mostly layer 2 configuration of switches and a private subnet lab isolation project.`,
          color: "#0071C5",
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
          color: "#0071C5",
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
          color: "#0071C5",
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
          color: "#0071C5",
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
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "AutomateInstaPyBot",
      url: "https://github.com/harikanani/AutomateInstaPyBot",
      description:
        "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "1",
      name: "react-twitter-clone",
      url: "https://github.com/harikanani/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "top-crypto-gainers",
      url: "https://github.com/harikanani/top-crypto-gainers",
      description:
        "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "node_express_crud_api_starter",
      url: "https://github.com/harikanani/node_express_crud_api_starter",
      description: "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "node-web-scrapper",
      url: "https://github.com/harikanani/node-web-scrapper",
      description:
        "A Simple web scrapper that scrap the information of amazon products such as price.It also scrap Wikipedia Data such as birthdate.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "5",
      name: "harikanani.github.io",
      url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "6",
      name: "Automate Attendace",
      url: "https://github.com/harikanani/Node_Python",
      description: "Automation of Online Attendance using node js and python",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Automate Discord Bot",
      url: "https://github.com/harikanani/AutomateDiscordBot",
      description:
        "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Python Selenium",
          iconifyClass: "logos-selenium",
        },
        {
          name: "Chromium Browser",
          iconifyClass: "openmoji-chromium",
        },
      ],
    },
    {
      id: "8",
      name: "Flask Blog",
      url: "https://github.com/harikanani/flask_blog",
      description: "A Simple Blog Web Application made using Flask Framework",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
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
      id: "9",
      name: "Netflix top series",
      url: "https://github.com/harikanani/netflix-top-series",
      description: "List of Top Netflix Series which is deployed to vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/harikanani/Covid19TrackerReact",
      description:
        "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "11",
      name: "Food Order Static Website",
      url: "https://github.com/harikanani/food-order-website",
      description:
        "A simple static website related to food restaurants service. this is reasponsive as well.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "12",
      name: "NFT Launchpad",
      url: "https://deliquescent-cents.000webhostapp.com/",
      description: "NFT Launchpad crypto site portfolio",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
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
  projectsHeader,
  contactPageData,
  projects,
};
