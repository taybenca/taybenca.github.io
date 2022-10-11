import "./Home.css"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <div>
            <nav className="topnav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#/projects">Projects</a></li>
                    <li><a href="#/blog">Blog</a></li>
                    <li><a href="#/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}