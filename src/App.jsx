import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'
import React from 'react'
import Education from './components/Education'


export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}


