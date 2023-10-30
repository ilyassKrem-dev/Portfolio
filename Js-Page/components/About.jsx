import Skills from "./sub-comp/About-sub/Skills"
import Profile from "./sub-comp/About-sub/Profile"
import "../Styles/about.css"

function About() {

    

    return (
        <section>
            <div className="section-move">
                <Profile />
                <Skills />                       
            </div>      
        </section>
    )
}


export default About