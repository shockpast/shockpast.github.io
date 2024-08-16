let url = ""
let filePromise = download(url)

function randomString(length) {
  let mask = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let result = ""

  for (var i = length; i > 0; --i)
    result += mask[Math.floor(Math.random() * mask.length)]

  return result
}

async function download(url) {
  if (url == "")
    return "😴💤😴💤😴💤😴💤"

  const response = await fetch("https://api.cobalt.tools/api/json", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "url": url,
      "filenamePattern": "pretty",
      "disableMetadata": true
    })
  })

  const json = await response.json()
  if ("url" in json) {
    const fileType = json.url.split(/(.[mp4|gif|webm|ogg|mp3|wav|jpg|jpeg|png]+)/gi).pop()

    fetch(json.url)
      .then(resp => resp.status === 200 ? resp.blob() : Promise.reject("fail"))
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `${randomString(12)}.${fileType}`;
        document.body.appendChild(a);
        a.click(); // cobalt.tools site doesn't start downloading file automatically sometimes
        a.remove();
        window.URL.revokeObjectURL(url);
      })

    return "😀🙌🙌🎄🎄🍸🍸🍸"
  }

  return "😢😭😢😭💔😿💔😥😖"
}

window.addEventListener("load", () => {
  const url = document.querySelector("input.url").value
  const button = document.querySelector("button.download")
  const status = document.querySelector("p.status")

  button.addEventListener("click", async (event) => {
    event.stopPropagation()
    event.preventDefault()

    status.innerHTML = "🏃🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃"
    const response = await download(url)
    status.innerHTML = response

    setTimeout(() => {
      status.innerHTML = "😴💤😴💤😴💤😴💤"
    }, 1500);
  })
})