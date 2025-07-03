import data from '../../restApi.json'

const About = () => {
  return (
    <section
      id="about"
      name="About"
      className="max-w-7xl mx-auto relative px-4 md:px-8 py-25 md:py-28"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-100/60 to-white/0 dark:from-sky-900/20 dark:to-gray-900/90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5"></div>
      </div>

      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Frontend Developer
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          I craft pixel-perfect, accessible, and performant web experiences with
          React and Next.js. Passionate about creating intuitive interfaces that
          users love.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        {/* Experience Section */}
        <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold mb-8 text-sky-600 dark:text-sky-400 flex items-center gap-3">
            <span className="text-2xl">📌</span>
            Education & Practical Experience
          </h3>
          <div className="space-y-8">
            {data.educationData.map((item) => (
              <div
                key={item.id}
                className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-sky-500 group"
              >
                <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 group-hover:border-sky-400 transition-colors">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                    {item.degree}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 mb-2">
                    {item.institution} •{' '}
                    <span className="font-medium text-sky-600 dark:text-sky-400">
                      {item.year}
                    </span>
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className="leading-relaxed">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl shadow-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold mb-8 text-sky-600 dark:text-sky-400 flex items-center gap-3">
            <span className="text-2xl">🛠</span>
            My Technical Toolbox
          </h3>
          <div className="space-y-8">
            {data.skills.map((skill, index) => (
              <div key={index}>
                <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-3">
                  <span className="text-xl">{skill.icon}</span> {skill.category}
                </h4>
                <div className="space-y-3">
                  {skill.items.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                          {item.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-sky-400 to-cyan-500 h-2.5 rounded-full"
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
      <div className="mt-20 bg-gradient-to-r from-sky-50 to-cyan-50 dark:from-sky-900/30 dark:to-cyan-900/20 p-8 md:p-10 rounded-2xl border border-sky-100 dark:border-sky-900/50">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Why Choose Me As Your Frontend Developer?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-lg mb-3 text-sky-600 dark:text-sky-400">
              UI/UX Focused
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              I build interfaces with attention to accessibility, responsive
              design, and smooth animations.
            </p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-lg mb-3 text-sky-600 dark:text-sky-400">
              Modern Stack
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Proficient in React ecosystem (Hooks, Context, Redux) and Next.js
              for optimized applications.
            </p>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <h4 className="font-bold text-lg mb-3 text-sky-600 dark:text-sky-400">
              Clean Code
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              I write maintainable, well-documented code following best
              practices and design patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
