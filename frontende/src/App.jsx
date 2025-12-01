import { useState, useEffect } from 'react'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import { Toaster } from 'react-hot-toast'

import { ThemeContext } from './context/ThemeContext'

export default function App() {
  const [theme, setTheme] = useState(() => {
    // check localStorage first
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) return storedTheme

    // fallback: use OS system preference
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    // Apply theme to <html> element
    document.documentElement.classList.toggle('dark', theme === 'dark')

    // Save to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
        <NavBar />
        <Home />
        <About />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>

      <Toaster />
    </ThemeContext.Provider>
  )
}
