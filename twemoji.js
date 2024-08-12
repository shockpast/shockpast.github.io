window.addEventListener("load", () => {
  setTimeout(() => {
    twemoji.parse(document.getElementById("effect"), { base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/' })
  }, 1000);
})