const primaryColor = "44d62c"

var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    for (const addedNode of mutation.addedNodes) {
      const nodeName = addedNode.nodeName.toLowerCase()
      if (nodeName === "script")
        addedNode.innerHTML = addedNode.innerHTML.replace(
          "75a642",
          primaryColor,
        )
      if (nodeName === "head") {
        const style = document.createElement("style")
        style.innerHTML = `
            .bigPlayUIInner{
                background: #${primaryColor} !important;
            }
        `

        document.head.appendChild(style)
      }
    }
  })
})

observer.observe(document, { childList: true, subtree: true })
