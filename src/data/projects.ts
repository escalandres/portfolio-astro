export interface ProjectLink {
  demo?: string;
  github?: string;
  download?: string;
  play?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  featured: boolean;
  big?: boolean;
  links: ProjectLink;
  screenshot: string;
  content: {
    overview: string[];
    highlights: string[];
  };
}

const S = "/projects/";

export const PROJECTS_ES: Project[] = [
  {
    slug: "cosmos",
    title: "Cosmos · Tracking app",
    tagline: "Tracking logístico de obras de arte",
    description: "Aplicación web para rastrear contenedores de obras de arte, desarrollada con React y Node.js.",
    stack: ["Node.js", "React", "Express", "Tailwind"],
    featured: true,
    big: true,
    links: {
      demo: "https://app-rastreo-cosmos.netlify.app/",
      github: "https://github.com/escalandres/app-rastreo-frontend",
    },
    screenshot: `${S}app-rastreo.webp`,
    content: {
      overview: [
        "Cosmos es una aplicación web para rastrear contenedores de obras de arte durante su transporte, con visibilidad del estado y la ubicación de cada envío.",
        "El frontend en React consume una API REST construida con Node.js y Express, con una interfaz responsive estilada con Tailwind.",
      ],
      highlights: ["Seguimiento de envíos en tiempo real", "API REST con Node.js y Express", "Interfaz responsive con Tailwind"],
    },
  },
  {
    slug: "chat-app",
    title: "Chat App Project",
    tagline: "Chat en tiempo real inspirado en Discord",
    description: "Chat en tiempo real inspirado en Discord, con React, Node.js y Stream Chat.",
    stack: ["React", "Stream", "Bulma"],
    featured: true,
    links: {
      demo: "https://chat-app-project-ing-web.netlify.app/",
      github: "https://github.com/escalandres/ChatAppProject",
    },
    screenshot: `${S}chatApp.webp`,
    content: {
      overview: [
        "Aplicación de mensajería en tiempo real con canales, presencia y mensajes instantáneos, inspirada en Discord.",
        "Construida con React en el cliente, Node.js en el servidor e integrada con Stream Chat y Bulma para la interfaz.",
      ],
      highlights: ["Mensajería instantánea por canales", "Integración con Stream Chat", "Interfaz con React y Bulma"],
    },
  },
  {
    slug: "myyt-downloader",
    title: "MyYT Downloader",
    tagline: "Descargador de video de escritorio",
    description: "Aplicación de escritorio para descargar videos de YouTube con Node.js y Electron.",
    stack: ["Electron", "Node.js", "Bootstrap"],
    featured: true,
    links: {
      download: "https://drive.google.com/file/d/10IYTfZKYZA9uV8uWzYLsjdJ5XPVrGY_G/view?usp=drive_link",
      github: "https://github.com/escalandres/myyt-downloader",
    },
    screenshot: `${S}myyt_downloader.webp`,
    content: {
      overview: [
        "Aplicación de escritorio que permite descargar videos de YouTube desde una interfaz sencilla.",
        "Implementada con Electron y Node.js, con una UI construida con Bootstrap.",
      ],
      highlights: ["Aplicación de escritorio multiplataforma", "Descarga de videos desde YouTube", "Interfaz con Bootstrap"],
    },
  },
  {
    slug: "pixel-guardian",
    title: "Pixel Guardian",
    tagline: "Minijuego para Android y Windows",
    description: "Minijuego para Android y Windows desarrollado con Unity y C#.",
    stack: ["Unity", "C#"],
    featured: true,
    links: {
      play: "https://drive.google.com/drive/folders/1RFRAtVPoocVixAnOhCXb8PhnFbyPV_vD",
    },
    screenshot: `${S}pixel-guardian.webp`,
    content: {
      overview: [
        "Minijuego desarrollado con Unity y C#, publicado para Android y Windows.",
        "Incluye mecánicas de juego, puntuación y una interfaz adaptable a pantallas táctiles.",
      ],
      highlights: ["Publicado para Android y Windows", "Desarrollo con Unity y C#", "Controles táctiles y de teclado"],
    },
  },
  {
    slug: "pokedex",
    title: "PokeApi · Pokédex",
    tagline: "Pokédex que consume una API pública",
    description: "Mini pokédex que consume la API pública de Pokémon.",
    stack: ["JavaScript", "CSS", "HTML"],
    featured: true,
    links: {
      demo: "https://escalandres.github.io/LaunchX_JS/",
      github: "https://github.com/escalandres/LaunchX_JS",
    },
    screenshot: `${S}pokedex.webp`,
    content: {
      overview: [
        "Mini pokédex que consulta la API pública de Pokémon para mostrar información de cada criatura.",
        "Proyecto de frontend puro construido con JavaScript, CSS y HTML.",
      ],
      highlights: ["Consumo de la PokeAPI", "Listado y detalle de Pokémon", "Frontend con JavaScript, CSS y HTML"],
    },
  },
  {
    slug: "vaccination",
    title: "Vaccination",
    tagline: "Landing page para centro de vacunación",
    description: "Landing page para un centro de vacunación, maquetada con HTML y CSS.",
    stack: ["CSS", "HTML"],
    featured: true,
    links: {
      demo: "https://escalandres.github.io/LaunchX_CSS/",
      github: "https://github.com/escalandres/LaunchX_CSS",
    },
    screenshot: `${S}vaccine.webp`,
    content: {
      overview: [
        "Landing page informativa para un centro de vacunación, maquetada con HTML y CSS.",
        "Diseño responsive con secciones de información, campaña y llamadas a la acción.",
      ],
      highlights: ["Maquetación responsive", "Secciones informativas y CTA", "HTML y CSS semánticos"],
    },
  },
];

