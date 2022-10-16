import "./Projects.css"
import { NavBar } from "./NavBar"
import "./Home.css"

export const Projects = () => {
    return (
        <session>
            <div className="container"></div>
            <div className="box-project">
                <NavBar />
                {/* Ramble */}
                <div className="card">
                    <div className="row">
                        <div className="column">
                            <h1 className="pink-colour">Ramble</h1>
                            <p>Designed a Web Application to help athletes or people who like to exercise to find someone to exercise together. 
                                Ramble helps you to find a partner for these activities and make your journey according to your goals. <br/>
                                The web app was designed using <u>Trello</u> boards, <u>Excalidraw</u> and <u>Figma</u>. <br/>
                                It was built using <u>TypeScript</u>, <u>MongoDB database</u>, <u>JavaScript</u> with <u>React</u> framework, and <u>CSS</u>.<br/>
                                Interfaces with MapBox API to render a map with the chosen route and use Google Autocomplete to find the city when typing it.
                            </p>
                            <a className="github-link" href="https://github.com/taybenca/Ramble-App" target="github-ramble">Check the code</a>
                            <a className="github-link" href="https://ramble-application.herokuapp.com/" target="heroku-ramble">Check the Web App</a>
                        </div>
                        <div className="column">
                            <a href="https://www.youtube.com/watch?v=Xpqo9LYWCCc" target="blank"><img src={require('../images/ramble.png')} alt='cycling-group' width='150'/></a>
                        </div>
                    </div> 
                </div>
                {/* Weather App */}
                <div className="card">
                    <div className="row">
                        <div className="column">
                            <h1 className="pink-colour">Weather App</h1>
                            <p>Designed a Web Application to check the weather given a city.<br/>
                                The web app was built using <u>JavaScript</u> with <u>React</u> framework, and <u>CSS</u>.<br/>
                                Interfaces with OpenWeather API to fetch information.<br/>
                                The app was deployed on Netlify.
                            </p>
                            <a className="github-link" href="https://github.com/taybenca/weather-frontend" target="github-weather">Check the code</a>
                            <a className="github-link" href="https://weather-taybenca.netlify.app/" target="weather-app">Check the Web App</a>
                        </div>
                        <div className="column">
                            <a href="https://weather-taybenca.netlify.app/" target="blank"><img src={require('../images/weather.png')} alt='sun-and-clouds' width='150'/></a>
                        </div>
                    </div> 
                </div>
                {/* Acebook */}
                <div className="card">
                    <div className="row">
                        <div className="column">
                            <h1 className="pink-colour">Acebook</h1>
                            <p>Designed a Facebook clone, using <u>Trello</u> board and <u>Excalidraw</u>. <br/>
                                The web app was built using <u>JavaScript</u>, <u>Node.js</u>, <u>Handlebars</u> and <u>Bootstrap</u>.<br/>
                                Use of <u>Jest</u> for testing and <u>Cypress</u> for end-to-end testing.<br/>
                                All data was stored in the <u>MongoDB database</u>, using <u>Mongoose</u> to model objects.<br/>
                                The app was deployed on <u>Heroku</u> and use of <u>Atlas</u> for hosting database remotely.
                            </p>
                            <a className="github-link" href="https://github.com/karolina-codes/acebook-node-milton" target="github-acebook">Check the code</a>
                            <a className="github-link" href="https://milton-acebook.herokuapp.com/" target="acebook-app">Check the Web App</a>
                        </div>
                        <div className="column">
                        <a href="https://milton-acebook.herokuapp.com/" target="blank"><img src={require('../images/acebook.png')} alt='likes-buttons' width='150'/></a>
                        </div>
                    </div> 
                </div>
                {/* Makers bnb */}
                <div className="card">
                    <div className="row">
                        <div className="column">
                            <h1 className="pink-colour">Makers Bnb</h1>
                            <p>Designed a Airbnb clone, using <u>Trello</u> board and <u>Excalidraw</u>. <br/>
                                The web app was built using <u>Ruby</u> with <u>Sinatra</u> framework, <u>Embedded Ruby-ERB</u> and <u>CSS</u>.
                                Use of <u>RSpec</u> for testing.<br/>
                                All data was stored in the <u>PostgreSQL database</u>.<br/>
                                The app was deployed on <u>Heroku</u>.
                            </p>
                            <a className="github-link" href="https://github.com/taybenca/Airbnb-Clone" target="github-airbnb">Check the code</a>
                            <a className="github-link" href="https://officialmakersbnb.herokuapp.com/" target="airbnb-app">Check the Web App</a>
                        </div>
                        <div className="column">
                        <a href="https://officialmakersbnb.herokuapp.com/" target="blank"><img src={require('../images/makersbnb.png')} alt='inside-of-a-house-with-blue-sofa' width='150'/></a>
                        </div>
                    </div> 
                </div>
                {/* Coffee Connection */}
                <div className="card">
                    <div className="row">
                        <div className="column">
                            <h1 className="pink-colour">Coffee Connection</h1>
                            <p>Designed a tech test application. <br/>Coffee Connection make a new till to replace vintage machines. <br/>
                                The application was built using <u>JavaScript</u> with <u>Node.js</u>.<br/>
                                Use of <u>Jest</u> for testing.<br/>
                            </p>
                            <a className="github-link" href="https://github.com/taybenca/till-tech-test" target="github-till">Check the code</a>
                        </div>
                        <div className="column">
                        <a href="https://github.com/taybenca/till-tech-test" target="blank"><img src={require('../images/coffee.png')} alt='cashier-using-till' width='150'/></a>
                        </div>
                    </div> 
                </div>
                {/* Nosso Bank */}
                <div className="card">
                    <div className="row">
                        <div className="column">
                            <h1 className="pink-colour">Nosso Bank</h1>
                            <p>Designed a tech test application. <br/>Bank return a statement to the user. <br/>
                                The application was built using <u>JavaScript</u> with <u>Node.js</u>.<br/>
                                Use of <u>Jest</u> for testing.<br/>
                            </p>
                            <a className="github-link" href="https://github.com/taybenca/bank-tech-test" target="github-bank">Check the code</a>
                        </div>
                        <div className="column">
                        <a href="https://github.com/taybenca/bank-tech-test" target="blank"><img src={require('../images/bank.png')} alt='pigbank' width='150'/></a>
                        </div>
                    </div> 
                </div>
            </div> 
        </session>
    )
}