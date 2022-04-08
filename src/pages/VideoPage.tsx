// A custom hook that builds on useLocation to parse

import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const VideoPage: React.FC = () => {
  const { id } = useParams()
  const [html, setHtml] = useState<string>()
  const fragment = new DocumentFragment()

  useEffect(() => {
    const makeFetch = async () => {
      const html = await fetch("https://rumble.com/" + id).then((r) => r.text())
      setHtml(html)
    }
    makeFetch()
  }, [])

  if (html) {
    const htmlElement = document.createElement("html")
    htmlElement.innerHTML = html
    fragment.append(htmlElement)

    const media = fragment.querySelector("video")
    console.log(media)

    return (
      <div>
        <video height={"500px"} width={"500px"} src={media?.src}></video>
      </div>
    )
  }

  return <div></div>
}

export default VideoPage
