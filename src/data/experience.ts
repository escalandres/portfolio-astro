import type { ExperienceContent } from "../i18n/types";

export const EXPERIENCE: ExperienceContent = {
  heading: "Professional Experience",
  items: [
    {
      id: "oracle",
      company: "Oracle NetSuite",
      role: "Associate Technical Consultant",
      type: "professional",
      period: "Aug 2024 – Present",
      current: true,
      points: [
        "Lead technical consulting for NetSuite ERP implementations, focusing on ERP customization and development.",
        "Design and build solutions with SuiteScript and SuiteCloud, including custom records, workflows and integrations.",
        "Architect enterprise integrations between NetSuite and third-party systems through REST APIs.",
        "Identify and automate business process improvements across ERP workflows.",
        "Provide technical solution engineering support for complex implementation projects.",
      ],
    },
    {
      id: "info100",
      company: "Info100 S.A. de C.V.",
      role: "Web Developer Intern",
      type: "internship",
      period: "Nov 2022 – Aug 2024",
      points: [
        "Developed web applications and RESTful APIs for financial crime prevention with ASP.NET and SQL Server.",
        "Built backend services with .NET and ASP.NET Core, including API integrations.",
        "Modernized legacy application components and designed relational database schemas.",
        "Managed and deployed backend services on Linux-based infrastructure.",
      ],
    },
  ],
};
