// A custom hook that builds on useLocation to parse

import { Loading } from "@nextui-org/react"
import React from "react"
import { useParams } from "react-router-dom"
import useVideoPageContentProvider from "../lib/ContentProvider/useVideoPageContentProvider"

const VideoPage: React.FC = () => {
  const { id } = useParams()
  const content = useVideoPageContentProvider(id || "")

  if (content) {
    return (
      <div style={{ width: "100%", minHeight: "100vh" }}>
        <iframe
          src={content.embedUrl}
          width={"100%"}
          height={"76%"}
          style={{ border: "none" }}
        ></iframe>
      </div>
    )
  }

  return <Loading size="md">Loading...</Loading>
}

export default VideoPage
