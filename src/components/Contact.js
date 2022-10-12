import './Contact.css'
import { NavBar } from './NavBar'
import './Home.css'

export const Contact = () => {
    return (
        <session>
            <div className='container'></div>
            <div className='box-contact'>
                <NavBar/>
                <div className="card">
                    <a className="github-link" href="https://github.com/taybenca" target="github">GitHub</a>
                    <a className="github-link" href="https://www.linkedin.com/in/tayannebencardino" target="linkedin">LinkedIn</a>
                </div>
            </div>
        </session>
    )
}