import { FiExternalLink } from 'react-icons/fi'
import { FaGithub, FaArrowRight, FaStar } from 'react-icons/fa'
import { RiRocket2Fill } from 'react-icons/ri'
import { BsCodeSlash } from 'react-icons/bs'
import data from '../i18n/de.json'

const Project = () => {
  const projects = data.projects
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-16 project-padding lg:pt-28 lg:pb-0"
    >
        {/*  Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-sky-50 via-white to-cyan-500 dark:from-gray-900 dark:via-gray-800 dark:to-sky-900/20"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-sky-200/20 to-cyan-200/10 dark:via-sky-900/10 dark:to-cyan-900/5"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-pink-600 to-rose-600 animate-gradient-x">
              Projekte
            </span>
            <RiRocket2Fill className="inline-block ml-4 text-pink-500 animate-bounce" />
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Wo einzigartiger Mehrwert auf Innovation trifft
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20 lg:mb-24">
            <div className="flex items-center justify-center mb-12">
              <div className="flex-1 h-0.5 bg-linear-to-r from-transparent via-purple-500 to-pink-500 mr-4"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center px-4">
                <FaStar className="text-yellow-400 mr-3 text-xl" />
                Featured Projects
              </h3>
              <div className="flex-1 h-0.5 bg-linear-to-r from-pink-500 via-purple-500 to-transparent ml-4"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/60 dark:border-gray-700/60 active:scale-95 lg:active:scale-100"
                >
                  {/* Image Container */}
                  <div className="relative h-60 md:h-72 lg:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform object-top duration-700 group-hover:scale-110"
                      loading="lazy"
                    />

                    {/* Mobile Touch-friendly Overlay */}
                    <div className="lg:absolute lg:inset-0 lg:bg-linear-to-t lg:from-black/70 lg:via-black/40 lg:to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 flex items-end p-4 md:p-6">
                      <p className="text-white text-base md:text-lg leading-relaxed lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-5 w-full lg:w-auto">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-5">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
                        {project.name}
                      </h3>
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/80 dark:bg-gray-700/80 rounded-2xl hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                          aria-label="Live Demo"
                          title="Live Demo"
                        >
                          <FiExternalLink
                            size={20}
                            className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                          />
                        </a>
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/80 dark:bg-gray-700/80 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                          aria-label="View Code"
                          title="View Code"
                        >
                          <FaGithub
                            size={20}
                            className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1.5 bg-purple-100/80 dark:bg-purple-900/30 text-xs md:text-sm font-medium text-purple-800 dark:text-purple-200 rounded-xl hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-all duration-300 active:scale-95 border border-purple-200/50 dark:border-purple-700/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    <div className="absolute -inset-8 bg-linear-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-1 h-0.5 bg-linear-to-r from-transparent via-cyan-500 to-blue-500 mr-4"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white flex items-center px-4">
              <BsCodeSlash className="text-blue-400 mr-3 text-xl" />
              Other Projects
            </h3>
            <div className="flex-1 h-0.5 bg-linear-to-r from-blue-500 via-cyan-500 to-transparent ml-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/60 dark:border-gray-700/60 active:scale-95 lg:active:scale-100 lg:hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Mobile Touch-friendly Overlay */}
                  <div className="lg:absolute lg:inset-0 lg:bg-linear-to-t lg:from-black/70 lg:via-black/40 lg:to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                    <p className="text-white text-sm leading-relaxed lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl p-3 w-full lg:w-auto">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-500 flex-1 mr-4">
                      {project.name}
                    </h3>
                    <div className="flex space-x-2 shrink-0">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/80 dark:bg-gray-700/80 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg border border-gray-200/50 dark:border-gray-600/50"
                        aria-label="Live Demo"
                        title="Live Demo"
                      >
                        <FiExternalLink
                          size={18}
                          className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        />
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/80 dark:bg-gray-700/80 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg border border-gray-200/50 dark:border-gray-600/50"
                        aria-label="View Code"
                        title="View Code"
                      >
                        <FaGithub
                          size={18}
                          className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-2.5 py-1 bg-gray-100/80 dark:bg-gray-700/80 text-xs font-medium text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 active:scale-95 border border-gray-200/50 dark:border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                  <div className="absolute -inset-6 bg-linear-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
