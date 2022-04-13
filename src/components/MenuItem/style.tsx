import { Button, styled } from "@nextui-org/react"

const Container: React.FC = function ({ children }) {
  const Btn = styled(Button, {
    height: "45px",
    width: "97% !important",
    borderRadius: "4px",
    position: "relative",
    margin: "auto",
    marginTop: "6px",
    boxShadow: "0px 1px 2px 1px $background",
    backgroundColor: "#000",
  })

  return <Btn css={{ background: "$background" }}>{children}</Btn>
}

export { Container }
