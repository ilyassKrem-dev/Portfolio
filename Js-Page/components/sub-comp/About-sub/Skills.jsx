
import Learning from "./Learning"
import imgData from "./img-data"
import { useState } from "react"
import "./Styles/skills.css"

function Skills() {

    const [usingSkills , setUsingSkills] = useState(imgData.using)
    const [learningSkills , setlearningSkills] = useState(imgData.learning)

    const usingSkillsElement = usingSkills.map((skill , index) => {
        return (
            <div key={index}>
                <img src={skill.img} alt="" />
                <p>{skill.name}</p>
            </div>
        )
    })

    const learningSkillsElement = learningSkills.map((skill,index) => {
        return <Learning 
                key={index}
                skillImg={skill.img}
                skillName={skill.name}/>
    })
    return (
        <>
            <div className="skills-box">
                    <h1>SKILLS</h1>
            </div>
            <div className="skills-info">
                
                <h5>USING NOW:</h5>
                <div className="Lang-using">
                    {usingSkillsElement}
                </div>

                <h5>LEARNING:</h5>
                <div className="Lang-using">
                    {learningSkillsElement}
                </div>
                
            </div>
        </>
    )
}

export default Skills