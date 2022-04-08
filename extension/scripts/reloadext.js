chrome.alarms.create("Reload extension", { when: Date.now() + 1000 })
chrome.alarms.onAlarm.addListener(() => {
  console.log("one")
  chrome.runtime.reload()
})
