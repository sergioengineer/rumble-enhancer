import { useEffect, useRef } from "react"
import Events from "../../lib/events"
import MenuItem from "../MenuItem"
import "./SideBar.css"
const SideBar = () => {
  const sideBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const eventHandler = (evt: Event) => {
      if (evt.type !== Events.toggleSideBar) return
      if (!sideBarRef?.current) return
      const sideBarIsOpened = sideBarRef.current?.classList.contains("opened")

      sideBarIsOpened
        ? sideBarRef.current.classList.remove("opened")
        : sideBarRef.current.classList.add("opened")
    }
    document.addEventListener(Events.toggleSideBar, eventHandler)

    return () =>
      document.removeEventListener(Events.toggleSideBar, eventHandler)
  }, [])

  return (
    <div className="sidebar" ref={sideBarRef}>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </div>
  )
}

export default SideBar
