import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./home";
import About from './About';
import Experience from './Experience';
import Contact from './contact';
import Skill from './skill'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutme' element={<About/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/skills' element={<Skill/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
