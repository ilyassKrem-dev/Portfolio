

import { useState } from "react"
import "../Styles/navbar.css"
function Navbar(props) {
    
    const [navItems , setNavItems] = useState([{
        id:2,
        name:"About me"
    },
    {
        id:3,
        name:"Skills"
    },
    {
        id:4,
        name:"Portfolio"
    },
    {
        id:5,
        name:"Contact me"
    },

])
    
    function changeStyle(num) {
        props.changeFunc(num)

    }
   
    
    const navItemsElements = navItems.map((item , index) => {
        const styles ={
            color:item.id === props.change ? "black" : ""
        }
        return (
            <div key={index} onClick={() => changeStyle(item.id)}  className={props.change === item.id ? "nav--div-text navStyle" : "nav--div-text"} style={styles}>{item.name}</div>
        )
    })


    return (
        <nav>
            <div className="nav--bar">
                {navItemsElements}
            </div>
        </nav>
    )
}


export default Navbar