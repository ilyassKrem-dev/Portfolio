
import arrow from "./Images/arrow.png"
import sitesData from "./sitesData"
import { useState } from "react"
function Sites() {
    
    const [sitesD , setSitesD] = useState(sitesData.sites)
    const sitesElem = sitesD.map((site,outerIndex) => {

        const[show , setShow] = useState(false)
        const skillsMap = site.skills.map((item , innerIndex) => {
            return (
                
                    <a key={item.name} href={item.site}
                    target={"_blank"} className="text-black border border-white-100 opacity-100 py-0.3 px-3 mx-2 rounded-lg bg-white md:mx-2  md:border-white-500 cursor-pointer hover:opacity-70 active:opacity-50 text-[0.5rem] md:text-base font-['Montserrat'] font-medium sm:text-sm sm:px-6">
                    {item.name}
                    </a>
                
            )
        })
        function changeShow() {
            setShow(prev => !prev)
        }
        return (
            
            
                <div key={site.name} className="group/item relative border-2 border-black cursor-pointer  sm:w-full overflow-x-scroll [&::-webkit-scrollbar]:hidden">
                    <a  href="https://github.com" target={"_blank"}>
                        <img className="object-cover w-full h-full" src={site.img} alt=""/>
                    </a>
                    
                    <img onClick={changeShow} className={`${show && "invisible"} w-1/12 absolute  bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 cursor-pointer md:translate-y-1.5`} src={arrow} alt="tenzie-Game"/>

                    <a href="https://github.com" target={"_blank"} className="group/edit invisible absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-2
                    group-hover/item:visible
                    font-['Montserrat'] font-bold text-[0.7rem] cursor-pointer text-center sm:text-lg">
                        {site.name}  
                    </a>
                    <div key={outerIndex} className={`${!show && "invisible"} absolute bottom-0 left-0 bg-gray-900/[.7]  w-full h-2/6 flex justify-center items-center cursor-default`}> 
                        <p onClick={changeShow} className="absolute top-0 right-0 -translate-x-2 translate-y-2 font-['Arial'] text-white cursor-pointer font-bold text-[0.7rem] sm:text-lg">X</p>
                        {skillsMap}
                    </div>
                        
                </div>
            
        )
    })

    return (
        <>
            {sitesElem}      
        </>
    )
}

export default Sites