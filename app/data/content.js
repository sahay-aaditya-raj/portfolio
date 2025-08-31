export const profile = {
  name: "Aaditya Raj",
  role: "Software Engineer",
  location: "Bengaluru, Karnataka, India",
  summary:
    "A computer science student interested in creating practical tech solutions that have an impact on the real world. Enjoy deep-diving into software engineering, IoT, and machine learning, also love working across projects to create scalable solutions in the software world as well as real-time systems and a workoholic who dives into the work and won’t get peace until it is finished.",
  email: "sahay.aaditya.raj@gmail.com",
  positions: [
    { label: "Coding Club RVCE — Junior Core Team Member" },
    { label: "SPARK IUCEE × RVCE Industry Connect — People's Operations Head" },
  ],
  links: {
    github: "https://github.com/sahay-aaditya-raj",
    linkedin: "https://linkedin.com/in/aaditya-raj-sahay",
    website: "https://sahay-aaditya-raj.com",
  },
};

export const education = [
  {
    school: "R.V. College Of Engineering, Bengaluru, India",
    degree: "B.E. in Computer Science and Engineering",
    period: "Sep 2023 — Jun 2027",
    details: ["CGPA: 8.93/10.00"],
  },
  {
    school: "St. Karen’s High School, Patna, India",
    degree: "CBSE Senior School Certificate Examination (XII)",
    period: "Jun 2021 — Jun 2023",
    details: ["Percentage: 88.6%"],
  },
  {
    school: "St. Karen’s High School, Patna, India",
    degree: "CBSE Secondary School Examination (X)",
    period: "Jun 2019 — Jun 2021",
    details: ["Percentage: 91.16%"],
  },
];

// Unified skills grouped by category
// level: 0 = Beginner (red), 1 = Intermediate (yellow), 2 = Pro (green)
export const skills = [
  {
    category: "Languages",
    items: [
  { name: "Python", level: 2 },
  { name: "JavaScript", level: 2 },
  { name: "TypeScript", level: 2 },
  { name: "C/C++", level: 2 },
  { name: "SQL", level: 2 },
  { name: "HTML", level: 2 },
  { name: "CSS", level: 2 },
    ],
  },
  {
    category: "Technologies",
    items: [
  { name: "React.js", level: 2 },
  { name: "Next.js", level: 2 },
  { name: "Node.js", level: 2 },
  { name: "Express.js", level: 2 },
  { name: "TailwindCSS", level: 2 },
  { name: "Bootstrap", level: 2 },
  { name: "Django", level: 2 },
  { name: "Flask", level: 2 },
  { name: "NumPy", level: 2 },
  { name: "Pandas", level: 2 },
  { name: "Matplotlib", level: 1 },
  { name: "TensorFlow", level: 1 },
  { name: "OpenCV", level: 1 },
  { name: "MySQL", level: 1 },
  { name: "PostgreSQL", level: 2 },
  { name: "MongoDB", level: 2 },
    ],
  },
  {
    category: "Other Technical Skills",
    items: [
  { name: "Linux (Kali/Ubuntu/Debian)", level: 2 },
  { name: "OOP", level: 2 },
  { name: "Functional Programming", level: 2 },
  { name: "CI/CD", level: 1 },
  { name: "IoT Integration", level: 2 },
  { name: "Embedded Programming", level: 2 },
  { name: "REST", level: 2 },
  { name: "Database Management", level: 2 },
  { name: "Microservices", level: 1 },
  { name: "API Handling and Management", level: 2 },
  { name: "Raspberry Pi", level: 2 },
  { name: "ESP32 Modules", level: 2 },
  { name: "Project Management", level: 2 },
  { name: "Data Structures and Algorithms", level: 1 },
  { name: "Agentic AI", level: 0 },
  { name: "MCP", level: 0 },
    ],
  },
  {
    category: "Soft Skills",
    items: [
  { name: "Communication", level: 2 },
  { name: "Problem-Solving", level: 2 },
  { name: "Teamwork", level: 2 },
  { name: "Leadership", level: 2 },
  { name: "Adaptability", level: 2 },
  { name: "Critical Thinking", level: 2 },
  { name: "Quick Learning", level: 2 },
    ],
  },
];

