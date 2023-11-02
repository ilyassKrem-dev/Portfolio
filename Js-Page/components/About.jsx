
import Profile from "./sub-comp/About-sub/Profile"
import "../Styles/about.css"
import Bottom from "./sub-comp/Contact-sub/Bottom"
function About() {

    

    return (
        <>
            <section>
                <div className="section-move">
                    <Profile />                      
                </div>   
            </section>
            <Bottom />
        </>
    )
}


export default About