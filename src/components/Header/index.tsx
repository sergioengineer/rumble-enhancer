import { Switch } from "@nextui-org/react"
import { Link } from "react-router-dom"
import "./Header.css"

const Header: React.FC<Props> = ({ setIsDark, isDark }) => {
  return (
    <div className="header">
      <Link to={"/"} className="logo"></Link>
      <span className="links">
        <Link to={"/about"}> About</Link>
        <Switch
          size={"xs"}
          checked={isDark}
          onChange={() => setIsDark((s) => !s)}
          style={{ marginLeft: "15px" }}
        ></Switch>
      </span>
    </div>
  )
}

export default Header

interface Props {
  isDark: boolean
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}
