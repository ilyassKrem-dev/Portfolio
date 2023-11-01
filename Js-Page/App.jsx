import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import About from "./components/About"
import Skills from "./components/Skills"
import NoPage from "./components/Nopage";
import Work from "./components/Work";

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    useEffect(() => {
      function resize() {
        setWindowWidth(window.innerWidth)
        
      }
      window.addEventListener("resize",resize)
      return function() {
        removeEventListener("resize" , resize)
      }
    } , [])
    
    return (
      <>
        
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Main />} />
                <Route path="About" element={<About />} />
                <Route path="Skills" element={<Skills />} />
                <Route path="Work" element={<Work />}/>
                <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
      </>
    )
  }

export default App