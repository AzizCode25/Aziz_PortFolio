import { ExternalLink, Code2, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
// import projectPlaceholder from "../assets/images/skill-photo/GIT.png";

// Mock project images
import ecommerceImg from "../assets/images/skill-photo/aziz.png";
import taskManagerImg from "../assets/images/skill-photo/css3.webp";
import portfolioImg from "../assets/images/skill-photo/git1.png";
import weatherImg from "../assets/images/skill-photo/java.png";
import analyticsImg from "../assets/images/skill-photo/javascript.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      image: ecommerceImg,
      name: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, product management, and admin dashboard. Built with MERN stack and Stripe API.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 2,
      image: taskManagerImg,
      name: "Task Management App",
      description: "Productivity application with real-time collaboration features, drag-and-drop interface, and Firebase authentication.",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 3,
      image: portfolioImg,
      name: "Portfolio Website",
      description: "A modern, fully responsive portfolio website with dark mode, animations, and project showcase section.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      image: weatherImg,
      name: "Weather Dashboard",
      description: "Real-time weather forecasting with interactive maps, 5-day forecast, and location detection using OpenWeather API.",
      tags: ["React", "API Integration", "Chart.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      image: analyticsImg,
      name: "Social Media Analytics",
      description: "Data visualization dashboard for social media metrics with custom charts, filters, and export functionality.",
      tags: ["D3.js", "Express", "MongoDB", "JWT"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            My Projects
          </span> 🚀
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my best works. Each project is unique and solves different problems.
        </p>
      </motion.div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
            <span className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></span>
            Featured Projects
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                className="group bg-white dark:bg-gray-800/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-purple-200 dark:hover:border-pink-500/30 relative"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.name}</h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors shadow-sm"
                        aria-label="Live Demo"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink size={18} className="text-gray-700 dark:text-gray-300" />
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm"
                        aria-label="View Code"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github size={18} className="text-gray-700 dark:text-gray-300" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 bg-purple-100/70 dark:bg-gray-700 text-xs font-medium text-purple-800 dark:text-purple-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Other Projects */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
          <span className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-2"></span>
          Other Projects
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              className="group bg-white dark:bg-gray-800/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:-translate-y-1"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors"
                  >
                    View Project <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm"
                    aria-label="View Code"
                  >
                    <Github size={16} className="text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Want to see more? Check out my GitHub for additional projects and code samples.
        </p>
        <motion.a
          href="https://github.com/PushUpDev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <Github size={18} className="mr-2" /> View My GitHub
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Project;