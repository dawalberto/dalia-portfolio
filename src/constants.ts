import type { IconName } from "./components/Icon.astro"

export type Project = "cipher" | "fas" | "carrefour" | "banc-sabadell" | "freelance"

export enum CipherNavSections {
  SECTION_1 = "challenge",
  SECTION_2 = "process",
  SECTION_3 = "desk-research",
  SECTION_4 = "benchmark",
  SECTION_5 = "information-architecture",
  SECTION_6 = "wireframes",
  SECTION_7 = "final-screens",
  SECTION_8 = "conclusions",
  SECTION_9 = "learning",
}

export const CIPHER_PROJECT = {
  title: "Rediseño integral de Plataforma de Ciberseguridad ( Cipher )",
  rol: "Product Designer",
  duration: "2 años",
  typeOfProject: "Rediseño completo de producto digital B2B",
  tools: ["Figma", "Miro", "Storybook"],
  navItems: new Map<CipherNavSections, { title: string; icon: IconName }>([
    [CipherNavSections.SECTION_1, { title: "El reto", icon: "puzzle-piece" }],
    [CipherNavSections.SECTION_2, { title: "El proceso", icon: "magnifying-glass" }],
    [CipherNavSections.SECTION_3, { title: "Desk research", icon: "arrows-counter-clockwise" }],
    [CipherNavSections.SECTION_4, { title: "Benchmark", icon: "chart-bar" }],
    [CipherNavSections.SECTION_5, { title: "Arquitectura de la información", icon: "chart-polar" }],
    [CipherNavSections.SECTION_6, { title: "Wireframes", icon: "pencil-line" }],
    [
      CipherNavSections.SECTION_7,
      { title: "Pantallas finales + Design System + Dark Mode", icon: "palette" },
    ],
    [CipherNavSections.SECTION_8, { title: "Conclusiones y futuribles", icon: "check-fat" }],
    [CipherNavSections.SECTION_9, { title: "Aprendizaje personal", icon: "brain" }],
  ]),
}

export enum FasNavSections {
  SECTION_1 = "challenge",
  SECTION_2 = "process",
  SECTION_3 = "desk-research",
  SECTION_4 = "benchmark",
  SECTION_5 = "information-architecture",
  SECTION_6 = "wireframes",
  SECTION_7 = "final-screens",
  SECTION_8 = "community-manager",
  SECTION_9 = "conclusions",
  SECTION_10 = "learning",
}

export const FAS_PROJECT = {
  title: "Rediseño Web y Gestión Digital – Federación de Artesanos de Sevilla",
  rol: "UX/UI Designer",
  duration: "1 año",
  typeOfProject: "Rediseño web y estrategia digital para la Federación de Artesanos de Sevilla",
  tools: ["Figma", "Miro"],
  link: "www.artesaniasevillana.es",
  navItems: new Map<FasNavSections, { title: string; icon: IconName }>([
    [FasNavSections.SECTION_1, { title: "El reto", icon: "puzzle-piece" }],
    [FasNavSections.SECTION_2, { title: "El proceso", icon: "magnifying-glass" }],
    [FasNavSections.SECTION_3, { title: "Desk research", icon: "arrows-counter-clockwise" }],
    [FasNavSections.SECTION_4, { title: "Benchmark", icon: "chart-bar" }],
    [FasNavSections.SECTION_5, { title: "Arquitectura de la información", icon: "chart-polar" }],
    [FasNavSections.SECTION_6, { title: "Wireframes", icon: "pencil-line" }],
    [FasNavSections.SECTION_7, { title: "Pantallas finales", icon: "palette" }],
    [FasNavSections.SECTION_8, { title: "Gestión redes sociales", icon: "device-mobile" }],
    [FasNavSections.SECTION_9, { title: "Conclusiones y futuribles", icon: "check-fat" }],
    [FasNavSections.SECTION_10, { title: "Aprendizaje personal", icon: "brain" }],
  ]),
}

export enum CarrefourNavSections {
  SECTION_1 = "challenge",
  SECTION_2 = "process",
  SECTION_3 = "desk-research",
  SECTION_4 = "benchmark",
  SECTION_5 = "information-architecture",
  SECTION_6 = "wireframes",
  SECTION_7 = "final-screens",
  SECTION_8 = "conclusions",
  SECTION_9 = "learning",
}

