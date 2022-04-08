import { HTMLProps } from "react"

interface Props extends HTMLProps<HTMLDivElement> {
  anchor: HTMLAnchorElement
}
const VideoContainer: React.FC<Props> = ({ anchor, ...props }) => {
  const img = anchor.querySelector("img")
  const heading = anchor.querySelector(".mediaList-heading")?.textContent

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }} {...props}>
      <div style={{ width: "100%" }}>
        <img src={img?.src} width={"100%"}></img>
      </div>
      <label>{heading}</label>
    </div>
  )
}

export default VideoContainer
