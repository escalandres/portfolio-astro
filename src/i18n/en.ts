import { EDUCATION } from "../data/education";
import type { EducationContent, ExperienceItem, Translations } from "./types";

const experienceItems: ExperienceItem[] = [
  {
    id: "oracle",
    company: "Oracle NetSuite · Mexico City",
    role: "Technical Consultant & Solution Architect",
    type: "professional",
    period: "Aug 2024 — Present",
    current: true,
    points: [
      "Solution architecture and complex ERP integrations with SuiteScript 2.1, SuiteTalk and RESTlets for global LATAM operations.",
      "NetSuite fiscal localizations and technical leadership across 20+ enterprise implementation projects.",
    ],
  },
  {
    id: "info100",
    company: "INFO100 S.A. de C.V. · Mexico City",
    role: "Web Developer Intern",
    type: "professional",
    period: "Nov 2022 — Aug 2024",
    points: [
      "PLD_WEB anti-money laundering platform and CONDUSEF regulatory complaints platform with ASP.NET Framework, Bootstrap 4 and SQL Server.",
    ],
  },
];

const education: EducationContent = {
  ...EDUCATION,
  heading: "Certifications",
  subtitle: "Formal validation of my knowledge in cloud and enterprise platforms.",
  educationTitle: "Education",
  certificationsTitle: "Certifications",
};

export const en: Translations = {
  meta: {
    title: "Andres Escala · Full Stack Developer",
    description:
      "Portfolio of Andres Escala, Full Stack Developer and Technical Consultant at Oracle NetSuite. Founder of AES Studio. Mexico City.",
  },
  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    expertise: "Stack",
    education: "Certifications",
    contact: "Contact",
  },
  hero: {
    availability: "Available for new challenges",
    location: "Mexico City",
    name: "Andres Escala",
    role: "NetSuite Technical Consultant & Solution Architect",
    headlineLead: "I build software that",
    headlineAccent: "scales businesses.",
    blob: "AE",
    intro:
      "Telematics engineer and NetSuite Technical Consultant with 4 years of experience: Full Stack development (.NET, Node.js, React) and ERP solution architecture. Specialist in SuiteScript 2.1, SuiteTalk, RESTlets and LATAM integrations across 20+ enterprise projects.",
    ctaExplore: "View projects",
    ctaCv: "Download CV",
    ctaContact: "Send email",
    scrollHint: "Scroll to explore",
    specialties: [],
  },
  overview: {
    eyebrow: "My venture",
    title: "AES Studio",
    paragraphs: [
      "I help small and medium businesses operate faster with automation and artificial intelligence, custom software and SaaS products ready to grow.",
    ],
    facts: [
      { label: "years of experience", value: "4+" },
      { label: "global enterprise projects", value: "20+" },
      { label: "formal certifications", value: "10" },
      { label: "English B2 · Spanish native", value: "ES · EN" },
    ],
    focusTitle: "Services",
    focusItems: [
      { title: "AI-powered operational acceleration", description: "" },
      { title: "Custom software development", description: "" },
      { title: "SaaS product development", description: "" },
    ],
  },
  experienceContent: {
    heading: "Experience",
    items: experienceItems,
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Personal projects",
    subtitle: "Real applications, from logistics tracking to real-time chat and video games.",
    viewProject: "View project",
    visitDemo: "Live demo",
    sourceCode: "Source",
    detail: {
      overview: "Overview",
      problem: "Problem",
      role: "My role",
      architecture: "Architecture",
      features: "Features",
      challenges: "Challenges",
      decisions: "Decisions",
      screenshots: "Screenshots",
      back: "Back to projects",
    },
  },
  expertise: {
    eyebrow: "Toolbox",
    title: "Technical stack",
    subtitle: "From backend to cloud, with Oracle Cloud and Microsoft Azure certifications.",
  },
  education,
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your project?",
    message: "I'd love to hear about your project and how I can help. Write to me and I'll reply as soon as possible.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
    cvLabel: "Download CV",
    ariaLabel: "Contact Andres Escala",
  },
  footer: {
    tagline: "Full Stack Developer & Technical Consultant",
    navigation: "Navigation",
    socials: "Social",
    rights: "All rights reserved.",
    built: "Built by Andres Escala",
  },
};

export type TranslationsType = Translations;
