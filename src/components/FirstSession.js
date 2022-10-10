import "./FirstSession.css"
import { NavBar } from "./NavBar"

export const FirstSession = () => {
    return (
        <session>
            <div className="container"></div>
            <div className="box" id="home">
                <NavBar />
                <img className="avatar" src={require("../images/avatar.png")} alt="tayanne-avatar"/>
                <h1>Hi, I'm <span className="name">Tayanne Bencardino</span>.
                And I am <span className="ocupation">Web Developer</span>!</h1>
                <p>I believe technology provides a digital canvas for innovative ideas and solutions to problems.
                Creating something that improves the lives of others or sparks joy is my biggest motivation.</p>
            </div>
        </session>
    )
}