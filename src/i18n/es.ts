import { EDUCATION } from "../data/education";
import type { EducationContent, ExperienceItem, Translations } from "./types";

const experienceItems: ExperienceItem[] = [
  {
    id: "oracle",
    company: "Oracle NetSuite · Ciudad de México",
    role: "Technical Consultant & Solution Architect",
    type: "professional",
    period: "Ago 2024 — Actualidad",
    current: true,
    points: [
      "Arquitectura de soluciones e integraciones ERP complejas con SuiteScript 2.1, SuiteTalk y RESTlets para operaciones globales en LATAM.",
      "Localizaciones fiscales de NetSuite y liderazgo técnico en más de 20 proyectos de implementación empresarial.",
    ],
  },
  {
    id: "info100",
    company: "INFO100 S.A. de C.V. · Ciudad de México",
    role: "Desarrollador Web en prácticas",
    type: "professional",
    period: "Nov 2022 — Ago 2024",
    points: [
      "Plataforma PLD_WEB de prevención de lavado de dinero y plataforma de quejas CONDUSEF con ASP.NET Framework, Bootstrap 4 y SQL Server.",
    ],
  },
];

const education: EducationContent = {
  ...EDUCATION,
  heading: "Formación y certificaciones",
  subtitle: "Formación académica y credenciales formales en ERP, nube e inteligencia artificial.",
  educationTitle: "Educación",
  certificationsTitle: "Certificaciones",
  items: [
    {
      id: "unir-ai",
      degree: "Maestría en Inteligencia Artificial aplicada a la transformación del negocio",
      institution: "UNIR México",
      period: "En curso",
    },
    {
      id: "ipn",
      degree: "Ingeniería en Telemática",
      institution: "Instituto Politécnico Nacional (IPN), Ciudad de México",
      period: "Terminado",
    },
  ],
};

export const es: Translations = {
  meta: {
    title: "Andres Escala · Full Stack Developer",
    description:
      "Portafolio de Andres Escala, Full Stack Developer y Technical Consultant en Oracle NetSuite. Fundador de AES Studio. Ciudad de México.",
  },
  nav: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    expertise: "Stack",
    education: "Certificaciones",
    contact: "Contacto",
  },
  hero: {
    availability: "Disponible para nuevos retos",
    location: "Ciudad de México",
    name: "Andres Escala",
    role: "Technical Consultant & Solution Architect en NetSuite",
    headlineLead: "Construyo software que",
    headlineAccent: "escala negocios.",
    blob: "AE",
    intro:
      "Ingeniero en Telemática y Technical Consultant de NetSuite con 4 años de experiencia: desarrollo Full Stack (.NET, Node.js, React) y arquitectura de soluciones ERP. Especialista en SuiteScript 2.1, SuiteTalk, RESTlets e integraciones LATAM en más de 20 proyectos empresariales.",
    ctaExplore: "Ver proyectos",
    ctaCv: "Descargar CV",
    ctaContact: "Enviar correo",
    scrollHint: "Desliza para explorar",
    specialties: [],
  },
  overview: {
    eyebrow: "Mi firma",
    title: "AES Studio",
    paragraphs: [
      "Ayudo a pequeñas y medianas empresas a operar más rápido con automatización e inteligencia artificial, software a la medida y productos SaaS listos para crecer.",
    ],
    facts: [
      { label: "años de experiencia", value: "4+" },
      { label: "proyectos empresariales globales", value: "20+" },
      { label: "certificaciones formales", value: "10" },
      { label: "Inglés B2 · Español nativo", value: "ES · EN" },
    ],
    focusTitle: "Servicios",
    focusItems: [
      { title: "Aceleración operativa con IA", description: "" },
      { title: "Desarrollo de software a la medida", description: "" },
      { title: "Desarrollo de productos SaaS", description: "" },
    ],
  },
  experienceContent: {
    heading: "Experiencia",
    items: experienceItems,
  },
  projects: {
    eyebrow: "Portafolio",
    title: "Proyectos personales",
    subtitle: "Aplicaciones reales, desde tracking logístico hasta tiempo real y videojuegos.",
    viewProject: "Ver proyecto",
    visitDemo: "Ver demo",
    sourceCode: "Código",
    detail: {
      overview: "Resumen",
      problem: "Problema",
      role: "Mi rol",
      architecture: "Arquitectura",
      features: "Funciones",
      challenges: "Retos",
      decisions: "Decisiones",
      screenshots: "Capturas",
      back: "Volver a proyectos",
    },
  },
  expertise: {
    eyebrow: "Herramientas",
    title: "Stack técnico",
    subtitle: "Del backend a la nube, con certificaciones en Oracle Cloud y Microsoft Azure.",
  },
  education,
  contact: {
    eyebrow: "Contacto",
    title: "¿Hablamos de tu proyecto?",
    message: "Me encantaría conocer tu proyecto y cómo puedo ayudarte. Escríbeme y respondo lo antes posible.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Descargar CV",
    ariaLabel: "Contactar a Andres Escala",
  },
  footer: {
    tagline: "Full Stack Developer & Technical Consultant",
    navigation: "Navegación",
    socials: "Redes",
    rights: "Todos los derechos reservados.",
    built: "Hecho por Andres Escala",
  },
};

export type TranslationsType = Translations;
