// Updated NavBar with Dark/Light Toggle Button
import { useState, useCallback, useContext } from 'react'
import data from '../i18n/en.json'
import logo from '/images/logo.jpeg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLargeFill } from 'react-icons/ri'
import { Link as ScrollLink } from 'react-scroll'
import { BsSun, BsMoon } from 'react-icons/bs'
import { ThemeContext } from '../context/ThemeContext'

const NavItem = ({ element, activeSection, onSetActive, isMobile }) => (
  <ScrollLink
    to={element.link}
    spy={!isMobile}
    smooth
    duration={500}
    offset={-70}
    onSetActive={!isMobile ? () => onSetActive(element.link) : undefined}
    onClick={isMobile ? () => onSetActive(element.link) : undefined}
    className={`
      relative transition-all duration-300 ease-out cursor-pointer
      ${
        isMobile
          ? `block w-full px-4 py-3 rounded-xl text-base font-semibold 
             transition-transform duration-200 active:scale-95
             ${
               activeSection === element.link
                 ? 'bg-linear-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                 : 'text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700/80 hover:text-cyan-600 dark:hover:text-cyan-400'
             }`
          : `px-4 py-2.5 rounded-full text-sm font-medium
             hover:scale-105 active:scale-95
             ${
               activeSection === element.link
                 ? 'text-white bg-linear-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/30 transform scale-105'
                 : 'text-gray-300 hover:text-white hover:bg-gray-800/60 backdrop-blur-sm'
             }`
      }
    `}
  >
    {element.title}
    {!isMobile && activeSection === element.link && (
      <span className="absolute inset-x-1 -bottom-2 h-0.5 bg-linear-to-r from-cyan-400 to-blue-400 rounded-full" />
    )}
  </ScrollLink>
)

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleSetActive = useCallback((section) => {
    setActiveSection(section)
    setMenuOpen(false)
  }, [])

  const handleThemeClick = () => {
    toggleTheme()
    setMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 
                bg-gray-900 backdrop-blur-xl
                 border-b border-gray-200/60 dark:border-gray-700/60
                 transition-all duration-300 h-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth
            duration={500}
            offset={-70}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setMenuOpen(false)}
            onSetActive={() => handleSetActive('home')}
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="logo" 
                className="h-12 w-14 rounded-xl
                          " 
              />
              <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/0 
                            group-hover:border-cyan-400/20 transition-all duration-300" />
            </div>
            <p className="text-xl lg:text-2xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 
                         bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400
                         transition-all duration-300">
              Full-Stack Developer
            </p>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-900/50 dark:bg-gray-800/50 
                         backdrop-blur-md rounded-full px-2 py-1 border border-gray-700/30">
            {data.navbarLinks.map((el) => (
              <NavItem
                key={el.id}
                element={el}
                activeSection={activeSection}
                onSetActive={handleSetActive}
                isMobile={false}
              />
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={handleThemeClick}
              className="p-2.5 rounded-xl bg-gray-800 
              text-gray-300
                         border border-cyan-900 dark:border-gray-700
                         hover:bg-cyan-900/30
                         transition-all duration-300 ease-out
                         hover:scale-105 active:scale-95
                         shadow-sm hover:shadow-md"
            >
              {theme === 'light' ? (
                <BsMoon size={20}  />
              ) : (
                <BsSun size={20}  />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-xl bg-gray-800 
                            border border-cyan-900 dark:border-gray-700
                         hover:bg-cyan-900/30
                         transition-all duration-300 ease-out
                         hover:scale-105 active:scale-95
                         shadow-sm hover:shadow-md"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <RiCloseLargeFill className="text-2xl text-red-500 hover:text-red-600 transition-colors" />
              ) : (
                <GiHamburgerMenu className="text-2xl text-cyan-500 hover:text-cyan-600 transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden absolute left-4 right-4 mt-2
          bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl
          border border-gray-200/60 dark:border-gray-700/60
          rounded-2xl shadow-2xl shadow-black/10
          transition-all duration-300 ease-out
          overflow-hidden
          ${menuOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }
        `}>
          <div className="p-3 space-y-1">
            {data.navbarLinks.map((el) => (
              <NavItem
                key={el.id}
                element={el}
                activeSection={activeSection}
                onSetActive={handleSetActive}
                isMobile={true}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar