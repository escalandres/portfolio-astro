export interface ExpertiseCategory {
  id: string;
  label: { en: string; es: string };
  technologies: string[];
}

export const EXPERTISE: ExpertiseCategory[] = [
  {
    id: "netsuite",
    label: { en: "NetSuite & SuiteCloud", es: "NetSuite y SuiteCloud" },
    technologies: ["SuiteScript 2.1", "SuiteTalk", "RESTlets", "SuiteFlow", "Suitelet", "Map/Reduce", "UserEvent"],
  },
  {
    id: "backend",
    label: { en: "Backend", es: "Backend" },
    technologies: ["C#", ".NET Core 6/8", "ASP.NET", "Node.js", "Express.js", "REST APIs"],
  },
  {
    id: "frontend",
    label: { en: "Frontend", es: "Frontend" },
    technologies: ["React", "TypeScript", "JavaScript", "jQuery", "HTML5", "CSS3"],
  },
  {
    id: "data-cloud",
    label: { en: "Data, cloud & AI", es: "Datos, nube e IA" },
    technologies: ["SQL Server", "MySQL", "MongoDB", "Oracle GenAI", "Azure", "Linux", "CI/CD"],
  },
];
