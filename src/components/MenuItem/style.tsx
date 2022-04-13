import { Button, styled } from "@nextui-org/react"

const Container = styled(Button, {
  height: "140px !important",
  width: "97% !important",
  borderRadius: "4px",
  position: "relative",
  margin: "auto",
  marginTop: "6px",
  boxShadow: "-1px 1px 1px 1px $background",
  backgroundColor: "$menuItemBackground !important",
  padding: "0px !important",
  alignItems: "start",
  "& .nextui-button-text": {
    width: "100%",
  },
})

export { Container }
