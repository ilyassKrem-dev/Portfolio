

import Sites from "./sub-comp/Portfolio-sub/Sites"
import "../Styles/work.css"
function Work() {
    /*<a className="text-black border border-white-100 opacity-100 py-0.2 px-2 rounded-lg bg-white md:mx-2 md:py-1 md:px-3 md:border-white-500 cursor-pointer hover:opacity-70 text-sm md:text-base">Css</a>*/
    return (
        <>
            <div className="flex justify-center portfolio bg-bottom bg-cover ">
                <div className="portfolio-box my-16 ">
                    <h1 className="place-content-center ">MY WORK</h1>
                </div>
            </div>
            <div className="bg-[#1A1A1A] h-16 flex justify-center items-center">
                <div className="text-white font-['Montserrat'] border-b-4 border-white-500 w-20 text-center font-bold text-lg">All</div>
            </div>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-2">
                <Sites />
            </div>
            <div className="bg-[#1A1A1A] h-16 flex justify-center items-center">
                <div className="text-white font-['Montserrat']  text-center font-bold text-lg">And many more to come!</div>
            </div>
            
        </>
    )
}

export default Work