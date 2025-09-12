import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Footer from './components/Footer'
import './App.css'

function App() {


  return (
     <div className="min-h-screen">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Education />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
