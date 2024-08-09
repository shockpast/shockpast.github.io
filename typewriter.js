const TYPEWRITER_INTERVAL = 100
const TYPEWRITER_DELAY = 1500
const TYPEWRITER_TEXT = [
  "lua is language of gods", "hello :)", "greenteaneko",
  "gigachad", "hamster criminal", "unsafe { gun::shoot(); }",
  "pipebomb!", "ferra is gud", "all my homies use <insert something>",
  "hugofrost is back!!!!", "i need medic bag!", "how are you?",
  "poor to afford actual webserver"
]
const TYPEWRITER_INSERT = [
  "papermc", "spigot", "cheadleware", "noxus", "asuna-gmod", "gigachad ide",
  "jetbrains software", "rust", "vscode", "lua", "rustlang", "maple"
]

window.addEventListener("load", () => {
  /* @Getter */ function getDescription() { return document.querySelector("p#typewriter") }
  /* @Getter */ function getText() { return getDescription().innerHTML }
  /* @Setter */ function setText(text) { getDescription().innerHTML = text }

  function randomText() { return TYPEWRITER_TEXT[Math.floor(Math.random() * TYPEWRITER_TEXT.length)] }
  function randomInsert() { return TYPEWRITER_INSERT[Math.floor(Math.random() * TYPEWRITER_INSERT.length)] }

  let insert = randomInsert()
  let text = randomText()
  text = text.replace("<insert something>", insert)

  let characterIndex = 0;
  let selectingNew = false;

  setInterval(() => {
    if (selectingNew)
      return

    if (text.length == characterIndex + 1) {
      selectingNew = true

      setTimeout(() => {
        selectingNew = false
        characterIndex = 0

        insert = randomInsert()
        text = randomText()
        text = text.replace("<insert something>", insert)

        setText("> ")
      }, TYPEWRITER_DELAY);
    }

    setText(getText() + text[characterIndex])
    characterIndex++
  }, TYPEWRITER_INTERVAL)
})