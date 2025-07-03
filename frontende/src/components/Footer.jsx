import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaYoutube, FaHeart } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      color: "hover:text-[#0077B5] dark:hover:text-[#0077B5]", 
      bg: "hover:bg-[#0077B5]/10",
      url: "https://www.linkedin.com/feed/",
      name: "LinkedIn"
    },
    { 
      icon: <FaGithub />, 
      color: "hover:text-gray-800 dark:hover:text-gray-200", 
      bg: "hover:bg-gray-800/10 dark:hover:bg-gray-200/10",
      url: "https://github.com/PushUpDev",
      name: "GitHub"
    },
    { 
      icon: <FaYoutube />, 
      color: "hover:text-[#FF0000] dark:hover:text-[#FF0000]", 
      bg: "hover:bg-[#FF0000]/10",
      url: "https://www.youtube.com/",
      name: "YouTube"
    },
    { 
      icon: <FaInstagram />, 
      color: "hover:text-[#E4405F] dark:hover:text-[#E4405F]", 
      bg: "hover:bg-[#E4405F]/10",
      url: "https://www.instagram.com/",
      name: "Instagram"
    }
  ];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-col items-center justify-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          >
            {socialLinks.map(({ icon, color, bg, url, name }, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ${color} ${bg}`}
                aria-label={name}
                whileHover={{ y: -5 }}
              >
                <div className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <div className="text-xl text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                </div>
                <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-current">
                  {name}
                </span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="text-center border-t border-gray-300/50 dark:border-gray-700/50 pt-8 w-full"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <motion.p 
              className="mt-3 text-gray-400 dark:text-gray-500 text-xs md:text-sm flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              Crafted with <FaHeart className="mx-1 text-red-500" /> by AzizCode
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;