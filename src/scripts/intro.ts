import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function initIntro() {
  const isMobile = document.documentElement.clientWidth <= 640 // sm
  const painting = document.getElementById("painting")
  const intro = document.getElementById("intro")
  const nav = document.getElementById("desktop-nav")
  const title = document.getElementById("portfolio-title")
  const scrollCheer = document.getElementById("scroll-cheer")

  if (title) {
    gsap.to(title, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        end: "top+=50 top",
        scrub: true,
      },
    })
  }

  if (scrollCheer) {
    gsap.to(scrollCheer, {
      opacity: 0,
      scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        end: "top+=50 top",
        scrub: true,
      },
    })
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      start: "top top",
      end: isMobile ? "+=150%" : "+=100%", // scroll más largo en móvil
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
        if (scrollCheer) scrollCheer.style.opacity = "0"
      },
    },
  })

  // 1. Subir contenido dentro del cuadro
  tl.to(painting, {
    yPercent: isMobile ? -75 : -80, // menos recorrido en móvil
    duration: isMobile ? 5 : 3, // más tiempo en móvil
  })

  // 2. Zoom "entrando al cuadro"
  tl.to(
    "#intro",
    {
      scale: 4,
      transformOrigin: "center center",
      ease: "power2.inOut",
      duration: isMobile ? 5 : 3, // más lento en móvil
    },
    "<"
  )

  // 3. Fade out imágenes
  tl.to(
    ["#frame", "#painting"],
    {
      opacity: 0,
      duration: isMobile ? 2.5 : 1.5,
    },
    "-=1"
  )
}
