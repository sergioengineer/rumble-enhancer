import { getDocumentTheme, NextUIProvider } from "@nextui-org/react"
import * as React from "react"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Logo from "./components/images/Logo"
import SideBar from "./components/SideBar"
import { darkTheme, lightTheme } from "./lib/themes"
import About from "./pages/About"
import Home from "./pages/Home"
import VideoPage from "./pages/VideoPage"

const App: React.FC = () => {
  //TODO: This whole theme logic should be separated into a custom Hook
  const [isDark, setIsDark] = useState(true)

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

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <div className="app">
        <Router>
          <Header isDark={isDark} setIsDark={setIsDark} />
          <SideBar />
          <section className="content">
            <Logo />
            <Routes>
              <Route path="/:id" element={<VideoPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </section>
        </Router>
      </div>
    </NextUIProvider>
  )
}

export default App
