import { styled } from "@nextui-org/react"
import { BsSearch } from "@react-icons/all-files/bs/BsSearch"
import { ButtonHTMLAttributes } from "react"

export const ClickableIcon = styled(
  (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...props}>
      <BsSearch />
    </button>
  ),
  {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
)
