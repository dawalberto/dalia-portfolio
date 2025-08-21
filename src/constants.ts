import type { IconName } from "./components/Icon.astro"

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
  titleIcon: "fingerprint-simple",
  rol: "Product Designer",
  duration: "2 años",
  typeOfProject: "Rediseño completo de producto digital B2B",
  tools: ["Figma", "Miro", "Storybook"],
  navItems: new Map<CipherNavSections, { title: string; icon: IconName }>([
    [CipherNavSections.SECTION_1, { title: "El reto", icon: "puzzle-piece" }],
    [CipherNavSections.SECTION_2, { title: "El proceso", icon: "magnifying-glass" }],
    [CipherNavSections.SECTION_3, { title: "Desk research", icon: "arrows-counter-clockwise" }],
    [CipherNavSections.SECTION_4, { title: "Il Benchmark", icon: "chart-bar" }],
    [CipherNavSections.SECTION_5, { title: "Arquitectura de la información", icon: "chart-polar" }],
    [CipherNavSections.SECTION_6, { title: "Wireframes", icon: "pencil-line" }],
    [
      CipherNavSections.SECTION_7,
      { title: "Pantallas finales + Design System + Dark Mode", icon: "palette" },
    ],
    [CipherNavSections.SECTION_8, { title: "Conclusiones y futuribles", icon: "rocket-launch" }],
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
  titleIcon: "yarn",
  rol: "UX/UI Designer",
  duration: "1 año",
  typeOfProject: "Rediseño web y estrategia digital para la Federación de Artesanos de Sevilla",
  tools: ["Figma", "Miro"],
  links: "🔗 www.artesaniasevillana.es",
  navItems: new Map<FasNavSections, { title: string; icon: IconName }>([
    [FasNavSections.SECTION_1, { title: "El reto", icon: "puzzle-piece" }],
    [FasNavSections.SECTION_2, { title: "El proceso", icon: "magnifying-glass" }],
    [FasNavSections.SECTION_3, { title: "Desk research", icon: "arrows-counter-clockwise" }],
    [FasNavSections.SECTION_4, { title: "Il Benchmark", icon: "chart-bar" }],
    [FasNavSections.SECTION_5, { title: "Arquitectura de la información", icon: "chart-polar" }],
    [FasNavSections.SECTION_6, { title: "Wireframes", icon: "pencil-line" }],
    [
      FasNavSections.SECTION_7,
      { title: "Pantallas finales + Design System + Dark Mode", icon: "palette" },
    ],
    [FasNavSections.SECTION_8, { title: "Community Manager", icon: "device-mobile" }],
    [FasNavSections.SECTION_9, { title: "Conclusiones y futuribles", icon: "rocket-launch" }],
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
  titleIcon: "credit-card",
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
    [CarrefourNavSections.SECTION_8, { title: "Conclusiones y futuribles", icon: "rocket-launch" }],
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

export const BACNC_SABADELL_PROJECT = {
  title: "Solicitar un Préstamo Online - Banc Sabadell",
  titleIcon: "bank",
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
    [
      BancSabadellNavSections.SECTION_8,
      { title: "Conclusiones y futuribles", icon: "rocket-launch" },
    ],
    [BancSabadellNavSections.SECTION_9, { title: "Aprendizaje personal", icon: "brain" }],
  ]),
}
