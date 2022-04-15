import { Input, InputProps, styled } from "@nextui-org/react"

export const SearchInput = styled(
  (props?: InputProps) => (
    <Input
      {...props}
      fullWidth={true}
      underlined
      placeholder="Search"
      color="primary"
    />
  ),
  {
    height: "30px !important",
    maxWidth: "455px",
    "& .nextui-input-wrapper": {
      cursor: "pointer",
    },
  },
)
