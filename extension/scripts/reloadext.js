chrome.alarms.create("Reload extension", { when: Date.now() + 2000 })
chrome.alarms.onAlarm.addListener(() => {
  chrome.runtime.reload()
})
