import {
  Braces,
  Cloud,
  Code2,
  Database,
  FileJson,
  Film,
  GraduationCap,
  HardDrive,
  Network,
  Radar,
  Search,
  ShieldCheck,
  Terminal,
  Wifi,
} from "lucide-react";

export const profile = {
  name: "Pablo Lopez",
  title: "Full Stack Developer",
  subtitle: "Frontend & Backend | React, Next.js, Node.js y TypeScript",
  location: "Argentina",
  email: "pabloexelopezh@gmail.com",
  github: "https://github.com/PabloLopez23",
  linkedin: "https://www.linkedin.com/in/pablo-l%C3%B3pez-39226a275/",
  resume: "/cv.pdf",
  summary:
    "Desarrollador Full Stack con experiencia en frontend y backend, especializado en crear productos web modernos, APIs e integraciones. Combino React, Next.js, Node.js y TypeScript con automatización e inteligencia artificial para transformar necesidades de negocio en soluciones claras, escalables y fáciles de usar.",
  direction:
    "Busco oportunidades en desarrollo frontend, backend o full stack donde pueda aportar experiencia construyendo productos, integrando servicios y automatizando procesos con IA, con una base complementaria en desarrollo seguro.",
};

export const navItems = [
  { label: "Inicio", href: "#home", icon: Radar },
  { label: "Experiencia", href: "#experience", icon: HardDrive },
  { label: "Proyectos", href: "#projects", icon: Braces },
  { label: "Contacto", href: "#contact", icon: Wifi },
];

export const stack = [
  { name: "JavaScript", label: "JS", icon: FileJson },
  { name: "TypeScript", label: "TS", icon: Code2 },
  { name: "React.js", label: "Re", icon: Braces },
  { name: "Next.js", label: "Nx", icon: Terminal },
  { name: "Node.js", label: "Nd", icon: Database },
  { name: "APIs REST", label: "API", icon: Network },
  { name: "n8n", label: "n8n", icon: HardDrive },
  { name: "Integración IA", label: "IA", icon: Cloud },
  { name: "AWS", label: "AWS", icon: Cloud },
  { name: "Docker", label: "Dk", icon: HardDrive },
];

export const focusAreas = [
  "Frontend",
  "Backend",
  "Full Stack",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "APIs REST",
  "Automatización",
  "n8n",
  "Integración de IA",
  "Desarrollo seguro",
];

export const experience = [
  {
    role: "Fundador y desarrollador",
    company: "Tito Agencia IA",
    date: "2026",
    title: "Soluciones con IA y automatización",
    link: "https://titoagenciaia.netlify.app/",
    description:
      "Emprendimiento enfocado en crear soluciones digitales, automatizaciones y experiencias web apoyadas por inteligencia artificial para mejorar procesos comerciales y operativos.",
    highlights: ["Next.js", "Automatización", "Integración de IA", "Producto digital"],
  },
  {
    role: "Backend Developer",
    company: "Zelcar Games",
    date: "2025",
    title: "Desarrollo de servicios y lógica de negocio",
    link: "https://www.linkedin.com/company/zelcar-games-llc/posts/?feedView=all",
    description:
      "Experiencia de desarrollo backend en un entorno colaborativo, trabajando sobre servicios, lógica de negocio e integración de datos para productos digitales.",
    highlights: ["Backend", "APIs", "Integración", "Trabajo en equipo"],
  },
  {
    role: "Frontend Developer",
    company: "No Country",
    date: "2024",
    title: "App Web Barberia",
    link: "https://www.linkedin.com/company/nocountrytalent/posts/?feedView=all",
    description:
      "Simulación laboral con un equipo remoto multidisciplinario. Participé en una aplicación para gestionar turnos y servicios de barbería, desarrollando vistas, integraciones y el flujo de reservas.",
    highlights: ["React", "TypeScript", "Integración de APIs", "Trabajo remoto"],
  },
  {
    role: "Full Stack Developer",
    company: "Henry",
    date: "2023",
    title: "Bootcamp intensivo",
    link: "https://www.linkedin.com/school/henryok/posts/?feedView=all",
    description:
      "Formación intensiva en desarrollo web con proyectos individuales y grupales, pair programming y flujos colaborativos similares a un entorno profesional remoto.",
    highlights: ["JavaScript", "React", "Node.js", "Bases de datos"],
  },
];

