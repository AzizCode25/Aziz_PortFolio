import { FiExternalLink } from "react-icons/fi";
import { FaGithub,FaArrowRight } from "react-icons/fa6";


import data from "../../data/restApi.json"

const Project = () => {
  const projects = data.projects; 
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            My Projects
          </span>{" "}
          🚀
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my best works. Each project is unique and solves different problems.
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
            <span className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></span>
            Featured Projects
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
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
                      >
                        <FiExternalLink size={18} className="text-gray-700 dark:text-gray-300" />
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm"
                        aria-label="View Code"
                      >
                        <FaGithub size={18} className="text-gray-700 dark:text-gray-300" />
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
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/0 rounded-2xl blur-xl"></div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      )}

      {/* Other Projects */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
          <span className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-2"></span>
          Other Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
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
                {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p> */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.description}
                    </p>
                  </div>

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
                    View Project <FaArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow-sm"
                    aria-label="View Code"
                  >
                    <FaGithub size={16} className="text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>
               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-900/10 via-pink-900/30 to-purple-900/0 rounded-2xl blur-xl"></div>
                </div>
            </div>
            
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Want to see more? Check out my GitHub for additional projects and code samples.
        </p>
        <a
          href="https://github.com/PushUpDev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FaGithub size={18} className="mr-2" /> View My GitHub
        </a>
      </div>
    </section>
  );
};

export default Project;
