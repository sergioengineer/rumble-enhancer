// A custom hook that builds on useLocation to parse

import React from "react"
import { useParams } from "react-router-dom"
import useRumbleHtml from "../lib/useRumbleHtml"

const VideoPage: React.FC = () => {
  const { id } = useParams()
  const fragment = useRumbleHtml("https://rumble.com/" + id)

  if (fragment) {
    const scripts = [...fragment.querySelectorAll("script")]
    const jsonScript = scripts.find((s) => s.type.includes("ld+json"))
    const json: Schema[] = JSON.parse(jsonScript?.innerHTML || "")

    return (
      <div style={{ width: "100%", minHeight: "100vh" }}>
        <iframe
          src={json[0].embedUrl}
          width={"100%"}
          height={"56%"}
          style={{ border: "none" }}
        ></iframe>
      </div>
    )
  }

  return <div></div>
}

export default VideoPage

export interface Schema {
  "@context": string
  "@type": string
  name?: string
  playerType?: string
  description?: string
  thumbnailUrl?: string
  uploadDate?: string
  duration?: string
  embedUrl?: string
  url: string
  interactionStatistic?: InteractionStatistic
  width?: number
  height?: number
  videoQuality?: string
  potentialAction?: PotentialAction
  logo?: string
  sameAs?: string[]
}

export interface InteractionStatistic {
  "@type": string
  interactionType: InteractionType
  userInteractionCount: number
}

export interface InteractionType {
  "@type": string
}

export interface PotentialAction {
  "@type": string
  target: string
  "query-input": string
}
