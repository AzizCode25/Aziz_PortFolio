import data from '../i18n/de.json'
import { TiPin } from 'react-icons/ti'

const About = () => {
  return (
    <section
      id="about"
      name="About"
      className="relative w-full overflow-hidden px-4 md:px-8 pt-16 md:pt-24"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-sky-300/60 via-white/40 to-cyan-500/40 dark:from-gray-900 dark:via-gray-800 dark:to-sky-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.08),transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-purple-600 via-pink-600 to-rose-600 animate-gradient-x">
            Full Stack Developer
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ich entwickle skalierbare und responsive Webanwendungen mit dem
            MERN-Stack und Spring Boot. Durch meine Erfahrung im Frontend- und
            Backend-Bereich realisiere ich leistungsstarke, wartbare und optisch
            ansprechende Lösungen.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Experience Section */}
          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700/60 hover:border-sky-300/30 dark:hover:border-sky-600/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-sky-600 dark:text-sky-400 flex items-center gap-3">
              <span className="text-3xl text-sky-500 dark:text-sky-400">
                <TiPin />
              </span>
              Education & Experience
            </h3>
            <div className="space-y-8">
              {data.educationData.map((item) => (
                <div
                  key={item.id}
                  className="relative pl-6 md:pl-12 before:absolute before:left-0 before:top-4 before:h-4 before:w-4 before:rounded-full  from-sky-500 to-cyan-500 before:shadow-lg before:shadow-sky-500/40 before:ring-4  before:ring-sky-400  group/item hover:before:scale-110 hover:before:shadow-xl hover:before:shadow-sky-500/60 transition-all duration-300"
                >
                  <div className=" md:border-l-3 border-gray-300/60 dark:border-gray-600/60 pl-6 group-hover/item:border-sky-400 transition-all duration-300">
                    <h4 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover/item:text-sky-600 dark:group-hover/item:text-sky-400 transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 text-lg">
                      {item.institution} •{' '}
                      <span className="font-semibold text-sky-600 dark:text-sky-400">
                        {item.year}
                      </span>
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 leading-relaxed"
                        >
                          <span className="text-sky-500 mt-1.5 shrink-0">
                            •
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/60 dark:border-gray-700/60 hover:border-cyan-300/30 dark:hover:border-cyan-600/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-cyan-600 dark:text-cyan-400 flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              Technical Toolbox
            </h3>
            <div className="space-y-8">
              {data.skills.map((skill, index) => (
                <div key={index} className="group/skill">
                  <h4 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-3 group-hover/skill:text-cyan-600 dark:group-hover/skill:text-cyan-400 transition-colors">
                    <span className="text-xl">{skill.icon}</span>
                    {skill.category}
                  </h4>
                  <div className="space-y-4">
                    {skill.items.map((item, idx) => (
                      <div key={idx} className="group/item">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover/item:text-cyan-600 dark:group-hover/item:text-cyan-400 transition-colors">
                            {item.name}
                          </span>
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                            {item.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200/80 dark:bg-gray-700/80 rounded-full h-3 shadow-inner">
                          <div
                            className="bg-linear-to-r from-cyan-500 to-sky-500 h-3 rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-1000 ease-out group-hover/item:shadow-cyan-500/40"
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* USP Section */}
        <div className="mt-16 md:mt-20 lg:mt-24 bg-linear-to-br from-sky-50/80 to-cyan-50/80 dark:from-sky-900/30 dark:to-cyan-900/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-sky-200/60 dark:border-sky-900/50">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white">
            Warum Sie sich für mich als Full-Stack-Entwickler entscheiden
            sollten
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data.WhyChoose.map((element) => (
              <div
                key={element.id}
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-100/60 dark:border-gray-700/60 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:border-sky-300/50 dark:hover:border-sky-600/50"
              >
                <h4 className="font-bold text-xl mb-4 text-sky-600 dark:text-sky-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {element.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {element.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
