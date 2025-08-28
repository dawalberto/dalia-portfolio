const main = document.querySelector("main")
const inMaintenance = document.getElementById("inMaintenance")
const enterButton = inMaintenance?.querySelector("button")
const input = inMaintenance?.querySelector("input")

const secretKey = "8"

function updateVisibility() {
  const unlocked = localStorage.getItem("unlocked") === "true"
  if (unlocked) {
    inMaintenance.style.display = "none"
    main.style.display = "block"
  } else {
    inMaintenance.style.display = "flex"
    main.style.display = "none"
  }
}

// inicializar al cargar
updateVisibility()

// listener solo una vez
enterButton?.addEventListener("click", () => {
  if (!inMaintenance || !input || !main) return
  const value = input.value.trim().toLowerCase()

  if (value === secretKey) {
    localStorage.setItem("unlocked", "true")
    updateVisibility()
  } else {
    alert("Incorrecto. Intenta de nuevo")
  }
})
