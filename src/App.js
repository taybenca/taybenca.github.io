import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Blog } from './components/Blog';
import { Home } from './components/Home';
import { Projects } from './components/Projects.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
