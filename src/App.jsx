import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header/Header';
import Projects from './componentes/projects/Projects';
import Skills from './componentes/skills/Skills';
import Experience from './componentes/experience/Experience'
import Hobbies from './componentes/hobbies/Hobies'
import { SparkButton } from '@bosch-web-dds/spark-ui-react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from "../src/componentes/aboutMe/AboutMe"

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<Header/>} />
            <Route path='/about_me' element={<AboutMe/>} />
            <Route path='/projects' element={<Projects/>} /> 
            <Route path='/skills' element={<Skills/>} />
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/hobbies' element={<Hobbies/>}/>
        </Routes>
      </Router>
      <Footer/> 
    </div>
  );
}

export default App;
