import { Button, styled } from "@nextui-org/react"

const Container = styled(Button, {
  height: "35px !important",
  width: "98% !important",
  position: "relative",
  borderRadius: "2px",
  margin: "auto",
  marginTop: "6px",
  boxShadow: "-1px 1px 1px 1px $background",
  backgroundColor: "$menuItemBackground !important",
  padding: "0px !important",
  alignItems: "start",
  "& .nextui-button-text": {
    width: "85%",
    alignItems: "start",
  },
  clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
})

export { Container }
