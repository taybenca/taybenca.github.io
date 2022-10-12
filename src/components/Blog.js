import './Blog.css'
import { NavBar } from './NavBar'
import './Home.css'

export const Blog = () => {
    return (
        <sesion>
            <div className='container'></div>
            <div className='box-blog'>
                <NavBar/>
                <div className="all">
                    <div className="blog-row">
                        <div className="blog-column">
                            <a href="https://medium.com/@tayannebencardino/how-i-understand-rest-api-http-c57750fac0">
                                <div className='blog-card'>
                                    <img src={require("../images/restapi.gif")} alt="person-typing" width='100%'/>
                                    <div class="description">
                                        <h2><b>How I understand REST API / HTTP</b></h2>
                                        <p>4 Oct 2022</p>
                                        <p>
                                            A REST API is a set of HTTP-based standards that control how different applications 
                                            communicate with one another. When we interact with an application on the internet, 
                                            it is the API's job to help communicate...
                                        </p>
                                    </div> 
                                </div>
                            </a>
                        </div>

                        <div className="blog-column">
                            <a href="https://medium.com/@tayannebencardino/callback-function-84cdc16b5754">
                                <div className='blog-card'>
                                    <img src={require("../images/callback.gif")} alt="girl-eating" width='100%'/>
                                    <div class="description">
                                        <h2><b>JavaScript: Callback Function</b></h2>
                                        <p>7 Aug 2022</p>
                                        <p>
                                            A callback is a function or URL called after an event has occurred or when the program has 
                                            reached the desired state: accessible as a parameter by another function, is invoked 
                                            after the first function completes. It is usually asynchronous (that is, it will not be...
                                        </p>
                                    </div> 
                                </div>
                            </a>
                        </div>

                        <div className="blog-column">
                            <a href="https://medium.com/@tayannebencardino/teamwork-my-experience-at-makers-caf996feb0f5">
                                <div className='blog-card'>
                                    <img src={require("../images/teamwork.png")} alt="three-points-talking" width='100%'/>
                                    <div class="description">
                                        <h2><b>TeamWork: my experience at Makers</b></h2>
                                        <p>22 Jul 2022</p>
                                        <p>
                                            MakersBnB helps users to list and request spaces to spend their following holidays! 
                                            This project was the first group work I did at Makers. I’m on week 5!We are afraid and anxious at the...
                                        </p>
                                    </div> 
                                </div>
                            </a>
                        </div>

                    </div>  
                    <div className="blog-row">

                        <div className="blog-column">
                            <a href="https://medium.com/@tayannebencardino/creating-tables-into-a-database-postg-14a4ea5e6dca">
                                <div className='blog-card'>
                                    <img src="https://miro.medium.com/max/640/1*74ayWFrX2ZDM-ToJjKkBAQ.png" alt="database-sql" width='100%'/>
                                    <div class="description">
                                        <h2><b>Creating tables into a database (PostgreSQL)</b></h2>
                                        <p>21 Jul 2022</p>
                                        <p>
                                            To set up the database software (PostgreSQL) in your machine, run these commands: 
                                            $ brew install postgresql $ brew services start postresql In SQL we use the CRUD operations: CRUD...
                                        </p>
                                    </div> 
                                </div>
                            </a>
                        </div>
                    
                        <div className="blog-column">
                            <a href="https://medium.com/@tayannebencardino/pair-programming-why-should-we-pair-every-day-87ed7bd1754e">
                                <div className='blog-card'>
                                    <img src="https://miro.medium.com/max/720/1*55LlF1dtoBK9H7ZMW1Fs-Q.png" alt="pair-programming" width='100%'/>
                                    <div class="description">
                                        <h2><b>Pair programming: Why should we pair every day?</b></h2>
                                        <p>13 Jul 2022</p>
                                        <p>
                                            Since I joined the Makers Bootcamp (I'm in week 4), every afternoon is time to pair up. 
                                            At first, I didn’t understand why we do this every day. Should I stop my progress for a while? 
                                            One person is behind or in front...
                                        </p>
                                    </div> 
                                </div>
                            </a>
                        </div>

                        <div className="blog-column">
                            <a href="https://medium.com/@tayannebencardino/the-magic-black-screen-command-line-c5a43ed412d4">
                                <div className='blog-card'>
                                    <img src={require("../images/terminal.png")} alt="terminal" width='100%'/>
                                    <div class="description">
                                        <h2><b>The magic black screen: Command line</b></h2>
                                        <p>28 May 2022</p>
                                        <p>
                                            My first week at Makers Academy Bootcamp — Command-Line is excellent, and I don’t need a mouse 
                                            for anything! Creating folders and files, moving them, deleting them or going from one directory 
                                            to another...
                                        </p>
                                    </div> 
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="blog-row">

                        <div className="blog-column">
                            <a href="https://medium.com/@tayannebencardino/my-life-before-makers-academy-8de771d7e94c">
                                <div className='blog-card'>
                                    <img src="https://miro.medium.com/max/468/1*bADvRNKI9ShBVPXLxeURCA.png" alt="Tayanne-scientist" width='50%'/>
                                    <div class="description">
                                        <h2><b>My life before Makers Academy</b></h2>
                                        <p>25 May 2022</p>
                                        <p>
                                            The context: ten years ago, I started my studies in Nutrition Science. 
                                            I found it interesting to study food and its biochemistry. After graduating, 
                                            I realised that real life was different from what I learned at university...
                                        </p>
                                    </div> 
                                </div>
                            </a>
                        </div>

                        <div className="blog-column">
                            <a href="https://medium.com/@tayannebencardino/lets-code-but-first-tdd-7cec0c1e9e0e">
                                <div className='blog-card'>
                                    <img src={require("../images/tdd.png")} alt="tdd-cycle" width='100%'/>
                                    <div class="description">
                                        <h2><b>Let's code, but first… TDD</b></h2>
                                        <p>15 Jun 2022</p>
                                        <p>
                                            Test-driven development, also known as TDD, is a software development process 
                                            used to test software that will be written or before it is fully developed. 
                                            TDD will help with coding, reducing the number of problems during development. 
                                            When we code, we must...
                                        </p>
                                    </div> 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </sesion>
    )
}