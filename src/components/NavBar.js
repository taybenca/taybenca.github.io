import "./FirstSession.css"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className="topnav">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}