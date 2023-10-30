
import "./Styles/profile.css"

function Profile() {


    return (
        <>
            <div className="about-box">
                <h1>ABOUT ME</h1>
            </div>
            <p className="section-text">
            I am a Full Stack web devloper,i'm a student at ISTA Inzegan.I am always motivated to make new things and very good at adapting to new environments.

            I'm still learning many new skills and getting experience to achieve great things as a developer.
            </p>
            <h2 className="explore-sec">EXPLORE</h2>
            <div className="line"></div>
            <div className="explore-info">
                <div className="development box">
                    <div className="icon devle"></div>
                    <h3 className="explore-h3">Development</h3>
                    <p className="explore-p">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                </div>
                <div className="maintenance box">
                    <div className="icon maint"></div>
                    <h3 className="explore-h3">MAINTENANCE</h3>
                    <p className="explore-p">I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
                </div>
            </div>
            <div className="line line2"></div>
        </>
    )
}

export default Profile