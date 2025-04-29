import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import '../public/styles.css';

const App= () => {
  return (
    <div className="bg-dark">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
