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
          marginRight: "8px",
          alignContent: "center",
          alignItems: "center",
          display: "none",
        }}
      >
        <GiCrown
          style={{
            height: "22px",
            width: "22px",
          }}
        />
      </div>
      <div style={{ display: "inline-flex" }}>
        <Text
          size={20}
          weight={"bold"}
          css={{ lineHeight: "normal", fontStyle: "italic" }}
          as={"span"}
        >
          Canal Exemplo
        </Text>
      </div>
    </Container>
  )
}

export default MenuItem
