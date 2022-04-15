import { Container as NextContainer, styled } from "@nextui-org/react"

export const Container = styled(
  ({ ...props }) => <NextContainer fluid {...props} />,
  {
    display: "none !important",
    alignItems: "center",
    maxWidth: "455px",

    "@xs": {
      display: "flex !important",
    },
  },
)
