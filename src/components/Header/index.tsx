import { Switch } from "@nextui-org/react"
import { BsMoon } from "@react-icons/all-files/bs/BsMoon"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { Link } from "react-router-dom"
import FullLogo from "../images/FullLogo"
import "./Header.css"

const Header: React.FC<Props> = ({ setIsDark, isDark }) => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <FullLogo />
      </Link>
      <span className="links">
        <Link to={"/about"}> About</Link>
        <Switch
          size={"md"}
          checked={isDark}
          onChange={() => setIsDark((s) => !s)}
          style={{ marginLeft: "15px", marginTop: "-3px" }}
          iconOn={<BsMoon />}
          iconOff={<FaSun fill="var(--nextui-colors-warningDark)" />}
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
