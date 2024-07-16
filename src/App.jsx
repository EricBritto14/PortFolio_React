import './App.css';
import Footer from './componentes/Footer';
import Header from './componentes/Header/Header';
import Projects from './componentes/projects/Projects';
import Skills from './componentes/skills/Skills';
import { SparkButton } from '@bosch-web-dds/spark-ui-react';


function App() {
  return (
    <div>
      <Header/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
