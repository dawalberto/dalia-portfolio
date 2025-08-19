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
