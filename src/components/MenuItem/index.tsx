import { Text } from "@nextui-org/react"
import { Container } from "./style"

const MenuItem = () => {
  return (
    <Container>
      <Text
        size={20}
        weight={"bold"}
        as={"span"}
        style={{
          position: "absolute",
          top: "-50%",
          height: "auto",
          right: "50%",
          transform: "translate(50%, 25%)",
        }}
      >
        Canal Exemplo
      </Text>
      <Text
        size={10}
        style={{
          position: "absolute",
          bottom: "0",
          right: "50%",
          transform: "translateX(50%)",
        }}
      >
        Canal de vídeos
      </Text>
    </Container>
  )
}

export default MenuItem
