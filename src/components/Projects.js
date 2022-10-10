import "./Projects.css"

export const Project = () => {
    return (
        <session>
            <div className="projects" id="projects">
                <div className="container-project"></div>
                <h1>Projects</h1>
                <div class="row">
                    <div class="column">
                        <h2>Ramble</h2>
                        <img src={require("../images/ramble.png")}/>
                        <ul>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                        </ul>
                    </div>
                    <div class="column">
                        <h2>Indoors</h2>
                        <ul>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="column">
                        <h2>Sports</h2>
                        <ul>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                        </ul>
                    </div>
                    <div class="column">
                        <h2>Indoors</h2>
                        <ul>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                            <li>Something</li>
                        </ul>
                    </div>
                </div>



                <ul class="card-container">
                    <li class="card">
                         <a class="card-wrapper" href="https://github.com/taybenca/Ramble-App">
                            <h2>Ramble</h2>
                            <div class="card-text">
                                Ramble helps athletes or people who like to exercise to find someone to exercise together. We are here to help you find a partner for these activities and make your journey according to your goals. 🏃 🚴 🚶
                            </div>
                        </a>
                    </li>
                    <li class="card">
                         <a class="card-wrapper" href="https://github.com/taybenca/weather-frontend">
                            <h2>Weather App</h2>
                            <div class="card-text">
                            Check the weather of any city using OpenWeatherMap API
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </session>
    )
}