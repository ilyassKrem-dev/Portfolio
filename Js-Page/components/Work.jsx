

import Sites from "./sub-comp/Portfolio-sub/Sites"
import "../Styles/work.css"
function Work() {
    
    return (
        <>
            <div className="flex justify-center portfolio bg-bottom bg-cover">
                <div className="portfolio-box my-16 ">
                    <h1 className="place-content-center ">MY WORK</h1>
                </div>
            </div>
            <div className="bg-[#1A1A1A] h-16 flex justify-center items-center">
                <div className="text-white font-['Montserrat'] border-b-4 border-white-500 w-20 text-center font-bold text-lg">All</div>
            </div>
            <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-2 mt-20 sm:mt-0 justify-items-center sm:justify-items-start">
                <Sites />
            </div>
            <div className="bg-[#1A1A1A] h-16 flex justify-center items-center">
                <div className="text-white font-['Montserrat']  text-center font-bold text-sm sm:text-lg ">And many more to come!</div>
            </div>
            
        </>
    )
}

export default Work