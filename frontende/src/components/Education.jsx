import data from '../i18n/en.json'

const Education = () => {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Header Section */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Technical Expertise
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Technologies mastered through hands-on experience
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {data.expert.map((skill) => (
          <div
            key={skill.id}
            className="group relative flex flex-col items-center p-5 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/60 transition-all duration-300 hover:border-transparent hover:shadow-lg hover:bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/10 dark:to-pink-900/10"
          >
            {/* Skill Logo */}
            <div className="relative mb-4 transition-all duration-300 group-hover:-translate-y-1">
              <div className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm group-hover:shadow-md group-hover:shadow-purple-500/20 transition-all duration-300">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Skill Name */}
            <h3 className="text-center font-semibold text-gray-800 dark:text-gray-100 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500">
              {skill.name}
            </h3>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-xl blur-lg"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Continuous Growth Section */}
      <div className="mt-16 p-6 md:p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-200/70 dark:border-gray-700/70 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-3">
          Career Enhancement
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Committed to lifelong learning through courses, certifications, and
          building innovative projects.
        </p>
        <div className="flex flex-wrap gap-2">
          {data.ContinuousGrowth.map((element) => (
            <span
              key={element.id}
              className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 shadow-xs hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:border-purple-300 dark:hover:border-purple-500 transition-colors duration-200"
            >
              {element.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