export const projects = [
  {
    title: "8th Mile Fest Website",
    description:
      "Engineered the official website for RVCE’s 8th Mile Fest with Razorpay/PhonePe payments, dynamic pass generation, and secure backend workflows.",
    tags: ["Next.js", "MongoDB", "Razorpay", "PhonePe API", "Backend", "Vercel"],
    link: "https://github.com/sahay-aaditya-raj/8th-mile-website",
  },
  {
    title: "Human Violence Detection System",
    description:
      "Live video monitoring system using ML to detect human violence with multi-camera support and model optimizations to reduce false alarms.",
    tags: ["Deep Learning", "Web UI", "Multi-Cam", "Computer Networking"],
    link: "#",
  },
  {
    title: "Money Management Software",
    description:
      "A comprehensive tool for tracking income, expenses, and budgeting, built with Next.js.",
    tags: ["Next.js", "React", "REST API", "MongoDB", "ShadCN", "TailwindCSS"],
    link: "https://github.com/sahay-aaditya-raj/money-management",
  },
  {
    title: "Stock Management System for Aztec LifeScience Pvt. Ltd.",
    description:
      "Full-stack inventory management with item tracking, stock history, and invoice generation for a small-scale business.",
    tags: ["Django", "Pandas", "SQLite3", "HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Voice-Controlled Search Extension (Ctrl+F Alternative)",
    description:
      "Browser extension enabling find-in-page via voice commands using JavaScript and browser APIs for hands-free accessibility.",
    tags: ["JavaScript", "Browser APIs", "Voice Recognition"],
    link: "#",
  },
  {
    title: "Facial Recognition Login System",
    description:
      "Facial login for mobile devices with geofencing, built with Kivy/KivyMD for UI and Python/OpenCV for recognition and geofencing logic.",
    tags: ["Python", "Kivy", "KivyMD", "OpenCV", "Geofencing"],
    link: "#",
  },
  {
    title: "Railway Reservation Scraper",
    description:
      "Real-time train reservation data scraper for IRCTC/web sources with a custom GUI to present structured results.",
    tags: ["Python", "Web Scraping", "Pandas", "Kivy", "KivyMD"],
    link: "#",
  },

];

export const experience = [
  {
    company: "Swan Sorter Systems Pvt. Ltd., Bengaluru, India",
    role: "IoT and Backend Developer",
    period: "Feb 2025 — Jun 2025 (Internship)",
    points: [
      "Developed a computer vision system for rice quality assessment using OpenCV and Python.",
      "Deployed the solution on a Raspberry Pi for real-time analysis and efficient resource management.",
      "Integrated PiCamera with Flask and AsyncIO for smooth live video streaming and processing.",
      "Technologies: Python, OpenCV, Raspberry Pi, Pi OS (Debian Based), Flask, AsyncIO, System Optimization.",
      "Guided by: Dr. K. Badri Nath (Assoc. Prof.), Dr. Azra Nasreen (Assoc. Prof.).",
    ],
  },
  {
    company: "Cisco RVCE CoE in IoT and Thaynes Automation, Bengaluru, India",
    role: "Firmware Developer",
    period: "Nov 2023 — Jan 2024 (Internship)",
    points: [
      "Created full-stack applications with clean API structures and efficient workflow integration.",
      "Handled backend databases and improved frontend responsiveness and user experience.",
      "Maintained version control and team collaboration using Git and GitHub.",
      "Technologies: React.js, Express.js, Bootstrap, API Management, IoT Integration, Linux (Ubuntu).",
      "Guided by: Dr. B. Renuka Prashad (Associate Dean), Dr. B. H. Chandrasekhar (Assoc. Prof.).",
    ],
  },
];

export const awards = [
  {
    title: "First Place — SQL Injection Identification using ML",
    by: "DSATM",
    year: "2023",
    link: "https://drive.google.com/file/d/1B6vuKLvQ1aIUkP3sZEa-otCOCmXIBdEl/view",
    notes: "",
  },
  {
    title: "Best Project — Environmental Theme, Experiential Learning",
    by: "RVCE",
    year: "2024",
    link: "https://drive.google.com/file/d/154DrYYCMtvDZqA4ChO-1WgOc5bD4ezbk/view",
    notes: "",
  },
  {
    title: "Certificate of Excellence — Abnormal Human Behavioural Detection",
    by: "GITAM University",
    year: "2024",
    link: "https://drive.google.com/file/d/1F07tW2Nm0MabLOVI_eyOKBFFOwKZlZvh/view",
    notes: "",
  },
  {
    title: "Leadership & Sustainability Course",
    by: "IUCEE",
    year: "2024",
    link: "https://drive.google.com/file/d/1vU7qfZo1eKrYqtqzjVt44wd6It_ToWN2/view",
    notes: "",
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    by: "Udemy",
    year: "2023",
    link: "https://drive.google.com/file/d/1XD6Jb2NK9T1eoojhHFOa7EyDtOxT_Bz6/view",
    notes: "",
  },
];

export const workshops = [
  {
    title: "Web Development Bootcamp – Coding Club RVCE",
    by: "RVCE, Bengaluru, India",
    year: "Mar 2025 – May 2025",
    notes: "Led a multi-week full-stack web development bootcamp with 100+ attendees.",
    link: "https://www.linkedin.com/posts/coding-club-rvce_codingclubrvce-webdevelopment-fullstack-ugcPost-7310142989203345409-oyQD/",
  },
  {
    title: "Code Sprint Bootcamp – Coding Club RVCE",
    by: "RVITM, Bengaluru, India",
    year: "Mar 2025",
    notes: "Conducted a hands-on session on NLP-based chatbot building.",
    link: "https://www.linkedin.com/posts/aaditya-raj-sahay_ai-chatbots-codingclub-activity-7305945023555022849-st0s/",
  },
  {
    title: "Generative AI Workshop – Coding Club RVCE",
    by: "RVCE, Bengaluru, India",
    year: "Dec 2024",
    notes: "Taught Generative AI basics and hosted live demonstrations in collaboration with IEEE.",
    link: "https://www.linkedin.com/posts/aaditya-raj-sahay_generativeai-workshopsuccess-codingclubrvce-activity-7271528809877643264-O9k2/",
  },
];
