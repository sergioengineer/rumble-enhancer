import { useEffect, useState } from "react"

/**
 * Makes a request to pageUrl and returns a parsed dom fragment
 * @param pageUrl - The complete url string
 * @returns - A dom fragment containing the html nodes of the requested page
 */
export default function useRumbleHtml(pageUrl: string) {
  const fragment = new DocumentFragment()
  const [htmlString, setHtmlString] = useState<string>()

  useEffect(() => {
    const makeFetch = async () => {
      const html = await fetch(pageUrl).then((r) => r.text())
      setHtmlString(html)
    }
    makeFetch()
  }, [])

  if (htmlString) {
    const htmlElement = document.createElement("html")
    htmlElement.innerHTML = htmlString
    fragment.append(htmlElement)

    return fragment
  } else return undefined
}
