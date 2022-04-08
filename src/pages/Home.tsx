import { useEffect, useState } from "react"
import VideoContainer from "../components/VideoContainer"

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
    const mediaLinks = (
      [...frament.querySelectorAll(".mediaList-link")] as HTMLAnchorElement[]
    ).sort((a, b) => (b.href.match(/monark/gi) ? 1 : -1))

    return (
      <div>
        {mediaLinks.map((m) => (
          <VideoContainer anchor={m} />
        ))}
      </div>
    )
  }

  return <div></div>
}

export default Home
