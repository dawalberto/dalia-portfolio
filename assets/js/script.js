document.addEventListener("DOMContentLoaded", () => {
  // Custom Cursor
  const cursor = document.querySelector(".cursor-follower");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  // Hover effects for cursor
  const hoverables = document.querySelectorAll("a, .job-item, .lang-btn");

  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(2.5)";
      cursor.style.mixBlendMode = "difference";
    });

    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
  });

  // Translations
  const translations = {
    en: {
      "nav.contact": "Let's Talk",
      "hero.role": "Product Designer",
      "hero.bio":
        "Digital product designer with a superpower for telling epic stories that connect. I detect your headaches, turn them into creativity, and design solutions that change the game rules.",
      "work.role.uxui": "UX/UI Designer",
      "work.role.ux": "UX Designer",
      "work.title": "SELECTED WORKS",
      "work.job1":
        "Complete platform redesign, including building the design system from the ground up, defining the information architecture and flows, conducting user testing, and improving collaboration within the design team.",
      "work.job2":
        "Website redesign for the federation with clear information architecture and refined usability. Additionally, I managed their social media, connecting Sevillian craftsmanship with users and the digital community through creative and consistent content.",
      "work.job3":
        "Applied information architecture to web, app, and responsive designs. Created wireframes and interaction prototypes. Developed a cohesive design system.",
      "work.job4":
        "Complete platform redesign, including building the design system from scratch, defining information architecture and flows, conducting user testing, and optimizing collaboration within the design team.",
      "work.job5":
        "In-depth research (benchmarking, netnography, surveys, interviews, user personas), agile methodologies (Design Thinking, Lean), testing (Maze, Userzoom), and cross-platform prototyping with UI style systems.",
      "philosophy.marquee":
        "DESIGN ISN'T JUST AESTHETIC — IT TRANSFORMS — IT INSPIRES — IT CONNECTS — ",
      "footer.title": "READY TO<br>CHANGE THE GAME?",
      "project.back": "← Back",
      "project.role": "ROLE",
      "project.duration": "DURATION",
      "project.type": "TYPE",
      "project.tools": "TOOLS",
      "project.challenge": "THE CHALLENGE",
      "project.process": "THE PROCESS",
      "project.benchmark": "BENCHMARK & RESEARCH",
      "project.ia": "INFORMATION ARCHITECTURE",
      "project.ui": "DESIGN SYSTEM & UI",
      "project.conclusions": "CONCLUSIONS",
      "project.final_screens": "FINAL SCREENS",
      "project.social_media": "SOCIAL MEDIA MANAGEMENT",
      "project.solution": "SOLUTION",
      "project.design": "THE DESIGN",

      // Cipher
      "cipher.title": "Cipher<br>Cybersecurity",
      "cipher.role_desc": "Product Designer",
      "cipher.duration_desc": "2 Years",
      "cipher.type_desc": "B2B Product Redesign",
      "cipher.challenge_text":
        "When I joined the Cipher team, the platform already had great technical potential, used by organizations for threat management and response orchestration. However, it presented multiple design challenges:",
      "cipher.challenge_list_1": "Visually outdated interface.",
      "cipher.challenge_list_2":
        "Unintuitive structure for technical and non-technical profiles.",
      "cipher.challenge_list_3":
        "Visual and functional inconsistencies between modules.",
      "cipher.challenge_list_4": "Absence of a Design System.",
      "cipher.challenge_list_5":
        "Lack of scalability and flexibility (no dark mode support).",
      "cipher.challenge_goal":
        "The goal was to lead a comprehensive redesign of the platform, with a focus centered on the user, the business, and product scalability.",
      "cipher.process_text":
        "The redesign process was structured into 7 strategic phases:",
      "cipher.process_list_1": "UX audit and internal interviews.",
      "cipher.process_list_2": "Competitive and user research.",
      "cipher.process_list_3": "Information architecture redesign.",
      "cipher.process_list_4": "Wireframes, UI, and iterative testing.",
      "cipher.process_list_5": "Design System design from scratch.",
      "cipher.process_list_6": "Intentional development of dark mode.",
      "cipher.process_list_7": "Optimization of the design team and processes.",
      "cipher.benchmark_text":
        "I conducted an exhaustive comparison with other platforms in the cybersecurity and automation ecosystem to identify standards, patterns, and differentiation opportunities.",
      "cipher.benchmark_learnings": "Key learnings:",
      "cipher.benchmark_list_1":
        "The most powerful platforms often neglect visual clarity.",
      "cipher.benchmark_list_2":
        "There is an opportunity to create visually clean but powerful tools.",
      "cipher.benchmark_list_3":
        "Well-applied dark mode becomes essential in these environments.",
      "cipher.ia_text":
        "Based on the research, I designed a new navigation structure centered on tasks, with quick access to critical items:",
      "cipher.ia_list_1": "Reduction of steps in key flows.",
      "cipher.ia_list_2": "Clear and logical hierarchy of modules.",
      "cipher.ia_list_3":
        "Visual simplification of user paths within the system.",
      "cipher.ui_text":
        "A fundamental pillar to ensure scalability and design quality. We created design tokens, reusable components, and covered all interaction states.",
      "cipher.ui_darkmode_title": "Dark Mode",
      "cipher.ui_darkmode_text":
        "Designed with intention from the beginning, not just an automatic inversion. Calibrated contrasts with accessibility standards (WCAG) to reduce visual fatigue.",
      "cipher.conclusions_list_1":
        "Significantly increased visual clarity and coherence of the product.",
      "cipher.conclusions_list_2":
        "New information architecture improved navigation times.",
      "cipher.conclusions_list_3":
        "Design System allowed for faster scaling and reduced development errors.",
      "cipher.conclusions_list_4":
        "Dark mode was one of the most valued points by users.",

      // FAS
      "fas.title": "FAS<br>Artisan Federation",
      "fas.role_desc": "UX/UI Designer",
      "fas.duration_desc": "1 Year",
      "fas.type_desc": "Web Redesign & Digital Strategy",
      "fas.challenge_text":
        "The Federation of Artisans of Seville is an entity with strong cultural roots, but its previous website did not reflect its identity or purpose.",
      "fas.challenge_list_1":
        "Interface was visually and structurally outdated.",
      "fas.challenge_list_2": "Information architecture was confusing.",
      "fas.challenge_list_3":
        "No graphic line consistent with its artisanal identity.",
      "fas.challenge_list_4": "No integration with social media.",
      "fas.challenge_goal":
        "My challenge was to redesign and develop the website in WordPress, creating a clear, aesthetic, and functional digital experience that connected Sevillian artisanal tradition with a broader digital community.",
      "fas.process_text":
        "I analyzed the existing site, benchmarked similar cultural/artisanal websites, designed a new information architecture, created wireframes, and implemented the visual design in WordPress.",
      "fas.ia_text":
        "I completely reorganized the structure to be clear, hierarchical, and user-centered:",
      "fas.ia_list_1": "Home highlighting values and visual identity.",
      "fas.ia_list_2": "Workshops section with individual files.",
      "fas.ia_list_3": "Agenda of activities and exhibitions.",
      "fas.ia_list_4": "Clear contact and association information.",
      "fas.final_text":
        "I created the complete visual design with a palette inspired by ceramics, clay, and natural tones. The design was implemented entirely in WordPress, optimized for fast loading.",
      "fas.final_list_1": "Responsive and clean design.",
      "fas.final_list_2": "Integration with Instagram and social media.",
      "fas.final_list_3": "Visual files of artisan workshops.",
      "fas.social_text":
        "Parallel to the web redesign, I was in charge of creating and maintaining the official social media channels, developing visual content aligned with the renewed identity.",

      // Carrefour
      "carrefour.title": "Carrefour<br>Pass Finance",
      "carrefour.role_desc": "UX/UI Designer",
      "carrefour.duration_desc": "1 Year",
      "carrefour.type_desc": "Financial Experience Design",
      "carrefour.challenge_text":
        "Carrefour's financial area (Carrefour Pass) needed a comprehensive evolution of its digital ecosystem to offer a fluid, coherent, and modern experience across all touchpoints: web, mobile app, and responsive.",
      "carrefour.challenge_list_1":
        "Reorganize the entire information architecture.",
      "carrefour.challenge_list_2":
        "Design a usable, intuitive interface adapted to multiple devices.",
      "carrefour.challenge_list_3":
        "Create a cohesive and scalable design system.",
      "carrefour.challenge_list_4":
        "Optimize key interactions (balance check, movements, payments).",
      "carrefour.benchmark_text":
        "I studied other financial apps and digital banking solutions to detect best practices:",
      "carrefour.benchmark_list_1":
        "Crucial to show balance and key information at the first level.",
      "carrefour.benchmark_list_2":
        "Most used flows (payment, movements, blocking) must be accessible in a single touch.",
      "carrefour.benchmark_list_3":
        "Consistency between app and web strengthens user trust.",
      "carrefour.ia_text":
        "I reorganized the structure hierarchically and clearly, prioritizing essential tasks:",
      "carrefour.ia_list_1": "Simple Home, with visible cards and balance.",
      "carrefour.ia_list_2":
        "Navigation with direct access to: movements, pay, cards, contact.",
      "carrefour.ia_list_3":
        "Integration of useful tools: alerts, configuration, blocking.",
      "carrefour.final_text":
        "I developed high-fidelity interactive prototypes to validate the complete navigation flow. One of the pillars was the construction of a modular and scalable Design System.",
      "carrefour.final_list_1":
        "Reusable components: buttons, cards, inputs, modals.",
      "carrefour.final_list_2": "Design tokens: colors, typography, spacing.",
      "carrefour.final_list_3":
        "Design principles to maintain consistency and accessibility.",
      "carrefour.conclusions_list_1":
        "Achieved a clearer, more fluid, and unified digital experience.",
      "carrefour.conclusions_list_2":
        "Reorganized architecture facilitates navigation and improves efficiency.",
      "carrefour.conclusions_list_3":
        "Design system guarantees coherence and long-term sustainability.",

      // Sabadell
      "sabadell.title": "Banc<br>Sabadell",
      "sabadell.role_desc": "UX Designer",
      "sabadell.duration_desc": "1 Year",
      "sabadell.type_desc": "UX Research + Online Loan Flow",
      "sabadell.challenge_text":
        "The challenge was to transfer a complex process (personal loan application), with legal and financial implications, to the digital environment, ensuring it was understandable, reliable, and efficient.",
      "sabadell.challenge_list_1":
        "Transform a face-to-face service into a digital product.",
      "sabadell.challenge_list_2":
        "Design an experience that balances simplicity with regulatory compliance.",
      "sabadell.challenge_list_3":
        "Minimize cognitive effort to reduce drop-offs.",
      "sabadell.process_text":
        "Deep analysis of product conditions, definition of information architecture, design of flows and wireframes, creation of navigable prototypes, and iterative testing with UserZoom.",
      "sabadell.ia_text":
        "The design sought to minimize the number of steps without sacrificing clarity or legal compliance, dividing the flow into logical blocks:",
      "sabadell.ia_list_1": "Welcome screen with clear requirements.",
      "sabadell.ia_list_2": "Loan simulation with instant calculation.",
      "sabadell.ia_list_3": "Summary of conditions (interests, commissions).",
      "sabadell.ia_list_4": "Personal data form with validation.",
      "sabadell.ia_list_5": "Documentation upload and legal acceptance.",
      "sabadell.wireframes_title": "WIREFRAMES & PROTOTYPING",
      "sabadell.wireframes_text":
        "Development of low and medium fidelity wireframes to validate visual hierarchy. Thanks to the Galatea design system, we could work with final components early on.",
      "sabadell.conclusions_list_1":
        "Creation of a digital flow from scratch that did not exist before.",
      "sabadell.conclusions_list_2":
        "Design adapted to different devices and validated with real data.",
      "sabadell.conclusions_list_3":
        "Functional prototypes served as reference for development.",

      // Freelance Hub
      "freelance.title": "Freelance<br>Projects",
      "freelance.atid_title": "ATID Website",
      "freelance.atid_role": "UX Designer | 1 Year",
      "freelance.atid_desc":
        "Redesign of a B2B corporate website for a South Korean technology company. Focused on showcasing industrial innovation and improving UX for a global audience.",
      "freelance.ink_title": "Project INK",
      "freelance.ink_role": "UX Designer | 2 Weeks",
      "freelance.ink_desc":
        "UX Research and service design project to connect tattoo artists and users, centralizing the search for styles, budgets, and reservations.",
      "freelance.cities_title": "Rebuilding Cities",
      "freelance.cities_role": "UX Designer | 2 Weeks",
      "freelance.cities_desc":
        "Urban service design project with a gender perspective. Redesigning urban spaces to be more accessible, safe, and inclusive.",
      "freelance.kingsugi_title": "Kingsugi",
      "freelance.kingsugi_role": "UX Designer | 5 Days",
      "freelance.kingsugi_desc":
        'Design Sprint project focused on fostering empathy towards animals and facilitating the adoption of "forgotten" animals (disabled, elderly).',

      // ATID
      "atid.title": "ATID<br>Website",
      "atid.role_desc": "UX Designer",
      "atid.duration_desc": "1 Year",
      "atid.type_desc": "B2B Website Redesign",
      "atid.challenge_text":
        "ATID is a South Korean company specializing in smart UHF readers. Their previous website was functional but unattractive and did not reflect the technological innovation of their products.",
      "atid.challenge_goal":
        "The challenge was to redesign the web to show products as advanced solutions, improve UX/IA, and work remotely with an international team overcoming language barriers.",
      "atid.process_text":
        "I analyzed global competitors, evaluated the current design (pixelated logo, stock images, bad mobile view), and proposed a new design with high-quality renders and clear typography.",
      "atid.final_text":
        "The final design is modern, professional, and reflects advanced technology. It features high-quality product photos, clear technical descriptions, and intuitive navigation.",

      // INK
      "ink.title": "Project<br>INK",
      "ink.role_desc": "UX Designer",
      "ink.duration_desc": "2 Weeks",
      "ink.type_desc": "UX Research + Service Design",
      "ink.challenge_text":
        "The process of finding a tattoo artist and style is slow, fragmented, and disorganized. The goal was to create an app that connects users and tattoo artists, centralizing the search for styles, artists, budgets, and reservations in one place.",
      "ink.process_text":
        "I conducted surveys (+100 responses) and interviews with users and tattoo artists. Insights revealed that technique and style are most important, and current booking systems are chaotic.",
      "ink.process_goal":
        "I created User Personas, Journey Maps, and a MoSCoW matrix to define features.",
      "ink.final_text":
        "High-fidelity screens including style gallery, artist list by location, artist profile with designs and booking, and user profile.",

      // Cities
      "cities.title": "Rebuilding<br>Cities",
      "cities.role_desc": "UX Designer",
      "cities.duration_desc": "2 Weeks",
      "cities.type_desc": "Urban Service Design",
      "cities.challenge_text":
        "How to redesign the urban environment from a gender and inclusion perspective? The opportunity was to rethink an unequal urban space to make it more accessible, safe, and integrative for women, minorities, and vulnerable groups.",
      "cities.process_text":
        "Using Design Thinking (Double Diamond), I conducted desk research and surveys. Key insights: green zones are key for well-being, and safety perception depends on both physical design and social education.",
      "cities.solution_text":
        "We chose Plaza MACBA in Barcelona. The idea was to create a common urban space that fosters coexistence and guarantees safety. We defined zones for games, picnics, and an oasis.",

      // Kingsugi
      "kingsugi.title": "Kingsugi<br>Animal Empathy",
      "kingsugi.role_desc": "UX Designer",
      "kingsugi.duration_desc": "5 Days",
      "kingsugi.type_desc": "Design Sprint",
      "kingsugi.challenge_text":
        '"How to foster empathy in people towards animals?" The goal was to increase empathy and visualize the situation of abandoned animals, especially those with disabilities, elderly, or discriminated breeds.',
      "kingsugi.process_text":
        "I used the Design Sprint methodology (5 days): Mapping the problem, Ideating solutions (Crazy 8s), Deciding (Storyboard), Prototyping, and Testing.",
      "kingsugi.design_text":
        "I designed an app to give visibility to these animals. Key screens included Home, Animal Catalog filtered by species, and Detailed File.",
    },
    es: {
      "nav.contact": "Hablemos",
      "hero.role": "Diseñadora de Producto",
      "hero.bio":
        "Diseñadora de producto digital con un superpoder para contar historias épicas que conectan. Detecto tus dolores de cabeza, los convierto en creatividad y diseño soluciones que cambian las reglas del juego.",
      "work.role.uxui": "Diseñadora UX/UI",
      "work.role.ux": "Diseñadora UX",
      "work.title": "TRABAJOS SELECCIONADOS",
      "work.job1":
        "Rediseño integral de la plataforma, diseñando el design system desde cero, definiendo arquitectura de información y flujos, implementando testeo con usuarios y optimizando la colaboración del equipo de diseño.",
      "work.job2":
        "Rediseño web de la federación con una arquitectura de información clara y usabilidad refinada, . Además gestioné sus redes sociales, conectando la artesanía sevillana con usuario y comunidad digital con creatividad y consistencia social.",
      "work.job3":
        "Aplicación de arquitectura de información a diseños web, app y responsive. Creación de wireframes y prototipado de interacciones. Elaboración de un sistema de diseño cohesivo.",
      "work.job4":
        " Rediseño integral de la plataforma, diseñando el design system desde cero, definiendo arquitectura de información y flujos, implementando testeo con usuarios y optimizando la colaboración del equipo de diseño.",
      "work.job5":
        "Investigación profunda (benchmark, netnografía, encuestas, entrevistas, user persona…), metodologías ágiles (Design Thinking, Lean), testeo (Maze, Userzoom), y prototipado multiplataforma con sistemas de estilo UI.",
      "philosophy.marquee":
        "EL DISEÑO NO ES SOLO ESTÉTICA — TRANSFORMA — INSPIRA — CONECTA — ",
      "footer.title": "¿LISTA PARA<br>CAMBIAR EL JUEGO?",
      "project.back": "← Volver",
      "project.role": "ROL",
      "project.duration": "DURACIÓN",
      "project.type": "TIPO",
      "project.tools": "HERRAMIENTAS",
      "project.challenge": "EL RETO",
      "project.process": "EL PROCESO",
      "project.benchmark": "BENCHMARK & RESEARCH",
      "project.ia": "ARQUITECTURA DE INFORMACIÓN",
      "project.ui": "SISTEMA DE DISEÑO & UI",
      "project.conclusions": "CONCLUSIONES",
      "project.final_screens": "PANTALLAS FINALES",
      "project.social_media": "GESTIÓN DE REDES SOCIALES",
      "project.solution": "SOLUCIÓN",
      "project.design": "EL DISEÑO",

      // Cipher
      "cipher.title": "Cipher<br>Ciberseguridad",
      "cipher.role_desc": "Product Designer",
      "cipher.duration_desc": "2 Años",
      "cipher.type_desc": "Rediseño de Producto B2B",
      "cipher.challenge_text":
        "Cuando me uní al equipo de Cipher, la plataforma ya tenía un gran potencial técnico, utilizada por organizaciones para la gestión de amenazas y orquestación de respuestas. Sin embargo, presentaba múltiples desafíos de diseño:",
      "cipher.challenge_list_1": "Interfaz visualmente obsoleta.",
      "cipher.challenge_list_2":
        "Estructura poco intuitiva para perfiles técnicos y no técnicos.",
      "cipher.challenge_list_3":
        "Inconsistencias visuales y funcionales entre módulos.",
      "cipher.challenge_list_4": "Ausencia de un Sistema de Diseño.",
      "cipher.challenge_list_5":
        "Falta de escalabilidad y flexibilidad (sin soporte para modo oscuro).",
      "cipher.challenge_goal":
        "El objetivo fue liderar un rediseño integral de la plataforma, con un enfoque centrado en el usuario, el negocio y la escalabilidad del producto.",
      "cipher.process_text":
        "El proceso de rediseño se estructuró en 7 fases estratégicas:",
      "cipher.process_list_1": "Auditoría UX y entrevistas internas.",
      "cipher.process_list_2": "Investigación competitiva y de usuarios.",
      "cipher.process_list_3": "Rediseño de la arquitectura de información.",
      "cipher.process_list_4": "Wireframes, UI y pruebas iterativas.",
      "cipher.process_list_5": "Diseño del Sistema de Diseño desde cero.",
      "cipher.process_list_6": "Desarrollo intencional del modo oscuro.",
      "cipher.process_list_7": "Optimización del equipo de diseño y procesos.",
      "cipher.benchmark_text":
        "Realicé una comparación exhaustiva con otras plataformas en el ecosistema de ciberseguridad y automatización para identificar estándares, patrones y oportunidades de diferenciación.",
      "cipher.benchmark_learnings": "Aprendizajes clave:",
      "cipher.benchmark_list_1":
        "Las plataformas más potentes a menudo descuidan la claridad visual.",
      "cipher.benchmark_list_2":
        "Existe la oportunidad de crear herramientas visualmente limpias pero potentes.",
      "cipher.benchmark_list_3":
        "El modo oscuro bien aplicado se vuelve esencial en estos entornos.",
      "cipher.ia_text":
        "Basado en la investigación, diseñé una nueva estructura de navegación centrada en tareas, con acceso rápido a elementos críticos:",
      "cipher.ia_list_1": "Reducción de pasos en flujos clave.",
      "cipher.ia_list_2": "Jerarquía clara y lógica de módulos.",
      "cipher.ia_list_3":
        "Simplificación visual de los caminos del usuario dentro del sistema.",
      "cipher.ui_text":
        "Un pilar fundamental para garantizar la escalabilidad y la calidad del diseño. Creamos tokens de diseño, componentes reutilizables y cubrimos todos los estados de interacción.",
      "cipher.ui_darkmode_title": "Modo Oscuro",
      "cipher.ui_darkmode_text":
        "Diseñado con intención desde el principio, no solo una inversión automática. Contrastes calibrados con estándares de accesibilidad (WCAG) para reducir la fatiga visual.",
      "cipher.conclusions_list_1":
        "Aumento significativo de la claridad visual y coherencia del producto.",
      "cipher.conclusions_list_2":
        "La nueva arquitectura de información mejoró los tiempos de navegación.",
      "cipher.conclusions_list_3":
        "El Sistema de Diseño permitió un escalado más rápido y redujo errores de desarrollo.",
      "cipher.conclusions_list_4":
        "El modo oscuro fue uno de los puntos más valorados por los usuarios.",

      // FAS
      "fas.title": "FAS<br>Federación Artesanal",
      "fas.role_desc": "Diseñadora UX/UI",
      "fas.duration_desc": "1 Año",
      "fas.type_desc": "Rediseño Web & Estrategia Digital",
      "fas.challenge_text":
        "La Federación de Artesanos de Sevilla es una entidad con fuertes raíces culturales, pero su sitio web anterior no reflejaba su identidad ni propósito.",
      "fas.challenge_list_1":
        "La interfaz estaba visual y estructuralmente obsoleta.",
      "fas.challenge_list_2": "La arquitectura de información era confusa.",
      "fas.challenge_list_3":
        "Sin línea gráfica consistente con su identidad artesanal.",
      "fas.challenge_list_4": "Sin integración con redes sociales.",
      "fas.challenge_goal":
        "Mi reto fue rediseñar y desarrollar el sitio web en WordPress, creando una experiencia digital clara, estética y funcional que conectara la tradición artesanal sevillana con una comunidad digital más amplia.",
      "fas.process_text":
        "Analicé el sitio existente, realicé benchmark de sitios culturales/artesanales similares, diseñé una nueva arquitectura de información, creé wireframes e implementé el diseño visual en WordPress.",
      "fas.ia_text":
        "Reorganicé completamente la estructura para que fuera clara, jerárquica y centrada en el usuario:",
      "fas.ia_list_1": "Inicio destacando valores e identidad visual.",
      "fas.ia_list_2": "Sección de talleres con fichas individuales.",
      "fas.ia_list_3": "Agenda de actividades y exposiciones.",
      "fas.ia_list_4": "Información clara de contacto y asociación.",
      "fas.final_text":
        "Creé el diseño visual completo con una paleta inspirada en la cerámica, el barro y tonos naturales. El diseño se implementó completamente en WordPress, optimizado para carga rápida.",
      "fas.final_list_1": "Diseño responsive y limpio.",
      "fas.final_list_2": "Integración con Instagram y redes sociales.",
      "fas.final_list_3": "Fichas visuales de talleres artesanos.",
      "fas.social_text":
        "Paralelamente al rediseño web, me encargué de crear y mantener los canales oficiales de redes sociales, desarrollando contenido visual alineado con la identidad renovada.",

      // Carrefour
      "carrefour.title": "Carrefour<br>Pass Finanzas",
      "carrefour.role_desc": "Diseñadora UX/UI",
      "carrefour.duration_desc": "1 Año",
      "carrefour.type_desc": "Diseño de Experiencia Financiera",
      "carrefour.challenge_text":
        "El área financiera de Carrefour (Carrefour Pass) necesitaba una evolución integral de su ecosistema digital para ofrecer una experiencia fluida, coherente y moderna en todos los puntos de contacto: web, app móvil y responsive.",
      "carrefour.challenge_list_1":
        "Reorganizar toda la arquitectura de información.",
      "carrefour.challenge_list_2":
        "Diseñar una interfaz usable e intuitiva adaptada a múltiples dispositivos.",
      "carrefour.challenge_list_3":
        "Crear un sistema de diseño cohesivo y escalable.",
      "carrefour.challenge_list_4":
        "Optimizar interacciones clave (consulta de saldo, movimientos, pagos).",
      "carrefour.benchmark_text":
        "Estudié otras apps financieras y soluciones de banca digital para detectar mejores prácticas:",
      "carrefour.benchmark_list_1":
        "Crucial mostrar saldo e información clave en el primer nivel.",
      "carrefour.benchmark_list_2":
        "Los flujos más usados (pago, movimientos, bloqueo) deben ser accesibles en un solo toque.",
      "carrefour.benchmark_list_3":
        "La consistencia entre app y web refuerza la confianza del usuario.",
      "carrefour.ia_text":
        "Reorganicé la estructura jerárquica y claramente, priorizando tareas esenciales:",
      "carrefour.ia_list_1": "Inicio simple, con tarjetas visibles y saldo.",
      "carrefour.ia_list_2":
        "Navegación con acceso directo a: movimientos, pagar, tarjetas, contacto.",
      "carrefour.ia_list_3":
        "Integración de herramientas útiles: alertas, configuración, bloqueo.",
      "carrefour.final_text":
        "Desarrollé prototipos interactivos de alta fidelidad para validar el flujo de navegación completo. Uno de los pilares fue la construcción de un Sistema de Diseño modular y escalable.",
      "carrefour.final_list_1":
        "Componentes reutilizables: botones, tarjetas, inputs, modales.",
      "carrefour.final_list_2":
        "Tokens de diseño: colores, tipografía, espaciado.",
      "carrefour.final_list_3":
        "Principios de diseño para mantener consistencia y accesibilidad.",
      "carrefour.conclusions_list_1":
        "Se logró una experiencia digital más clara, fluida y unificada.",
      "carrefour.conclusions_list_2":
        "La arquitectura reorganizada facilita la navegación y mejora la eficiencia.",
      "carrefour.conclusions_list_3":
        "El sistema de diseño garantiza coherencia y sostenibilidad a largo plazo.",

      // Sabadell
      "sabadell.title": "Banc<br>Sabadell",
      "sabadell.role_desc": "Diseñadora UX",
      "sabadell.duration_desc": "1 Año",
      "sabadell.type_desc": "UX Research + Flujo de Préstamo Online",
      "sabadell.challenge_text":
        "El reto fue trasladar un proceso complejo (solicitud de préstamo personal), con implicaciones legales y financieras, al entorno digital, asegurando que fuera comprensible, confiable y eficiente.",
      "sabadell.challenge_list_1":
        "Transformar un servicio presencial en un producto digital.",
      "sabadell.challenge_list_2":
        "Diseñar una experiencia que equilibre simplicidad con cumplimiento normativo.",
      "sabadell.challenge_list_3":
        "Minimizar la carga cognitiva para reducir abandonos.",
      "sabadell.process_text":
        "Análisis profundo de condiciones del producto, definición de arquitectura de información, diseño de flujos y wireframes, creación de prototipos navegables y testeo iterativo con UserZoom.",
      "sabadell.ia_text":
        "El diseño buscó minimizar el número de pasos sin sacrificar claridad ni cumplimiento legal, dividiendo el flujo en bloques lógicos:",
      "sabadell.ia_list_1": "Pantalla de bienvenida con requisitos claros.",
      "sabadell.ia_list_2": "Simulación de préstamo con cálculo instantáneo.",
      "sabadell.ia_list_3": "Resumen de condiciones (intereses, comisiones).",
      "sabadell.ia_list_4": "Formulario de datos personales con validación.",
      "sabadell.ia_list_5": "Subida de documentación y aceptación legal.",
      "sabadell.wireframes_title": "WIREFRAMES & PROTOTIPADO",
      "sabadell.wireframes_text":
        "Desarrollo de wireframes de baja y media fidelidad para validar jerarquía visual. Gracias al sistema de diseño Galatea, pudimos trabajar con componentes finales desde temprano.",
      "sabadell.conclusions_list_1":
        "Creación de un flujo digital desde cero que no existía antes.",
      "sabadell.conclusions_list_2":
        "Diseño adaptado a diferentes dispositivos y validado con datos reales.",
      "sabadell.conclusions_list_3":
        "Prototipos funcionales sirvieron como referencia para desarrollo.",

      // Freelance Hub
      "freelance.title": "Proyectos<br>Freelance",
      "freelance.atid_title": "Web ATID",
      "freelance.atid_role": "Diseñadora UX | 1 Año",
      "freelance.atid_desc":
        "Rediseño de sitio web corporativo B2B para empresa tecnológica de Corea del Sur. Enfoque en mostrar innovación industrial y mejorar UX para audiencia global.",
      "freelance.ink_title": "Proyecto INK",
      "freelance.ink_role": "Diseñadora UX | 2 Semanas",
      "freelance.ink_desc":
        "Proyecto de UX Research y diseño de servicio para conectar tatuadores y usuarios, centralizando búsqueda de estilos, presupuestos y reservas.",
      "freelance.cities_title": "Rebuilding Cities",
      "freelance.cities_role": "Diseñadora UX | 2 Semanas",
      "freelance.cities_desc":
        "Proyecto de diseño de servicios urbanos con perspectiva de género. Rediseñar espacios urbanos para ser más accesibles, seguros e inclusivos.",
      "freelance.kingsugi_title": "Kingsugi",
      "freelance.kingsugi_role": "Diseñadora UX | 5 Días",
      "freelance.kingsugi_desc":
        'Proyecto Design Sprint enfocado en fomentar empatía hacia animales y facilitar adopción de animales "olvidados" (discapacitados, ancianos).',

      // ATID
      "atid.title": "Web<br>ATID",
      "atid.role_desc": "Diseñadora UX",
      "atid.duration_desc": "1 Año",
      "atid.type_desc": "Rediseño Web B2B",
      "atid.challenge_text":
        "ATID es una empresa surcoreana especializada en lectores UHF inteligentes. Su web anterior era funcional pero poco atractiva y no reflejaba la innovación tecnológica de sus productos.",
      "atid.challenge_goal":
        "El reto fue rediseñar la web para mostrar los productos como soluciones avanzadas, mejorar UX/IA y trabajar en remoto con equipo internacional superando barreras de idioma.",
      "atid.process_text":
        "Analicé competidores globales, evalué el diseño actual (logo pixelado, imágenes de stock, mala vista móvil) y propuse un nuevo diseño con renders de alta calidad y tipografía clara.",
      "atid.final_text":
        "El diseño final es moderno, profesional y refleja tecnología avanzada. Cuenta con fotos de producto de alta calidad, descripciones técnicas claras y navegación intuitiva.",

      // INK
      "ink.title": "Proyecto<br>INK",
      "ink.role_desc": "Diseñadora UX",
      "ink.duration_desc": "2 Semanas",
      "ink.type_desc": "UX Research + Diseño de Servicio",
      "ink.challenge_text":
        "El proceso de encontrar tatuador y estilo es lento, fragmentado y desorganizado. El objetivo fue crear una app que conecte usuarios y tatuadores, centralizando búsqueda de estilos, artistas, presupuestos y reservas en un solo lugar.",
      "ink.process_text":
        "Realicé encuestas (+100 respuestas) y entrevistas a usuarios y tatuadores. Insights revelaron que la técnica y estilo son lo más importante, y los sistemas de reserva actuales son caóticos.",
      "ink.process_goal":
        "Creé User Personas, Journey Maps y matriz MoSCoW para definir funcionalidades.",
      "ink.final_text":
        "Pantallas de alta fidelidad incluyendo galería de estilos, lista de artistas por ubicación, perfil de artista con diseños y reserva, y perfil de usuario.",

      // Cities
      "cities.title": "Rebuilding<br>Cities",
      "cities.role_desc": "Diseñadora UX",
      "cities.duration_desc": "2 Semanas",
      "cities.type_desc": "Diseño de Servicio Urbano",
      "cities.challenge_text":
        "¿Cómo rediseñar el entorno urbano desde una perspectiva de género e inclusión? La oportunidad fue repensar un espacio urbano desigual para hacerlo más accesible, seguro e integrador para mujeres, minorías y grupos vulnerables.",
      "cities.process_text":
        "Usando Design Thinking (Doble Diamante), realicé desk research y encuestas. Insights clave: zonas verdes son clave para bienestar, y la percepción de seguridad depende tanto del diseño físico como de la educación social.",
      "cities.solution_text":
        "Elegimos la Plaza MACBA en Barcelona. La idea fue crear un espacio urbano común que fomente la convivencia y garantice seguridad. Definimos zonas de juego, picnic y oasis.",

      // Kingsugi
      "kingsugi.title": "Kingsugi<br>Empatía Animal",
      "kingsugi.role_desc": "Diseñadora UX",
      "kingsugi.duration_desc": "5 Días",
      "kingsugi.type_desc": "Design Sprint",
      "kingsugi.challenge_text":
        '"¿Cómo fomentar la empatía en las personas hacia los animales?" El objetivo fue aumentar la empatía y visualizar la situación de animales abandonados, especialmente aquellos con discapacidad, ancianos o razas discriminadas.',
      "kingsugi.process_text":
        "Usé la metodología Design Sprint (5 días): Mapear el problema, Idear soluciones (Crazy 8s), Decidir (Storyboard), Prototipar y Testear.",
      "kingsugi.design_text":
        "Diseñé una app para dar visibilidad a estos animales. Pantallas clave incluyeron Home, Catálogo de animales filtrado por especie y Ficha detallada.",
    },
  };

  // Detect browser language and set default
  const detectLanguage = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    // Check if browser language starts with 'es' (es, es-ES, es-MX, es-AR, etc.)
    return browserLang.toLowerCase().startsWith("es") ? "es" : "en";
  };

  // Function to update content based on language
  const updateContent = (lang) => {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    // Update HTML lang attribute
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
  };

  // Set initial language based on browser
  const initialLang = detectLanguage();

  // Update active button state
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach((btn) => {
    if (btn.getAttribute("data-lang") === initialLang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Apply initial language
  if (initialLang === "es") {
    updateContent("es");
  }

  // Language Switcher
  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");

      // Update active state
      langBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Update content
      updateContent(lang);
    });
  });

  // Reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const jobItems = document.querySelectorAll(".job-item");
  jobItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  // Hero Text Reveal
  const heroText = document.querySelector(".reveal-text");
  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(100px)";
  heroText.style.transition = "all 1s cubic-bezier(0.16, 1, 0.3, 1)";

  setTimeout(() => {
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 100);
});
