import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceCertifications from "./components/ExperienceCertifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <ExperienceCertifications />
      <Contact />
    </div>
  );
}

export default App;
