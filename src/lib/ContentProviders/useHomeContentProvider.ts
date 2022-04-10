import useRumbleHtml from "./useRumbleHtml"

export default function useHomeContentProvider() {
  const fragment = useRumbleHtml("/")

  if (!fragment) return undefined

  const mediaLinks = [
    ...fragment.querySelectorAll(".mediaList-link"),
  ] as HTMLAnchorElement[]
  const mediaLinkArray: MediaLink[] = []

  for (const mediaLink of mediaLinks) {
    const img = mediaLink.querySelector("img")
    const heading =
      mediaLink?.querySelector(".mediaList-heading")?.textContent || undefined
    mediaLinkArray.push({
      thumbNailSrc: img?.src,
      heading,
      videoLink: mediaLink.href,
    })
  }

  return {
    mediaLinks: mediaLinkArray,
  }
}

export interface MediaLink {
  thumbNailSrc?: string
  heading?: string
  videoLink?: string
}
