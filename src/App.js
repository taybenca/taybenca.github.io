import './App.css';
import { About } from './components/About';
import { FirstSession } from "./components/FirstSession.js"

function App() {
  return (
    <div className="App">
      <FirstSession />
      <About />
    </div>
  );
}

export default App;