export const CARREFOUR_PROJECT = {
  title: "Carrefour Pass - Área Financiera",
  rol: "UX/UI Designer",
  duration: "1 año",
  typeOfProject: "Diseño de experiencia y diseño de interfaz para la parte financiera de Carrefour",
  tools: ["Figma", "Miro"],
  navItems: new Map<CarrefourNavSections, { title: string; icon: IconName }>([
    [CarrefourNavSections.SECTION_1, { title: "El reto", icon: "puzzle-piece" }],
    [CarrefourNavSections.SECTION_2, { title: "El proceso", icon: "magnifying-glass" }],
    [CarrefourNavSections.SECTION_3, { title: "Desk research", icon: "arrows-counter-clockwise" }],
    [CarrefourNavSections.SECTION_4, { title: "Benchmark", icon: "chart-bar" }],
    [
      CarrefourNavSections.SECTION_5,
      { title: "Arquitectura de la información", icon: "chart-polar" },
    ],
    [CarrefourNavSections.SECTION_6, { title: "Wireframes", icon: "pencil-line" }],
    [
      CarrefourNavSections.SECTION_7,
      { title: "Pantallas finales + Design System", icon: "palette" },
    ],
    [CarrefourNavSections.SECTION_8, { title: "Conclusiones y futuribles", icon: "check-fat" }],
    [CarrefourNavSections.SECTION_9, { title: "Aprendizaje personal", icon: "brain" }],
  ]),
}

export enum BancSabadellNavSections {
  SECTION_1 = "challenge",
  SECTION_2 = "process",
  SECTION_3 = "desk-research",
  SECTION_4 = "benchmark",
  SECTION_5 = "information-architecture",
  SECTION_6 = "wireframes",
  SECTION_7 = "prototypes",
  SECTION_8 = "conclusions",
  SECTION_9 = "learning",
}

export const BANC_SABADELL_PROJECT = {
  title: "Solicitar un Préstamo Online - Banc Sabadell",
  rol: "UX Designer",
  duration: "1 año",
  typeOfProject: "UX Research + creación de flujo de solicitud de préstamos online",
  tools: ["Figma", "Miro"],
  navItems: new Map<BancSabadellNavSections, { title: string; icon: IconName }>([
    [BancSabadellNavSections.SECTION_1, { title: "El reto", icon: "puzzle-piece" }],
    [BancSabadellNavSections.SECTION_2, { title: "El proceso", icon: "magnifying-glass" }],
    [
      BancSabadellNavSections.SECTION_3,
      { title: "Desk research", icon: "arrows-counter-clockwise" },
    ],
    [BancSabadellNavSections.SECTION_4, { title: "Benchmark", icon: "chart-bar" }],
    [
      BancSabadellNavSections.SECTION_5,
      { title: "Arquitectura de la información", icon: "chart-polar" },
    ],
    [BancSabadellNavSections.SECTION_6, { title: "Wireframes", icon: "pencil-line" }],
    [
      BancSabadellNavSections.SECTION_7,
      { title: "Prototipado y testeo (UserZoom)", icon: "spiral" },
    ],
    [BancSabadellNavSections.SECTION_8, { title: "Conclusiones y futuribles", icon: "check-fat" }],
    [BancSabadellNavSections.SECTION_9, { title: "Aprendizaje personal", icon: "brain" }],
  ]),
}

export enum RebuildingCitiesGenderPerspectiveNavSections {
  SECTION_1 = "challenge",
  SECTION_2 = "process",
  SECTION_3 = "information-architecture",
  SECTION_4 = "wireframes and prototypes",
  SECTION_5 = "conclusions and learning",
  SECTION_6 = "futuribles",
}

export const REBUILDING_CITIES_GENDER_PERSPECTIVE_PROJECT = {
  title: "Reconstruyendo ciudades con perspectiva de género",
  rol: "UX Designer",
  duration: "2 semanas",
  typeOfProject:
    "Proyecto de UX Research + Diseño de Servicios Urbanos + Diseño de Experiencia Comunitaria.",
  tools: ["Figma", "Miro", "Trello", "Google Forms"],
  navItems: new Map<
    RebuildingCitiesGenderPerspectiveNavSections,
    { title: string; icon: IconName }
  >([
    [
      RebuildingCitiesGenderPerspectiveNavSections.SECTION_1,
      { title: "El reto", icon: "puzzle-piece" },
    ],
    [
      RebuildingCitiesGenderPerspectiveNavSections.SECTION_2,
      { title: "El proceso", icon: "magnifying-glass" },
    ],
    [
      RebuildingCitiesGenderPerspectiveNavSections.SECTION_3,
      { title: "Arquitectura de la información", icon: "chart-polar" },
    ],
    [
      RebuildingCitiesGenderPerspectiveNavSections.SECTION_4,
      { title: "Wireframes y prototipo", icon: "pencil-line" },
    ],
    [
      RebuildingCitiesGenderPerspectiveNavSections.SECTION_5,
      { title: "Conclusiones y aprendizajes", icon: "check-fat" },
    ],
    [
      RebuildingCitiesGenderPerspectiveNavSections.SECTION_6,
      { title: "Futuribles", icon: "brain" },
    ],
  ]),
}

