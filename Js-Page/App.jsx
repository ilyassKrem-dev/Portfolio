import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import About from "./components/About"
import Skills from "./components/Skills"
import NoPage from "./components/Nopage";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Navbarmob from "./components/mobile-version/Navbarmob";
import Homemob from "./components/mobile-version/Homemob";
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
              <Route path="/" element={windowWidth >500 ?<Navbar /> : <Navbarmob />}>
                <Route index element={windowWidth >500 ?<Home /> : <Homemob />} />
                <Route path="Home" element={windowWidth >500 ?<Home /> : <Homemob />} />
                <Route path="About" element={<About />} />
                <Route path="Skills" element={<Skills />} />
                <Route path="Work" element={<Work />}/>
                <Route path="Contact" element={<Contact />}/>
                <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
      </>
    )
  }

export default App