import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStackBar from './components/TechStackBar'
import About from './components/About'
import Certificates from './components/Certificates'
import Education from './components/Education'
import ProjectsSection from './components/ProjectsSection'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Footer from './components/Footer'

const App = () => { 
  const [dark, setDark] = useState(false)

  useEffect(() => {
    let saved
    try { saved = localStorage.getItem('annette-theme') } catch (e) {}
    if (saved) setDark(saved === 'dark')
  }, [])

  useEffect(() => {
    try { localStorage.setItem('annette-theme', dark ? 'dark' : 'light') } catch (e) {}
  }, [dark])

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,
      offset: 100,
      delay: 0,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <div className={dark ? 'dark' : ''}>
      <div className='bg-linear-to-br from-[var(--bg)] via-[var(--surface)] to-[var(--bg)]
       min-h-screen transition-colors duration-300'>
        <Header dark={dark} setDark={setDark} />
        <Hero /> 
        <About /> 
        <Certificates />
        <Education />
        <ProjectsSection /> 
        <Skills /> 
        <Contact /> 
        <Footer />
      </div>
    </div>
  ) 
} 

export default App