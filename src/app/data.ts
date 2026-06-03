import {
  Braces,
  Cloud,
  Code2,
  Database,
  FileJson,
  Film,
  GraduationCap,
  HardDrive,
  Monitor,
  Network,
  Radar,
  Search,
  ShieldCheck,
  Terminal,
  Wifi,
} from "lucide-react";

export const profile = {
  name: "Pablo Lopez",
  title: "Cybersecurity Analyst",
  subtitle: "Blue Team | Cloud Security | Secure Software Development",
  location: "Argentina",
  email: "pabloexelopezh@gmail.com",
  github: "https://github.com/PabloLopez23",
  linkedin: "https://www.linkedin.com/in/pablo-l%C3%B3pez-39226a275/",
  resume: "/cv.pdf",
  summary:
    "Software developer with frontend and backend training, currently specializing in cybersecurity with a focus on Blue Team, cloud security, vulnerability analysis, and secure application development. I combine React, Node.js, TypeScript, Linux, Burp Suite, Nmap, and Wireshark to build software with a clear understanding of its attack surface.",
  direction:
    "I am looking for roles where software, infrastructure, cloud, and security operations meet: Blue Team, SOC, cloud security, secure development, or technical security support.",
};

export const navItems = [
  { label: "Home", href: "#home", icon: Radar },
  { label: "Experience", href: "#experience", icon: HardDrive },
  { label: "Projects", href: "#projects", icon: Braces },
  { label: "Contact", href: "#contact", icon: Wifi },
];

export const stack = [
  { name: "JavaScript", label: "JS", icon: FileJson },
  { name: "TypeScript", label: "TS", icon: Code2 },
  { name: "React.js", label: "Re", icon: Braces },
  { name: "Next.js", label: "Nx", icon: Terminal },
  { name: "Node.js", label: "Nd", icon: Database },
  { name: "Linux", label: "Li", icon: Terminal },
  { name: "AWS", label: "AWS", icon: Cloud },
  { name: "Docker", label: "Dk", icon: HardDrive },
  { name: "Wireshark", label: "Ws", icon: Network },
  { name: "Nmap", label: "Nm", icon: Monitor },
];

export const focusAreas = [
  "Blue Team",
  "Cloud Security",
  "Cybersecurity",
  "Pentesting",
  "Web Security",
  "Vulnerability Analysis",
  "Burp Suite",
  "Nmap",
  "Wireshark",
  "Linux",
  "SIEM",
  "OWASP",
];

export const experience = [
  {
    role: "Software Developer",
    company: "No Country",
    date: "2024",
    title: "BarberShop",
    link: "https://www.linkedin.com/company/nocountrytalent/posts/?feedView=all",
    description:
      "Tech work simulation with a multidisciplinary remote team. I contributed to a web application for barber appointment and service management, working on frontend views, backend integration, API consumption, and the booking flow.",
    highlights: ["Remote teamwork", "Frontend views", "API integration", "Booking flow"],
  },
  {
    role: "Software Developer",
    company: "Henry",
    date: "2023",
    title: "Full-stack bootcamp",
    link: "https://www.linkedin.com/school/henryok/posts/?feedView=all",
    description:
      "Full-time programming bootcamp where I gained experience working in teams through Pair Programming and collaborative workflows that simulated a real remote development environment.",
    highlights: ["Pair Programming", "Slack", "Zoom", "Meet", "Notion", "Discord"],
  },
];

export const projects = [
  {
    title: "Best Movie Trailers",
    image: "https://res.cloudinary.com/dxakaoudm/image/upload/v1732389918/img1_deiska.jpg",
    description:
      "React web app for exploring recent and popular movie trailers. It consumes The Movie Database API and focuses on search, discovery, and responsive UI.",
    skills: ["TypeScript", "React", "Bootstrap", "Axios", "API", "Node.js", "Responsive Web Design"],
    repository: "https://github.com/PabloLopez23/Best-Movie-Trailers",
    live: "https://pablolopezmovies.netlify.app/",
    liveLabel: "Live site",
    icon: Film,
  },
  {
    title: "Searcher GitHub",
    image: "https://res.cloudinary.com/dxakaoudm/image/upload/v1732390061/img3_k0t9sc.jpg",
    description:
      "React application that searches GitHub users and displays relevant public profile data such as repositories, followers, and profile information.",
    skills: ["React", "TypeScript", "CSS", "Axios", "API", "Responsive Web Design"],
    repository: "https://github.com/PabloLopez23/Searcher_GitHub",
    live: "https://searcher-git-hub.vercel.app/",
    liveLabel: "Live site",
    icon: Search,
  },
  {
    title: "Portfolio Dev",
    image: "https://res.cloudinary.com/dxakaoudm/image/upload/v1732390073/img4_femr3y.jpg",
    description:
      "Personal portfolio built with Astro, JavaScript, TypeScript, and TailwindCSS. It includes project descriptions, external links, and a responsive layout.",
    skills: ["Astro", "JavaScript", "TypeScript", "TailwindCSS", "Node.js", "Responsive Web Design"],
    repository: "https://github.com/PabloLopez23/Porfolio-Dev-PabloLopez",
    live: "https://pablolopezporfolio.netlify.app/",
    liveLabel: "Current site",
    icon: Code2,
  },
  {
    title: "BarberShop",
    image: "https://res.cloudinary.com/dxakaoudm/image/upload/v1732390027/img2_ghgatr.jpg",
    description:
      "Collaborative No Country project for barber appointment management. I worked on frontend views, backend service integration, and data flow for a clear booking experience.",
    skills: ["Node.js", "TypeScript", "React", "Redux", "TailwindCSS", "Responsive Web Design"],
    repository: "https://github.com/PabloLopez23/barbershop",
    live: "https://drive.google.com/file/d/1H1S3dTU0ZS_Fl6zovThnI_87PoGG_NbX/view?usp=sharing",
    liveLabel: "Presentation",
    icon: ShieldCheck,
  },
];

export const education = [
  {
    title: "Software Developer",
    school: "Platzi",
    date: "2023",
    link: "https://platzi.com/p/pabloexelh22/ruta/100-javascript-full-stack/diploma/detalle/",
    icon: GraduationCap,
  },
  {
    title: "Cybersecurity Analyst",
    school: "Platzi",
    date: "2023",
    link: "https://platzi.com/p/pabloexelh22/ruta/38-seguridad-informatica-old/diploma/detalle/",
    icon: ShieldCheck,
  },
  {
    title: "English",
    school: "Platzi",
    date: "2023",
    link: "https://platzi.com/p/pabloexelh22/ruta/12050-beginner-core2/diploma/detalle/",
    icon: Wifi,
  },
];
