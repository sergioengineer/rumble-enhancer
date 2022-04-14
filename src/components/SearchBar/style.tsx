import { Container as NextContainer, Input, styled } from "@nextui-org/react"

const Container = styled(NextContainer, {
  display: "none !important",
  alignItems: "center",
  maxWidth: "455px",

  "@xs": {
    display: "flex !important",
  },
})

const SearchInput = styled(Input, {
  height: "30px !important",
  maxWidth: "455px",
})

export { Container, SearchInput }
