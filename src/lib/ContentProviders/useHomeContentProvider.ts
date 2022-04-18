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
    const userProfile = mediaLink.querySelector(".user-image")
    const userProfileSrc = userProfile
      ? getComputedStyle(userProfile)
      : undefined
    console.log(userProfileSrc)
    const heading =
      mediaLink?.querySelector(".mediaList-heading")?.textContent || undefined
    const author =
      mediaLink?.querySelector(".mediaList-by-heading")?.textContent ||
      undefined

    mediaLinkArray.push({
      thumbNailSrc: img?.src,
      heading,
      videoLink: mediaLink.href,
      userProfileSrc: "",
      author,
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
  userProfileSrc?: string
  author?: string
}
