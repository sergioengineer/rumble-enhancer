import { FormElement } from "@nextui-org/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ClickableIcon, Container, SearchInput } from "./style"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const onSearchHandler = (evt: React.KeyboardEvent<FormElement>) => {
    const target = evt.target as HTMLInputElement

    if (evt.key === "Enter") {
      redirectToSearchPage()
    }
  }

  const redirectToSearchPage = () => {
    navigate("/search/video?q=" + searchTerm)
  }

  return (
    <Container>
      <SearchInput
        contentLeft={<ClickableIcon onClick={() => redirectToSearchPage()} />}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={(e) => onSearchHandler(e)}
      />
    </Container>
  )
}

export default SearchBar