export const PROJECTS_EN: Project[] = PROJECTS_ES.map((p, i) => ({
  ...p,
  tagline: [
    "Art logistics tracking",
    "Real-time chat inspired by Discord",
    "Desktop video downloader",
    "Minigame for Android and Windows",
    "Pokédex built on a public API",
    "Vaccination center landing page",
  ][i],
  description: [
    "Web application for tracking art containers, built with React and Node.js.",
    "Real-time chat inspired by Discord, built with React, Node.js and Stream Chat.",
    "Desktop application for downloading YouTube videos with Node.js and Electron.",
    "Minigame for Android and Windows developed with Unity and C#.",
    "A mini Pokédex that consumes the public Pokémon API.",
    "Landing page for a vaccination center, built with HTML and CSS.",
  ][i],
  content: {
    overview: [
      i === 0
        ? "Cosmos is a web application for tracking art containers during transport, with visibility into each shipment's status and location."
        : i === 1
          ? "A real-time messaging app with channels, presence and instant messages, inspired by Discord."
          : i === 2
            ? "A desktop application that downloads YouTube videos through a simple interface."
            : i === 3
              ? "A minigame developed with Unity and C#, published for Android and Windows."
              : i === 4
                ? "A mini Pokédex that queries the public Pokémon API to show information about each creature."
                : "An informative landing page for a vaccination center, built with HTML and CSS.",
      i === 0
        ? "The React frontend consumes a REST API built with Node.js and Express, with a responsive interface styled with Tailwind."
        : i === 1
          ? "Built with React on the client, Node.js on the server and integrated with Stream Chat and Bulma for the interface."
          : i === 2
            ? "Implemented with Electron and Node.js, with a UI built using Bootstrap."
            : i === 3
              ? "Includes game mechanics, scoring and an interface that adapts to touch screens."
              : i === 4
                ? "A pure frontend project built with JavaScript, CSS and HTML."
                : "Responsive design with information, campaign and call-to-action sections.",
    ],
    highlights: p.content.highlights,
  },
}));

const byLocale = { en: PROJECTS_EN, es: PROJECTS_ES };

export function getProjects(locale: "en" | "es" = "en"): Project[] {
  return byLocale[locale];
}
