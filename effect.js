const randomEmojis = "😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 🥰 😗 😙 😚 🙂 🤗 🤩 🤔 🤨".split(" ")

function randomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

window.addEventListener("load", () => {
  const effectContainer = document.getElementById("effect")
  const snowContainer = []

  for (let i = 0; i < 100; i++) {
    const snow = document.createElement("p")
    snow.style.position = "absolute"
    snow.style.color = "white"
    snow.style.opacity = "10%"
    snow.style.userSelect = "none"
    snow.innerHTML = randomEmojis[Math.floor(Math.random() * randomEmojis.length)]

    effectContainer.append(snow)
    snowContainer[i] = { instance: snow, x: Math.floor(Math.random() * window.innerWidth), y: -100 - (i * 10) }

    setInterval(() => {
      const data = snowContainer[i]

      snow.style.left = `${data.x}px`
      snow.style.top = `${data.y}px`

      snowContainer[i].y = data.y + 2
      snowContainer[i].x = data.x - randomArbitrary(-0.02, 0.02)

      if (data.x >= window.innerWidth)
        snowContainer[i].x = 0
      if (data.y >= window.innerHeight)
        snowContainer[i].y = -100 + randomArbitrary(-5000, 0)
    }, 30);
  }
})