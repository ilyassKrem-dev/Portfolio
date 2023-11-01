

import { useEffect, useState } from "react"
import { Outlet, Link } from "react-router-dom";

function Navbarmob() {
    const [change , setChange] = useState(false)
    const [styleChange,setStyleChange] = useState(1)
    const [navItems , setNavItems] = useState([{
        id:1,
        name:"Home"
    },{
        id:2,
        name:"About"
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
        name:"Contact"
    },

  ])
    
   function handleShow(event) {
        event.stopPropagation();
        setChange(prev =>  !prev)
        
   }
   function handelClick(num) {
        setStyleChange(num)
   }
   
    const navItemsElements = navItems.map((item , index) => {
        const styles = {
            backgroundColor: item.id === styleChange ? "white":"",
            color: item.id === styleChange ? "black": "",
            textTransform: item.id === styleChange ? "uppercase" : ""
        }
        return (
            <Link onClick={() => handelClick(item.id)} to={`/${item.name.split(" ")[0]}`} key={index} className="bg-[#00000066] text-center text-white" style={styles}>
                <p className="my-5 font-['Montserrat'] text-lg text-[1.3rem]">{item.name}</p></Link>
        )
    })

    useEffect(() => {
        function bodyChange() {
            setChange(false)
        }
        document.body.addEventListener("click" ,bodyChange)
        return function () {
            document.body.removeEventListener("click",bodyChange)
        }
    } , [change])
 
    return (
        <>
            <div>
                <nav className="flex justify-end position: fixed; top-0">
                    <div onClick={handleShow} className="mr-7 cursor-pointer">
                        {!change&&<svg xmlns="http://www.w3.org/2000/svg" width="31" height="27" viewBox="0 0 31 27" fill="none">
                            <path d="M0 1.90141C0 0.851289 0.85129 0 1.90141 0H29.0986C30.1487 0 31 0.851289 31 1.90141C31 2.95153 30.1487 3.80282 29.0986 3.80282H1.90141C0.851291 3.80282 0 2.95153 0 1.90141Z" fill="white"/>
                            <path d="M0.09375 13.5474C0.09375 12.4973 0.94504 11.646 1.99516 11.646H29.0986C30.1487 11.646 31 12.4973 31 13.5474C31 14.5975 30.1487 15.4488 29.0986 15.4488H1.99516C0.94504 15.4488 0.09375 14.5975 0.09375 13.5474Z" fill="white"/>
                            <path d="M0.09375 25.0984C0.09375 24.0483 0.94504 23.197 1.99516 23.197H29.0986C30.1487 23.197 31 24.0483 31 25.0984C31 26.1485 30.1487 26.9998 29.0986 26.9998H1.99516C0.94504 26.9998 0.09375 26.1485 0.09375 25.0984Z" fill="white"/>
                        </svg>}
                        {change&&<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24.546 0.459043C24.6915 0.604186 24.8069 0.776609 24.8857 0.966438C24.9645 1.15627 25.005 1.35977 25.005 1.56529C25.005 1.77082 24.9645 1.97432 24.8857 2.16415C24.8069 2.35398 24.6915 2.5264 24.546 2.67154L2.67097 24.5465C2.37757 24.8399 1.97964 25.0048 1.56472 25.0048C1.14979 25.0048 0.751863 24.8399 0.458468 24.5465C0.165072 24.2531 0.000244144 23.8552 0.000244141 23.4403C0.000244138 23.0254 0.165072 22.6274 0.458468 22.334L22.3335 0.459043C22.4786 0.313533 22.651 0.198086 22.8409 0.119316C23.0307 0.0405457 23.2342 0 23.4397 0C23.6452 0 23.8487 0.0405457 24.0386 0.119316C24.2284 0.198086 24.4008 0.313533 24.546 0.459043Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.459043 0.459043C0.313533 0.604186 0.198086 0.776609 0.119316 0.966438C0.0405457 1.15627 0 1.35977 0 1.56529C0 1.77082 0.0405457 1.97432 0.119316 2.16415C0.198086 2.35398 0.313533 2.5264 0.459043 2.67154L22.334 24.5465C22.6274 24.8399 23.0254 25.0048 23.4403 25.0048C23.8552 25.0048 24.2531 24.8399 24.5465 24.5465C24.8399 24.2531 25.0048 23.8552 25.0048 23.4403C25.0048 23.0254 24.8399 22.6274 24.5465 22.334L2.67154 0.459043C2.5264 0.313533 2.35398 0.198086 2.16415 0.119316C1.97432 0.0405457 1.77082 0 1.56529 0C1.35977 0 1.15627 0.0405457 0.966438 0.119316C0.776609 0.198086 0.604186 0.313533 0.459043 0.459043Z" fill="white"/>
                        </svg>}
                    </div>
                </nav>
                {change &&<div className="flex flex-col position: absolute w-full">
                    {navItemsElements}
                </div>}
            </div>
            
            <Outlet />
        </>
    )
}


export default Navbarmob