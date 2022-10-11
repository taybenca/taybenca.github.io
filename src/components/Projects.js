import "./Projects.css"
import { NavBar } from "./NavBar"
import "./Home.css"

export const Project = () => {
    return (
        <session>
            <div className="container"></div>
            <div className="box-project">
                <NavBar />
                
                    <div className="card">
                        <div className="row">
                            <div className="column">
                                <h1 className="orange-colour">Ramble</h1>
                                <p>Designed a Web Application to help athletes or people who like to exercise to find someone to exercise together. 
                                    Ramble helps you to find a partner for these activities and make your journey according to your goals. <br/>
                                    The web app was designed using <i>Trello</i> boards, <i>Excalidraw</i> and <i>Figma</i>. <br/>
                                    It was built using <i>TypeScript</i>, <i>JavaScript</i> with <i>React</i> framework, and <i>CSS</i>.<br/>
                                    Interfaces with MapBox API to render a map with the chosen route and use Google Autocomplete to find the city when typing it.
                                </p>
                                <a className="github-link" href="https://github.com/taybenca/Ramble-App">Learn more</a>
                            </div>
                            <div className="column">
                                <a href="https://www.youtube.com/watch?v=Xpqo9LYWCCc"><img src={require('../images/ramble.png')} alt='cycling-group' width='150'/></a>
                            </div>
                        </div> 
                    </div>

                    <div className="card">
                        <div className="row">
                            <div className="column">
                                <h1 className="pink-colour">Ramble</h1>
                                <p>Designed a Web Application to help athletes or people who like to exercise to find someone to exercise together. 
                                    Ramble helps you to find a partner for these activities and make your journey according to your goals. <br/>
                                    The web app was designed using <i>Trello</i> boards, <i>Excalidraw</i> and <i>Figma</i>. <br/>
                                    It was built using <i>TypeScript</i>, <i>JavaScript</i> with <i>React</i> framework, and <i>CSS</i>.<br/>
                                    Interfaces with MapBox API to render a map with the chosen route and use Google Autocomplete to find the city when typing it.
                                </p>
                                <a href="https://github.com/taybenca/Ramble-App">Learn more</a>
                            </div>
                            <div className="column">
                                <img src={require('../images/ramble.png')} alt='cycling-group' width='150'/>
                            </div>
                        </div> 
                    </div>

                    <div className="card">
                        <div className="row">
                            <div className="column">
                                <h1 className="orange-colour">Ramble</h1>
                                <p>Designed a Web Application to help athletes or people who like to exercise to find someone to exercise together. 
                                    Ramble helps you to find a partner for these activities and make your journey according to your goals. <br/>
                                    The web app was designed using <i>Trello</i> boards, <i>Excalidraw</i> and <i>Figma</i>. <br/>
                                    It was built using <i>TypeScript</i>, <i>JavaScript</i> with <i>React</i> framework, and <i>CSS</i>.<br/>
                                    Interfaces with MapBox API to render a map with the chosen route and use Google Autocomplete to find the city when typing it.
                                </p>
                                <button>Learn More</button>
                            </div>
                            <div className="column">
                                <img src={require('../images/ramble.png')} alt='cycling-group' width='150'/>
                            </div>
                        </div> 
                    </div>

                    
                    
                       
                    
                
            </div>
            
        </session>
    )
}