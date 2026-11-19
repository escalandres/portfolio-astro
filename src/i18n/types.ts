export type ExperienceType = "professional" | "internship";

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: ExperienceType;
  period: string;
  points: string[];
  current?: boolean;
}

export interface ExperienceContent {
  heading: string;
  items: ExperienceItem[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  icon?: string;
  period?: string;
  credentialUrl?: string;
}

export interface EducationContent {
  heading: string;
  subtitle?: string;
  educationTitle: string;
  certificationsTitle: string;
  items: {
    id: string;
    degree: string;
    institution: string;
    period: string;
  }[];
  certifications: Certification[];
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    experience: string;
    projects: string;
    expertise: string;
    education: string;
    contact: string;
  };
  hero: {
    availability: string;
    location: string;
    name: string;
    role: string;
    headlineLead: string;
    headlineAccent: string;
    blob: string;
    intro: string;
    ctaExplore: string;
    ctaCv: string;
    ctaContact: string;
    scrollHint: string;
    specialties: string[];
  };
  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
    focusTitle: string;
    focusItems: { title: string; description: string }[];
  };
  experienceContent: ExperienceContent;
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewProject: string;
    visitDemo: string;
    sourceCode: string;
    detail: {
      overview: string;
      problem: string;
      role: string;
      architecture: string;
      features: string;
      challenges: string;
      decisions: string;
      screenshots: string;
      back: string;
    };
  };
  expertise: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  education: EducationContent;
  contact: {
    eyebrow: string;
    title: string;
    message: string;
    emailLabel: string;
    linkedinLabel: string;
    githubLabel: string;
    cvLabel: string;
    ariaLabel: string;
  };
  footer: {
    tagline: string;
    navigation: string;
    socials: string;
    rights: string;
    built: string;
  };
}
