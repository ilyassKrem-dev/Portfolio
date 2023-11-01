

import { useState } from "react"
import "../Styles/navbar.css"
import { Outlet, Link } from "react-router-dom";

function Navbar(props) {
    const [change , setChange] = useState(0)
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
        name:"Work"
    },
    {
        id:5,
        name:"Contact me"
    },

])
    
    function changeStyle(num) {
        setChange(num)

    }
   
    
    const navItemsElements = navItems.map((item , index) => {
        const styles ={
            color:item.id === change ? "black" : ""
        }
        return (
            <Link to={`/${item.name.split(" ")[0]}`} key={index} onClick={() => changeStyle(item.id)}  className={  change === item.id ? "link-nav nav--div-text navStyle" : "link-nav nav--div-text"} style={styles}>{item.name}</Link>
        )
    })


    return (
        <>
            <nav>
                <div className="nav--bar">
                    {navItemsElements}
                </div>
            </nav>
            <Outlet />
        </>
    )
}


export default Navbar