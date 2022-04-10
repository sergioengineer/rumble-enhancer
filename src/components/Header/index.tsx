import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <div className="header">
      <Link to={"/"} className="logo"></Link>
      <span className="links">
        <Link to={"/about"}> About</Link>
      </span>
    </div>
  )
}
