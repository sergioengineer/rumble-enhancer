;(() => {
  if (window.location.href.includes("/embed")) return
  window.preventScriptLoad = true

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      for (const addedNode of mutation.addedNodes) {
        const nodeName = addedNode.nodeName.toLowerCase()
        if (nodeName === "script") {
          if (!addedNode.type.includes("json")) addedNode.remove()
        }
      }
    })
  })

  observer.observe(document, { childList: true, subtree: true })
})()
