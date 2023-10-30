import Navbar from "./components/Navbar"
import Main from "./components/Main"
import { useState } from "react"
import About from "./components/About"



function App() {
    const [change , setChange] = useState(2)
    function changeSite(num) {
      setChange(num)
    }
    return (
      <div>
          <Navbar change={changeSite}/>
          {change === 1 &&<Main />}
          <About />
      </div>
    )
  }

export default App