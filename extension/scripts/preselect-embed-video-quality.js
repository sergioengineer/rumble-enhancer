const selectBestQuality = () => {
  //Try and find the quality selector button
  const svgs = document.querySelectorAll("#player  svg")
  if (svgs.length !== 11) return false
  svgs[5].parentElement.click()

  //Now we look for every single quality button
  const lis = [...document.querySelectorAll("#player li")]
  /**@type {HTMLElement[]} */
  const qualitiesButtons = [
    lis.find((li) => li.textContent == "240p"),
    lis.find((li) => li.textContent == "360p"),
    lis.find((li) => li.textContent == "480p"),
    lis.find((li) => li.textContent == "720p"),
    lis.find((li) => li.textContent == "1080p"),
  ].reverse()

  //If we manage to find one quality button which isn't null, we select the highest one
  //Otherwise we tell the callee that we should keep looking
  for (const qualityButton of qualitiesButtons) {
    if (!qualityButton) continue

    qualityButton.click()
    return true
  }
  return false
}

let lastExec = false
const interval = setInterval(
  async (_) =>
    !lastExec ? (lastExec = selectBestQuality()) : clearInterval(interval),
  1000,
)
