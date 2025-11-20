import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiMongodb, SiExpress, SiNodedotjs, SiSpringboot,SiDjango  } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import main from "../assets/videos/icon-software.mp4";
// import AnimationContainer from "./AnimationContainer";



const Home = () => {
  const socialLinks = [
    { 
      icon: <FaLinkedin size={20} />, 
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/30", 
      hoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/aziz-7a24a0283/" 
    },
    { 
      icon: <FaGithub size={20} />, 
      color: "hover:bg-gray-100 dark:hover:bg-gray-800", 
      hoverColor: "group-hover:text-gray-800 dark:group-hover:text-gray-200",
      name: "Github", 
      url: "https://github.com/PushUpDev" 
    }
  ];

  const techStack = [
    { icon: <SiMongodb size={24} />, color: "text-green-500", name: "MongoDB" },
    { icon: <SiExpress size={24} />, color: "text-gray-800 dark:text-gray-200", name: "Express.js" },
    { icon: <FaReact size={24} />, color: "text-blue-400", name: "React" },
    { icon: <SiNodedotjs size={24} />, color: "text-green-600", name: "Node.js" },
    { icon: <SiTailwindcss size={24} />, color: "text-cyan-500", name: "Tailwind" },
     { icon: <SiSpringboot size={24} />, color: "text-green-600", name: "TypeScript" },
    { icon: <SiTypescript size={24} />, color: "text-blue-600", name: "TypeScript" },
     { icon: <SiDjango size={24} />, color: "text-emerald-400", name: "TypeScript" }
  ];

  return ( 
    <section id="home" className="relative overflow-hidden py-24 md:py-32 lg:py-60">
      {/* <AnimationContainer /> */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                  Hello, here is <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 animate-text-gradient">Aziz</span>
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-3xl md:text-4xl font-bold animate-fade-in-up delay-100">
                   <span className="text-gray-700 dark:text-gray-300">A</span>
                  <ReactTyped
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 min-w-[100px]"
                    strings={["Full Stack Developer", "MERN Stack Developer", "Spring Boot Developer", "Application Developer"]}
                    // strings={[
                    //           "Frontend Developer",
                    //           "React Developer",
                      
                    //         ]}

                    typeSpeed={50}
                    backSpeed={40}
                    loop
                    showCursor={false}
                  />
                </div>
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-up delay-200 max-w-2xl">
                I build exceptional digital experiences with modern web technologies, delivering fast, scalable, 
                and visually appealing applications from frontend to backend.
                {/* As a Frontend Developer, I create modern, user-friendly, and performant web applications using current technologies, 
                with a focus on clean design and great user experience. */}
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a 
                href="#projects" 
                className="px-8 py-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-2 border-2 border-sky-500 text-sky-600 dark:text-sky-400 font-medium rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/20 transition-all duration-300 hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>

            {/* Social & Tech Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 animate-fade-in-up delay-400">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Let's Connect
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((item, index) => (
                    <a 
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${item.color} ${item.hoverColor}`}
                      aria-label={item.name}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((item, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-full bg-blue-100 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${item.color}`}
                      aria-label={item.name}
                      data-tooltip={item.name}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
       
          {/* Video Profile Container */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 relative">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] group">
              <div className=" absolute inset-0 rounded-full overflow-hidden border-4 border-blue-700 dark:border-gray-800/50 shadow-2xl group-hover:border-sky-400/30 transition-all duration-500">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-500"
                >
                  <source src={main} type="video/mp4" />
                </video>
               {/* <img src="../images/softwareIcons.png" alt="" /> */}
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;