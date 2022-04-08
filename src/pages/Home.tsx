import { useEffect, useState } from "react"

const Home: React.FC = () => {
  const [html, setHtml] = useState<string>()
  const frament = new DocumentFragment()

  useEffect(() => {
    const makeFetch = async () => {
      const html = await fetch("https://rumble.com").then((r) => r.text())
      setHtml(html)
    }

    makeFetch()
  }, [])

  if (html) {
    const htmlElement = document.createElement("html")
    htmlElement.innerHTML = html
    frament.append(htmlElement)
  }

  console.log(frament.querySelectorAll(".mediaList-link"))

  return <div></div>
}

export default Home
