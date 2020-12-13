import './App.css';
import NavBar from './Components/NavBar';
import Name from './Components/Name';
import AboutMe from './Components/AboutMe';
import Languages from './Components/Languages';
import Projects from './Components/Projects';
import Contact from './Components/Contact'

function App() {
  return (

    <div className="App">
      <NavBar />
      <Name />
      <AboutMe id='about-me'/>
      <Languages id='languages'/>
      <Projects id='projects'/>
      <Contact id='contact'/>
    </div>

  );
}

export default App;
