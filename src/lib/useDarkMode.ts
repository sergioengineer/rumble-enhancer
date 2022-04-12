import { getDocumentTheme } from "@nextui-org/react"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    let theme = window.localStorage.getItem("data-theme")
    setIsDark(theme === "dark-theme")

    const observer = new MutationObserver((mutation) => {
      let newTheme = getDocumentTheme(document?.documentElement)
      localStorage.setItem("data-theme", newTheme)
      setIsDark(newTheme === "dark-theme")
    })

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    })

    return () => observer.disconnect()
  }, [])

  return [isDark, setIsDark] as useDarkModeReturn
}

export default useDarkMode

type useDarkModeReturn = [boolean, Dispatch<SetStateAction<boolean>>]
