import "./FirstSession.css"
import { NavBar } from "./NavBar"
import { About } from "./About"

export const FirstSession = () => {
    return (
        <div>
            <div className="container"></div>
            
            <div className="box" id="home">
                <NavBar />
                <img className="avatar" src={require("../images/avatar.png")} alt="tayanne-avatar"/>
                <h1>Hi, I'm <span className="name">Tayanne Bencardino</span>.
                And I am <span className="ocupation">Web Developer</span>!</h1>
            </div>
        </div>
    )
}