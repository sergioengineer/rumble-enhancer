import { Grid, Loading } from "@nextui-org/react"
import VideoContainer from "../components/VideoContainer"
import { useHomeContentProvider } from "../lib/ContentProviders"

const Home: React.FC = () => {
  const content = useHomeContentProvider()

  if (content) {
    return (
      <Grid.Container className="Home" gap={1} justify={"center"}>
        {content?.mediaLinks?.map((m) => (
          <VideoContainer
            mediaLink={m}
            style={{ width: "340px", marginLeft: "2px", color: "white" }}
          />
        ))}
      </Grid.Container>
    )
  }

  return <Loading size="md">Loading...</Loading>
}

export default Home
