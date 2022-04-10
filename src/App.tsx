import { NextUIProvider } from "@nextui-org/react"
import * as React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import { darkTheme } from "./lib/themes"
import About from "./pages/About"
import Home from "./pages/Home"
import VideoPage from "./pages/VideoPage"

const App: React.FC = () => {
  return (
    <NextUIProvider theme={darkTheme}>
      <div className="app">
        <Router>
          <Header />
          <SideBar />
          <section className="content">
            <svg
              className="bkgsvg"
              width="8.3079166mm"
              height="8.6485729mm"
              viewBox="0 0 8.3079166 8.6485729"
              version="1.1"
              id="svg5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs id="defs2">
                <path
                  id="si1"
                  d="M 7.1,3.5 C 7.9,3 8.9,2.8 9.9,2.9 c 0.4,-0.5 0.9,-1 1.5,-1.3 2.7,-1.5 7,-0.2 13.3,3.5 6.5,3.8 9.7,6.8 9.7,10 0,0.7 -0.2,1.5 -0.5,2.2 0.4,0.8 0.6,1.5 0.5,2.3 0,3.1 -3.3,6.2 -9.7,9.9 -6.4,3.7 -10.6,5 -13.4,3.5 A 5,5 0 0 1 9.4,31.1 C 8.5,31.1 7.7,30.9 7,30.5 4.3,28.9 3.2,24.6 3.2,17.1 3.3,9.3 4.3,5 7.1,3.5 Z M 11.9,7 C 7.4,9.5 7.4,24.9 11.9,27.4 16.5,30.1 28.9,20.9 29,17 29,11.8 16.3,4.6 11.9,7 Z"
                />
              </defs>
              <g id="layer1" transform="translate(-1.0691039,-1.495786)">
                <g
                  id="g98"
                  transform="matrix(0.26458333,0,0,0.26458333,67.532447,129.20494)"
                >
                  <path
                    className="st0"
                    d="m -247.20004,-480.10335 c 0.8,-0.5 1.8,-0.7 2.8,-0.6 0.4,-0.5 0.9,-1 1.5,-1.3 2.7,-1.5 7,-0.2 13.3,3.5 6.5,3.8 9.7,6.8 9.7,10 0,0.7 -0.2,1.5 -0.5,2.2 0.4,0.8 0.6,1.5 0.5,2.3 0,3.1 -3.3,6.2 -9.7,9.9 -6.4,3.7 -10.6,5 -13.4,3.5 a 5,5 0 0 1 -1.9,-1.9 c -0.9,0 -1.7,-0.2 -2.4,-0.6 -2.7,-1.6 -3.8,-5.9 -3.8,-13.4 0.1,-7.8 1.1,-12.1 3.9,-13.6 z m 4.8,3.5 c -4.5,2.5 -4.5,17.9 0,20.4 4.6,2.7 17,-6.5 17.1,-10.4 0,-5.2 -12.7,-12.4 -17.1,-10 z"
                    id="path11"
                  />
                  <path
                    className="st0"
                    d="m -239.80004,-471.50335 c -2.3,1.3 -2.3,9 0,10.2 2.3,1.3 8.6,-3.3 8.6,-5.3 0,-2.5 -6.4,-6.1 -8.6,-4.9 z"
                    id="path15"
                  />
                  <g
                    className="st2"
                    clip-path="url(#si2)"
                    id="g35"
                    transform="translate(-254.30004,-483.60335)"
                  >
                    <linearGradient
                      id="si3"
                      gradientUnits="userSpaceOnUse"
                      x1="25.299999"
                      y1="27.799999"
                      x2="30.1"
                      y2="14.6"
                      gradientTransform="matrix(0.9939,0.02784,-0.01545,0.9862,-2.9,-4.7)"
                    >
                      <stop
                        offset=".3"
                        stop-color="#74a441"
                        stop-opacity="0"
                        id="stop23"
                      />
                      <stop offset="1" stop-color="#4c771f" id="stop25" />
                    </linearGradient>
                    <path
                      d="m 28.7,17.1 c 0,1.8 -2.1,3.8 -4.4,5.7 l 5.3,3.6 C 32.8,24 34.5,21.9 34.5,19.6 34.5,19 34.4,18.3 34.1,17.7 31.9,12.6 23,8.4 16.8,7 c 5.6,1.6 12,6.4 11.9,10.1 z"
                      fill="url(#si3)"
                      id="path28"
                      style={{ fill: "url(#si3)" }}
                    />
                    <linearGradient
                      id="si4"
                      gradientUnits="userSpaceOnUse"
                      x1="16.799999"
                      y1="10.8"
                      x2="16.799999"
                      y2="10.8"
                      gradientTransform="matrix(0.9939,0.02784,-0.01545,0.9862,-2.9,-4.7)"
                    >
                      <stop
                        offset=".3"
                        stop-color="#74a441"
                        stop-opacity="0"
                        id="stop30"
                      />
                      <stop offset="1" stop-color="#4c771f" id="stop32" />
                    </linearGradient>
                  </g>
                  <g
                    className="st2"
                    clip-path="url(#si2)"
                    id="g49"
                    transform="translate(-254.30004,-483.60335)"
                  >
                    <linearGradient
                      id="si5"
                      gradientUnits="userSpaceOnUse"
                      x1="488.29999"
                      y1="8.8000002"
                      x2="491.60001"
                      y2="-7.0999999"
                      gradientTransform="matrix(-0.5069,0.8385,-0.8387,-0.511,262.6,-387.1)"
                    >
                      <stop
                        offset=".3"
                        stop-color="#74a441"
                        stop-opacity="0"
                        id="stop37"
                      />
                      <stop offset="1" stop-color="#4c771f" id="stop39" />
                    </linearGradient>
                    <path
                      d="M 11.5,26.6 C 10,25.7 9.3,22.9 8.8,20 l -5.7,2.7 c 0.5,4 1.5,6.5 3.4,7.6 0.5,0.3 1.2,0.5 1.8,0.6 5.4,0.8 13.4,-4.8 17.6,-9.4 -3.9,4 -11.2,7 -14.4,5.1 z"
                      fill="url(#si5)"
                      id="path42"
                      style={{ fill: "url(#si5)" }}
                    />
                    <linearGradient
                      id="si6"
                      gradientUnits="userSpaceOnUse"
                      x1="478.70001"
                      y1="-9.6000004"
                      x2="478.70001"
                      y2="-9.6000004"
                      gradientTransform="matrix(-0.5069,0.8385,-0.8387,-0.511,262.6,-387.1)"
                    >
                      <stop
                        offset=".3"
                        stop-color="#74a441"
                        stop-opacity="0"
                        id="stop44"
                      />
                      <stop offset="1" stop-color="#4c771f" id="stop46" />
                    </linearGradient>
                  </g>
                  <g
                    className="st2"
                    clip-path="url(#si2)"
                    id="g63"
                    transform="translate(-254.30004,-483.60335)"
                  >
                    <linearGradient
                      id="si7"
                      gradientUnits="userSpaceOnUse"
                      x1="21.6"
                      y1="8"
                      x2="5.9000001"
                      y2="13.8"
                    >
                      <stop
                        offset=".3"
                        stop-color="#74a441"
                        stop-opacity="0"
                        id="stop51"
                      />
                      <stop offset="1" stop-color="#4c771f" id="stop53" />
                    </linearGradient>
                    <path
                      d="m 11.9,7 c 1.6,-0.9 4.2,-0.5 6.9,0.5 L 19.6,2.4 C 16,0.8 13.3,0.5 11.4,1.5 10.8,1.8 10.4,2.2 9.9,2.8 6.6,7.2 7.4,16.8 9.2,22.8 7.8,17.2 8.7,8.8 11.9,7 Z"
                      fill="url(#si7)"
                      id="path56"
                      style={{ fill: "url(#si7)" }}
                    />
                    <linearGradient
                      id="si8"
                      gradientUnits="userSpaceOnUse"
                      x1="10.2"
                      y1="25.6"
                      x2="10.2"
                      y2="25.6"
                    >
                      <stop
                        offset=".3"
                        stop-color="#fff"
                        stop-opacity="0"
                        id="stop58"
                      />
                      <stop offset="1" stop-color="#ababab" id="stop60" />
                    </linearGradient>
                  </g>
                </g>
              </g>
              <style id="style9"></style>
            </svg>
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
