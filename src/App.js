import './App.css';
import { FirstSession } from "./components/FirstSession.js"
import { Project } from './components/Projects';

function App() {
  return (
    <div className="App">
      <FirstSession />
      <Project />
    </div>
  );
}

export default App;
