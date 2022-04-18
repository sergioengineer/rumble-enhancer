import { Grid, GridItemProps, Text } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { MediaLink } from "../../lib/ContentProviders/useHomeContentProvider"
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
        <div
          style={{
            width: "100%",
            display: "inline-flex",
            flexDirection: "column",
          }}
        >
          <div style={{ width: "100%" }}>
            <img src={mediaLink.thumbNailSrc} width={"100%"}></img>
          </div>
          <Text weight={"semibold"}>
            {mediaLink.heading?.substring(0, 86)}
            {(mediaLink.heading?.length || 0) > 86 ? "..." : ""}
          </Text>
          <Text weight={"semibold"} size={13} color="$gray500">
            {mediaLink.author}
          </Text>
        </div>
      </Link>
    </Grid>
  )
}

export default VideoContainer
