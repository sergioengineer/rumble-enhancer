import { Grid, GridItemProps } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { MediaLink } from "../../lib/ContentProvider/useHomeContentProvider"
import "./VideoContainer.css"

interface Props extends GridItemProps {
  mediaLink: MediaLink
}
const VideoContainer: React.FC<Props> = ({ mediaLink, ...props }) => {
  return (
    <Grid className={"video_container"} {...props}>
      <Link
        to={mediaLink?.videoLink?.replace("https://rumble.com/", "") || "/"}
      >
        <div style={{ display: "inline-flex", flexDirection: "column" }}>
          <div style={{ width: "100%" }}>
            <img src={mediaLink.thumbNailSrc} width={"100%"}></img>
          </div>
          <label>
            {mediaLink.heading?.substring(0, 35)}
            {mediaLink.heading?.length || 0 > 35 ? "..." : ""}
          </label>
        </div>
      </Link>
    </Grid>
  )
}

export default VideoContainer
