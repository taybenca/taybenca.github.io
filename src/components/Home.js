import "./Home.css"
import { NavBar } from "./NavBar"
import { Skills } from "./Skills"

export const Home = () => {
    return (
        <session>
            <div className="container"></div>
            <div className="box">
                <NavBar />
                <img className="avatar" src={require("../images/avatar.png")} alt="tayanne-avatar"/>
                <h1>Hi, I'm <span className="orange-colour">Tayanne Bencardino</span>.
                And I am <span className="pink-colour">Web Developer</span>!</h1>
                <p>I believe technology provides a digital canvas for innovative ideas and solutions to problems.
                Creating something that improves the lives of others or sparks joy is my biggest motivation.</p>
                <Skills/>
            </div>
        </session>
    )
}