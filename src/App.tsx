import { createTheme, NextUIProvider } from "@nextui-org/react"
import * as React from "react"
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import VideoPage from "./pages/VideoPage"

const myDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      background: "#181818",
      text: "#fff",

      primaryLight: "#E1F6BA", //  $blue600 on dark mode
      primary: "#74a642",
      primaryDark: "#5A8E30",
      primaryShadow: "#F1FADC",

      secondaryLight: "#F0DBFA", // $purple600 on dark mode
      secondary: "#B594D6",
      secondaryDark: "#8E6CB8",
      secondaryShadow: "#F8EDFC", // $purple600 on dark mode

      successLight: "#9FFBB8", // $green600 on dark mode
      success: "#13DD86",
      successDark: "#0DBE83",
      successShadow: "#CEFDD6", // $green600 on dark mode

      warningLight: "#FEF69B", // $yellow600 on dark mode
      warning: "#FCDF07",
      warningDark: "#D8BD05",
      warningShadow: "#FEFBCD", // $yellow600 on dark mode

      errorLight: "#FFC9A9", // $red600 on dark mode
      error: "#FF4828",
      errorDark: "#DB2A1D",
      errorShadow: "#FFE7D3", // $red600 on dark mode
      selection: "#B594D6",
    },
  },
})

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <NextUIProvider theme={myDarkTheme}>
      <div className="app">
        <Router>
          <Header />
          <section className="content">
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
