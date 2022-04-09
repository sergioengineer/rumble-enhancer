import { HTMLProps } from "react"
import { Link } from "react-router-dom"
import "./VideoContainer.css"

interface Props extends HTMLProps<HTMLDivElement> {
  anchor: HTMLAnchorElement
}
const VideoContainer: React.FC<Props> = ({ anchor, ...props }) => {
  const img = anchor.querySelector("img")
  const heading = anchor.querySelector(".mediaList-heading")?.textContent

  return (
    <Link
      to={anchor.href.replace("https://rumble.com/", "")}
      className={"video_container"}
    >
      <div
        style={{ display: "inline-flex", flexDirection: "column" }}
        {...props}
      >
        <div style={{ width: "100%" }}>
          <img src={img?.src} width={"100%"}></img>
        </div>
        <label>{heading}</label>
      </div>
    </Link>
  )
}

export default VideoContainer
