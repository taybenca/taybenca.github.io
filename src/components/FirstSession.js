import "./FirstSession.css"
import { NavBar } from "./NavBar"

export const FirstSession = () => {
    return (
        <div>
            <div className="container">
            </div>
            <img className="avatar" src={require("../images/avatar.png")} alt="tayanne-avatar"/>
            <div className="box">
                <NavBar />
                <h1>Hi, I'm <span className="name">Tayanne Bencardino</span>.
                And I am <span className="ocupation">Web Developer</span>!</h1>
            </div>
        </div>
    )
}