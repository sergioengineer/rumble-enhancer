import { Button, Switch } from "@nextui-org/react"
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu"
import { BsMoon } from "@react-icons/all-files/bs/BsMoon"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { Link } from "react-router-dom"
import Events from "../../lib/events"
import FullLogo from "../images/FullLogo"
import "./Header.css"

const Header: React.FC<Props> = ({ setIsDark, isDark }) => {
  const toggleSideBar = () => {
    document.dispatchEvent(new Event(Events.toggleSideBar))
  }

  return (
    <div className="header">
      <span className="leftSide">
        <Button auto light onClick={() => toggleSideBar()}>
          <AiOutlineMenu style={{ height: "20px", width: "20px" }} />
        </Button>
        <Link to="/" className="logo">
          <FullLogo />
        </Link>
      </span>
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
