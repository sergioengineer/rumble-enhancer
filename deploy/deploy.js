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
  (()=>{
    const bypassUrls = ["embed", "api"]
    const rumbleBaseUrl = "https://rumble.com/"
    for(const url of bypassUrls){
      if(window.location.href.includes(rumbleBaseUrl + url)) return;
    }
    

    document.body.innerHTML = \`<div id="root"></div>\`
      document.querySelector("head").innerHTML = \`
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/assets/favicon.17e50649.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Rumble Enhanced</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700;800&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet"> 
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
  jsString += `
  })()
  `

  await writeFile(process.cwd() + "/extension/scripts/loadAssets.js", jsString)
})()
