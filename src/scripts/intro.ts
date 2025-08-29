import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export async function initIntro() {
  const painting = document.getElementById("painting")
  const intro = document.getElementById("intro")
  const nav = document.getElementById("desktop-nav")
  const title = document.getElementById("portfolio-title")

  // Limpiar triggers antiguos
  // ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

  // Reset estado inicial
  // if (intro) {
  //   intro.style.display = "block"
  //   intro.style.scale = "1"
  //   intro.style.opacity = "1"
  //   intro.style.zIndex = "50"
  // }
  // if (painting) {
  //   painting.style.y = "0%"
  //   painting.style.opacity = "1"
  // }
  // if (title) {
  //   title.style.opacity = "1"
  // }
  // if (nav) {
  //   nav.style.zIndex = "50"
  // }

  if (title) {
    gsap.to(title, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#intro", // la sección del intro
        start: "top top", // empieza en cuanto empiezas a scrollear
        end: "top+=50 top", // puedes ajustar si quieres que desaparezca antes
        scrub: true, // animación progresiva con el scroll
      },
    })
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      start: "top top",
      end: "+=100%", // duración relativa del scroll, puedes ajustar
      scrub: true,
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        if (intro) intro.style.zIndex = "40"
        if (nav) nav.style.zIndex = "20"
      },
      onEnterBack: () => {
        if (intro) {
          intro.style.display = "block"
          intro.style.zIndex = "40"
        }
        if (nav) nav.style.zIndex = "20"
      },
      onLeave: () => {
        if (nav) nav.style.zIndex = "50"
        if (intro) intro.style.display = "none"
        if (title) title.style.opacity = "0"
      },
    },
  })

  // 1. Subir contenido dentro del cuadro
  tl.to(painting, {
    yPercent: -100,
    duration: 2,
  })

  // 2. Zoom "entrando al cuadro"
  tl.to(
    "#intro",
    {
      scale: 4,
      transformOrigin: "center center",
      ease: "power2.inOut",
      duration: 3,
    },
    "<"
  )

  // 3. Fade out imágenes
  tl.to(
    ["#frame", "#painting"],
    {
      opacity: 0,
      duration: 1.5,
    },
    "-=1"
  )
}
