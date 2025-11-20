// Updated NavBar with Dark/Light Toggle Button
import { useState, useCallback, useContext } from "react";
import data from "../data/restApi.json";
import logo from "/images/logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import { BsSun, BsMoon } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";

const NavItem = ({ element, activeSection, onSetActive, isMobile }) => (
  <ScrollLink
    to={element.link}
    spy={!isMobile}
    smooth
    duration={500}
    offset={-70}
    onSetActive={!isMobile ? () => onSetActive(element.link) : undefined}
    onClick={isMobile ? () => onSetActive(element.link) : undefined}
    className={`${
      isMobile
        ? `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeSection === element.link
              ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
              : "text-gray-300 hover:bg-gray-800/70 hover:text-white"
          }`
        : `relative cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeSection === element.link
              ? "text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/20"
              : "text-gray-300 hover:text-white hover:bg-gray-800/50"
          }`
    }`}
  >
    {element.title}
  </ScrollLink>
);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSetActive = useCallback((section) => {
    setActiveSection(section);
    setMenuOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b 
    bg-white dark:bg-black 
    text-black dark:text-white 
    transition-colors duration-300 h-20 items-center justify-center p-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth
            duration={500}
            offset={-70}
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => setMenuOpen(false)}
            onSetActive={() => handleSetActive("home")}
          >
            <img src={logo} alt="logo" className="h-10 w-12 rounded" />
            <p className="text-lg font-semibold text-cyan-400">Full-Stack Developer</p>
          </ScrollLink>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {data.navbarLinks.map((el) => (
              <NavItem
                key={el.id}
                element={el}
                activeSection={activeSection}
                onSetActive={handleSetActive}
                isMobile={false}
              />
            ))}

            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black transition-all"
            >
              {theme === "light" ? <BsMoon size={18} /> : <BsSun size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <RiCloseLargeFill className="text-2xl text-red-400" />
            ) : (
              <GiHamburgerMenu className="text-2xl text-cyan-400" />
            )}
          </button>
        </div>

        {/* Mobile Links */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-white dark:bg-black transition-colors duration-300">
            {data.navbarLinks.map((el) => (
              <NavItem
                key={el.id}
                element={el}
                activeSection={activeSection}
                onSetActive={handleSetActive}
                isMobile
              />
            ))}

            <button
              onClick={toggleTheme}
              className="block w-full text-left px-4 py-3 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-black"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;



// import { useState, useCallback, memo } from "react";

// import data from "../data/restApi.json"
// // import aziz from "/images/aziz.png";
// import logo from "/images/logo.jpeg"
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RiCloseLargeFill } from "react-icons/ri";
// import { Link as ScrollLink } from "react-scroll";

// const NavItem = memo(({ element, activeSection, onSetActive, isMobile }) => (
//   <ScrollLink
//     to={element.link}
//     spy={!isMobile}
//     smooth
//     duration={500}
//     offset={-70}
//     onSetActive={!isMobile ? () => onSetActive(element.link) : undefined}
//     onClick={isMobile ? () => onSetActive(element.link) : undefined}
//     className={`${
//       isMobile
//         ? `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
//             activeSection === element.link
//               ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg"
//               : "text-gray-300 hover:bg-gray-800/70 hover:text-white"
//           }`
//         : `relative cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//             activeSection === element.link
//               ? "text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/20"
//               : "text-gray-300 hover:text-white hover:bg-gray-800/50"
//           }`
//     }`}
//   >
//     {element.title}
//     {!isMobile && activeSection === element.link && (
//       <span className="absolute  rounded-full"></span>
//     )}
//   </ScrollLink>
// ));

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   const handleSetActive = useCallback((section) => {
//     setActiveSection(section);
//     setMenuOpen(false);
//   }, []);

//   return (
//     <nav className="fixed top-0 w-full z-50 border-b bg-black border-gray-800 shadow-xl">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <ScrollLink
//             to="home"
//             smooth
//             duration={500}
//             offset={-70}
//             className="flex items-center space-x-2 cursor-pointer group"
//             onClick={() => setMenuOpen(false)}
//             onSetActive={() => handleSetActive("home")}
//           >
//             <div className="relative">
//               {/* <img
//                 src={aziz}
//                 // src={logo}
//                 alt="Aziz Logo"
//                 className="h-10 w-10 rounded-full"
//               /> */}

//               <img src={logo} alt="logo"  className="h-10 w-12"/>
            
//             </div>
//             <div>
//               {/* <h1 className="font-bold text-2xl text-white tracking-tight">
//                 Aziz
//               </h1> */}
//               <p className="text-lg font-semibold text-cyan-400 ">
//                 Full-Stack Developer
//                 {/* Frontend Developer */}
//               </p>
//             </div>
      
//           </ScrollLink>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-1">
//             {data.navbarLinks.map((el) => (
//               <NavItem
//                 key={el.id}
//                 element={el}
//                 activeSection={activeSection}
//                 onSetActive={handleSetActive}
//                 isMobile={false}
//               />
//             ))}
//           </div>

//           {/* Mobile Button */}
//           <button
//             className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
//             onClick={() => setMenuOpen((prev) => !prev)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? (
//               <RiCloseLargeFill className="text-2xl text-red-400 hover:text-red-300 transition-colors" />
//             ) : (
//               <GiHamburgerMenu className="text-2xl text-cyan-400 hover:text-cyan-300 transition-colors" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Links */}
//         {menuOpen && (
//           <div className="md:hidden pb-4 space-y-2 bg-black">
//             {data.navbarLinks.map((el) => (
//               <NavItem
//                 key={el.id}
//                 element={el}
//                 activeSection={activeSection}
//                 onSetActive={handleSetActive}
//                 isMobile
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

