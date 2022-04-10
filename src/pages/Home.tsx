import { Grid, Loading } from "@nextui-org/react"
import VideoContainer from "../components/VideoContainer"
import useRumbleHtml from "../lib/useRumbleHtml"

const Home: React.FC = () => {
  const fragment = useRumbleHtml("https://rumble.com")

  if (fragment) {
    const mediaLinks = (
      [...fragment.querySelectorAll(".mediaList-link")] as HTMLAnchorElement[]
    ).sort((a, b) => (b.href.match(/monark/gi) ? 1 : -1))

    return (
      <Grid.Container className="Home" gap={2} justify={"center"}>
        {mediaLinks.map((m) => (
          <VideoContainer
            anchor={m}
            style={{ width: "240px", marginLeft: "2px", color: "white" }}
          />
        ))}
      </Grid.Container>
    )
  }

  return <Loading size="md">Loading...</Loading>
}

export default Home
