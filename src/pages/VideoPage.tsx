// A custom hook that builds on useLocation to parse

import React from "react"
import { useParams } from "react-router-dom"
import useRumbleHtml from "../lib/useRumbleHtml"

const VideoPage: React.FC = () => {
  const { id } = useParams()
  const fragment = useRumbleHtml("https://rumble.com/" + id)

  if (fragment) {
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
