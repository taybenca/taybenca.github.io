import './Contact.css'
import { NavBar } from './NavBar'
import './Home.css'

export const Contact = () => {
    return (
        <session>
            <div className='container'></div>
            <div className='box-contact'>
                <NavBar/>
                <div className='button'>
                    <a href="https://github.com/taybenca" target="github"><img src={require('../images/github.png')} alt='github-logo' width='70'/></a>
                    <a href="https://www.linkedin.com/in/tayannebencardino" target="linkedin"><img src={require('../images/linkedin.png')} alt='linkedin-logo' width='70'/></a>
                </div>
            </div>
        </session>
    )
}