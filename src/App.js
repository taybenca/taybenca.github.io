import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Blog } from './components/Blog';
import { Home } from './components/Home';
import { Projects } from './components/Projects.js';
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
