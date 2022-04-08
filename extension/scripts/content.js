
  document.body.innerHTML = `<div id="root"></div>`
    document.querySelector("head").innerHTML = `
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/assets/favicon.17e50649.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  <link rel="stylesheet" href="${chrome.runtime.getURL(
      "dist/assets/index.2aba2491.css",
    )}" />`
    {
        const script = document.createElement("script")
        script.src = chrome.runtime.getURL("dist/assets/index.699b7939.js")
        document.body.appendChild(script)
    }