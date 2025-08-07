import data from "../../data/restApi.json"
import { TbBrandReactNative } from "react-icons/tb";

const Education = () => {


  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-28">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          My Technical Expertise
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Technologies I've mastered through hands-on experience
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {data.expert.map((skill) => (
          <div 
            key={skill.id}
            className="group relative flex flex-col items-center p-6 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-700/50 transition-all duration-500 hover:border-transparent hover:shadow-xl hover:bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-pink-600/10 dark:from-purple-600/5 dark:via-blue-600/5 dark:to-pink-600/5"
          >
            {/* Skill image/logo with floating effect */}
            <div className="mb-4 transition-all duration-500 group-hover:-translate-y-2">
              <div className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                <img 
                  src={skill.logo} 
                  alt={skill.name} 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Skill content */}
            <div className="text-center transition-all duration-500 group-hover:translate-y-2">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600">
                {skill.name}
              </h3>
        
             
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional info section */}
      <div className="mt-16 p-8  backdrop-blur-sm rounded-2xl border border-gray-700/80 shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Continuous Growth</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Committed to lifelong learning through courses, certifications, and building innovative projects.
        </p>
        <div className="flex flex-wrap gap-2">
          {data.ContinuousGrowth.map((element)=>(
          <span key={element.id} className="px-6 py-1 bg-white dark:bg-gray-800 text-[12px] font-medium text-gray-800 dark:text-gray-200 rounded-full  border border-gray-200 dark:border-gray-700 shadow-xs hover:bg-blue-500 hover:text-black">
            {element.title} 
          </span>
         
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;