import { FiExternalLink } from 'react-icons/fi'
import { FaGithub, FaArrowRight, FaStar } from 'react-icons/fa'
import { RiRocket2Fill } from 'react-icons/ri'
import { BsCodeSlash } from 'react-icons/bs'

import data from '../data/restApi.json'

const Project = () => {
  const projects = data.projects
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            My Projects
          </span>
          <RiRocket2Fill className="inline-block text-pink-500 animate-bounce" />
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here are some of my best works. Each project is unique and solves
          different problems.
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
              <FaStar className="text-yellow-400 mr-2" />
              Featured Projects
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 ml-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700  "
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-lg font-semibold leading-snug translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-5 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/30">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                      {project.name}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors shadow hover:shadow-md"
                        aria-label="Live Demo"
                        title="Live Demo"
                      >
                        <FiExternalLink
                          size={18}
                          className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-pink-400 transition-colors"
                        />
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow hover:shadow-md"
                        aria-label="View Code"
                        title="View Code"
                      >
                        <FaGithub
                          size={18}
                          className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 bg-purple-100/70 dark:bg-gray-700 text-xs font-medium text-purple-800 dark:text-purple-200 rounded-full hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                  <div className="absolute -inset-8 bg-gradient-to-r from-gray-900/20 via-gray-700/40 to-gray-900/0 rounded-2xl blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Projects */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mr-4"></div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center">
            <BsCodeSlash className="text-blue-400 mr-2" />
            Other Projects
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm leading-snug translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-5 py-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/30">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {project.name}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-flex items-center px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 rounded-full">
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
                    View Project{' '}
                    <FaArrowRight
                      size={14}
                      className="ml-1.5 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors shadow hover:shadow-md"
                    aria-label="View Code"
                    title="View Code"
                  >
                    <FaGithub
                      size={16}
                      className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                    />
                  </a>
                </div>
              </div>
                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                  <div className="absolute -inset-8 bg-gradient-to-r from-gray-900/20 via-gray-700/40 to-gray-900/0 rounded-2xl blur-xl"></div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Want to see more? Check out my GitHub for additional projects and code
          samples.
        </p>
        <a
          href="https://github.com/PushUpDev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <FaGithub
            size={20}
            className="mr-3 group-hover:scale-110 transition-transform"
          />
          <span className="group-hover:translate-x-1 transition-transform">
            View My GitHub
          </span>
        </a>
      </div>
    </section>
  )
}

export default Project
