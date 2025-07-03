import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <>
      <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Education />
      <Contact /> 
      <Footer />
      
      </div>
      <Toaster />
    </>
  );
};

export default App;
