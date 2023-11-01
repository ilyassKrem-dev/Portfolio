import tenzieGame from "./Images/Tenzie-site.png"
import quizSite from "./Images/Quiz-site.png"
import portimg from "./Images/Portfolio.png"
export default {

    sites: [{
        name: "Tenzie Site",
        img: tenzieGame,
        skills:[{
            site:"https://developer.mozilla.org/en-US/docs/Web/CSS",
            name:"Css"
        } , {
            site:"https://react.dev",
            name:"React"
        }]

    },{
        name: "Quiz Site",
        img: quizSite,
        skills:[{
            site:"https://developer.mozilla.org/en-US/docs/Web/CSS",
            name:"Css"
        } , {
            site:"https://react.dev",
            name:"React"
        }]
    },{
        name: "Portfolio Site",
        img: portimg,
        skills:[{
            site:"https://developer.mozilla.org/en-US/docs/Web/CSS",
            name:"Css"
        } , {
            site:"https://react.dev",
            name:"React"
        },{
           site:'https://tailwindcss.com/',
           name:"TailWind Css"
        }]
    }]

}

