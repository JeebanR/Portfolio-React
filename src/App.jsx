import Home from "./module/home/Home";
import Projects from "./module/projects/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./module/about/About";
import Skills from "./module/skills/Skills";
import Contact from "./module/contact/Contact";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main>
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
