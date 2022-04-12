import { NextUIProvider } from "@nextui-org/react"
import * as React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Logo from "./components/images/Logo"
import SideBar from "./components/SideBar"
import { darkTheme, lightTheme } from "./lib/themes"
import useDarkMode from "./lib/useDarkMode"
import About from "./pages/About"
import Home from "./pages/Home"
import VideoPage from "./pages/VideoPage"

const App: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode()

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
