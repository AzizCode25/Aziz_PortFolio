import { useState } from "react";
import data  from "../../restApi.json";
import aziz from "../assets/images/skill-photo/aziz.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (id) => {
    setActiveItem(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo Section */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={aziz}
              alt="Aziz Logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-orange-500 group-hover:border-cyan-400 transition-all duration-300"
            />
            <div>
              <h1 className="font-bold text-lg md:text-xl text-white">
                Azi<span className="text-orange-500">z</span>
              </h1>
              <p className="text-xs md:text-sm text-emerald-400">
                Full Stack Developer
              </p>
            </div>
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-7">
            {data.navbarLinks.map((element) => (
              <ScrollLink
                key={element.id}
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => handleItemClick(element.id)}
                className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-300 ${
                  activeItem === element.id
                    ? "text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RiCloseLargeFill className="text-red-500 text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-cyan-400 text-2xl" />
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            {data.navbarLinks.map((element) => (
              <ScrollLink
                key={element.id}
                to={element.link}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => handleItemClick(element.id)}
                className={`block w-full text-center py-3 rounded-lg transition-all duration-300 ${
                  activeItem === element.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-lg"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {element.title}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