export const projects = [
  {
    title: "Tito Agencia IA",
    image: "/tito-agencia-ia-responsive.avif",
    description:
      "Sitio comercial de mi emprendimiento de automatización e inteligencia artificial. Presenta servicios, casos de uso y canales de contacto con una experiencia responsive y optimizada.",
    skills: ["Next.js", "TypeScript", "IA", "Automatización", "SEO", "Netlify"],
    repository: "https://github.com/PabloLopez23/agencia-ia",
    live: "https://titoagenciaia.netlify.app/",
    liveLabel: "Ver proyecto",
    icon: Cloud,
  },
  {
    title: "Clínica Dental",
    image: "/clinica-dental.avif",
    description:
      "Landing profesional para una clínica dental con servicios, beneficios, llamados a la acción y contacto. Los datos fueron reemplazados por información ficticia para proteger al cliente real.",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Responsive", "Netlify"],
    repository: "https://github.com/PabloLopez23/policonsultorio-quintana",
    live: "https://web-clinica-prototipo.netlify.app/",
    liveLabel: "Ver proyecto",
    icon: ShieldCheck,
  },
  {
    title: "Estética Médica",
    image: "/estetica-medica-responsive.avif",
    description:
      "Web premium para un centro de estética médica, enfocada en confianza, claridad de servicios y conversión. Los datos visibles son ficticios para preservar la privacidad del cliente.",
    skills: ["Next.js", "TypeScript", "React", "CSS", "SEO", "Responsive"],
    repository: "https://github.com/PabloLopez23/estetica-medica",
    live: "https://web-estetica-medica-prototipo.netlify.app/",
    liveLabel: "Ver proyecto",
    icon: Code2,
  },
  {
    title: "GYM",
    image: "/gym-responsive.avif",
    description:
      "Landing responsive para un gimnasio, con propuesta de valor, actividades, galería y contacto. La identidad y los datos públicos fueron adaptados con información ficticia.",
    skills: ["Next.js", "TypeScript", "React", "CSS", "Optimización", "Responsive"],
    repository: "https://github.com/PabloLopez23/gym-web",
    live: "https://web-gym-prototipo.netlify.app/",
    liveLabel: "Ver proyecto",
    icon: HardDrive,
  },
  {
    title: "Best Movie Trailers",
    image: "/best-movie-trailers-responsive.avif",
    description:
      "Aplicación React para descubrir películas y explorar trailers. Consume The Movie Database API e incluye búsqueda, navegación y una interfaz adaptada a distintos dispositivos.",
    skills: ["TypeScript", "React", "Bootstrap", "Axios", "API REST", "Responsive"],
    repository: "https://github.com/PabloLopez23/Best-Movie-Trailers",
    live: "https://pablolopezmovies.vercel.app/",
    liveLabel: "Ver proyecto",
    icon: Film,
  },
  {
    title: "App Web Barberia",
    image: "/app-barberia-responsive.avif",
    description:
      "Proyecto colaborativo de No Country para gestionar turnos de barbería. Trabajé en vistas frontend, integración con servicios backend y el flujo de reservas.",
    skills: ["React", "TypeScript", "Node.js", "Redux", "Tailwind CSS", "APIs"],
    repository: "https://github.com/PabloLopez23/barbershop",
    live: "https://youtu.be/Hx8DrkWHM2k?si=fHqUbEp9GpfWCVsW",
    liveLabel: "Ver presentación",
    icon: Braces,
  },
  {
    title: "Searcher GitHub",
    image: "/searcher-github-responsive.avif",
    description:
      "Aplicación React para buscar usuarios de GitHub y consultar repositorios, seguidores y datos públicos mediante la API de la plataforma.",
    skills: ["React", "TypeScript", "CSS", "Axios", "GitHub API", "Responsive"],
    repository: "https://github.com/PabloLopez23/Searcher_GitHub",
    live: "https://searcher-git-hub.vercel.app/",
    liveLabel: "Ver proyecto",
    icon: Search,
  },
];

export const education = [
  {
    title: "Desarrollo Full Stack",
    school: "Platzi",
    date: "2023",
    link: "https://platzi.com/p/pabloexelh22/ruta/100-javascript-full-stack/diploma/detalle/",
    icon: GraduationCap,
  },
  {
    title: "Formación en Ciberseguridad",
    school: "Platzi",
    date: "2023",
    link: "https://platzi.com/p/pabloexelh22/ruta/38-seguridad-informatica-old/diploma/detalle/",
    icon: ShieldCheck,
  },
  {
    title: "Inglés",
    school: "Platzi",
    date: "2023",
    link: "https://platzi.com/p/pabloexelh22/ruta/12050-beginner-core2/diploma/detalle/",
    icon: Wifi,
  },
];
