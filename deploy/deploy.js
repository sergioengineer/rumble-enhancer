/***
 * Generates the content script which will load our React app code into rumble's page
 */

const { readdir, writeFile } = require("fs/promises")

/**
 * Gets all the js and css files in a folder
 * @param {string} folderPath -
 * @returns
 */
async function getJsAndCssFiles(folderPath) {
  console.log(folderPath)

  const dir = await readdir(folderPath, { withFileTypes: true })

  return dir
    .filter(
      (f) => f.isFile() && (f.name.endsWith(".css") || f.name.endsWith(".js")),
    )
    .reduce(
      (prev, curr) => {
        if (curr.name.endsWith(".css")) prev.css = [...prev.css, curr]
        else prev.js = [...prev.js, curr]
        return prev
      },
      {
        css: [],
        js: [],
      },
    )
}

;(async () => {
  const files = await getJsAndCssFiles(process.cwd() + "/extension/dist/assets")

  let jsString = `
  document.body.innerHTML = \`<div id="root"></div>\`
    document.querySelector("head").innerHTML = \`
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/assets/favicon.17e50649.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rumble Enhanced</title>
  `

  for (const file of files.css) {
    jsString += `<link rel="stylesheet" href="\${chrome.runtime.getURL(
      "dist/assets/${file.name}",
    )}" />\``
  }

  for (const file of files.js) {
    jsString += `
    {
        const script = document.createElement("script")
        script.src = chrome.runtime.getURL("dist/assets/${file.name}")
        document.body.appendChild(script)
    }`
  }

  await writeFile(process.cwd() + "/extension/scripts/content.js", jsString)
})()
