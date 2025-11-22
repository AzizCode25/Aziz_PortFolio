import data from '../i18n/de.json'

const Education = () => {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8  ipad-size lg:py-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-purple-50/40 via-white to-pink-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/10"></div> </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-pink-600 to-rose-600 animate-gradient-x">
             Technische Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Technologien, die ich durch praktische Erfahrung und kontinuierliches Lernen beherrsche
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 mb-16">
          {data.expert.map((skill) => (
            <div
              key={skill.id}
              className="group relative flex flex-col items-center p-4 md:p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/60 dark:border-gray-700/60 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:bg-linear-to-br hover:from-purple-50/90 hover:to-pink-50/90 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 hover:-translate-y-2"
            >
              {/* Skill Logo Container */}
              <div className="relative mb-4 md:mb-5 transition-all duration-500 group-hover:scale-110">
                <div className="p-2 md:p-3 rounded-2xl bg-white/80 dark:bg-gray-700/80 shadow-lg group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-500">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-xl object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                {/* Hover Ring Effect */}
                <div className="absolute -inset-2 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500 pointer-events-none"></div>
              </div>

              {/* Skill Name */}
              <h3 className="text-center font-semibold text-sm md:text-base text-gray-800 dark:text-gray-100 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-600 group-hover:to-pink-600">
                {skill.name}
              </h3>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                <div className="absolute -inset-4 bg-linear-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              </div>

              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.03),transparent)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Growth Section */}
        <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 md:p-8 lg:p-10 rounded-3xl border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-purple-300/50 dark:hover:border-purple-600/30">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500">
         Karriereentwicklung
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Engagiert für lebenslanges Lernen durch Kurse, Zertifizierungen und das Entwickeln innovativer Projekte. Ich erweitere kontinuierlich meine Fähigkeiten, um stets an der Spitze der Technologie zu bleiben.
              </p>
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap gap-3">
                {data.ContinuousGrowth.map((element) => (
                  <span
                    key={element.id}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-2xl bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-600/80 shadow-sm hover:shadow-md hover:bg-linear-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 hover:border-purple-300/50 dark:hover:border-purple-500/50 hover:text-purple-700 dark:hover:text-purple-300 hover:-translate-y-1 transition-all duration-300"
                  >
                    {element.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>Learning Progress</span>
              <span>Always Growing</span>
            </div>
            <div className="w-full bg-gray-200/80 dark:bg-gray-700/80 rounded-full h-2">
              <div className="bg-linear-to-r from-purple-500 to-pink-500 h-2 rounded-full shadow-lg shadow-purple-500/25 animate-pulse-slow"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-6 h-6 bg-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 left-8 w-8 h-8 bg-pink-400/15 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute top-40 left-20 w-4 h-4 bg-purple-300/10 rounded-full blur-lg animate-float delay-500"></div>
      </div>
    </section>
  )
}

export default Education