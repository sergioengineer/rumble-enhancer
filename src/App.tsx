import * as React from "react"
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import About from "./pages/About"
import Home from "./pages/Home"

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Router>
        <Header />
        <section className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </Router>
    </div>
  )
}

export default App
