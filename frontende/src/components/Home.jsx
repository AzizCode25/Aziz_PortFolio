import { FaLinkedin, FaGithub, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiSpringboot,
  SiDjango,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGitlab,
  SiGithubactions,
  SiVercel,
  SiRender,
  SiRailway,
  SiGit,
  SiPostman,
  SiIntellijidea,
  SiScrumalliance,

} from "react-icons/si";
import { SiAmazon } from "react-icons/si";

import { ReactTyped } from "react-typed";
import main from "../assets/videos/icon-software.mp4";


const Home = () => {
  const socialLinks = [
    { 
      icon: <FaLinkedin size={24} />, 
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-700", 
      hoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/aziz-7a24a0283/" 
    },
    { 
      icon: <FaGithub size={24} />, 
      color: "hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-200 dark:hover:border-gray-700", 
      hoverColor: "group-hover:text-gray-800 dark:group-hover:text-gray-200",
      name: "Github", 
      url: "https://github.com/PushUpDev" 
    }
  ];

const techStack = [
  { icon: <SiMongodb size={28} />, color: "text-green-500 hover:text-green-600", name: "MongoDB" },
  { icon: <SiExpress size={28} />, color: "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white", name: "Express.js" },
  { icon: <FaReact size={28} />, color: "text-blue-400 hover:text-blue-500", name: "React" },
  { icon: <SiNodedotjs size={28} />, color: "text-green-600 hover:text-green-700", name: "Node.js" },
  { icon: <SiTailwindcss size={28} />, color: "text-cyan-500 hover:text-cyan-600", name: "Tailwind" },
  { icon: <SiSpringboot size={28} />, color: "text-green-500 hover:text-green-600", name: "Spring Boot" },
  { icon: <SiTypescript size={28} />, color: "text-blue-600 hover:text-blue-700", name: "TypeScript" },
  { icon: <SiDjango size={28} />, color: "text-emerald-600 hover:text-emerald-700", name: "Django" },
  { icon: <SiAmazon size={28} />, color: "text-orange-500 hover:text-orange-600", name: "AWS" },
  { icon: <SiMysql size={28} />, color: "text-blue-600 hover:text-blue-700", name: "MySQL" },
  { icon: <SiDocker size={28} />, color: "text-blue-500 hover:text-blue-600", name: "Docker" },
  { icon: <SiKubernetes size={28} />, color: "text-blue-500 hover:text-blue-600", name: "Kubernetes" },
];


  return ( 
    <section id="home" className="size-padding-top relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-10  lg:pt-28 lg:pb-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-br from-sky-50 via-white to-cyan-500 dark:from-gray-900 dark:via-gray-800 dark:to-sky-900/20"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-sky-200/20 to-cyan-200/10 dark:via-sky-900/10 dark:to-cyan-900/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col  lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight header-text">
                  Hello, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-900 via-blue-500 to-cyan-800 animate-pulse">
                    Aziz
                  </span>
                </h1>
                <div className="typed-container flex flex-wrap items-center gap-3 font-bold">
                  <span className="text-gray-700 dark:text-gray-300">A</span>
                  <ReactTyped
                    className="text-transparent bg-clip-text bg-linear-to-r 
             from-purple-500 via-pink-500 to-rose-500 min-w-[280px]"
                    strings={[
                      "Full Stack Developer", 
                      "MERN Stack Developer", 
                      "Spring Boot Developer", 
                      "Application Developer"
                    ]}
                    typeSpeed={50}
                    backSpeed={40}
                    loop
                    showCursor={false}
                  />
                </div>
              </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl text-center lg:text-left">
            Ich entwickle außergewöhnliche digitale Erlebnisse mit modernen Webtechnologien 
            und liefere <span className="font-semibold text-sky-600 dark:text-sky-400">schnelle</span>,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">skalierbare</span> und{" "}
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">visuell ansprechende</span>{" "}
            Anwendungen – von Frontend bis Backend.
          </p>

            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-5 text-center justify-center lg:justify-start">
              <a 
                href="#projects" 
                className="group relative px-10 py-4 bg-linear-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-2xl 
                         shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 
                         transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0
                         overflow-hidden"
              >
                <div className="absolute  inset-0 bg-linear-to-r from-sky-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-black dark:text-white ">View My Work</span>
              </a>
              <a 
                href="#contact" 
                className="group px-10 py-4 border-2 border-sky-500 font-semibold rounded-2xl 
                         hover:bg-sky-50 dark:hover:bg-sky-900/20 bg-white dark:text-black dark:hover:text-white
                         transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0
                         shadow-sm hover:shadow-lg"
              >
                Contact Me
              </a>
            </div>

            {/* Social & Tech Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 text-center lg:text-left">
              {/* Tech Stack */}
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 text-center lg:text-left">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-4 text-center justify-center lg:justify-start">
                  {techStack.map((item, index) => (
                    <div 
                      key={index}
                      className={`group p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                                shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700
                                transition-all duration-300 hover:-translate-y-2 active:translate-y-0
                                ${item.color}`}
                      aria-label={item.name}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
              </div>

                 {/* Social Links */}
              <div className="space-y-5">
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Let's Connect
                </h3>
                <div className="flex gap-4 text-center justify-center lg:justify-start">
                  {socialLinks.map((item, index) => (
                    <a 
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                                border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl
                                transition-all duration-300 hover:-translate-y-2 active:translate-y-0
                                ${item.color} ${item.hoverColor}`}
                      aria-label={item.name}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
       
          {/* Video Profile Container */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 relative pt-10 lg:pt-0">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[560px] xl:h-[560px] group">
              {/* Main Video Container */}
              <div className="relative w-full h-full lg:pt-0  overflow-hidden  rounded-full
                            border-4 border-white/20 dark:border-gray-800/30 
                            shadow-2xl shadow-sky-500/20 dark:shadow-gray-900/50
                            group-hover:border-sky-400/40 group-hover:shadow-sky-500/40
                            transition-all duration-500">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover  scale-105 group-hover:scale-100 transition-transform duration-700"
                >
                  <source src={main} type="video/mp4" />
                </video>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Animated Border Effect */}
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-r from-sky-500/30 via-blue-500/30 to-cyan-500/30 
                            opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 pointer-events-none"></div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 
                            animate-bounce delay-300 transition-opacity duration-500"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-sky-400 rounded-full opacity-0 group-hover:opacity-100 
                            animate-bounce delay-500 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;