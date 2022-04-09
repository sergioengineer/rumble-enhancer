import { Grid, GridItemProps } from "@nextui-org/react"
import { Link } from "react-router-dom"
import "./VideoContainer.css"

interface Props extends GridItemProps {
  anchor: HTMLAnchorElement
}
const VideoContainer: React.FC<Props> = ({ anchor, ...props }) => {
  const img = anchor.querySelector("img")
  const heading = anchor.querySelector(".mediaList-heading")?.textContent

  return (
    <Grid className={"video_container"} {...props}>
      <Link to={anchor.href.replace("https://rumble.com/", "")}>
        <div style={{ display: "inline-flex", flexDirection: "column" }}>
          <div style={{ width: "100%" }}>
            <img src={img?.src} width={"100%"}></img>
          </div>
          <label>
            {heading?.substring(0, 35)}
            {heading?.length || 0 > 35 ? "..." : ""}
          </label>
        </div>
      </Link>
    </Grid>
  )
}

export default VideoContainer
