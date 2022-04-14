import { BsSearch } from "@react-icons/all-files/bs/BsSearch"
import { Container, SearchInput } from "./style"

const SearchBar = () => {
  return (
    <Container fluid>
      <SearchInput
        fullWidth={true}
        underlined
        placeholder="Search"
        contentLeft={<BsSearch />}
      />
    </Container>
  )
}

export default SearchBar
