import { useState, useEffect } from "react";
import aziz from "../assets/images/skill-photo/aziz.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 1, label: "Home", path: "home" },
    { id: 2, label: "About", path: "about" },
    { id: 3, label: "Portfolio", path: "portfolio" },
    { id: 4, label: "Skills", path: "skills" },
    { id: 5, label: "Contact", path: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (id) => {
    setActiveItem(id);
    setMenuOpen(false);
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: { opacity: 0, y: -20 }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300
      }
    })
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleItemClick(1)}
            >
              <motion.img
                src={aziz}
                alt="Aziz Logo"
                className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-orange-500 group-hover:border-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              />
              <div>
                <h1 className="font-bold text-lg md:text-xl text-white">
                  Azi<span className="text-orange-500">z</span>
                </h1>
                <p className="text-xs md:text-sm text-emerald-400">
                  Full Stack Developer
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map(({ id, label, path }) => (
              <motion.li 
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={path}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => handleItemClick(id)}
                  className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ${
                    activeItem === id
                      ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? (
              <RiCloseLargeFill className="text-red-500 text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-cyan-400 text-2xl" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden bg-gray-900/95 backdrop-blur-md rounded-b-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <motion.ul className="flex flex-col items-center space-y-2 py-4">
                {navItems.map(({ id, label, path }, index) => (
                  <motion.li
                    key={id}
                    custom={index}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full px-4"
                  >
                    <Link
                      to={path}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => handleItemClick(id)}
                      className={`block w-full text-center py-3 rounded-lg transition-all duration-300 ${
                        activeItem === id
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg"
                          : "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;