import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export function initIntro() {
  const isMobile = document.documentElement.clientWidth <= 640
  const painting = document.getElementById("painting")
  const intro = document.getElementById("intro")
  const nav = document.getElementById("menu-nav")
  const title = document.getElementById("portfolio-title")
  const scrollCheer = document.getElementById("scroll-cheer")
  const frontSection = document.getElementById("front")
  const portfolioContent = document.getElementById("portfolio-content")

  // Scroll guiado solo si existe la sección front
  if (frontSection) {
    let guided = false // Para que solo ocurra la primera vez
    window.addEventListener(
      "wheel",
      (e) => {
        if (!guided && window.scrollY === 0 && e.deltaY > 0) {
          e.preventDefault()
          guided = true
          gsap.to(window, {
            scrollTo: {
              y: frontSection,
              offsetY: window.innerHeight - frontSection.offsetHeight, // ajusta exacto
            },
            duration: 2.5,
            ease: "power2.inOut",
            onComplete: () => {
              // Cuando termine el scroll, permitir que vuelva a activarse al regresar arriba
              guided = false
            },
          })
        }
      },
      { passive: false }
    )

    let touchStartY = 0

    window.addEventListener(
      "touchstart",
      (e) => {
        touchStartY = e.touches[0].clientY
      },
      { passive: true }
    )

    window.addEventListener(
      "touchmove",
      (e) => {
        const deltaY = touchStartY - e.touches[0].clientY // >0 scroll down
        if (!guided && window.scrollY === 0 && deltaY > 5) {
          e.preventDefault()
          guided = true
          gsap.to(window, {
            scrollTo: window.innerHeight,
            duration: 2.5,
            ease: "power2.inOut",
            onComplete: () => {
              guided = false
            },
          })
        }
      },
      { passive: false }
    )
  }

  // Fade out del título
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
      end: isMobile ? "+=150%" : "+=100%",
      scrub: true,
      pin: true,
      pinSpacing: false,
      onEnter: () => {
        if (intro) intro.style.zIndex = "40"
        if (nav) nav.style.zIndex = "20"
        // Eliminamos mt-20 al empezar
        if (portfolioContent) portfolioContent.classList.remove("mt-20")
      },
      onEnterBack: () => {
        if (intro) {
          intro.style.display = "block"
          intro.style.zIndex = "40"
        }
        if (nav) nav.style.zIndex = "20"
        // Eliminamos mt-20 si volvemos hacia arriba
        if (portfolioContent) portfolioContent.classList.remove("mt-20")
      },
      onLeave: () => {
        if (nav) nav.style.zIndex = "50"
        if (intro) intro.style.display = "none"
        if (title) title.style.opacity = "0"
        if (scrollCheer) scrollCheer.style.opacity = "0"
        // Volvemos a agregar mt-20 cuando termina la animación
        if (portfolioContent) portfolioContent.classList.add("mt-20")
      },
    },
  })

  // 1. Subir contenido dentro del cuadro
  tl.to(painting, {
    yPercent: isMobile ? -40 : -50,
    duration: isMobile ? 5 : 3,
  })

  // 2. Zoom "entrando al cuadro"
  tl.to(
    "#intro",
    {
      scale: 4,
      transformOrigin: "center center",
      ease: "power2.inOut",
      duration: isMobile ? 5 : 3,
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
