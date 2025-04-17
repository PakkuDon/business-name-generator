document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("button[type='submit']")
  let businessNames = []

  // Code reused from Wall of Names sharks.js
  // Generate business name on submit
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault()

    const namesToGenerate = Math.floor(Math.random() * 5) + 1
    for (let i = 0; i < namesToGenerate; i++) {
      // Spawn new element on submit button with random velocity values
      const { top, left } = submitButton.getBoundingClientRect()
      const name = {
        x: left,
        y: top,
        dX: (Math.floor(Math.random() * 50) + 50) * (Math.random() > 0.5 ? 1 : -1),
        dY: (Math.floor(Math.random() * 50) + 50) * (Math.random() > 0.5 ? 1 : -1),
      }

      // Create element for business name
      const elem = document.createElement("div")
      elem.className = "business-name"
      elem.style.top = `${name.y}px`
      elem.style.left = `${name.x}px`
      elem.style.animationDuration = `${Math.floor((Math.random() * 3) + 1)}s`

      // Add div for element to page
      name.elem = elem
      businessNames.push(name)
      document.body.appendChild(elem)
    }
  })

  // Animate name ideas
  let lastTick = 0
  const animateNames = () => {
    const now = new Date().getTime()
    if (now - lastTick > 500) {
      businessNames.forEach(name => {
        name.x += name.dX
        name.y += name.dY
        name.elem.style.top = `${name.y}px`
        name.elem.style.left = `${name.x}px`
      })

      lastTick = now
    }

    requestAnimationFrame(animateNames)
  }

  requestAnimationFrame(animateNames)
})