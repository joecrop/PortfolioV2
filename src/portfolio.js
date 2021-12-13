/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
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
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer (Intern)",
          company: "Valora Infotech",
          company_url: "https://valora-infotech.business.site/",
          logo_path: "valora.jpg",
          duration: "Oct 2020 - Mar 2021",
          location: "Office",
          description: `Train, manage and provide guidance to junior software development staff.
          Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer (Freelancer)",
          company: "NightOwls",
          company_url: "http://nightowls.company/",
          logo_path: "nightowls.jpg",
          duration: "Sep 2020 - Oct 2020",
          location: "Work From Home",
          description: `Work closely with the Client and Team on change request functions.
          We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        {
          title: "Campus Hustler",
          company: "Skillenza",
          company_url: "https://skillenza.com/",
          logo_path: "skillenza.png",
          duration: "Feb 2021 - Present",
          location: "Work from Home",
          description:
            "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
          color: "#196acf",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
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
