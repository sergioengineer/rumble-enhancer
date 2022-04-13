import { Text } from "@nextui-org/react"
import { GiCrown } from "@react-icons/all-files/gi/GiCrown"
import { Container } from "./style"

const MenuItem = () => {
  return (
    <Container>
      <div
        style={{
          height: "100%",
          width: "22px",
          display: "flex",
          marginRight: "8px",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <GiCrown
          style={{
            height: "22px",
            width: "22px",
          }}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <Text size={20} weight={"bold"} as={"span"}>
          Canal Exemplo
        </Text>
      </div>
    </Container>
  )
}

export default MenuItem
