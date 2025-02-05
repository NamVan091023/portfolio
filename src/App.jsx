import './App.css';
import Contact from './sections/Contact/Contact';
import Hero from './sections/Hero/hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills/Skills';
import Footer from './sections/Footer/Footer';

function App() {
  console.log('test');

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
