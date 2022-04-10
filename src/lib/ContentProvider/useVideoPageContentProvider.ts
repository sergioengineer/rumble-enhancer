import useRumbleHtml from "./useRumbleHtml"

export default function useVideoPageContentProvider(videoId: string) {
  const fragment = useRumbleHtml("https://rumble.com/" + videoId)

  if (!fragment) return undefined
  const scripts = [...fragment.querySelectorAll("script")]
  const jsonScript = scripts.find((s) => s.type.includes("ld+json"))
  const json: Schema[] = JSON.parse(jsonScript?.innerHTML || "")

  return {
    ...json[0],
  }
}
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