export enum InkNavSections {
  SECTION_1 = "challenge",
  SECTION_2 = "process",
  SECTION_3 = "information-architecture",
  SECTION_4 = "wireframes-and-prototypes",
  SECTION_5 = "conclusions",
}

export const INK_PROJECT = {
  title: "Proyecto INK",
  rol: "UX Designer",
  duration: "2 semanas",
  typeOfProject:
    "Proyecto de UX Research + Diseño de Servicios Urbanos + Diseño de Experiencia Comunitaria.",
  tools: ["Figma", "Miro", "Trello", "Google Forms"],
  navItems: new Map<InkNavSections, { title: string; icon: IconName }>([
    [InkNavSections.SECTION_1, { title: "El reto", icon: "puzzle-piece" }],
    [InkNavSections.SECTION_2, { title: "El proceso", icon: "magnifying-glass" }],
    [InkNavSections.SECTION_3, { title: "Arquitectura de la información", icon: "chart-polar" }],
    [InkNavSections.SECTION_4, { title: "Wireframes y prototipo", icon: "pencil-line" }],
    [InkNavSections.SECTION_5, { title: "Conclusiones y futuribles", icon: "check-fat" }],
  ]),
}

export enum KingsugiNavSections {
  SECTION_1 = "context",
  SECTION_2 = "challenge",
  SECTION_3 = "sprint-process",
  SECTION_4 = "design",
  SECTION_5 = "testing",
  SECTION_6 = "conclusions",
  SECTION_7 = "personal-thought",
}

export const KINGSUGI_PROJECT = {
  title: "Proyecto de Empatía Animal - Kingsugi",
  rol: "UX Designer",
  duration: "5 días",
  typeOfProject: "Design sprint",
  tools: [
    "Figma",
    "Miro",
    "Trello",
    "Google Forms",
    "Maze",
    "Google Scholar / Artículos online",
    "Notion",
  ],
  navItems: new Map<KingsugiNavSections, { title: string; icon: IconName }>([
    [KingsugiNavSections.SECTION_1, { title: "Contexto", icon: "book" }],
    [KingsugiNavSections.SECTION_2, { title: "El desafío", icon: "puzzle-piece" }],
    [
      KingsugiNavSections.SECTION_3,
      { title: "Proceso de sprint", icon: "hourglass-simple-medium" },
    ],
    [KingsugiNavSections.SECTION_4, { title: "El diseño", icon: "pencil-line" }],
    [KingsugiNavSections.SECTION_5, { title: "Testeo", icon: "check-fat" }],
    [KingsugiNavSections.SECTION_6, { title: "Conclusiones y futuribles", icon: "brain" }],
    [KingsugiNavSections.SECTION_7, { title: "Reflexión personal", icon: "magic-wand" }],
  ]),
}

export enum AtidNavSections {
  SECTION_1 = "context",
  SECTION_2 = "challenge",
  SECTION_3 = "sprint-process",
  SECTION_4 = "design",
  SECTION_5 = "testing",
  SECTION_6 = "conclusions",
  SECTION_7 = "personal-thought",
}

export const ATID_PROJECT = {
  title: "ATID Website Redesign",
  rol: "UX Designer",
  duration: "1 año",
  typeOfProject:
    "Proyecto de rediseño de sitio web corporativo B2B con enfoque en productos tecnológicos e industriales.",
  tools: ["Figma", "Miro", "Trello", "Google Scholar / Artículos online", "Notion", "Google Meet"],
  navItems: new Map<AtidNavSections, { title: string; icon: IconName }>([
    [AtidNavSections.SECTION_1, { title: "Contexto", icon: "book" }],
    [AtidNavSections.SECTION_2, { title: "El desafío", icon: "puzzle-piece" }],
    [AtidNavSections.SECTION_3, { title: "Proceso de sprint", icon: "hourglass-simple-medium" }],
    [AtidNavSections.SECTION_4, { title: "El diseño", icon: "pencil-line" }],
    [AtidNavSections.SECTION_5, { title: "Testeo", icon: "check-fat" }],
    [AtidNavSections.SECTION_6, { title: "Conclusiones y futuribles", icon: "brain" }],
    [AtidNavSections.SECTION_7, { title: "Reflexión personal", icon: "magic-wand" }],
  ]),
}
