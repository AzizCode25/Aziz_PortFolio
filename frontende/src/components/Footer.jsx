import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { FaYoutube, FaHeart } from 'react-icons/fa6'

import data from '../data/restApi.json'

const Footer = () => {
  const iconMap = {
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    youtube: <FaYoutube />,
    instagram: <FaInstagram />,
  }

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {data.socialLinks.map(({ icon, color, bg, url, name }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${
                  color || ''
                } ${bg || ''}`}
                aria-label={name}
              >
                <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <div className="text-xl text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300">
                    {iconMap[icon]}
                  </div>
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-current">
                  {name}
                </span>
              </a>
            ))}
          </div>

          <div className="text-center border-t border-gray-300/50 dark:border-gray-700/50 pt-8 w-full">
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="mt-3 text-gray-400 dark:text-gray-500 text-xs md:text-sm flex items-center justify-center">
              Crafted with <FaHeart className="mx-1 text-red-500" /> by AzizCode
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
