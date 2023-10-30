import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { useState } from "react"
import About from "./components/About"



function App() {
    const [change , setChange] = useState(1)
    function changeSite(num) {
      setChange(num)
    }
    return (
      <div>
          <Navbar changeFunc={changeSite} change={change} />
          {change === 1 &&<Main />}
          {change === 2 &&<About />}
          
      </div>
    )
  }

export default App